import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CourseDialogComponent } from './course-dialog.component'
import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  declarations: [CourseDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    SharedModule
  ],
  exports: [CourseDialogComponent], // Si necesitas usar CourseDialogComponent fuera de este módulo
})
export class CourseDialogModule {}
