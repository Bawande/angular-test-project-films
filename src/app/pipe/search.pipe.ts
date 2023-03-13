import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(films, filmName) {
    // console.log(!filmName);
    // return films;
    if(!filmName){
      return films;
    }
    if(filmName && !filmName.trim()){
      return films;
    }
    return films.filter( (film) => {
      return film?.name.toLowerCase().includes(filmName.trim());
    })
  }

}
