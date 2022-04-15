(() => {
  const calcTotal=(prices: number[]):string =>{
    let total =0;
    prices.forEach(price => {
      total += price;
    });
    return total.toString();
  }

  const printTotal =(prices: number[]):void =>{
    const rta = calcTotal(prices);
    console.log('rta', rta);
  }
})();
