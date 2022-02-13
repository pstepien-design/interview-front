import { State, Action, StateContext, Selector } from '@ngxs/store';

import { User } from '../../models/User';

import { UpdateUsers } from '../actions/users.actions';

export interface UsersStateModel {
  users: User[];
}

@State<UsersStateModel>({
  name: 'UsersState',
  defaults: {
    users: [],
  },
})
export class UsersState {
  @Action(UpdateUsers)
  getUsers(
    { setState }: StateContext<UsersStateModel>,
    { payload }: UpdateUsers
  ) {
    setState({
      users: payload,
    });
  }

  @Selector() static SelectAllUsers(state: UsersStateModel): User[] {
    return state.users;
  }
}
