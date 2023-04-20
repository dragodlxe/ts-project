(() => {
  let ProductPrice = 100;
  ProductPrice = 12;
  console.log(ProductPrice);

  let CostumerAge: number = 26;
  CostumerAge += 1;
  console.log(CostumerAge)

  let ProductInStock: number;
  console.log(ProductInStock);

  if(ProductInStock > 10){
    console.log("something");
  }

  let discount: number = parseInt("21");
  console.log(discount);
  if(discount <= 200){
    console.log("True");
  }
  else{
    console.log("False");
  }

  let hex = 0xFFF;
  console.log(hex);
  let bin = 0b01110
  console.log(bin);
})();
