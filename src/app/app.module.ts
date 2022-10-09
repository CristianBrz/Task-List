import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { TaskItemsComponent } from './componentes/task-items/task-items.component';
import { AddTaskComponent } from './componentes/add-task/add-task.component';
import { AboutComponent } from './componentes/about/about.component';

const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TasksComponent,
    TaskItemsComponent,
    AddTaskComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
