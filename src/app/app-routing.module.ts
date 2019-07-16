import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AccountComponent } from './user/account/account.component';
import { ErrorLoginComponent } from './user/login/error-login/error-login.component';
import { CanActivateViaAuthGuard } from './_guards/can-activate-via-auth.guard';
import { ErrorRegistrationComponent } from './user/registration/error-registration/error-registration.component';
import { SuccessRegistrationComponent } from './user/registration/success-registration/success-registration.component';
import { CanActivateNotAuthGuard } from './_guards/can-activate-not-auth.guard';
import { AccountEditComponent } from './user/account/account-edit/account-edit.component';
import {SearchMedlistComponent} from './search-medicine/search-medlist/search-medlist.component';
import {SuccessOrdersFulllistComponent} from './success-orders-fulllist/success-orders-fulllist.component';
import {MakeOrderClientComponent} from './make-order-client/make-order-client.component';
import {ProductControlComponent} from './product-control/product-control.component';
import {OrderSuppliersComponent} from './order-suppliers/order-suppliers.component';
import {SuccessSuppliersOrdersComponent} from './success-suppliers-orders/success-suppliers-orders.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent,
    children: [
      {
        path: 'error',
        component: ErrorLoginComponent
      }
    ],
    canActivate: [
      CanActivateNotAuthGuard
    ]
  },
  {path: 'registration', component: RegistrationComponent,
    children: [
      {
        path: 'error',
        component: ErrorRegistrationComponent
      },
      {
        path: 'success',
        component: SuccessRegistrationComponent
      }
    ],
    canActivate: [
      CanActivateNotAuthGuard
    ]
  },
  {path: 'account', component: AccountComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  },
  {path: 'account/edit', component: AccountEditComponent},
  {path: 'catalog', component: SearchMedlistComponent},
  {path: 'make-order', component: MakeOrderClientComponent},
  {path: 'product-control', component: ProductControlComponent},
  {path: 'order-supplies-create', component: OrderSuppliersComponent},
  {path: 'order-supplies', component: SuccessSuppliersOrdersComponent},
  {path: 'all-success-orders-fulllist', component: SuccessOrdersFulllistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
