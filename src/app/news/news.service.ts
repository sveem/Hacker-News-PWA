import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';

@Injectable() export class NewsService {

  constructor(private httpClient: HttpClient) { }

  fetchNews() {
    const apiKey = '6bd90b29cd78473c99ce04b6470c28a3';
    const urlStories = `https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=${apiKey}`;
    return this.httpClient.get(urlStories)
    .map(res => res);
  }
}

// "https://newsapi.org/v2/**"
// https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=6bd90b29cd78473c99ce04b6470c28a3