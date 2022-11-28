import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApplicantsAdminComponent } from './admin/applicants-admin/applicants-admin.component';
import { TrainingAdminComponent } from './admin/training-admin/training-admin.component';
import { AboutComponent } from './core/components/about/about.component';
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
    ],
  },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'trainingadmin', component: TrainingAdminComponent},
    { path: 'applicantsadmin', component: ApplicantsAdminComponent}
  ] },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
