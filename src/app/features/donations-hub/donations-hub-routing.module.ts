import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationsHubLandingComponent } from './pages/donations-hub-landing/donations-hub-landing.component';

const routes: Routes = [
  {
    path: '',
    component: DonationsHubLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationsHubRoutingModule {}
