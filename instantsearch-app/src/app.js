const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch('XZA1GON7E4', '7081354359c48b44cf3182d04081a3df');

const search = instantsearch({
  indexName: 'daff_io',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
  
});


search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
<article>
  <div>
    <h1>${components.Highlight({hit, attribute: "title"})}</h1>
    <p>${components.Highlight({hit, attribute: "breadcrumbs.0.label"})}</p>
    <p>${components.Highlight({hit, attribute: "breadcrumbs.1.label"})}</p>
  </div>
</article>
`,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();

