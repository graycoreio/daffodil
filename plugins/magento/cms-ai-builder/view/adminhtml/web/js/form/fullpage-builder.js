/**
 * Copyright © Graycore. All rights reserved.
 */
define([
    'Magento_Ui/js/form/components/html',
    'jquery',
    'mage/url'
], function (Component, $, urlBuilder) {
    'use strict';

    let editor;

    return Component.extend({
        defaults: {
            template: 'Graycore_CmsAiBuilder/form/fullpage-builder',
            fullscreen: false,
        },

        toggleFullScreen() {
            this.fullscreen = !this.fullscreen;
            this.editor.fullscreen = this.fullscreen;

            // Toggle body scroll lock
            if (this.fullscreen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        },

        /**
         * Initialize component
         */
        initialize: function () {
            this._super();
            return this;
        },

        /**
         * Called after the template is rendered
         */
        afterRender: function () {
            this.loadAngularScripts();
            this.bindFormData();
        },

        /**
         * Bind form data to Angular custom elements
         */
        bindFormData: function () {
            var self = this;

            // Wait for Angular scripts to load and custom elements to be defined
            var checkInterval = setInterval(function () {
                self.editor = document.querySelector('ai-editor');
                if (self.editor) {
                    clearInterval(checkInterval);

                    // Get the schema from the form
                    var schemaJson = self.source.get('data.ai_schema_json');

                    if (schemaJson) {
                        try {
                            var schema = JSON.parse(schemaJson);
                            self.editor.schema = schema;
                        } catch (e) {
                            console.error('Failed to parse ai_schema_json:', e);
                        }
                    }

                    // Get conversation history
                    var conversationHistoryJson = self.source.get('data.ai_conversation_history');
                    if (conversationHistoryJson) {
                        try {
                            var conversationHistory = JSON.parse(conversationHistoryJson);
                            self.editor.chatHistory = conversationHistory;
                        } catch (e) {
                            console.error('Failed to parse ai_conversation_history:', e);
                        }
                    }

                    // Listen for fullscreenChange event
                    self.editor.addEventListener('fullscreenChange', function (event) {
                        self.toggleFullScreen();
                    });

                    // Listen for schemaUpdate event
                    self.editor.addEventListener('schemaUpdate', function (event) {
                        self.editor.schema = event.detail;
                        self.source.set('data.ai_schema_json', JSON.stringify(event.detail, null, 2));
                    });

                    // Listen for prompt event
                    self.editor.addEventListener('prompt', function (event) {
                        self.handlePrompt(event);
                    });
                }
            }, 100);

            // Clear interval after 10 seconds if element never appears
            setTimeout(function () {
                clearInterval(checkInterval);
            }, 10000);
        },

        /**
         * Handle prompt event from ai-editor
         */
        handlePrompt: function (event) {
            var self = this;

            // Get page ID from form (might be null for new unsaved pages)
            var pageId = self.source.get('data.page_id');

            // Call Magento API
            var apiUrl = window.CmsAiBuilderUrl;

            var requestData = {
                form_key: window.FORM_KEY,
                prompt: event.detail.prompt,
                schema: JSON.stringify(event.detail.schema),
            };

            // Add page_id if it exists (saved page)
            if (pageId) {
                requestData.page_id = pageId;
            }

            // Add conversation_history if no page_id (unsaved page) or as fallback
            if (!pageId) {
                requestData.conversation_history = JSON.stringify(event.detail.chatHistory);
            }

            $.ajax({
                url: apiUrl,
                type: 'POST',
                dataType: 'json',
                data: requestData,
                beforeSend: function () {
                    // Notify Angular component that generation started
                    if (self.editor) {
                        self.editor.error = null;
                        self.editor.isGenerating = true;
                    }
                }
            }).done(function (response) {
                if (response.success && response.schema) {
                    // Update conversation history in form (important for unsaved pages)
                    if (response.conversationHistory) {
                        self.source.set('data.ai_conversation_history', JSON.stringify(response.conversationHistory));

                        // Update chat history in Angular component
                        if (self.editor) {
                            self.editor.chatHistory = response.conversationHistory;
                        }
                    }

                    // Update schema in form (important for unsaved pages)
                    self.source.set('data.ai_schema_json', JSON.stringify(response.schema, null, 2));

                    // Update the Angular component
                    if (self.editor) {
                        self.editor.schema = response.schema;
                    }
                } else {
                    console.error('API error:', response.error || 'Unknown error');
                    // Notify Angular component of error
                    if (self.editor) {
                        self.editor.error = response.error || 'Unknown error';
                    }
                }
                self.editor.isGenerating = false;
            }).fail(function (xhr) {
                console.error('API request failed:', xhr);
                // Notify Angular component of error
                if (self.editor) {
                    self.editor.error = 'Failed to connect to API';
                    self.editor.isGenerating = false;
                }
            });
        },

        /**
         * Load Angular scripts dynamically
         */
        loadAngularScripts: function () {
            var self = this;
            var config = window.CmsAiBuilderConfig || {};

            // Get script paths from config or use defaults
            var polyfillsPath = config.polyfillsScript;
            var mainScriptPath = config.mainScript;

            var loadMainScript = function () {
                // Load main script
                var mainScript = document.createElement('script');
                mainScript.type = 'module';
                mainScript.src = require.toUrl(mainScriptPath);

                mainScript.onload = function () {
                    console.log('Angular app loaded successfully');
                };

                mainScript.onerror = function () {
                    console.error('Failed to load Angular main script');
                };

                document.head.appendChild(mainScript);
            };

            // Load polyfills first only if configured
            if (polyfillsPath) {
                var polyfillsScript = document.createElement('script');
                polyfillsScript.type = 'module';
                polyfillsScript.src = require.toUrl(polyfillsPath);

                polyfillsScript.onload = function () {
                    loadMainScript();
                };

                polyfillsScript.onerror = function () {
                    console.error('Failed to load Angular polyfills');
                };

                document.head.appendChild(polyfillsScript);
            } else {
                // Skip polyfills and load main script directly
                loadMainScript();
            }
        }
    });
});
