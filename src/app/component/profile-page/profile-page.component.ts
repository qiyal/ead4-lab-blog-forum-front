import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../object/user';
import {AuthService} from '../../service/auth.service';
import {PostService} from '../../service/post.service';
import {Router} from '@angular/router';
import {SavedService} from '../../service/saved.service';
import {MatDialog} from '@angular/material/dialog';
import {EditSavedComponent} from '../dialog/edit-saved/edit-saved.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: User = new User(-1, '', '', '', '', '', []);
  newUsername = '';
  textPost = '';
  titlePost = '';
  urlPhoto = '/assets/img/users/user-logo-2.jpg';
  posts: any[] = [];
  showTab: any = 0;

  saved = {
    title: '',
    ownerId: -1,
    postsIds: []
  };
  saveds: any[] = [];

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private postService: PostService,
    private router: Router,
    private savedService: SavedService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.setAuthUser();
    this.getPosts();
    this.getMySaved();
    if (!this.authService.isAuth) {
      this.router.navigate(['/main']);
    }
  }

  setAuthUser(): void {
    this.userService.getUserByUsername(this.authService.getAuthUsername()).subscribe(res => {
      this.user = res;
    });
  }

  getPosts(): void {
    if (this.authService.getAuthUsername() != null) {
      this.postService.getPostsByUsername(this.authService.getAuthUsername()).subscribe(res => {
        this.posts = res;
        console.log('res post', res);
      });
    }
  }

  createPost(): void {
    const post = {
      title: this.titlePost,
      text: this.textPost,
      username: this.authService.getAuthUsername()
    };

    if (this.titlePost && this.textPost) {
      this.postService.createPost(post).subscribe(res => {
        this.titlePost = '';
        this.textPost = '';

        this.getPosts();
        this.showTab = 0;
      });
    }
  }

  updateUsername(): void {
    this.userService.updateUsername(this.newUsername, this.user.id).subscribe(res => {
      if (res !== null) {
        this.user.username = res.username;
        this.newUsername = '';

        this.authService.login({username: res.username, password: '123'}).subscribe(res2 => {
          if (res2.headers.get('authorization')) {
            this.authService.setToken(res2.headers.get('authorization'), res.username);
          }
        });
      }
    });
  }

  createSaved(): void {
    this.saved.ownerId = Number(this.authService.getAuthUserId());
    this.savedService.createNew(this.saved).subscribe(res => {
      this.getMySaved();
      this.saved.title = '';
    });
  }

  getMySaved(): void {
    this.savedService.getSavedsByOwnerId(this.authService.getAuthUserId()).subscribe(res => {
      this.saveds = res;
    });
  }

  openEditSaved(savedId_: any): void {
    const dialogRef = this.dialog.open(EditSavedComponent,  {
      data: {
        savedId: savedId_
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.action) {
        this.getMySaved();
      }
    });
  }

  deleteSaved(savedId: any): void {
    this.savedService.deleteById(savedId).subscribe(res => {
      this.getMySaved();
    });
  }
}
