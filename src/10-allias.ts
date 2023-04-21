(()=>{
  type UserID = string | number | boolean;
  let UserId: UserID;

  function greeting(UserId: UserID, shirt: ShirtSizeType) {
    if(typeof(UserId) == 'string') {
      return UserId.toLowerCase()
    }
  }
  //literal types
  type ShirtSizeType = 'S' | 'M' | 'L' | 'XL';
  let ShirtSize: ShirtSizeType;
  ShirtSize = 'S';

  greeting('wqwqeqw', 'S');
})();
