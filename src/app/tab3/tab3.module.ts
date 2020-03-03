import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TabPageModule } from '../templates/tab-page/tab-page.module';
import { Tab3Page } from './tab3.page';

@NgModule({
  imports: [
    CommonModule,
    ExploreContainerComponentModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    TabPageModule,
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule { }
