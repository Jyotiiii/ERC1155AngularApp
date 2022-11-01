import { Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { landRegistrationComponent } from './land-registration/land-registration.component';
import { TransferFromMultipleReceipientComponent } from './transfer-from-multiple-receipient/transfer-from-multiple-receipient.component';
import { TransferComponent } from './transfer/transfer.component';

 
export const appRoutes: Routes = [
  { path: '', component: landRegistrationComponent },
  { path: 'transfer', component: TransferComponent },
  { path:'MultipleReceipienttrans',component: TransferFromMultipleReceipientComponent },
  { path:'balance',component: BalanceComponent }
  ];