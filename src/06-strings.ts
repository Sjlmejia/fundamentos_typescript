(() => {
  let productTitle = 'A Book';
  productTitle='A Video';
  console.log('productTitle', productTitle);

  const productDescription = 'A Book about something';
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew:boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log('summary', summary);

  const myString:string = '';

})();
