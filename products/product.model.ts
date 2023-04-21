type ShirtSizeType = 'S' | 'M' | 'L' | 'XL';
type ProductType = {
  name: string,
  createdDt: Date,
  stock: number,
  size?: ShirtSizeType
};

export {
  ShirtSizeType,
  ProductType
}
