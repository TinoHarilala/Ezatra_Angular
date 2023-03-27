import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import Level from 'src/app/core/models/level.model';
import LevelService from 'src/app/core/services/level.service';
import {MatDialog} from '@angular/material/dialog';
import { NewLevelComponent } from '../new-level/new-level.component';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';


@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.css']
})
export class LevelListComponent implements OnInit{
  dataSource !: any
  displayedColumns: string[] = ['exercice', 'characters', 'length'];
  selection = new SelectionModel<Level>(false, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private levelService : LevelService,
                public dialog: MatDialog,
                private route : Router
            ) {}


  ngOnInit(): void {
    const ELEMENT_DATA  = this.levelService.getAllLevel()
    ELEMENT_DATA.subscribe({
      next : (data : any)=> {
                              this.dataSource = new MatTableDataSource(data)
                              this.dataSource.paginator = this.paginator;
                            },
      error : (error : any)=> console.log(error) 
    })


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(NewLevelComponent);
  }

  onClicked = (row : any)=>{
      this.route.navigateByUrl(`single/${row.id}`)
  }
}
