import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';



export default class App extends Component {
  state={
    items:[],
    id: uuidv4(),
    item:'',
    editItem:false

};

  handleChange = (event) => {
    this.setState({
      item:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems = [...this.state.items,newItem]

    this.setState({
      items:updatedItems,
      item:'',
      id:uuidv4(),
      editItem:false
    }
    // ,()=>console.log(this.state)
    )
  }

  clearList = (event) => {
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) => {
    const filteredItem = this.state.items.filter(item => item.id!==id);
    this.setState({
      items: filteredItem
    })
  }

  handleEdit = (id) => {
    const filteredItem = this.state.items.filter(item => item.id!==id);
    const selectedItem = this.state.items.find(item => item.id===id);
    this.setState({
      items:filteredItem,
      item:selectedItem.title,
      id:id,
      editItem:true
    })
  }


  render() {
    // console.log(this.state)
    return (
      <div className='container'>
        <div className='row'>
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className='text-capitalize text-center font-weight-bold'>
              todo input
            </h3>
        </div>
        
        </div>


        <div>
          <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
        </div>

        <div>
          <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        </div>
      </div>
    )
  }
}

