import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainpageComponent } from './core/components/mainpage/mainpage.component';
import { TrainingsComponent } from './core/components/trainings/trainings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeDeleteComponent } from './shared/components/type-delete/type-delete.component';
import { FlashTextComponent } from './shared/components/flash-text/flash-text.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { AboutComponent } from './core/components/about/about.component';
import { ApplicationComponent } from './core/components/application/application.component';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    TrainingsComponent,
    TypeDeleteComponent,
    FlashTextComponent,
    NotFoundPageComponent,
    AboutComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
