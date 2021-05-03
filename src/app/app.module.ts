import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatchesService } from './httpClient/services/matches.service';
import { LeagueBarChartComponent } from './league-bar-chart/league-bar-chart.component';
import { OptionsbarComponent } from './optionsbar/optionsbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeagueBarChartComponent,
    OptionsbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [MatchesService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
