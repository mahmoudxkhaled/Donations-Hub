import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasajidWorkLandingComponent } from './pages/masajid-work-landing/masajid-work-landing.component';

const routes: Routes = [
  {
    path: '',
    component: MasajidWorkLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasajidWorkRoutingModule {}
