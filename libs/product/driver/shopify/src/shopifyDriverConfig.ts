export function shopifyDriverConfig(uri: string, token: string) {
  return {
    uri: uri + '/api/2025-01/graphql.json',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
  };
}
