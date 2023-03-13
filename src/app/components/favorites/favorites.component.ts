import { Component, OnInit } from '@angular/core';
import { FilmsDataService } from 'src/app/service/data.service';
import { StateIdFavoriteService } from 'src/app/service/state.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{

  cardId = 0;
  cardFavorit = {};
  arrayFilms = [];

  fullCardMode = false;
  hereIsFavorite = false;

  constructor(
    private stateId: StateIdFavoriteService,
    private filmsData: FilmsDataService
    ) {}

  ngOnInit(){

    this.stateId.execChange.subscribe(value => {
      this.cardId = value;

    if(this.arrayFilms.length !== 0){
        this.cardFavorit = this.getFavoriteFilms(this.arrayFilms, this.cardId)
      }

    if(this.cardId !== -1){
        this.hereIsFavorite = true;
      } else {
        this.hereIsFavorite = false;
      }
    });

    this.filmsData.getJSON().subscribe(data => {
      this.arrayFilms = data;
      this.cardFavorit = this.getFavoriteFilms(this.arrayFilms, this.cardId)
    });
  }

  getFavoriteFilms(arrCards:any, idCard:Number){
    return arrCards.find(({ id }) => id === idCard);
  }
}
