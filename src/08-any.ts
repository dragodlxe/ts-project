(()=>{
  let myDynamicVar: any = 123213123;
  myDynamicVar = '2';
  myDynamicVar = null;
  myDynamicVar = {};

  myDynamicVar = 'hola'
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 12
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2)

})();
