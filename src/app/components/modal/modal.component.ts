import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FavoriteService } from 'src/app/service/favorite.service';
import { genreConvertService } from 'src/app/service/genre.service';
import { StateIdFavoriteService } from 'src/app/service/state.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public genres: any;

  public favorite = true;


  constructor(
    @Inject(MAT_DIALOG_DATA)
    public film: any,
    private converter: genreConvertService,
    private stateId: StateIdFavoriteService,
    private StorageFavorite: FavoriteService
  ){
    this.genres = converter.converterNumbToGener(film.genre);
  }

  ngOnInit() {
    this.stateId.execChange.subscribe(value => {
      this.favorite = (value === this.film?.id);
    });
  }

  favoriteToggle(){
    this.stateId.idFavoriteChange(this.film?.id);
    this.StorageFavorite.favoriteToggler(this.film?.id);
  }


}
