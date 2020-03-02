import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { TabPageComponent } from './tab-page.component';


@NgModule({
  declarations: [
    TabPageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    TabPageComponent,
  ],
})
export class TabPageModule { }
