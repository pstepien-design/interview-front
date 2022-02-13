import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { ActivatedRoute } from '@angular/router';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { Select } from '@ngxs/store';
import { FavouriteUsersState } from 'src/app/states/reducers/favUser.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  foundUser!: User;
  isLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private faLibrary: FaIconLibrary,
    private api: ApiService,
    private userService: UserService
  ) {}

  @Select(FavouriteUsersState.SelectFavouriteUsers)
  favouriteUsers$!: Observable<User[]>;
  ngOnInit(): void {
    this.userService.getUser(this.getUserId()).subscribe((user$) => {
      this.foundUser = user$;
      console.log(user$);
      this.isLoaded = true;
    });
    this.faLibrary.addIcons(fasStar);
    this.favouriteUsers$.subscribe();
  }

  private getUserId(): number {
    return this.userService.getUserIdFromPath(this.route);
  }

  public addUserToFavourite(currentUser: User): void {
    this.userService.addUserToFavourite(currentUser);
  }

  public isUserFavourite(currentUser: User): boolean {
    return this.userService.isUserFavourite(currentUser);
  }
}
