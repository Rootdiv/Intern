import { API_KEY } from './const';
import type { ExchangeErrorResult, ExchangeSuccessResult } from './types';

export const pairConversion = async (curr1: string, curr2: string): Promise<number> => {
  const res: ExchangeSuccessResult = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${curr1}/${curr2}`,
  )
    .then(data => data.json())
    .catch((err: ExchangeErrorResult) => {
      console.error(err['error-type']);
    });
  return res.conversion_rate;
};
