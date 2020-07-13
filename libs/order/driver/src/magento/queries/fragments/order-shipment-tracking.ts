import gql from 'graphql-tag';

export const orderShipmentTrackingFragment = gql`
  fragment orderShipmentTracking on GraycoreOrderShipmentTracking {
    tracking_number
    carrier
    title
  }
`;
