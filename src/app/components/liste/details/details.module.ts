import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PipeModule } from 'src/app/modules/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    PipeModule
  ],
  declarations: [DetailsComponent],
  exports: [DetailsComponent]
})
export class DetailsModule { }
