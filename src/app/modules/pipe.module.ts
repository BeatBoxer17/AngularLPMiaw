import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from 'src/app/pipes/age.pipe';

@NgModule({
  declarations: [
    AgePipe
  ],
  exports: [
    AgePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
