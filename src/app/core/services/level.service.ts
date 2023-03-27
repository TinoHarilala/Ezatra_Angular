import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Level from "../models/level.model";

@Injectable({
    providedIn : 'root'
})
export default class LevelService {
    constructor(private http : HttpClient){}

    //-----Get Data Level -------//
    getAllLevel() {
        return this.http.get<Level[]>('http://localhost:5001/levels')
    }

    //----New level----//
    addLevel( newLevel : Level ) : Observable<Level>{
        return this.http.post<Level>('http://localhost:5001/levels', newLevel)
    }

    //----Get Element by id------//
    byPk(id : number) : Observable<Level> {
        return this.http.post<Level>('http://localhost:5001/levels/getByPk', {id : id})
    }

}