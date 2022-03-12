// loader-interceptor.service.ts
import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from 'src/app/Shared/Loader/LoaderServices/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // USE The Below Code When uses the NgxSpinner
    this.loaderService.ShowSpinner();
    return next.handle(req).pipe(
      finalize(
        () =>this.loaderService.HideSpinner())
    );
  }
}

// Use The Below Code when Uses Bootstrap Spinner

  // removeRequest(req: HttpRequest<any>) {
  //   const i = this.requests.indexOf(req);
  //   if (i >= 0) {
  //     this.requests.splice(i, 1);
  //   }
  //   this.loaderService.isLoading.next(this.requests.length > 0);
  // }

  //   this.requests.push(req);
  //   console.log("No of requests--->" + this.requests.length);
  //   this.loaderService.isLoading.next(true);
  //   return Observable.create(observer => {
  //     const subscription = next.handle(req)
  //       .subscribe(
  //         event => {
  //           if (event instanceof HttpResponse) {
  //             this.removeRequest(req);
  //             observer.next(event);
  //           }
  //         },
  //         err => {
  //           alert('error' + err);
  //           this.removeRequest(req);
  //           observer.error(err);
  //         },
  //         () => {
  //           this.removeRequest(req);
  //           observer.complete();
  //         });
  //     // remove request from queue when cancelled
  //     return () => {
  //       this.removeRequest(req);
  //       subscription.unsubscribe();
  //     };
  //   });
  // }
// }
