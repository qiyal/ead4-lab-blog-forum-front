import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BookmarkService} from '../../service/bookmark.service';
import {PostService} from '../../service/post.service';
import {AuthService} from '../../service/auth.service';
import {Post} from '../../object/Post';

@Component({
  selector: 'app-my-posts-page',
  templateUrl: './my-posts-page.component.html',
  styleUrls: ['./my-posts-page.component.scss']
})
export class MyPostsPageComponent implements OnInit {
  myPosts: Post[] = [];

  constructor(
    private router: Router,
    private bookmarkService: BookmarkService,
    private postService: PostService,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.getMyPosts();
  }

  onClickPost(id: any): void {
    this.router.navigate(['/post-detail', id]);
  }

  addToBookmark(post: any): void {
    if (this.auth.isAuth) {
      const bookmark = {
        username: this.auth.getAuthUsername(),
        bookmark: {
          postId: post.id
        }
      };

      this.bookmarkService.add(bookmark).subscribe(res => {
        console.log('add');
      });
    }
  }

  getMyPosts(): void {
    this.postService.getPostsByUsername(this.auth.getAuthUsername()).subscribe(res => {
      this.myPosts = res;
    });
  }
}
