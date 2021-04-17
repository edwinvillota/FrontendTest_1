import { env } from '@env';
import { Product } from 'ts/models';

interface GetProductsReturnType {
  error: boolean;
  message: string;
  data: Product[] | null;
}

export default async function getProducts(): Promise<GetProductsReturnType> {
  try {
    const response = await fetch(env.PRODUCT_API, {
      method: 'GET',
      headers: new Headers([['content-type', 'application/json']]),
    });

    if (response.ok) {
      const dataJson: Product[] = await response.json();

      return {
        error: false,
        message: '',
        data: dataJson,
      };
    } else {
      return {
        error: true,
        message: response.statusText,
        data: null,
      };
    }
  } catch (e) {
    return {
      error: true,
      message: e.message,
      data: null,
    };
    throw e;
  }
}
