import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SavedService} from '../../../service/saved.service';

@Component({
  selector: 'app-saved-posts-list',
  templateUrl: './saved-posts-list.component.html',
  styleUrls: ['./saved-posts-list.component.scss']
})
export class SavedPostsListComponent implements OnInit {
  savedId: any;
  posts: any;

  constructor(
    public dialogRef: MatDialogRef<SavedPostsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private savedService: SavedService,
  ) {
    this.savedId = data.savedId;
    console.log('saved', this.savedId);
  }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.savedService.getPosts(this.savedId).subscribe(res => {
      this.posts = res;
      console.log('res', res);
    });
  }
}
