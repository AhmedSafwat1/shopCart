import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: 'orders', component: MyOrdersComponent},
  {path: 'admin/order', component: AdminOrderComponent},
  {path: 'admin/product', component: AdminProductComponent},
  {path: 'shoping-cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
