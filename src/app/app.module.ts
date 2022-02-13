import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//components
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavouriteUserComponent } from './pages/favourite-user/favourite-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserComponent } from './pages/user/user.component';
//states
import { UsersState } from './states/reducer/users.reducer';
import { FavouriteUsersState } from './states/reducer/favUser.reducer';
//external imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    NavbarComponent,
    FavouriteUserComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxsModule.forRoot([UsersState, FavouriteUsersState]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
