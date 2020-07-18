import { Component, OnInit } from '@angular/core';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  mobile1:any = {img:"https://rukminim1.flixcart.com/image/312/312/k1fbmvk0/mobile/g/y/q/mi-redmi-8-mzb8253in-original-imafhyacjwjwxmsx.jpeg?q=70",
                 name:"Redmi 8 (Blue, 64 GB)  (4 GB RAM)",price:9799,quantity:1}
  mobile2:any = {img:"https://rukminim1.flixcart.com/image/312/312/k8ddoy80/mobile/n/m/w/realme-narzo-10-rmx2040-original-imafqectbhfgxutg.jpeg?q=70",
                 name:"Redmi 10 (Red,64 GB)  (4 GB RAM)",price:11999,quantity:1}
  mobile3:any = {img:"https://rukminim1.flixcart.com/image/312/312/k87nxjk0/mobile/m/f/k/redmi-note-8-pro-mzb8314in-original-imafqaf3mak86q8e.jpeg?q=70",
                name:"Redmi 8 Pro (Blue,64 GB)  (4 GB RAM)",price:16999,quantity:1}
  cartItems:any = [];
  counter:any = 0;

  constructor(private cartservice: CartdataService) { }

  ngOnInit(): void {
    
}

  //add to cart 
  Addtocart(){
    this.counter ++;
    if(this.counter >1){
      alert("Already added to cart");
      return false;
    }
    this.cartItems.push(this.mobile1);
    this.cartservice.datafromsorder = this.cartItems;
    // this.cartservice.sendMessage(this.cartItems);
    //console.log(this.cartItems)
  }
}
