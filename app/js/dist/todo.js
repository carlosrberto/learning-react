TodoList = React.createClass({displayName: "TodoList",
  componentWillUpdate: function(nextProps, nextState) {
    localStorage.setItem('todo_app', JSON.stringify(nextProps.items));
  },

  render: function(){
    return (
      React.createElement("ul", null, 
          
            this.props.items.map(function(item) {
              return React.createElement("li", null, item)
            })
          
      )
    );
  }
});

var TodoApp = React.createClass({displayName: "TodoApp",
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
      React.createElement("div", {className: "todo-app"}, 
        React.createElement("input", {type: "text", placeholder: "Digite uma tarefa", onKeyUp: this.save}), 
        React.createElement(TodoList, {items: this.state.items}), 
        React.createElement("button", {onClick: this.clear}, "limpar")
      )
    );
  }
});


React.render(React.createElement(TodoApp, null), document.getElementById('mount-point'));

