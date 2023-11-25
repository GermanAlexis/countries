export interface Country {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: CapitalInfo;
  car: Car;
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: CoatOfArms;
  continents: string[];
  currencies: Currencies;
  demonyms: Demonyms;
  fifa: string;
  flag: string;
  flags: Flags;
  gini: Gini;
  idd: Idd;
  independent: boolean;
  landlocked: boolean;
  languages: Languages;
  latlng: number[];
  maps: Maps;
  name: Name;
  population: number;
  postalCode: PostalCode;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: Translations;
  unMember: boolean;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  '2018': number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ara: Est;
  bre: Est;
  ces: Est;
  cym: Est;
  deu: Est;
  est: Est;
  fin: Est;
  fra: Est;
  hrv: Est;
  hun: Est;
  ita: Est;
  jpn: Est;
  kor: Est;
  nld: Est;
  per: Est;
  pol: Est;
  por: Est;
  rus: Est;
  slk: Est;
  spa: Est;
  srp: Est;
  swe: Est;
  tur: Est;
  urd: Est;
  zho: Est;
}

interface Languages {
  est: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies {
  [x: string]: EUR;
}

interface EUR {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  est: Est;
}

interface Est {
  official: string;
  common: string;
}
