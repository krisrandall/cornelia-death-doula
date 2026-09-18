import data from '../content/site.json';

type CrisisLine = { name: string; detail: string };

export type Site = {
  name: string;
  fullName: string;
  role: string;
  town: string;
  region: string;
  email: string;
  phone: string;
  url: string;
  nav: { label: string; href: string }[];
  dropIn: {
    show: boolean;
    confirmed: boolean;
    place: string;
    times: string[];
  };
  acknowledgement: string;
  crisis: { intro: string; lines: CrisisLine[] };
};

export const site = data as unknown as Site;

/** "Cornelia - Death Doula", used in the header and in page titles. */
export const wordmark = `${site.fullName} — ${site.role}`;

/** Blank values in site.json simply switch their block off, rather than printing an empty line. */
export const has = (value: string | undefined | null): value is string =>
  typeof value === 'string' && value.trim().length > 0;
