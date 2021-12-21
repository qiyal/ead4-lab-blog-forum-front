import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {SavedService} from '../../../service/saved.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-to-save',
  templateUrl: './add-to-save.component.html',
  styleUrls: ['./add-to-save.component.scss']
})
export class AddToSaveComponent implements OnInit {
  saveds: any[] = [];
  savedId: any;
  post: any;

  constructor(
    private authService: AuthService,
    private savedService: SavedService,
    public dialogRef: MatDialogRef<AddToSaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log('postIddsdsds', this.data.postId);
    this.post = data.postId;
  }

  ngOnInit(): void {
    this.getSaveds();
  }

  getSaveds(): void {
    this.savedService.getSavedsByOwnerId(this.authService.getAuthUserId()).subscribe(res => {
      this.saveds = res;
    });
  }

  addTosave(): void {
    this.savedService.addPost(
      {
                savedId: Number(this.savedId),
                postId: Number(this.post.id)
      }
    ).subscribe(res => {
      this.dialogRef.close();
    });
    console.log('savedId', this.savedId);
  }
}
