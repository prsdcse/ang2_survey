import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SubjectComponent } from './subject/subject.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    appRouting
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PersonalInfoComponent,
    SubjectComponent,
    FeedbackComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}