(()=>{
  type ShirtSizeType = 'S' | 'M' | 'L' | 'XL';
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  };

  login({ email: 'test@test.test', password: '12312321312'});

  const Products:any[] = [];
  const addProduct = (data: {title: string, createdDt: Date, stock: number, size?: ShirtSizeType}) => {
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
