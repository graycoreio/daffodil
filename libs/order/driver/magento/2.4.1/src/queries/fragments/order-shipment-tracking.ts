import { gql } from '@damienwebdev/apollo-angular';


export const orderShipmentTrackingFragment = gql`
  fragment orderShipmentTracking on ShipmentTracking {
    number
    carrier
    title
  }
`;
