import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
