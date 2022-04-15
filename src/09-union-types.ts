(() =>{
  let userId: string | number;
  userId = '123';
  userId = 123;

  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      myText.toLocaleLowerCase();
    }else {
      myText.toFixed(2);
    }
    return 'Hello ' + myText;
  }
  greeting('123');
  greeting(123);
})();
