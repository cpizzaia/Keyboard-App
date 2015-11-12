var Recorder = React.createClass({
  getInitialState: function(){
    return {isRecording: false, track: new Track({name: "my recording"})};
  },

  recordToggle: function(){
    if (this.state.isRecording){
      this.setState({isRecording: false});
      this.state.track.stopRecording();
    }
    else {
      this.state.track.startRecording();
      this.setState({isRecording: true});
    }
  },

  componentDidMount: function(){
    KeyStore.addChangeHandler(this.updateTrack);
  },

  updateTrack: function(){
    if (this.state.isRecording){
      this.state.track.addNotes(KeyStore.fetch());
    }
  },

  playRecording: function(){
    this.state.track.play();
  },

  render: function(){
    var recording;
    if (this.state.isRecording){
      recording = "Stop Recording";
    }
    else {
      recording = "Record";
    }
    return (
      <div>
        <button onClick={this.recordToggle}>{recording}</button>
        <button onClick={this.playRecording}>Play</button>
      </div>
    );
  }
});
