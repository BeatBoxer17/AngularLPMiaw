import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeComponent } from './liste.component';
import { DetailsModule } from './details/details.module';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  imports: [
    CommonModule,
    DetailsModule,
    MatCardModule,
    MatButtonModule,
    NgxSmartModalModule.forChild()
  ],
  declarations: [ListeComponent],
  exports: [ListeComponent]
})
export class ListeModule { }
