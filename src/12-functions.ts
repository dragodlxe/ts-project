(()=>{
  type ShirtSizeType = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(title: string, createdDt: Date, stock: number, size: ShirtSizeType)
  {
    return {title, createdDt, stock, size}
  }

  const p1 = createProductToJson('p1', new Date, 13, 'XL');
  console.log(p1)
  console.log(p1.title)
  console.log(p1.createdDt)
  console.log(p1.stock)
  console.log(p1.size)

  const createProductToJsonV2 = (
    title: string,
    createdDt: Date,
    stock: number,
    size?: ShirtSizeType
  ) => {
    return {
      title,
      createdDt,
      stock,
      size}
  }
  const p2 = createProductToJsonV2('p2', new Date, 41)
  console.log(p2);
  console.log(p2.title);
  console.log(p2.createdDt);
  console.log(p2.stock);
  console.log(p2.size);
})();
