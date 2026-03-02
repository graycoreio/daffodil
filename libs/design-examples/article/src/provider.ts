import { makeEnvironmentProviders } from '@angular/core';

import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideDaffDesignArticleExamplesContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'article-blockquote',
    component: () => import('./article-blockquote/article-blockquote.component').then(c => c.ArticleBlockquoteExampleComponent),
  },
  {
    id: 'article-code-block',
    component: () => import('./article-code-block/article-code-block.component').then(c => c.ArticleCodeBlockExampleComponent),
  },
  {
    id: 'article-code-inline',
    component: () => import('./article-code-inline/article-code-inline.component').then(c => c.ArticleCodeInlineExampleComponent),
  },
  {
    id: 'article-headings',
    component: () => import('./article-headings/article-headings.component').then(c => c.ArticleHeadingsExampleComponent),
  },
  {
    id: 'article-hr',
    component: () => import('./article-hr/article-hr.component').then(c => c.ArticleHrExampleComponent),
  },
  {
    id: 'article-link',
    component: () => import('./article-link/article-link.component').then(c => c.ArticleLinkExampleComponent),
  },
  {
    id: 'article-meta',
    component: () => import('./article-meta/article-meta.component').then(c => c.ArticleMetaExampleComponent),
  },
  {
    id: 'article-ol',
    component: () => import('./article-ol/article-ol.component').then(c => c.ArticleOlExampleComponent),
  },
  {
    id: 'article-table',
    component: () => import('./article-table/article-table.component').then(c => c.ArticleTableExampleComponent),
  },
  {
    id: 'article-ul',
    component: () => import('./article-ul/article-ul.component').then(c => c.ArticleUlExampleComponent),
  },
));

