import { Injectable } from '@angular/core';
import { LocalStorageService } from './storage.service';

@Injectable()
export class FavoriteService {

  constructor(private persister: LocalStorageService) {
  }

  favoriteToggler(idCard = 0) {

    const myData = {idCard: idCard};
    const storageIdCard = this.persister.getItem('FAVOR_KEY')?.idCard;

    if(storageIdCard === idCard) {
      this.persister.removeItem('FAVOR_KEY');
    }

    if(storageIdCard !== idCard) {
      this.persister.setItem('FAVOR_KEY', myData);
    }
  }
}
