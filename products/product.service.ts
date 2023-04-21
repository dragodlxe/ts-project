import { ProductType } from "./product.model";
const Products:ProductType[] = [];

const addProduct = (data: ProductType) => {
  Products.push(data);
};

const calcStock = (): number => {
  const total = Products.reduce((cum, curr) => curr.stock + cum, 0 );
  return total
}

export {
  addProduct,
  Products,
  calcStock,
};
