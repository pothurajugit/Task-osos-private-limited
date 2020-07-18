import { Component, OnInit } from '@angular/core';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  counter:any = 1;
  total:any = 9799;
  alltotal:any;
  constructor(private cartservice1:CartdataService) { }

  productinformation:any[] = [];
  ngOnInit(){
    // this.cartservice1.getMessage().subscribe((productdata)=>{
    //   console.log(`data is ${productdata}`);
    this.productinformation = this.cartservice1.datafromsorder;
    console.log(this.productinformation);
    }

    //add item
    add(){
      this.counter ++;
      this.total = this.counter * 9799;
    }

    //remove item
    remove(){
      if(this.counter <= 0){
        alert("Cart is empty");
        return false;
      }
      this.counter --;
      this.total = this.total - 9799;
    }

    //add total
    addtotal(){
      this.alltotal = this.total;
    }

  }


