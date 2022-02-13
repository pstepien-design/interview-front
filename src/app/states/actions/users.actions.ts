import { User } from '../../models/User';

export class UpdateUsers {
  static readonly type = '[Users] Update Users';
  constructor(public readonly payload: User[]) {}
}
