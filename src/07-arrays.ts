(()=> {
  let prices = [1,2,2,3, 'hola', true];
  prices.push(121212);
  let products =['hola', true];
  products.push(false);
  let mixed:(number | string | boolean | Object)[] = [1,2,3,4,5,6,7,8,9,10];
  mixed.push('hola');
  mixed.push(true);
  mixed.push({});
  mixed.push('as');

  let numbers = [1,2,3,4,5,6,7,8,9,10];
  numbers.map(item => item *2);
})();
