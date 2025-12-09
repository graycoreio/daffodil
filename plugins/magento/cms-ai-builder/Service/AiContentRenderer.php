<?php

namespace Graycore\CmsAiBuilder\Service;

class AiContentRenderer
{
  private $css = '';
  private $elementCount = 0;

  /**
   * Render JSON content to HTML
   *
   * @param string $json
   * @return string
   */
  public function render(string $json): string
  {
    $data = json_decode($json, true);
    if (!$data) {
      return '';
    }

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

  private function renderNode($node)
  {
    if (!isset($node['type'])) {
      return '';
    }

    if ($node['type'] === 'textSchema') {
      return htmlspecialchars($node['text'] ?? '');
    }

    if ($node['type'] === 'elementSchema') {
      $tag = htmlspecialchars($node['element'] ?? 'div');
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

  private function renderAttributes($attributes)
  {
    $html = '';
    foreach ($attributes as $key => $value) {
      $html .= ' ' . htmlspecialchars($key) . '="' . htmlspecialchars($value) . '"';
    }
    return $html;
  }

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
