import _ from "lodash";

const data = [
  {
    username: 'pepe',
    role: 'admin'
  },
  {
    username: 'juan',
    role: 'client'
  },
  {
    username: 'jose',
    role: 'admin'
  },
];

const rta = _.groupBy(data, (item)=> item.role);
console.log(rta);
