import { API_KEY } from '../lib/const';
import type { CurrenciesSuccessResult, CurrenciesErrorResult } from '../lib/types';

export const getSupportedCurrencies = async (): Promise<string[]> => {
  const supportedCurrencies: string[] = [];
  const res: CurrenciesSuccessResult = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`,
  )
    .then(data => data.json())
    .catch((err: CurrenciesErrorResult) => {
      console.error(err['error-type']);
    });

  res.supported_codes.forEach(([currency]: string) => {
    supportedCurrencies.push(currency);
  });
  return supportedCurrencies;
};
