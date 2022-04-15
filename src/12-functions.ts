(()=> {
  type Sizes = "S" | "M" | "L";

  function createProductJson(
    title: string,
    createAt: Date,
    stock: number,
    sizes: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      sizes
    };
  }

  const product1 = createProductJson('P1', new Date(), 11, 'S');
  console.log(product1);
  console.log(product1.sizes);

  const createProductJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    sizes?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      sizes
    };
  }

})();
