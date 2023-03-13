import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { genreConvertService } from 'src/app/service/genre.service';
import { FilmsDataService } from '../../service/data.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit{

  fullCardMode = true;
  arrayFilms = [];

  disableSelect = new FormControl(false);
  filmName;
  genreName;
  listGenres;
  selectedValue = '';


  constructor(
    private filmsData: FilmsDataService,
    private genreService: genreConvertService
    ) {}

  ngOnInit(){
    this.filmsData.getJSON().subscribe(data => {
      this.arrayFilms = data;
    });

    this.listGenres = this.genreService.getListGeners();
  }
}
