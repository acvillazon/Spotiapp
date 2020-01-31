import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//ROUTES
import { RouterModule } from '@angular/router';
import { APP_ROUTE } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { TracksWidgetPipe } from './pipes/tracks-widget.pipe';
import { ErrorsComponent } from './components/shared/errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    TracksWidgetPipe,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTE, {useHash:true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
