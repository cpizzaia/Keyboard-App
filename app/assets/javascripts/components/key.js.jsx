var Key = React.createClass({

  getInitialState: function(){
    return {pressed: false};
  },

  componentDidMount: function () {
      KeyStore.addChangeHandler(this.scanKeys);
      this.setState({note: new Note(TONES[this.props.noteName])});
  },

  scanKeys: function() {
    var keys = KeyStore.fetch();
    if(keys.length === 0){
      this.setState({pressed: false});
      this.state.note.stop();
    }
    if(this.includes(keys, this.props.noteName)){
      this.setState({pressed: true});
      this.state.note.start();
    }
    else{
      this.setState({pressed: false});
      this.state.note.stop();
    }
    },


  includes: function(key_array, key){
    for (var i = 0; i < key_array.length; i++){
      if (key_array[i] === key){
        return true;
      }
    }
    return false;
  },

  render: function(){
    var klass = "key";
    if (this.state.pressed){
      klass += " pressed";
    }
    return (
      <div className={klass}>
      </div>
    );
  }


});
