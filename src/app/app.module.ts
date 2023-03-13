import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './components/main/main.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FilmsDataService } from './service/data.service';
import { ModalComponent } from './components/modal/modal.component';
import { genreConvertService } from './service/genre.service';
import { LocalStorageService } from './service/storage.service';
import { FavoriteService } from './service/favorite.service';
import { StateIdFavoriteService } from './service/state.service';
import { SearchPipe } from './pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainComponent,
    FavoritesComponent,
    ContainerComponent,
    ModalComponent,
    SearchPipe,
    FilterPipe,
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FilmsDataService, genreConvertService, LocalStorageService, FavoriteService, StateIdFavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
