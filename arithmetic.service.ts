import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }
    add(num1:any,num2:any):number{
      return parseInt(num1)+parseInt(num2)
    }
    sub(num1:any,num2:any):number{
      return parseInt(num1)-parseInt(num2)
    }
  
}
