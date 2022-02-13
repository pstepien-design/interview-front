import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import model
import { User } from '../models/User';
//import services
import { ApiService } from './api.service';
// import ngxs an rxjs
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

//import states
import {
  AddFavouriteUser,
  RemoveFavouriteUser,
} from '../states/actions/favUser.actions';
import { UpdateUsers } from '../states/actions/users.actions';
import { UsersState } from '../states/reducers/users.reducer';
import { FavouriteUsersState } from '../states/reducers/favUser.reducer';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private store: Store,
    private api: ApiService,
    private route: ActivatedRoute
  ) {}

  public getUserIdFromPath(route: ActivatedRoute): number {
    return route.snapshot.params['id'];
  }

  public isUserFavourite(currentUser: User): boolean {
    const favUsers: User[] = this.store.selectSnapshot(
      FavouriteUsersState.SelectFavouriteUsers
    );
    if (favUsers?.length != 0) {
      return !!favUsers?.find((favUser: User) => favUser.id === currentUser.id);
    } else {
      return false;
    }
  }

  public addUserToFavourite(currentUser: User): void {
    if (!this.isUserFavourite(currentUser)) {
      this.store.dispatch(new AddFavouriteUser(currentUser));
    }
  }

  public removeFavouriteUsers(user: User): void {
    this.store.dispatch(new RemoveFavouriteUser(user));
  }

  public loadUsers(): void {
    const savedUsers: User[] = this.store.selectSnapshot(
      UsersState.SelectAllUsers
    );
    if (savedUsers.length === 0) {
      this.api.getUsers().subscribe((users: User[]) => {
        this.store.dispatch(new UpdateUsers(users));
      });
    }
  }
  public rehydrateUsers(): void {
    this.api.getUsers().subscribe((users: User[]) => {
      this.store.dispatch(new UpdateUsers(users));
    });
  }

  public getUser(id: number): Observable<User> {
    return this.api.getUserById(id);
  }
}
