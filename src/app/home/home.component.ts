import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedNews: any[] = [];
  createdNews: any[] = [];
  createdJobs: any[] = [];

  constructor() { }

  ngOnInit() {
    this.showSelectedNews();
    this.showCreatedNews();
    this.showCreatedJobs();
  }

  showSelectedNews() {
    if (localStorage['newsId']) {
      this.selectedNews = JSON.parse(localStorage['newsId'])
        .filter(el => el.selected === true);
      console.log('selected news', this.selectedNews);
    }
    return;
  }

  showCreatedNews() {
    if (localStorage['newsId']) {
      this.createdNews = JSON.parse(localStorage['newsId']).slice(10)
      console.log('created news', this.createdNews);
    }
    return;
  }

  showCreatedJobs() {
    if (localStorage['jobs']) {
      this.createdJobs = JSON.parse(localStorage['jobs']).slice(4)
      console.log('created-jobs', this.createdJobs);
    }
    return;
  }
}
