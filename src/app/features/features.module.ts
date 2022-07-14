import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskslistComponent } from './tasks/components/taskslist/taskslist.component';
import { TasksComponent } from './tasks/pages/tasks/tasks.component';
import { HomepageComponent } from './home/components/homepage/homepage.component';
import { HomeComponent } from './home/pages/home/home.component';



@NgModule({
  declarations: [
    TaskslistComponent,
    TasksComponent,
    HomepageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
