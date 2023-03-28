import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import LevelService from 'src/app/core/services/level.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Level from 'src/app/core/models/level.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-single-level',
  templateUrl: './single-level.component.html',
  styleUrls: ['./single-level.component.css']
})
export class SingleLevelComponent implements OnInit {

  levelForm !: FormGroup
  isSelected$ !: Observable<Level>
  idSelected !: number

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private dialog: MatDialog,
              private formBuilder : FormBuilder,
              private route : ActivatedRoute,
              private navigate : Router,
              private levelService : LevelService,
              private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.levelForm = this.formBuilder.group({
      characters : [null, Validators.required],
      exercice : [null, Validators.required],
      length : [null, Validators.required]
    })

    this.idSelected = +this.route.snapshot.params['id']
    this.levelService.byPk(this.idSelected).subscribe(
      {
        next : (value : any)=> {
          this.levelForm.patchValue({
            characters : value.characters,
            exercice : value.exercice,
            length : value.length
          })
        },
        error : (error : any)=> console.log(error) 
      }
    )
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  openSnackBar(alert : string) {
    this._snackBar.open(alert, 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
  onUpdate = ()=>{
     const levelToUpdata =  {
      id : this.idSelected,
      ...this.levelForm.value
     }
     this.levelService.update(levelToUpdata).subscribe(
      {
        next : ()=>{
                    this.navigate.navigateByUrl('/')
                    this.openSnackBar('Modification effectuer avec succès !')
        },
        error : ()=> this.openSnackBar('Une erreur s\'est produite veuillez réessayer ultérieurement !')
      }
     )
  }


  //------- Confirm dialog ------//
  openDialog(): void {
     this.dialog.open(ConfirmDialogComponent, {
      data : this.idSelected 
    });
  }
}


