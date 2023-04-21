(()=>{
  // let myNumber: number = undefined
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;


  let myNumber: number | null = null;
  myNumber = 3123;
  let myString: string | undefined = undefined;
  myString = 'asdasdasd';

  function greet(name: string | null) {
    let hello = 'Hello ';
    hello += name?.toLowerCase() ?? 'nobody';
    return hello;
  }
  console.log(greet(null));
  console.log(greet('Neil'));

})();
