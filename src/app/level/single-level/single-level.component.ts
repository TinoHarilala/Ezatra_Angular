import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import LevelService from 'src/app/core/services/level.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Level from 'src/app/core/models/level.model';

@Component({
  selector: 'app-single-level',
  templateUrl: './single-level.component.html',
  styleUrls: ['./single-level.component.css']
})
export class SingleLevelComponent implements OnInit {

  levelForm !: FormGroup
  isSelected$ !: Observable<Level>

  constructor(private dialog: MatDialog,
              private formBuilder : FormBuilder,
              private route : ActivatedRoute,
              private levelService : LevelService
    ) { }

  ngOnInit(): void {
    this.levelForm = this.formBuilder.group({
      characters : [null, Validators.required],
      exercice : [null, Validators.required],
      length : [null, Validators.required]
    })

    const idSelected = +this.route.snapshot.params['id']
    this.levelService.byPk(idSelected).subscribe(
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

  onUpdate = ()=>{

  }

  onDelete = ()=>{

  }

}


