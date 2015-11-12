window.KeyActions = {

  keyPressed: function (key) {
    var noteName = NOTES[key];
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_PRESSED,
      noteName: noteName
    });
  },

  keyReleased: function (key) {
    var noteName = NOTES[key];
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_RELEASED,
      noteName: noteName
    });
  }

};
