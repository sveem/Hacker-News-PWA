import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-news-dialog',
  templateUrl: './add-news-dialog.component.html',
  styleUrls: ['./add-news-dialog.component.css']
})
export class AddNewsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddNewsDialogComponent>) { }

  ngOnInit() { }

  onSubmitNews(form: NgForm): void {
    const formData = form.value;
    formData['selected'] = false;
    const fetchedNews = JSON.parse(localStorage['newsId']);
    fetchedNews.push(formData);
    localStorage['newsId'] = JSON.stringify(fetchedNews);
    form.reset();
    console.log('Local Storage', localStorage['newsId']);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
