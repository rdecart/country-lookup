export interface CountryDetails {
    id: string;
    iso2Code: string;
    name: string;
    capitalCity: string;
    longitude: string;
    latitude: string;
    region: {
        id: string;
        iso2code: string;
        value: string;
    };
    adminregion: {
        id: string;
        iso2code: string;
        value: string;
    };
    incomeLevel: {
        id: string;
        iso2code: string;
        value: string;
    };
    lendingType: {
        id: string;
        iso2code: string;
        value: string;
    };
}
