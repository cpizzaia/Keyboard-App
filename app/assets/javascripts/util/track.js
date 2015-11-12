var Track = window.Track = function(attr){
  this.name = attr[name];
};

Track.prototype.startRecording = function(){
  this.startTime = new Date();
  this.roll = [{notes: [], timeStamp: 0}];
};

Track.prototype.stopRecording = function(){
  this.addNotes([]);
};

Track.prototype.addNotes = function(notes){
  var currentTime = new Date();
  var timeStamp = currentTime - this.startTime;
  this.roll.push({notes: notes, timeStamp: timeStamp});
};

Track.prototype.play = function(){
  var playBackStartTime = new Date(),
      songLength = this.roll[this.roll.length-1].timeStamp - 0,
      currentNote = 0,
      i = 0;

  while (songLength > Date.now() - playBackStartTime) {
    if (typeof this.interval === "undefined"){
      this.interval = setInterval(function() {
        if (currentNote < Date.now() - playBackStartTime)
          i++;
          currentNote = this.roll[i].timeStamp;
          this.pushNotes(this.roll[i].notes);
      }.bind(this), 100);
    }
  }




  // while(songLength > elapsedTime){
  //   this.pushNotes(this.roll[i].notes);
  //   if(elapsedTime > this.roll[i+1].timeStamp){
  //     i++;
  //   }
  //   elapsedTime = new Date() - startTime;
  // }
  // KeyStore.clear();
};

Track.prototype.pushNotes = function(notes_array){
  KeyStore.clear();
  for (var i = 0; i < notes_array.length; i++){
    KeyStore.addKey(notes_array[i]);
  }
};
