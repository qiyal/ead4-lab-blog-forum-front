import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../object/comment';
import {CommentsService} from '../../service/comments.service';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.scss']
})
export class PostDetailsPageComponent implements OnInit {
  post: any;
  postId = -1;
  comments: Comment[] = [];
  formComment: FormGroup = new FormGroup({});
  showCommentForm = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private commentService: CommentsService,
    private authUser: AuthService,
    private userService: UserService
  ) {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPostById(this.postId).subscribe(res => {
      this.post = res;
    });
    this.getComments();
  }

  ngOnInit(): void {
  }

  getComments(): void {
    this.commentService.getCommentById(this.postId).subscribe(res => {
      this.comments = res;
    });
  }

  showCreateFormComment(): void {
    if (!this.showCommentForm) {
      this.initCommentForm();
    } else {
      this.showCommentForm = false;
    }
  }

  cancel(): void {
    this.showCommentForm = false;
  }

  initCommentForm(): void {
    this.userService.getUserByUsername(this.authUser.getAuthUsername()).subscribe(res => {
      this.formComment = new FormGroup({
        userId: new FormControl(res.id),
        postId: new FormControl(this.postId),
        text: new FormControl(''),
      });

      this.showCommentForm = true;
    });
  }

  saveComment(): void {
    console.log(this.formComment.getRawValue());
    this.commentService.createComment(this.formComment.getRawValue()).subscribe(res => {
      this.commentService.getCommentById(this.postId).subscribe(res2 => {
        this.comments = res2;
        this.showCommentForm = false;
      });
    });
  }

  deleteComment(id: number): void {
    this.commentService.deleteComment(id).subscribe(res => {
      this.getComments();
    });
  }

  getUsername(): string | null {
    return this.authUser.getAuthUsername();
  }

  likeCount(): void {
    this.postService.updateLikeCount({
      username: this.authUser.getAuthUsername(),
      postId: this.post.id
    }).subscribe(res => {
      this.postService.getPostById(this.postId).subscribe(resPost => {
        this.post = resPost;
      });
    });
  }

  dislikeCount(): void {
    this.postService.updateDislikeCount({
      username: this.authUser.getAuthUsername(),
      postId: this.post.id
    }).subscribe(res => {
      this.postService.getPostById(this.postId).subscribe(resPost => {
        this.post = resPost;
      });
    });
  }
}
