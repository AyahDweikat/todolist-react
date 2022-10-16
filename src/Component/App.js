import '../App.css';
import React, { Component } from 'react'
import List from './List';
class App extends Component {
  state={
    list:[{title:'ayah', description:'web-developer'},
    {title:'ali', description:'building-engineer'},
    {title:'sfgfgh', description:'asddsdfftgyuiop'}
  ]}
  editList=(currentlist)=>{
    console.log("edit", currentlist);
  }
  deleteList=(currentlist)=>{
    let _list=this.state.list;
    let idx = _list.indexOf(currentlist);
    _list.splice(idx,1);
    this.setState({
      list:_list
    })
  }
  render() {
    return (
      <div className='todo'>
        <h2 className='App'>Simple To Do List</h2>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' />
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" cols="10" rows="5"></textarea>
          <div>
            <button>Add</button>
            <button>Reset</button>
          </div>
        

        <hr />
        {this.state.list.map((item, idx)=>{
          return <List listShow={item} key={idx} editList={this.editList} deleteList={this.deleteList}></List>
        })
        }
      </div>
    )
  }
}
export default App;