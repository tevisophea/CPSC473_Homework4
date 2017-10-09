( function (window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    this.data = {};
  };

  //add function: create order
  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  };

  //get function: print order
  DataStore.prototype.get = function (key) {
    return this.data[key];
  };

  //getAll function: print order
  DataStore.prototype.getAll = function () {
    return this.data;
  };

  //remove function: deliver order
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
}) (window);
