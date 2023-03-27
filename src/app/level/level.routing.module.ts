import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LevelListComponent } from "./level-list/level-list.component";
import { SingleLevelComponent } from "./single-level/single-level.component";


const routes : Routes = [
    { path : '', component : LevelListComponent },
    { path : 'single/:id', component : SingleLevelComponent }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class LevelRoutingModule{}