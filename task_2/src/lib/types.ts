export interface CurrenciesSuccessResult {
  result: 'success';
  documentation: string;
  terms_of_use: string;
  supported_codes: string[];
  'error-type'?: string;
}

export interface CurrenciesErrorResult {
  result: 'error';
  documentation: string;
  'terms-of-use': string;
  'error-type': string;
}

export interface ExchangeSuccessResult {
  result: 'success';
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  target_code: string;
  conversion_rate: number;
}

export interface ExchangeErrorResult {
  result: 'error';
  documentation: string;
  'terms-of-use': string;
  'error-type': string;
}
