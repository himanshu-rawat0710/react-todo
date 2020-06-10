import React from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


// import './App.css';
// does not have app.css

function App() {
  return (
    <div className="App">
      <div className='constainer'>
        <div className='row'>
          <TodoInput />
          <TodoList />
        </div>
      </div>
      
    </div>
  );
}

export default App;
