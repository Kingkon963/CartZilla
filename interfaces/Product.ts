interface Product {
  img: string;
  cat: string;
  title: string;
  price: number;
  star: 0 | 1 | 2 | 3 | 4 | 5;
  sale: boolean;
  new: boolean;
  out_of_stock: boolean;
}

export default Product;
