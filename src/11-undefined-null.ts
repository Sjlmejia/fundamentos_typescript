(() => {
  // let mynumber: number =undefined;
  // let myString: number =null;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber:number | null = null;
  myNumber = 123;

  let myString: string | undefined = undefined;
  myString = '123';

  function hi(name:string |null) {
    let hello= 'hola';
    if(name) {
      hello += 'name';
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiv2(name:string |null) {
    let hello= 'hola';
    hello +=name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }
  hi('Jorge');
  hi(null);
})();
