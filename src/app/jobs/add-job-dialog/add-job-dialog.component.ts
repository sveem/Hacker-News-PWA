import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-job-dialog',
  templateUrl: './add-job-dialog.component.html',
  styleUrls: ['./add-job-dialog.component.css']
})
export class AddJobDialogComponent implements OnInit {
  constructor( private dialogRef : MatDialogRef<AddJobDialogComponent> ) { }

  ngOnInit() { }

  onJobSubmit(form: NgForm): void {
    const formData = form.value;
    const allJobs = JSON.parse(localStorage['jobs']);
    allJobs.push(formData);
    localStorage['jobs'] = JSON.stringify(allJobs);
    form.reset();
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
