var Counter = React.createClass({
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
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <p>Você digitou o texto {this.state.text}</p>
        <input type="text" placeholder="Digite um texto aqui" onKeyUp={this.writeText} />
        <p><button type="button" onClick={this.incrementCount}>Increment</button></p>
      </div>
    );
  }
});

React.render(<Counter text="Seu texto vai aparecer aqui!"/>, document.getElementById('mount-point'));
