(() => {
  let myDynamicVar:any;
  myDynamicVar = 'A Book';
  myDynamicVar = 'A Video';
  myDynamicVar = 100;
  myDynamicVar = false;
  const rta =(myDynamicVar as string).toLocaleLowerCase();
  console.log('rta', rta);

  myDynamicVar = 121;
  const rta2 =(<number>myDynamicVar).toFixed(2);
  console.log('rta2', rta2);
})();
