(()=>{
  type ShirtSizeType = 'S' | 'M' | 'L' | 'XL';
  type ProductType = {
    title: string,
    createdDt: Date,
    stock: number,
    size?: ShirtSizeType
  }

  const Products:ProductType[] = [];

  const addProduct = (data: ProductType) => {
    Products.push(data);
  };

  addProduct({
    title: 'p1',
    createdDt: new Date,
    stock: 2
  });

  addProduct({
    title: 'p2',
    createdDt: new Date,
    stock: 2,
    size: 'XL'
  });

  console.log(Products);
})();
