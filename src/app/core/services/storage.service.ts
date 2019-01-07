import { Injectable } from '@angular/core';

import { StorageType, IStorageItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * @public @method saveItemToStorage
   * @author iztokb
   * @since 2019-01-06
   * @description
   * Method responsible for saving item to either local or session storage
   * @param storageType StorageType
   * @param item IStorageItem
   */
  saveItemToStorage(storageType: StorageType, item: IStorageItem): boolean {
    // Prevent using the wrong method
    if (storageType === 'INDEX_DB') {
      console.error(`Wrong method used. This method doesn't support saving to IndexDB.`);
      return false;
    }

    // Check if storage is available
    const storageAvailable: boolean = this._checkStorageCompliance(storageType);

    if (storageAvailable === null || storageAvailable === false) {
      console.error('It seems that requested storage is not available on this device');
      return false;
    }

    // Resolve correct storage
    const storage = storageType === 'LOCAL_STORAGE' ? window.localStorage : window.sessionStorage;

    try {
      // Save data
      storage.setItem(item.key, item.value);
    } catch (exception) {
      console.error(`An error occured when storing data to the storage. ${exception}`);
      return false;
    }
  }

  /**
   * @public @method getItemFromStorage
   * @author iztokb
   * @since 2018-01-07
   * @description
   * Method responsible for fetching data from either local or session storage
   * @param storageType StorageType
   * @param key string
   * @returns string | null
   */
  getItemFromStorage(storageType: StorageType, key: string): string | null {
    // Prevent using the wrong method
    if (storageType === 'INDEX_DB') {
      console.error(`Wrong method used. This method doesn't support saving to IndexDB.`);
      return null;
    }

    // Check if storage is available
    const storageAvailable: boolean = this._checkStorageCompliance(storageType);

    if (storageAvailable === null || storageAvailable === false) {
      console.error('It seems that requested storage is not available on this device');
      return null;
    }

    // Resolve correct storage
    const storage = storageType === 'LOCAL_STORAGE' ? window.localStorage : window.sessionStorage;

    try {
      return storage.getItem(key);
    } catch (exception) {
      console.log(`An error occured when fetching data from the storage. ${exception}`);
    }
  }

  /**
   * @public @method deleteItemFromStorage
   * @author iztokb
   * @since 2019-01-07
   * @description
   * Method responsible for removing data from either local or session storage
   * @param storageType StorageType
   * @param key string
   */
  deleteItemFromStorage(storageType: StorageType, key: string): void {
    // Prevent using the wrong method
    if (storageType === 'INDEX_DB') {
      console.error(`Wrong method used. This method doesn't support saving to IndexDB.`);
      return null;
    }

    // Check if storage is available
    const storageAvailable: boolean = this._checkStorageCompliance(storageType);

    if (storageAvailable === null || storageAvailable === false) {
      console.error('It seems that requested storage is not available on this device');
      return null;
    }

    // Resolve correct storage
    const storage = storageType === 'LOCAL_STORAGE' ? window.localStorage : window.sessionStorage;

    try {
      storage.removeItem(key);
    } catch (exception) {
      console.log(`An error occured when deleting data from the storage. ${exception}`);
    }
  }

  /**
   * @private @method _checkStorageCompliance
   * @author iztokb
   * @since 2019-01-06
   * @description
   * Method for checking if storage is available or not.
   * @param requestedStorage StorageType
   * @returns boolean | null
   */
  private _checkStorageCompliance(requestedStorage: StorageType): boolean | null {
    switch (requestedStorage) {
      case 'INDEX_DB': {
        return window.indexedDB ? true: false;
      }

      case 'LOCAL_STORAGE': {
        return window.localStorage ? true : false;
      }

      case 'SESSION_STORAGE': {
        return window.sessionStorage ? true : false;
      }

      default: {
        return null;
      }
    }
  }
}
