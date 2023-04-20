(()=>{
  let ProductTitle = 'Something';
  let ProductDescription = 'Soemthing'
  let ProductPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${ProductTitle}
  description: ${ProductDescription}
  price: ${ProductPrice}
  isNew: ${isNew}
  `;
  console.log(summary);
})();
