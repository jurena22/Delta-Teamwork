import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      { path: '404', component: NotFoundPageComponent },
      { path: '**', component: NotFoundPageComponent },
    ],
  },
];

// const routes: Routes = [
//   { path: "", component: CoreComponent, children: [
//       { path: "", component: MainpageComponent },
//       { path: "rolunk", component: AboutComponent },
//       { path: "tutorial", component: TutorialComponent },
//       { path: "premium", component: PremiumComponent },
//       { path: 'dashboard', component:  DashboardComponent, canActivate: [AuthGuard],},
//       { path: 'szerverkezeles', component:  SzerverkezelesComponent},
//       { path: 'szorakozas', component:  SzorakozasComponent},
//       { path: 'egyeb-parancsok', component:  EgyebParancsokComponent},
//       { path: 'adatvedelem', component:  AdatvedelemComponent},
//       { path: 'felhasznalasi-feltetelek', component:  FelhasznalasiFeltetelekComponent},
//     ],
//   },
//   { path: "redirection", component: RedirectionComponent },
//   { path: '404', component:  NotFoundPageComponent},
//   { path: '**', component:  NotFoundPageComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
