import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskslistComponent } from './components/taskslist/taskslist.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TaskslistComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TasksModule { }
