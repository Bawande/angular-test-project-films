import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilmsDataService {

  arrFilms = [];

  constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log(data);
            this.arrFilms = data;
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/data/data.json");
    }
}
