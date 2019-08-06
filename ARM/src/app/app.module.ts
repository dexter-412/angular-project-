import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { ServicesModule } from './_services/services.module';
import { DirectivesModule } from './_directives/directives.module';
import { HttpClientModule } from '@angular/common/http';
import { GuardsModule } from './_guards/guards.module';
import { SuppliersOrderModalComponent} from './success-suppliers-orders/suppliers-order-modal/suppliers-order-modal.component';
import { MakeOrderClientModule } from './make-order-client/make-order-client.module';
import {ProductControlModule} from './product-control/product-control.module';
import {SearchMedicineModule} from './search-medicine/search-medicine.module';
import {OrderSupliersModule} from './order-suppliers/order-supliers.module';
import {SuccessOrdersFulllistModule} from './success-orders-fulllist/success-orders-fulllist.module';
import {SuccessSuppliersOrdersModule} from './success-suppliers-orders/success-suppliers-orders.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    ServicesModule,
    DirectivesModule,
    GuardsModule,
    SuccessSuppliersOrdersModule,
    MakeOrderClientModule,
    ProductControlModule,
    SearchMedicineModule,
    OrderSupliersModule,
    SuccessOrdersFulllistModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SuppliersOrderModalComponent]
})
export class AppModule { }
