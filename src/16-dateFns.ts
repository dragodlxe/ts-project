import {subDays, format} from "date-fns"

const date = new Date(1998, 3, 30);
const rta = subDays(date, 31);

const fstring = format(rta, "yyyy/MM/dd");

console.log(fstring)
