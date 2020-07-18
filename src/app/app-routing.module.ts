import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path:"",redirectTo:"/home",pathMatch:"full"},
                        {path:"home",component:HomeComponent}, 
                        {path:"orders",component:OrderComponent},
                        {path:"cart",component:CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
