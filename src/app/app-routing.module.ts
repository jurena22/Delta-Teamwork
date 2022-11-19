import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/components/about/about.component';
import { SzabiComponent } from './core/components/about/mentors/szabi/szabi.component';
import { ApplicationComponent } from './core/components/application/application.component';
import { MainpageComponent } from './core/components/mainpage/mainpage.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { TrainingsComponent } from './core/components/trainings/trainings.component';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', component: MainpageComponent },
      { path: 'kepzeseink', component: TrainingsComponent },
      { path: 'rolunk', component: AboutComponent },
      { path: 'jelentkezes', component: ApplicationComponent },
      { path: 'rolunk/szabi', component: SzabiComponent },
    ],
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
