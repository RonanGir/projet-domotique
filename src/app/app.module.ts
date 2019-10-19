import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DatetimeFormatPipe } from './pipes/datetime-format.pipe';
import { Constants } from './util/constants';
import { FormatDateFrPipe } from './pipes/format-date-fr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    DateFormatPipe,
    DatetimeFormatPipe,
    FormatDateFrPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppareilService,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
