import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../object/user';
import {AuthService} from '../../service/auth.service';
import {PostService} from '../../service/post.service';
import {Router} from '@angular/router';

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

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private postService: PostService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.setAuthUser();
    this.getPosts();
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
}
