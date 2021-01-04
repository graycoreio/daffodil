import {gql} from 'apollo-angular';


export const orderShipmentTrackingFragment = gql`
  fragment orderShipmentTracking on ShipmentTracking {
    number
    carrier
    title
  }
`;
