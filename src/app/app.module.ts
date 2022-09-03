import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingPageComponent } from './page/setting-page/setting-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForwardButtonComponent } from './ui/gui/button/forward-button/forward-button.component';
import { MaterialModule } from './material.module';
import { SectionComponent } from './ui/layout/section/section.component';
import { SettingContainerComponent } from './page/setting-page/container/setting-container/setting-container.component';
import { SettingComponent } from './page/setting-page/presentational/setting/setting.component';
import { SettingStore } from './store/setting.store';
import { FormsModule }   from '@angular/forms';
import { ErrorDialogComponent } from './ui/gui/dialog/error-dialog/error-dialog.component';
import { PlayPageComponent } from './page/play-page/play-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingPageComponent,
    ForwardButtonComponent,
    SectionComponent,
    SettingContainerComponent,
    SettingComponent,
    ErrorDialogComponent,
    PlayPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [SettingStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
