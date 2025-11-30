// eslint-disable-next-line import/no-unassigned-import
import 'monaco-editor/esm/vs/language/json/monaco.contribution.js';

import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  Inject,
  input,
  OnDestroy,
  output,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import {
  editor,
  languages,
} from 'monaco-editor/esm/vs/editor/editor.api.js';
import { fromEventPattern } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { DaffContentSchema } from '@daffodil/content';

import { dynamicSchemaJsonSchema } from './dynamic-schema.json-schema';

@Component({
  selector: 'schema-view',
  imports: [],
  templateUrl: './schema-view.component.html',
  styleUrl: './schema-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchemaViewComponent implements AfterViewInit, OnDestroy {
  schema = input<DaffContentSchema>();
  schemaUpdate = output<DaffContentSchema>();

  parseError = signal<string | null>(null);

  editorContainer = viewChild.required<ElementRef<HTMLDivElement>>('editorContainer');

  private editor: editor.IStandaloneCodeEditor | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    effect(() => {
      const schema = this.schema();
      if (schema && this.editor) {
        const formatted = JSON.stringify(schema, null, 2);
        const currentValue = this.editor.getValue();
        if (currentValue !== formatted) {
          this.editor.setValue(formatted);
        }
        this.parseError.set(null);
      }
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.initializeEditor();
  }

  ngOnDestroy() {
    if (this.editor) {
      this.editor.dispose();
      this.editor = null;
    }
  }

  private initializeEditor() {
    // Configure Monaco JSON language defaults with schema validation
    languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: 'https://www.daff.io/content/schema.json',
          fileMatch: ['*'],
          schema: dynamicSchemaJsonSchema,
        },
      ],
    });

    // Create the editor
    const container = this.editorContainer().nativeElement;
    this.editor = editor.create(container, {
      value: '',
      language: 'json',
      theme: 'vs-dark',
      automaticLayout: true,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      fontSize: 13,
      lineNumbers: 'on',
      folding: true,
      formatOnPaste: true,
      formatOnType: true,
    });

    // Set initial value if schema exists
    const schema = this.schema();
    if (schema) {
      this.editor.setValue(JSON.stringify(schema, null, 2));
    }

    // Listen for content changes
    fromEventPattern(
      (handler) => this.editor.onDidChangeModelContent(handler),
      (_handler, disposable) => disposable.dispose(),
    ).pipe(
      debounceTime(300),
    ).subscribe(() => {
      if (this.editor) {
        const value = this.editor.getValue();
        this.onContentChange(value);
      }
    });

  }

  private onContentChange(value: string) {
    try {
      const parsed = JSON.parse(value);
      this.parseError.set(null);
      this.schemaUpdate.emit(parsed);
    } catch (err) {
      this.parseError.set((<Error>err).message);
    }
  }
}
