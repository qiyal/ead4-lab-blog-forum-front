import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SavedService} from '../../../service/saved.service';

@Component({
  selector: 'app-edit-saved',
  templateUrl: './edit-saved.component.html',
  styleUrls: ['./edit-saved.component.scss']
})
export class EditSavedComponent implements OnInit {
  savedId: any;
  title: any;
  saved: any;

  constructor(
    public dialogRef: MatDialogRef<EditSavedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private savedService: SavedService,
  ) {
    this.savedId = this.data.savedId;
  }

  ngOnInit(): void {
    this.getSaved();
  }

  save(): void {
    this.savedService.renameTitle(this.savedId, this.title).subscribe(res => {
      this.dialogRef.close({action: 'saved'});
    });
  }

  public getSaved(): void {
    this.savedService.getById(this.savedId).subscribe(res => {
      this.title = res.title;
    });
  }
}
