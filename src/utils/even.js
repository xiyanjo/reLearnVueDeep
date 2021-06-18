import {odd} from '@/utils/odd.js'
let counter = 0;
function even(n){
  // debugger
  counter++;
  console.log(counter)
  // console.log('even',n)
  return n==0|| odd(n-1);
}
export{counter,even}