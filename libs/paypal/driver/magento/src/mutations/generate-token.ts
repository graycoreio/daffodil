import { gql } from 'apollo-angular';

export const magentoGenerateTokenMutation = gql`
	mutation GenerateToken($cartId: String!, $button: Boolean!, $returnUrl: String!, $cancelUrl: String!) {
		createPaypalExpressToken(input: {
      code: "paypal_express"
      cart_id: $cartId
      express_button: $button
      urls: {
        return_url: $returnUrl
        cancel_url: $cancelUrl
      }
    }) {
			token
			paypal_urls {
				start
				edit
			}
		}
	}
`;
