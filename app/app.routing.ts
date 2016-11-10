import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SubjectComponent } from './subject/subject.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'personal-info', 
    component: PersonalInfoComponent
  },
  {
    path: 'subjects',
    component: SubjectComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);