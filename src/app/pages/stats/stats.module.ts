import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatsPageRoutingModule } from './stats-routing.module';

import { StatsPage } from './stats.page';
import { ChartsModule } from 'ng2-charts';
import { LoadingComponentModule } from '../../components/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatsPageRoutingModule,
    ChartsModule,
    LoadingComponentModule,
  ],
  declarations: [StatsPage]
})
export class StatsPageModule {}
