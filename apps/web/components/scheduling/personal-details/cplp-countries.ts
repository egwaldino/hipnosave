export interface CplpCountry {
  code: string;
  iso2: string;
  name: string;
}

export const CPLP_COUNTRIES: CplpCountry[] = [
  { code: "+244", iso2: "ao", name: "Angola" },
  { code: "+55", iso2: "br", name: "Brasil" },
  { code: "+238", iso2: "cv", name: "Cabo Verde" },
  { code: "+245", iso2: "gw", name: "Guiné-Bissau" },
  { code: "+240", iso2: "gq", name: "Guiné Equatorial" },
  { code: "+258", iso2: "mz", name: "Moçambique" },
  { code: "+351", iso2: "pt", name: "Portugal" },
  { code: "+239", iso2: "st", name: "São Tomé e Príncipe" },
  { code: "+670", iso2: "tl", name: "Timor-Leste" },
];
