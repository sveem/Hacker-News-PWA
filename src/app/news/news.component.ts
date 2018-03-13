import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title: String = 'Hacker News PWA';
  status: String = 'Current Status: Online'
  navigator: Boolean = navigator.onLine;
  showNews: Boolean = false;
  allNews: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    if (!navigator.onLine) {
      this.status = 'Current Status: Offline'
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
        })
        localStorage['newsId'] = JSON.stringify(this.allNews)
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
    }))
  }

  onSubmitNews(form: NgForm) {
    const formData = form.value;
    formData['selected'] = false;
    const fetchedNews = JSON.parse(localStorage['newsId']);
    fetchedNews.push(formData);
    localStorage['newsId'] = JSON.stringify(fetchedNews);
    form.reset();
    console.log('Local Storage', localStorage['newsId']);
  }
}
