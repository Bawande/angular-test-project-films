import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(genres, genreName) {
    if(!genreName){
      return genres;
    }

    return genres.filter((genre) => {
      return genre?.genre.includes(genreName);
    })
  }
}
