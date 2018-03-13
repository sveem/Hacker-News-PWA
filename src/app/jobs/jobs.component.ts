import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobsService]
})
export class JobsComponent implements OnInit {
panelOpenState: boolean = false;
jobStorage: any[] = [];

  constructor(private jobsService: JobsService) {
    this.jobStorage = this.jobsService.allJobs;
   }

  ngOnInit() {
    console.log('Jobs', this.jobStorage)
  }

  saveNewJob(param: any) {
      
  }
}
