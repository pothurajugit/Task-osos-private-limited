import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {

  datafromsorder:any[] = [];

  // subject = new Subject();

  // constructor() { }

  // sendMessage(products){
  //   this.subject.next(products);
  // }

  // getMessage(){
  //   return this.subject.asObservable()
  // }
}
