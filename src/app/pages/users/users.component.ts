import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Select } from '@ngxs/store';
import { UsersState } from 'src/app/states/reducer/users.reducer';

@Component({
  selector: 'Users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}

  @Select(UsersState.SelectAllUsers) fetchedUsers$!: Observable<User[]>;
  ngOnInit(): void {
    this.userService.rehydrateUsers();
    this.fetchedUsers$.subscribe();
  }
}