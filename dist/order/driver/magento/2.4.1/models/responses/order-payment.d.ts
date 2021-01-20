export interface MagentoOrderPayment {
    name: string;
    type: string;
    additional_data: KeyValue[];
}
export interface KeyValue {
    name: string;
    value: string;
}
