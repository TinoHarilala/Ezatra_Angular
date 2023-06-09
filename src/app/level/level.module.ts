import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelListComponent } from './level-list/level-list.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { LevelRoutingModule } from './level.routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button';
import {  MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NewLevelComponent } from './new-level/new-level.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SingleLevelComponent } from './single-level/single-level.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    LevelListComponent,
    NewLevelComponent,
    SingleLevelComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    LevelRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatIconModule,
    MatSnackBarModule,
  ]
})
export class LevelModule { }
