import idb from 'idb';

function openDatabase() {
  /*Browser does not suppport service worker, so don't create database*/
  if (!navigator.serviceWorker) {
    return Promise.resolve();
  }

  return idb.open('curr-conv', 1, function(upgradeDb) {
    var store = upgradeDb.createObjectStore('rates', {
      keyPath: 'id'
    });
    store.createIndex('by-date', 'time');
  });
}

export default function IndexController(container) {
  this._dbPromise = openDatabase();
  this._registerServiceWorker();
  this._cleanImageCache();

  var indexController = this;

  setInterval(function() {
    indexController._cleanImageCache();
  }, 1000 * 60 * 5);

}

IndexController.prototype._registerServiceWorker = function() {
  if (!navigator.serviceWorker) return;

  var indexController = this;

  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    if (!navigator.serviceWorker.controller) {
      return;
    }
  });

};


