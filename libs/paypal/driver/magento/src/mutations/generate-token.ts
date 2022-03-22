import { gql } from '@damienwebdev/apollo-angular';


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
