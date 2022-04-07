import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './CoreComponents/footer/footer.component';
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
import { GalleryDetailsComponent } from './Components/Pages/all-gallery/gallery-details/gallery-details.component';
import { AllGalleryComponent } from './Components/Pages/all-gallery/all-gallery.component';
import { NewsDetailsComponent } from './Components/Pages/all-news/news-details/news-details.component';
import { AllNewsComponent } from './Components/Pages/all-news/all-news.component';
import { AllVideosComponent } from './Components/video-tour/all-videos/all-videos.component';
import { VideoDetailsComponent } from './Components/video-tour/video-details/video-details.component';
import { EventComponent } from './Components/event/event.component';
import { EventDetailsComponent } from './Components/event/event-details/event-details.component';
import { UpcommingEventComponent } from './Components/event/upcomming-event/upcomming-event.component';
import { NotFoundPageComponent } from './CoreComponents/not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './CoreComponents/navbar/navbar.component';
import {enableProdMode} from '@angular/core';
import { AboutComponent } from './Components/about/about.component';
import { SliderComponent } from './Shared/Components/slider/slider.component';
import { LoaderComponent } from './Shared/Loader/loader/loader.component';
import { AboutUSComponent } from './Components/Pages/about-us/about-us.component';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderInterceptor } from './Interceptors/interceptors/loader-interceptor.service';
import { LoaderService } from './Shared/Loader/LoaderServices/loader.service';
import { ServicesComponent } from './Components/services/services.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ALBUMComponent,
    TicketComponent,
    GALLERYComponent,
    VideoTourComponent,
    NewsComponent,
    TESTIMONIALSComponent,
    ContactComponent,
    SponsersComponent,
    TEXTEditorPageComponent,
    GalleryDetailsComponent,
    AllGalleryComponent,
    NewsDetailsComponent,
    AllNewsComponent,
    AllVideosComponent,
    VideoDetailsComponent,
    EventComponent,
    EventDetailsComponent,
    UpcommingEventComponent,
    NotFoundPageComponent,
    NavbarComponent,
    AboutComponent,
    SliderComponent,
    LoaderComponent,
    AboutUSComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    NgbModule,
    NgxSpinnerModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    LightboxModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
      // Registering EJ2 Rich Text Editor Module
    })
  ],
  providers: [
    LoaderService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor, multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
