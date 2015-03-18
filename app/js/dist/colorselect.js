var ColorViewer = React.createClass({displayName: "ColorViewer",
  setStyles: function() {
    return {
      backgroundColor: 'rgb('+this.props.r+','+this.props.g+','+this.props.b+')'
    }
  },
  render: function(){
    return (
      React.createElement("div", {className: "color-viewer", style: this.setStyles()}
      )
    );
  }
});

var ColorSwitch = React.createClass({displayName: "ColorSwitch",
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
      React.createElement("div", null, 
        React.createElement("p", null, React.createElement("label", null, "R"), React.createElement("input", {name: "r", type: "range", min: "0", max: "255", defaultValue: this.state.r, onChange: this.updateColor}), " ", this.state.r), 
        React.createElement("p", null, React.createElement("label", null, "G"), React.createElement("input", {name: "g", type: "range", min: "0", max: "255", defaultValue: this.state.g, onChange: this.updateColor}), " ", this.state.g), 
        React.createElement("p", null, React.createElement("label", null, "B"), React.createElement("input", {name: "b", type: "range", min: "0", max: "255", defaultValue: this.state.b, onChange: this.updateColor}), " ", this.state.b), 
        React.createElement(ColorViewer, {r: this.state.r, g: this.state.g, b: this.state.b})
      )
    )
  }
});

React.render(React.createElement(ColorSwitch, null), document.getElementById('mount-point'));

