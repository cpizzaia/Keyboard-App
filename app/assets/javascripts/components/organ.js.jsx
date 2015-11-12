var Organ = React.createClass({

  render: function(){
    return (
      <div>
        <Key noteName="C6"/>
        <Key noteName="D6"/>
        <Key noteName="E6"/>
        <Key noteName="F6"/>
        <Key noteName="G6"/>
        <Key noteName="A6"/>
        <Key noteName="B6"/>
        <Recorder />
      </div>
    );
  }
});
