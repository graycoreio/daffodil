import gql from 'graphql-tag';

export const orderShipmentTrackingFragment = gql`
  fragment orderShipmentTracking on ShipmentTracking {
    number
    carrier
    title
  }
`;
