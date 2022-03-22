import { gql } from '@damienwebdev/apollo-angular';


export const orderShipmentTrackingFragment = gql`
  fragment orderShipmentTracking on GraycoreOrderShipmentTracking {
    tracking_number
    carrier
    title
  }
`;
