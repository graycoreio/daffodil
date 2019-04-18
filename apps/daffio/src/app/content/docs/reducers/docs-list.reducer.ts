import { DocumentListItem } from "../model/document-list-item";

export interface State {
    docs: DocumentListItem[];
    loading: boolean;
    errors: string[];
}