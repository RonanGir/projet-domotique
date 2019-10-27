import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Services
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

// Pipes
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DatetimeFormatPipe } from './pipes/datetime-format.pipe';
import { FormatDateFrPipe } from './pipes/format-date-fr.pipe';

// Constants
import { Constants } from './util/constants';

// Components
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { NewAppareilComponent } from './new-appareil/new-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';


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
    FourOhFourComponent,
    NewAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
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
