import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsService } from './news.service';
import { MatDialog } from '@angular/material';
import { AddNewsDialogComponent } from './add-news-dialog/add-news-dialog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // title: String = 'News';
  status: String = 'Current Status: Online';
  navigator: Boolean = navigator.onLine;
  showNews: Boolean = false;
  allNews: any[] = [];

  constructor(
    private newsService: NewsService,
    private dialog: MatDialog) { }

  ngOnInit() {
    if (!navigator.onLine) {
      this.status = 'Current Status: Offline';
    }
    if (localStorage['newsId']) {
      this.allNews = JSON.parse(localStorage['newsId']);
    }
  }

  fetchTopNews() {
    this.newsService.fetchNews()
      .subscribe(news => {
        this.allNews = news['articles'].map(news => {
          news.selected = false;
          return news;
        });
        localStorage['newsId'] = JSON.stringify(this.allNews);
      });
  }

  markNews(news: any) {
    const title = news.title;
    const newsCopy = this.allNews;
    localStorage['newsId'] = JSON.stringify(newsCopy.map(el => {
      if (el.title === title) {
        el.selected = !el.selected;
      }
      return el;
    }));
  }

  openAddNewsDialog(): void {
    const dialogRef = this.dialog.open(AddNewsDialogComponent, {
      width: '450px'
    });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('This dialog was closed', result);
  //   })
  }
}
