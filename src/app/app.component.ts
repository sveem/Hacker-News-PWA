import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: String = 'Hacker News PWA';
  status: String = 'Current Status: Online'
  navigator: Boolean = window.navigator.onLine;
  allNews: any[] = [];
  
  constructor(private appService: AppService) {}

  ngOnInit() {
    if (!navigator.onLine) {
      this.status = 'Current Status: Offline'    
    }
    this.fetchTopNews();
  }

  fetchTopNews() {
    this.appService.fetchNews()
      .subscribe(news => {
        this.allNews = news['articles'];
        console.log('newsIds', this.allNews);
      });
   }
}


// import { Component, OnInit } from '@angular/core';
// import { AppService } from './app.service';
// import { HttpClient } from '@angular/common/http';
// import { map, startWith } from 'rxjs/operators';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {
//   title: String = 'Hacker News PWA';
//   status: String = 'Current Status: Online'
//   navigator: Boolean = window.navigator.onLine;
//   allNews;
  
//   constructor(http: HttpClient) {
//     let path = `https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=6bd90b29cd78473c99ce04b6470c28a3`;  ---- Patern start
//     this.allNews = http.get<any>(path).pipe(map(obj => obj['articles'])) 
//     this.allNews.subscribe(next => {
//       localStorage['newsCache'] = JSON.stringify(next);  
//     })

//     this.allNews.pipe(
//       startWith(JSON.parse(localStorage['newsCache'] || '{}'))    ---- Patern end
//     );
//     console.log('Test', this.allNews)
//   }
// }

