import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import LevelService from 'src/app/core/services/level.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
 
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              private levelService : LevelService,
              private route : ActivatedRoute,
              private navigate : Router,
              private _snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data : any
    ) { }

  ngOnInit(): void {
  
  }

  openSnackBar(alert : string) {
    this._snackBar.open(alert, 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  onDelete = ()=>{
    this.levelService.delete(this.data).subscribe(
      {
        next : ()=> {
          this.navigate.navigateByUrl("/")
          this.openSnackBar('Suppression effectuer avec succès !')
        },
        error : ()=> this.openSnackBar('Une erreur s\'est produite veuillez réessayer ultérieurement !')
      }
    )
  }

}
