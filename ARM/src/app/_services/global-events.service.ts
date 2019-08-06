import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable()
export class GlobalEventService {
  private hashObservables: {[key: string]: Subject<any> | BehaviorSubject<any>} = {};

  constructor() {
  }

  /**
   * Registers Observable.
   *
   * @param {string} id
   * @param {Subject<any> | BehaviorSubject<any>} object
   */
  registerObservable(id: string, object: Subject<any> | BehaviorSubject<any>) {
    if (this.hashObservables.hasOwnProperty(id)) {
      throw new Error('Observable of ID - "' + id + '" already exits');
    }

    this.hashObservables[id] = object;
  }

  /**
   * Getter of Observable of given id
   *
   * @param {string} id
   * @returns {Subject<any> | BehaviorSubject<any>}
   */
  of(id: string): Subject<any> | BehaviorSubject<any> {
    if (!this.hashObservables.hasOwnProperty(id)) {
      this.registerObservable(id, new Subject());
    }

    return this.hashObservables[id];
  }

  /**
   * Subscribes to Observable of given id. If Observable was not registered before, then new Subject will be created.
   *
   * @param {string} id
   * @param listener
   * @returns {Subscription}
   */
  subscribe(id: string, listener) {
    if (!this.hashObservables.hasOwnProperty(id)) {
      this.registerObservable(id, new Subject());
    }

    return this.hashObservables[id].subscribe((param) => {
      listener(param);
    });
  }

  /**
   * Broadcasts to subscribers of Observable of given id
   *
   * @param {string} id
   * @param params
   */
  broadcast(id: string, params: any = null) {
    if (this.hashObservables.hasOwnProperty(id)) {
      this.hashObservables[id].next(params);
    }
  }
}

