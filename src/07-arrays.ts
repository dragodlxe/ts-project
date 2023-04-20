(()=>{
  let prices = [1,11,2,3,123,3, 'hola', true]
  prices.push(2);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(2);

  let numbers = [1,11,2,3,123,3];
  numbers.map(item => item * 2)
})();
