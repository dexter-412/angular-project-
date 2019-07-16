import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import objectToQuery from 'object-to-querystring';
import {StorageService} from './storage.service';
import {GlobalEventService} from './global-events.service';
import {Observable} from 'rxjs';

@Injectable()
export class HttpWrapper {

  constructor(
    private http: HttpClient,
    private gEvent: GlobalEventService,
    private storage: StorageService) {
  }


  private headers(options) {
    const defaultOptions = {
      headers: {'x-access-token': ''}
    };
    return Object.assign(defaultOptions, (options || {}));
  }

  get(url: string, parameters?: object, options?: any): Observable<any> {
    this.gEvent.broadcast('api:before-request');
    return this.http.get<any>(url + objectToQuery(parameters), this.headers(options))
      .pipe(map((response) => {
          this.gEvent.broadcast('api:after-request');
          return response;
        }
      ));
  }

  post(url: string, data: any, parameters?: object, options?: any): Observable<any> {
    this.gEvent.broadcast('api:before-request');
    return this.http.post<any>(url + objectToQuery(parameters), data, this.headers(options))
      .pipe(map((response) => {
        this.gEvent.broadcast('api:after-request');
        return response;
      }));
  }

  put(url: string, data: any, parameters?: object, options?: any): Observable<any> {
    this.gEvent.broadcast('api:before-request');
    return this.http.put<any>(url + objectToQuery(parameters), data, this.headers(options))
      .pipe(map((response) => {
          this.gEvent.broadcast('api:after-request');
          return response;
        }
      ));
  }

  delete(url: string, parameters?: object, options?: any): Observable<any> {
    this.gEvent.broadcast('api:before-request');
    return this.http.delete<any>(url + objectToQuery(parameters), this.headers(options))
      .pipe(map((response) => {
          this.gEvent.broadcast('api:after-request');
          return response;
        }
      ));
  }

}
