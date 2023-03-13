import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FavoriteService } from 'src/app/service/favorite.service';
import { genreConvertService } from 'src/app/service/genre.service';
import { StateIdFavoriteService } from 'src/app/service/state.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardFilm;
  @Input() fullMode;

  @Output() reloadMain = new EventEmitter();

  public genre = '';
  public arrGenre = [];
  public favorite = false;


  constructor(
    private dialog: MatDialog,
    private converter: genreConvertService,
    private StorageFavorite: FavoriteService,
    private stateId: StateIdFavoriteService
    ){}

  ngOnInit() {
    this.arrGenre = this.cardFilm?.genre;
    this.genre = this.converter.converterNumbToGener(this.arrGenre);

    this.stateId.execChange.subscribe(value => {
      this.favorite = (value === this.cardFilm?.id);
    });
  }

  openDialog(){
    const currentfilm = this.cardFilm;
    this.dialog.open(ModalComponent, {data: currentfilm});
  }

  favoriteToggle(){
    this.stateId.idFavoriteChange(this.cardFilm?.id);
    this.StorageFavorite.favoriteToggler(this.cardFilm?.id);
  }

}
