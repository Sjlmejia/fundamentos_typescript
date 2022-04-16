(() => {
  const login =(data:{email: string, password: number}) =>{
    console.log(data.email, data.password);
  }
  login({
    email: 'j@j',
    password: 12121
  });

  type Sizes = 's'|'m';

  const products:any[] =[];
  const addProduct =(data:{
    title: string,
    createdAt: Date,
    stock:number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'pro1',
    createdAt: new Date(),
    stock:12
  });
  console.log(products);s
});
