import { Stamp } from 'ts/models';

interface Product {
  id: number;
  title: string;
  supplier: string;
  tax: string;
  price_real: string;
  image: string;
  thumbnail: string;
  description: string;
  units_sf: number;
  slug: string;
  category: string;
  subcategory: string;
  net_content: string;
  sellos: Stamp[];
}

export default Product;
