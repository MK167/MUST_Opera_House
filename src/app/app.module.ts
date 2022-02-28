import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './CoreComponents/footer/footer.component';
import { HeaderComponent } from './CoreComponents/header/header.component';
import { ALBUMComponent } from './Components/album/album.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { GALLERYComponent } from './Components/gallery/gallery.component';
import { VideoTourComponent } from './Components/video-tour/video-tour.component';
import { NewsComponent } from './Components/news/news.component';
import { TESTIMONIALSComponent } from './Components/testimonials/testimonials.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SponsersComponent } from './Components/sponsers/sponsers.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TEXTEditorPageComponent } from './DashboardComponents/texteditor-page/texteditor-page.component';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ALBUMComponent,
    TicketComponent,
    GALLERYComponent,
    VideoTourComponent,
    NewsComponent,
    TESTIMONIALSComponent,
    ContactComponent,
    SponsersComponent,
    TEXTEditorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
      // Registering EJ2 Rich Text Editor Module
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
