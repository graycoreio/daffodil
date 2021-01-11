import {gql} from 'apollo-angular';


export const orderShipmentTrackingFragment = gql`
  fragment orderShipmentTracking on GraycoreOrderShipmentTracking {
    tracking_number
    carrier
    title
  }
`;
