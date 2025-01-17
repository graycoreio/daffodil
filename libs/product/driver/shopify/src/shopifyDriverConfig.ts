export function shopifyDriverConfig(uri: string, token: string) {
  return {
    uri,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
  };
}
