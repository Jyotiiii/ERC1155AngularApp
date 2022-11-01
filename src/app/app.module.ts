
 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';

import { TransferComponent } from './transfer/transfer.component';
import { landRegistrationComponent } from './land-registration/land-registration.component';
import { TransferFromMultipleReceipientComponent } from './transfer-from-multiple-receipient/transfer-from-multiple-receipient.component';
import { BalanceComponent } from './balance/balance.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule,HttpClientModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, TransferComponent, landRegistrationComponent, TransferFromMultipleReceipientComponent, BalanceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }