(()=>{
  let UserId: string | number;
  UserId = 1
  UserId = '1'

  function greeting(mytext: string | number) {
    if(typeof(mytext) == 'string') {
      return mytext.toLowerCase()
    }
    else {
      return mytext.toFixed(1)
    }
  }
  console.log(greeting(22));
  console.log(greeting('5AAA'));
})();
