'use strict';

var BaseAdapter = require('ghost-storage-base');

class MyCustomAdapter extends BaseAdapter{
  constructor() {
    super();
  }
}

module.exports = MyCustomAdapter;