import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobsService } from './jobs.service';
import { MatDialog } from '@angular/material';
import { AddJobDialogComponent } from './add-job-dialog/add-job-dialog.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobsService]
})
export class JobsComponent implements OnInit {
  jobStorage: any[] = [];
  showForm: Boolean = false;

  constructor(
    private jobsService: JobsService,
    private dialog: MatDialog) {
    this.jobStorage = this.jobsService.allJobs;
  }

  ngOnInit() {
    localStorage['jobs'] ?
      this.jobStorage = JSON.parse(localStorage['jobs'])
      : localStorage['jobs'] = JSON.stringify(this.jobStorage);
  }

  openAddJobDialog(): void {
    const dialogRef = this.dialog.open(AddJobDialogComponent, {
      width: '450px'
    });
  }
}
