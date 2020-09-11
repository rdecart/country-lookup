import { CountryDetails } from './country-details.model';

export type CountryLookupApiResponse =
    [CountryLookupMetaData | CountryLookupMetaDataInvalid, CountryDetails[]?];

export interface CountryLookupMetaData {
    page: number;
    pages: number;
    per_page: number;
    total: number;
}

export interface CountryLookupMetaDataInvalid {
    message: {
        id: string;
        key: string;
        value: string;
    }[];
}
