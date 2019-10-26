import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from '.services/auth-guard.service';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DatetimeFormatPipe } from './pipes/datetime-format.pipe';
import { Constants } from './util/constants';
import { FormatDateFrPipe } from './pipes/format-date-fr.pipe';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    DateFormatPipe,
    DatetimeFormatPipe,
    FormatDateFrPipe,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    Constants

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
