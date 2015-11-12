var KEYS = {
  65: "a",
  83: "s",
  68: "d",
  70: "f",
  71: "g",
  72: "h",
  74: "j"
};



$(document).on("keyup", function(event){
  var key = event.keyCode;
  if (typeof KEYS[key] !== "undefined"){
    KeyStore.removeKey(NOTES[KEYS[key]]);
    KeyActions.keyReleased(KEYS[key]);
  }
});

$(document).on("keydown", function(event){
  var key = event.keyCode;
  if (typeof KEYS[key] !== "undefined"){
    KeyStore.addKey(NOTES[KEYS[key]]);
    KeyActions.keyPressed(KEYS[key]);
  }
});
