import gql from 'graphql-tag';

export const GenerateTokenMutation = gql`
	mutation GenerateToken($input: MagentoPaypalTokenRequest) {
		createPaypalExpressToken(input: $input) {
			token
			paypal_urls {
				start
				edit
			}
		}
	}
`;
