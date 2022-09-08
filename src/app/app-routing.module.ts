import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingPageComponent } from './page/setting-page/setting-page.component';
import { PlayPageComponent } from './page/play-page/play-page.component';
import { ResultPageComponent } from './page/result-page/result-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'setting', pathMatch: 'full' },
  { path: 'setting', component: SettingPageComponent },
  { path: 'play', component: PlayPageComponent },
  { path: 'result', component: ResultPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
