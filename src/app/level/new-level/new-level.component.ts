import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import LevelService from 'src/app/core/services/level.service';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-level',
  templateUrl: './new-level.component.html',
  styleUrls: ['./new-level.component.css']
})
export class NewLevelComponent implements OnInit {

  levelForm !: FormGroup
  @ViewChild(MatTable) table !: MatTable<any>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private dialog: MatDialog,
              private formBuilder : FormBuilder,
              private levelService : LevelService,
              private route : Router,
              private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.levelForm = this.formBuilder.group({
      characters : [null, Validators.required],
      exercice : [null, Validators.required],
      length : [null, Validators.required]
    })
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  getAllDAta = ()=> {
    this.levelService.getAllLevel()
  }

  openSnackBar(alert : string) {
    this._snackBar.open(alert, 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }



  onSubmitLevel = ()=>{
    this.levelService.addLevel(this.levelForm.value).subscribe(
      {
        next : ()=> {
          this.dialog.closeAll()
          this.route.navigateByUrl('/')
          this.openSnackBar('Ajout effectuer avec succès !')
        },
        error : ()=>this.openSnackBar('Une erreur s\'est produite veuillez réessayer ultérieurement !')
      }
    )
  }

}
