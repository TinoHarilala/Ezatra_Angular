import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { tap } from 'rxjs/operators'
import LevelService from 'src/app/core/services/level.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-new-level',
  templateUrl: './new-level.component.html',
  styleUrls: ['./new-level.component.css']
})
export class NewLevelComponent implements OnInit {

  levelForm !: FormGroup
  @ViewChild(MatTable) table !: MatTable<any>;

  constructor(private dialog: MatDialog,
              private formBuilder : FormBuilder,
              private levelService : LevelService
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

  onSubmitLevel = ()=>{
    this.levelService.addLevel(this.levelForm.value).pipe(
      tap(()=>
          {
            this.dialog.closeAll();

            this.table.renderRows()
          })
    ).subscribe()
  }

}
