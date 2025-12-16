<?php

/**
 * Copyright © Oliverio Gombert. All rights reserved.
 */

declare(strict_types=1);

namespace Graycore\CmsAiBuilder\Block;

use Graycore\CmsAiBuilder\Api\RendererInterface;
use Magento\Framework\Escaper;

class Renderer implements RendererInterface
{
    /**
     * @var string
     */
    private $css = '';

    /**
     * @var int
     */
    private $elementCount = 0;

    /**
     * @param Escaper $escaper
     */
    public function __construct(
        private readonly Escaper $escaper
    ) {
    }

    /**
     * Render JSON content to HTML
     *
     * @param array $data
     * @return string
     */
    public function render(array $data): string
    {
        // Check if $data is the schema itself
        if (isset($data['type']) && ($data['type'] === 'elementSchema' || $data['type'] === 'textSchema')) {
            $schema = $data;
        } else {
            // Find the last item with a schema in the array
            $schema = null;
            if (is_array($data)) {
                foreach (array_reverse($data) as $item) {
                    if (isset($item['schema']) && !empty($item['schema']) && is_array($item['schema'])) {
                        $schema = $item['schema'];
                        break;
                    }
                }
            }
        }

        if (!$schema) {
            return '';
        }

        $this->css = '';
        $this->elementCount = 0;

        $html = $this->renderNode($schema);

        $styleBlock = '';
        if ($this->css) {
            $styleBlock = "<style>{$this->css}</style>";
        }

        return $styleBlock . $html;
    }

    /**
     * Render a node to HTML
     *
     * @param array $node
     * @return string
     */
    private function renderNode($node)
    {
        if (!isset($node['type'])) {
            return '';
        }

        if ($node['type'] === 'textSchema') {
            return $this->escaper->escapeHtml($node['text'] ?? '');
        }

        if ($node['type'] === 'elementSchema') {
            $tag = $this->escaper->escapeHtml($node['element'] ?? 'div');
            $attributes = $this->renderAttributes($node['attributes'] ?? []);

            $className = '';
            if (isset($node['styles']) && !empty($node['styles'])) {
                $className = 'ai-el-' . (++$this->elementCount);
                $this->processStyles($className, $node['styles']);
                $attributes .= ' class="' . $className . '"';
            }

            $html = "<{$tag}{$attributes}>";

            if (isset($node['children']) && is_array($node['children'])) {
                foreach ($node['children'] as $child) {
                    $html .= $this->renderNode($child);
                }
            }

            $html .= "</{$tag}>";
            return $html;
        }

        return '';
    }

    /**
     * Render attributes to HTML string
     *
     * @param array $attributes
     * @return string
     */
    private function renderAttributes($attributes)
    {
        $html = '';
        foreach ($attributes as $key => $value) {
            $html .= ' ' . $this->escaper->escapeHtml($key) . '="' . $this->escaper->escapeHtml($value) . '"';
        }
        return $html;
    }

    /**
     * Process styles and add to CSS
     *
     * @param string $className
     * @param array $styles
     * @return void
     */
    private function processStyles($className, $styles)
    {
        // Base styles
        if (isset($styles['base']) && is_array($styles['base'])) {
            $cssProps = $this->buildCssProperties($styles['base']);
            if ($cssProps) {
                $this->css .= ".{$className} { {$cssProps} }\n";
            }
        }

        // Breakpoints
        if (isset($styles['breakpoints']) && is_array($styles['breakpoints'])) {
            foreach ($styles['breakpoints'] as $mediaQuery => $props) {
                $cssProps = $this->buildCssProperties($props);
                if ($cssProps) {
                    $this->css .= "@media {$mediaQuery} { .{$className} { {$cssProps} } }\n";
                }
            }
        }
    }

    /**
     * Build CSS properties string
     *
     * @param array $props
     * @return string
     */
    private function buildCssProperties($props)
    {
        $css = '';
        foreach ($props as $prop => $val) {
            // Basic sanitization could be added here
            $css .= "{$prop}: {$val}; ";
        }
        return trim($css);
    }
}
