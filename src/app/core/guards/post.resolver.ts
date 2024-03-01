import { ResolveFn } from '@angular/router';
import { ServicesService } from '../../shared/services/services.service';
import { inject } from '@angular/core';
import { Post } from '../../shared/model/post';
import { Observable, of } from 'rxjs';

export const postResolver: ResolveFn<Observable<Post>> = (route, state, service: ServicesService = inject(ServicesService)) => {

  if(route.params && route.params['title']){
    return service.capturaPostUnico(route.params['title']);
  }
  return of({id: '', title:'', content:'', tag:'', imageLink:'', date:''});
};
