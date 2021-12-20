import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';
import {BookmarkService} from '../../service/bookmark.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './bookmarks-page.component.html',
  styleUrls: ['./bookmarks-page.component.scss']
})
export class BookmarksPageComponent implements OnInit {
  allBookmarks: any[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private bookmarkService: BookmarkService
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isAuth) {
      this.bookmarkService.getByUsername(this.authService.getAuthUsername()).subscribe(res => {
        this.allBookmarks = res;
      });
    }
  }

  deleteBookmark(id: any): void {
    this.bookmarkService.delete(id).subscribe(res => {
      this.bookmarkService.getByUsername(this.authService.getAuthUsername()).subscribe(resU => {
        this.allBookmarks = resU;
      });
    });
  }

  isLogin(): boolean {
    return this.authService.isAuth;
  }
}
