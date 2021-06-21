import {even} from '@/utils/even'
export function odd(n){
  // debugger

  // a && b 有true则返回true,后面不会执行
  return n!=0 && even(n-1)
} 