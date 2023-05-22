import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeRoute } from './home/app-routes';

const routes: Routes = [homeRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
