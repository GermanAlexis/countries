import { Country } from './countries.interfaces';
import { Region } from './region.type';

export interface CatchStore {
  byCapital: CatchCountry;
  byCountry: CatchCountry;
  byRegion: CatchRegion;
}

interface CatchCountry {
  term: string;
  countries: Country[];
}

interface CatchRegion {
  region: Region;
  countries: Country[];
}
