import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'masajid-work',
    loadChildren: () =>
      import('./features/masajid-work/masajid-work.module').then((m) => m.MasajidWorkModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'masajid-work' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
