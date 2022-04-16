import _ from 'lodash';

const data =[
  {
    username: 'nico',
    role: 'admin'
  },{
    username: 'nico',
    role: 'seller'
  },{
    username: 'nico',
    role: 'seller'
  },{
    username: 'nico',
    role: 'costumer'
  },
];

const rta =_.groupBy(data, (item)=> item.role);

console.log(rta);
