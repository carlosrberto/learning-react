var Counter = React.createClass({displayName: "Counter",
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  writeText: function(event) {
    this.setState({
      text: event.target.value
    });
  },
  getInitialState: function(){
     return {
       count: 0,
       text: this.props.text
     }
  },
  render: function(){
    return (
      React.createElement("div", {class: "my-component"}, 
        React.createElement("h1", null, "Count: ", this.state.count), 
        React.createElement("p", null, "Você digitou o texto ", this.state.text), 
        React.createElement("input", {type: "text", placeholder: "Digite um texto aqui", onKeyUp: this.writeText}), 
        React.createElement("p", null, React.createElement("button", {type: "button", onClick: this.incrementCount}, "Increment"))
      )
    );
  }
});

React.render(React.createElement(Counter, {text: "Seu texto vai aparecer aqui!"}), document.getElementById('mount-point'));
