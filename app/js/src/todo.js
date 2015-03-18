TodoList = React.createClass({
  componentWillUpdate: function(nextProps, nextState) {
    localStorage.setItem('todo_app', JSON.stringify(nextProps.items));
  },

  render: function(){
    return (
      <ul>
          {
            this.props.items.map(function(item) {
              return <li>{item}</li>
            })
          }
      </ul>
    );
  }
});

var TodoApp = React.createClass({
  getInitialState: function() {
    var initial = localStorage.getItem('todo_app');
    initial = initial ? JSON.parse(initial) : [];
    return {
      items: initial
    }
  },

  save: function(event) {
    if (event.keyCode === 13) {
      var items = this.state.items;
      items.push(event.target.value);
      event.target.value = '';
      this.setState({
        items: items
      });
    }
  },

  clear: function() {
      localStorage.removeItem('todo_app');
      this.setState({
        items: []
      })
  },

  render: function(){
    return (
      <div className="todo-app">
        <input type="text" placeholder="Digite uma tarefa" onKeyUp={this.save} />
        <TodoList items={this.state.items} />
        <button onClick={this.clear}>limpar</button>
      </div>
    );
  }
});


React.render(<TodoApp />, document.getElementById('mount-point'));

