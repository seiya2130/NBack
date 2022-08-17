import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingPageComponent } from './page/setting-page/setting-page.component';

const routes: Routes = [
  { path: 'setting', component: SettingPageComponent },
  { path: '', redirectTo: 'setting', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
