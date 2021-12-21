import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';
import {BookmarkService} from '../../service/bookmark.service';
import {SavedService} from '../../service/saved.service';
import {MatDialog} from '@angular/material/dialog';
import {EditSavedComponent} from '../dialog/edit-saved/edit-saved.component';
import {SavedPostsListComponent} from '../dialog/saved-posts-list/saved-posts-list.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './bookmarks-page.component.html',
  styleUrls: ['./bookmarks-page.component.scss']
})
export class BookmarksPageComponent implements OnInit {
  mySaved: any[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private savedService: SavedService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isAuth) {
      this.savedService.getSavedsByOwnerId(this.authService.getAuthUserId()).subscribe(res => {
        this.mySaved = res;
      });
    }
  }

  isLogin(): boolean {
    return this.authService.isAuth;
  }

  openSavedPostsList(id: any): void {
    const dialogRef = this.dialog.open(SavedPostsListComponent, {
      data: {
        savedId: id
      }
    });
  }
}
