import '../App.css';
import React, { Component } from 'react'
import List from './List';
class App extends Component {
  state={
    list:[{title:'ayah', description:'web-developer'},
    {title:'ali', description:'building-engineer'},
    {title:'sfgfgh', description:'asddsdfftgyuiop'},],
    title:'',
    description:'',
    _currentlist:{
      title:'',
      description:''
    }
  }
  onTitleChange(e){
    let value=e.target.value;
    this.setState({
      title:value
    })
  }
  onDescChange(e){
    let value=e.target.value;
    this.setState({
      description:value
    })
  }
  addToList(e){
    e.preventDefault();
    let _list = this.state.list;
    let obj={
      title:'',
      description:''
    }
    obj.title= this.state.title;
    obj.description= this.state.description;
    _list.push(obj)
    this.setState({
      list: _list
    })
    e.target.reset();
  }
  defaultInput(currentlist){
    let __list = this.state._currentlist;
    __list.title= currentlist.title;
    __list.description= currentlist.description;
    // console.log(__list.title, __list.description);
    this.setState({
    _currentlist:__list
    })
  }
  editList=(currentlist,e)=>{
    this.defaultInput(currentlist);
    let _list=this.state.list;
    let idx = _list.indexOf(currentlist);
    let obj={
      title:'',
      description:''
    }
    obj.title= this.state.title;
    obj.description= this.state.description;
    _list[idx]=obj;
    this.setState({
      list: _list
    })
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
      <div>
        <h2 className='App'>Simple To Do List</h2>
        <form className='todo' onSubmit={this.addToList.bind(this)}> 
          <label htmlFor="title">Title</label>
          <input type="text" name='title' value={this.state.list.title} id='title' onChange={this.onTitleChange.bind(this)} defaultValue={this.state._currentlist.title}/>
          <label htmlFor="desc">Description</label>
          <textarea name="desc" value={this.state.list.description} id="desc" cols="10" rows="5" onChange={this.onDescChange.bind(this)} defaultValue={this.state._currentlist.description}></textarea>
          <div>
            <button type="submit">Add</button>
            <button type='reset'>Reset</button>
          </div>
        </form>
          
        

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