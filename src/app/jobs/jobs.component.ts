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
  // panelOpenState: Boolean = false;
  jobStorage: any[] = [];
  showForm: Boolean = false;

  constructor(
    private jobsService: JobsService, 
    private dialog: MatDialog ) {
    this.jobStorage = this.jobsService.allJobs;
  }

  ngOnInit() {
    localStorage['jobs'] ?
      this.jobStorage = JSON.parse(localStorage['jobs'])
      : localStorage['jobs'] = JSON.stringify(this.jobStorage);
    console.log('On Init', localStorage['jobs'])
  }

  openAddJobDialog(): void {
    let dialogRef = this.dialog.open(AddJobDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('This dialog was closed', result);
    })
  }
}
