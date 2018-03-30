import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutComponent } from './about/about.component';
import { AddJobDialogComponent } from './jobs/add-job-dialog/add-job-dialog.component';
import { AddNewsDialogComponent } from './news/add-news-dialog/add-news-dialog.component';
import { NewsService } from './news/news.service';

// Angular Material UI
import { MaterialModule } from './shared/material.module';

const appRoutes: Routes = [
  { path: '', component: NavbarComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'about', component: AboutComponent }]
  }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewsComponent,
    JobsComponent,
    AboutComponent,
    AddJobDialogComponent,
    AddNewsDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  entryComponents: [AddJobDialogComponent, AddNewsDialogComponent],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
