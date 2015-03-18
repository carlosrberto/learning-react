var ColorViewer = React.createClass({
  setStyles: function() {
    return {
      backgroundColor: 'rgb('+this.props.r+','+this.props.g+','+this.props.b+')'
    }
  },
  render: function(){
    return (
      <div className="color-viewer" style={this.setStyles()}>
      </div>
    );
  }
});

var ColorSwitch = React.createClass({
  getInitialState: function(){
     return {
       r: 0,
       g: 0,
       b: 0
     }
  },
  updateColor: function(event){
    var n = event.target.name,
        v = event.target.value;

    this.setState({
       r: n == 'r' ? v : this.state.r,
       g: n == 'g' ? v : this.state.g,
       b: n == 'b' ? v : this.state.b
    });
  },
  render: function() {
    return (
      <div>
        <p><label>R</label><input name="r" type="range" min="0" max="255" defaultValue={this.state.r} onChange={this.updateColor} /> {this.state.r}</p>
        <p><label>G</label><input name="g" type="range" min="0" max="255" defaultValue={this.state.g} onChange={this.updateColor} /> {this.state.g}</p>
        <p><label>B</label><input name="b" type="range" min="0" max="255" defaultValue={this.state.b} onChange={this.updateColor} /> {this.state.b}</p>
        <ColorViewer r={this.state.r} g={this.state.g} b={this.state.b} />
      </div>
    )
  }
});

React.render(<ColorSwitch />, document.getElementById('mount-point'));

