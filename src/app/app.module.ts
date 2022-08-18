import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingPageComponent } from './page/setting-page/setting-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForwardButtonComponent } from './ui/gui/button/forward-button/forward-button.component';
import { MaterialModule } from './material.module';
import { SectionComponent } from './ui/layout/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingPageComponent,
    ForwardButtonComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
