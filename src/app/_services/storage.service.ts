import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
  private storage: { [key: string]: { [key: string]: any } } = {};
  private cache: { namespace: string, varname: string }[] = [];
  private timeoutDataSynch: any = null;


  /**
   * Object initializer
   *
   * @returns {Observable<boolean>}
   */
  initialize() {
    for ( let i = 0, len = localStorage.length; i < len; ++i ) {
      let splitKey  = localStorage.key( i ).split(':');
      let namespace = splitKey.length > 1 ? splitKey[0] : 'general';
      let varname   = splitKey.length > 1 ? splitKey[1] : splitKey[0];

      this.set(varname, localStorage.getItem( localStorage.key( i ) ), namespace);
    }
  }

  /**
   * Value setter
   *
   * @param {string} varname - Name to save value under
   * @param value - Value
   * @param {string} namespace - Namespace
   */
  set(varname: string, value: any, namespace: string = 'general') {
    if (!this.storage[namespace]) {
      this.storage[namespace] = {};
    }
    this.storage[namespace][varname] = value;

    this.cache.push({namespace: namespace, varname: varname});

    clearTimeout(this.timeoutDataSynch);
    this.timeoutDataSynch = setTimeout(() => {
      this.synchronizeData();
    }, 50);
  }

  /**
   * Value getter
   *
   * @param {string} varname - Name to save value under
   * @param {string} namespace - Namespace
   * @returns {any}
   */
  get(varname: string, namespace: string = 'general', defaultVal = null) {
    if (!this.storage[namespace] || this.storage[namespace][varname] === undefined) {
      return defaultVal;
    }

    return this.storage[namespace][varname];
  }

  /**
   * sets to null all values in given namespace
   *
   * @param {string} namespace
   */
  clearNamespace(namespace: string) {
    if (this.storage[namespace]) {
      const namespaceData = this.storage[namespace];

      for (const varname in namespaceData) {
        if (namespaceData.hasOwnProperty(varname)) {
          this.set(varname, null, namespace);
        }
      }
    }
  }

  /**
   * Session data synchronizer
   */
  private synchronizeData() {
    const data: { [key: string]: { [key: string]: any } } = {};

    for (const node of this.cache) {
      if (!data[node.namespace]) {
        data[node.namespace] = {};
      }
      localStorage.setItem(node.namespace + ':' + node.varname, this.storage[node.namespace][node.varname]);
    }
    this.cache = [];
  }
}
