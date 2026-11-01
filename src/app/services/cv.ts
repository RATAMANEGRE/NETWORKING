// import { Service } from '@angular/core';

// @Service()
// export class Cv {}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cv {

  private readonly dbName = 'ODCNetworkingDB';
  private readonly storeName = 'cvStore';

  private ouvrirBase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = () => {
        const db = request.result;

        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName);
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async enregistrerCv(file: File): Promise<void> {
    const db = await this.ouvrirBase();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);

      store.put(file, 'monCv');

      transaction.oncomplete = () => {
        db.close();
        resolve();
      };

      transaction.onerror = () => {
        db.close();
        reject(transaction.error);
      };
    });
  }

  async obtenirCv(): Promise<File | null> {
    const db = await this.ouvrirBase();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readonly');
      const request = transaction.objectStore(this.storeName).get('monCv');

      request.onsuccess = () => {
        db.close();
        resolve(request.result ?? null);
      };

      request.onerror = () => {
        db.close();
        reject(request.error);
      };
    });
  }

  async obtenirCvUrl(): Promise<string | null> {
    const file = await this.obtenirCv();

    return file ? URL.createObjectURL(file) : null;
  }
  async supprimerCv(): Promise<void> {
  const db = await this.ouvrirBase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(this.storeName, 'readwrite');
    const store = transaction.objectStore(this.storeName);

    store.delete('monCv');

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };

    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
  });
}
}
