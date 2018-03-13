import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title: String = 'Hacker News PWA';
  status: String = 'Current Status: Online'
  navigator: Boolean = navigator.onLine; //TO-DO: investigate navigator.onLine
  allNews: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    if (!navigator.onLine) {
      this.status = 'Current Status: Offline'
    }
    console.log('Local Storage', localStorage['newsId']);
    if (localStorage['newsId']) {
      this.allNews = JSON.parse(localStorage['newsId']);
      console.log('allNews = LocalStorage[newsId]', this.allNews);
    }
  }

  fetchTopNews() {
    this.newsService.fetchNews()
      .subscribe(news => {
        console.log('Fresh News', news);
        this.allNews = news['articles'].map(news => {
          news.selected = false;
          return news;
        })
        console.log('newsIds', this.allNews);
        localStorage['newsId'] = JSON.stringify(this.allNews)
        console.log('Local Storage', localStorage);
      });
  }

  markNews(news: any) {
    console.log(news.title)
    const title = news.title;
    const newsCopy = this.allNews;
    localStorage['newsId'] = JSON.stringify(newsCopy.map(el => {
      if (el.title === title) {
        el.selected = !el.selected;
      }
      return el;
    }))
  }
}
