export interface CountryInteface {
  alpha3Code?: string;
  name?: string;
  population?: number;
  region?: string;
  capital?: string;
  flags?: {
    svg?: 'string';
    png?: 'string';
  };
  nativeName?: string;
  subregion?: string;
  currencies?: { name?: string }[];
  languages?: { name?: string }[];
  borders?: string[];
  topLevelDomain?: string[];
}

export const URL = 'https://restcountries.com/v2/';
