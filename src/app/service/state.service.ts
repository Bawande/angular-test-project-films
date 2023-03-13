import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './storage.service';

@Injectable()
export class StateIdFavoriteService {

    execChange: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

    constructor(private localStorageData: LocalStorageService) {
      if(
        this.getIdFavoriteLocalStorage()
        && (this.getIdFavoriteLocalStorage() !== this.execChange.value))
        {
        this.idFavoriteChange(this.getIdFavoriteLocalStorage());
      }
      console.log('localStorageData - ' + this.getIdFavoriteLocalStorage() + '  ' + this.execChange.value);
    }

    idFavoriteChange(data: number) {

        if(data === this.execChange.value){
          this.execChange.next(-1);
        } else {
          this.execChange.next(data);
        }
    }

    getIdFavoriteLocalStorage(){
      return this.localStorageData.getItem('FAVOR_KEY')?.idCard
    }
}
