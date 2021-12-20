import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss']
})
export class FriendsPageComponent implements OnInit {
  username = '';
  users: any[] = [];
  myFriends: any[] = [];

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (!this.auth.isAuth) {
      this.router.navigate(['/signIn']);
    }
    this.userService.getMyFriend(this.auth.getAuthUsername()).subscribe(res => {
      this.myFriends = res;
      console.log(res);
    });
  }

  findUser(): void {
    if (this.username) {
      this.userService.getNotMyFriend(this.username, this.auth.getAuthUsername()).subscribe(res => {
        this.users = res;
      });
    }
  }

  addFriend(id: any): void {
    const newFriend = {
      username: this.auth.getAuthUsername(),
      userId: id
    };

    this.userService.addFriend(newFriend).subscribe(res => {
      this.userService.getNotMyFriend(this.username, this.auth.getAuthUsername()).subscribe(resUser => {
        this.users = resUser;
        this.userService.getMyFriend(this.auth.getAuthUsername()).subscribe(resMyF => {
          this.myFriends = resMyF;
        });
      });
    });
  }

  getAuthUsername(): string | null {
    return this.auth.getAuthUsername();
  }
}
