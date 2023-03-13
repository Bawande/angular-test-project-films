import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class genreConvertService {

  constructor(){
  }

  getListGeners(){
    return [
      { id: 1, name: "драма" },
      { id: 2, name: "биография" },
      { id: 3, name: "история" },
      { id: 4, name: "фэнтези" },
      { id: 5, name: "приключения" },
      { id: 6, name: "боевик" },
      { id: 7, name: "мультфильм" },
      { id: 8, name: "комедия" },
      { id: 9, name: "триллер" },
      { id: 10, name: "детектив" },
      { id: 11, name: "фантастика" },
    ]
  }


  converterNumbToGener(arrNumbGenres = []) {

    const newArr = arrNumbGenres.map((el) => {
      switch(el) {
        case 1:
          return 'драма';
        case 2:
          return 'биография';
        case 3:
          return 'история';
        case 4:
          return 'фэнтези';
        case 5:
          return 'приключения';
        case 6:
          return 'боевик';
        case 7:
          return 'мультфильм';
        case 8:
          return 'комедия';
        case 9:
          return 'триллер';
        case 10:
          return 'детектив';
        case 11:
        return 'фантастика';
        default:
          return '';
      }
    })
     return newArr.join(", ");
  }
}
