

/**
 * @description
 * Storage type
 */
export type StorageType = 'LOCAL_STORAGE' | 'SESSION_STORAGE' | 'INDEX_DB';

/**
 * @description
 * Storage iten type
 */
export interface IStorageItem {
  key: string;
  value: string;
}
