import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '../../service/post.service';
import {BookmarkService} from '../../service/bookmark.service';
import {AuthService} from '../../service/auth.service';
import {Post} from '../../object/Post';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  allPosts: Post[] = [];
  titleInput: any = '';

  constructor(
    private router: Router,
    private bookmarkService: BookmarkService,
    private postService: PostService,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  onClickPost(postId: number): void {
    this.router.navigate(['/post-detail', postId]);
  }

  findPost(): void {
    if (this.titleInput) {
      this.postService.find(this.titleInput).subscribe(res => {
        this.allPosts = res;
      });
    } else {
      this.getAllPosts();
    }
  }

  addToSaved(post: any): void {
    if (this.auth.isAuth) {
      const savedPostDTO = {
        savedId: this.auth.getAuthUsername(),
        bookmark: {
          postId: post.id
        }
      };

      // this.bookmarkService.add(bookmark).subscribe(res => {
      //   console.log('add');
      // });
    }
  }

  getAllPosts(): void {
    this.postService.getAllPost().subscribe(res => {
      this.allPosts = res;
    });
  }
}
