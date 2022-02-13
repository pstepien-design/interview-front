import { User } from '../../models/User';

export class AddFavouriteUser {
  static readonly type = '[User] Add Favourite';
  constructor(public readonly payload: User) {}
}

export class RemoveFavouriteUser {
  static readonly type = '[User] Remove Favourite';
  constructor(public readonly payload: User) {}
}
