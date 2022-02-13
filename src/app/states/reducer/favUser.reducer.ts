import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../../models/User';
import {
  AddFavouriteUser,
  RemoveFavouriteUser,
} from '../actions/favUser.actions';

export interface FavouriteUsersStateModel {
  favUsers: User[];
  lastAdded: User;
}

@State<FavouriteUsersStateModel>({
  name: 'FavouriteUserState',
  defaults: {
    favUsers: [],
    lastAdded: {} as User,
  },
})
export class FavouriteUsersState {
  @Action(AddFavouriteUser)
  addFavouriteUser(
    { getState, setState }: StateContext<FavouriteUsersStateModel>,
    { payload }: AddFavouriteUser
  ) {
    const state = getState();
    if (!state.favUsers.includes(payload)) {
      setState({
        favUsers: [...state.favUsers, payload],
        lastAdded: payload,
      });
    }
  }

  @Action(RemoveFavouriteUser)
  removeFavouriteUser(
    { getState, setState }: StateContext<FavouriteUsersStateModel>,
    { payload }: RemoveFavouriteUser
  ) {
    const state = getState();
    const newUsersList = this.removeFromArray(state.favUsers, payload);
    setState({
      ...state,
      favUsers: newUsersList,
    });
  }

  @Selector() static SelectFavouriteUsers(
    state: FavouriteUsersStateModel
  ): User[] {
    return state.favUsers;
  }

  private removeFromArray(array: User[], object: any) {
    return array.filter((item) => item !== object);
  }
}
