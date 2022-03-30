import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundPageComponent } from './CoreComponents/not-found-page/not-found-page.component';
import { AllGalleryComponent } from './Components/Pages/all-gallery/all-gallery.component';
import { NewsDetailsComponent } from './Components/Pages/all-news/news-details/news-details.component';
import { GalleryDetailsComponent } from './Components/Pages/all-gallery/gallery-details/gallery-details.component';
import { AboutUSComponent } from './Components/Pages/about-us/about-us.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AllNewsComponent } from './Components/Pages/all-news/all-news.component';
import { ServicesComponent } from './Components/services/services.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },

  //About-us
  {
    path: 'about-us', component: AboutUSComponent
  },

  //All Services
  {
    path: 'services', component: ServicesComponent
  },

  //Gallery
  {
    path: 'All-Images', component: AllGalleryComponent
  },
  {
    path: 'Image-Details', component: GalleryDetailsComponent
  },

  //News
  {
    path: 'All-News', component: AllNewsComponent
  },
  {
    path: 'news-Details/:id', component: NewsDetailsComponent
  },

  //Contact US
  {
    path: 'Contact-US', component: ContactComponent
  },


  //Not Found
  {
    path: 'notfound', component: NotFoundPageComponent
  },
  {
    path:'**', redirectTo: '/notfound'
  },


  // {
  //   path:'**', component:'NotFoundComponent'
  // },

  //===============LazyLoading=================\\
  // {
  //   path: '**',
  //   loadChildren:()=> import('./CoreComponents/not-found-page/notfound/notfound.module')
  //   .then(m=> m.NOTFoundModule)
  //  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
