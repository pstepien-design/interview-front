import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Select } from '@ngxs/store';
import { FavouriteUsersState } from 'src/app/states/reducers/favUser.reducer';

@Component({
  selector: 'app-favourite-user',
  templateUrl: './favourite-user.component.html',
  styleUrls: ['./favourite-user.component.scss'],
})
export class FavouriteUserComponent {
  constructor(private userService: UserService) {}
  @Select(FavouriteUsersState.SelectFavouriteUsers)
  favouriteUsers$!: Observable<User[]>;
  ngOnInit(): void {
    this.favouriteUsers$.subscribe();
  }

  public removeFavouriteUsers(user: any): void {
    this.userService.removeFavouriteUsers(user);
  }
}
