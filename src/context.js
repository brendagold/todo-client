import React, { Component } from "react";


const Context = React.createContext();

const reducer = (prevState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        todos: prevState.todos.map((t) => {
          if (t.id === action.payload) {
            t.completed = !t.completed
          };
          return t;
        }),
      };
    default:
      return prevState;
  }
};

class Provider extends Component {
  state = {
    todos: [
      { id: 1, title: "Take out trash", completed: false },
      { id: 2, title: "Check Emails", completed: false },

      { id: 3, title: "Post on IG", completed: false },
    ],
    dispatch: (action) =>
      this.setState((prevState) => reducer(prevState, action)),
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider };
export const Consumer = Context.Consumer;
