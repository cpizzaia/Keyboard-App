(function(){

var _keys = [];
var KeyStore = window.KeyStore = $.extend({}, EventEmitter.prototype);
var CHANGE_EVENT = "change";

  KeyStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  KeyStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  KeyStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  KeyStore.addKey = function(key){
    if(_keys.indexOf(key) === -1){
      _keys.push(key);
      KeyStore.changed();
    }
  };

  KeyStore.removeKey = function(key){
    var index = _keys.indexOf(key);
    _keys.splice(index, 1);
    KeyStore.changed();
  };

  KeyStore.clear = function(){
    _keys = [];
  };

  KeyStore.fetch = function(){
    return _keys.slice();
  };

  KeyStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case KeyConstants.KEY_PRESSED:
        //KeyStore.create(payload.noteName);
        break;
    }
  });



})();
