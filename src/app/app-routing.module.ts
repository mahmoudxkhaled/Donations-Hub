import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'donations-hub',
    loadChildren: () =>
      import('./features/donations-hub/donations-hub.module').then((m) => m.DonationsHubModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'donations-hub' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
