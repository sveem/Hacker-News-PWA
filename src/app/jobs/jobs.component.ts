import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobsService } from './jobs.service';

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

  constructor(private jobsService: JobsService) {
    this.jobStorage = this.jobsService.allJobs;
  }

  ngOnInit() {
    localStorage['jobs'] ?
      this.jobStorage = JSON.parse(localStorage['jobs'])
      : localStorage['jobs'] = JSON.stringify(this.jobStorage);
      console.log('On Init', localStorage['jobs'])
    }

  onJobSubmit(form: NgForm) {
    console.log('Submitted', form)
    const formData = form.value;
    const allJobs = JSON.parse(localStorage['jobs']);
    allJobs.push(formData);
    localStorage['jobs'] = JSON.stringify(allJobs);
    form.reset();
    console.log('Local Storage', localStorage['jobs']);
  }
}
