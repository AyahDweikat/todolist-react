import '../App.css';
import React, { Component } from 'react'
import List from './List';
class App extends Component {
  state={
    list:[{title:'ayah', description:'web-developer'},
    {title:'ali', description:'building-engineer'},],
    title:'',
    description:'',
    _currentlist:{
      title:'',
      description:''
    },
    btn1: "add",
    btn2:"reset",
    index:-1,
    current:{}
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
  reset(){
    let obj={
      title:"",
      description:""
    }
    this.setState({
      title:"",
      description:"",
      _currentlist:obj
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
    let x = (obj.title !== "" && obj.description !=="" )? _list.push(obj): null
    this.setState({
      list: _list
    })
    e.target.reset();
  }
  defaultInput(currentlist){
    let __list = this.state._currentlist;
    __list.title= currentlist.title;
    __list.description= currentlist.description;
    this.setState({
    _currentlist:__list
    })
  }
  editList=(currentlist,e)=>{
    e.preventDefault();
    this.defaultInput(currentlist);
    let idx = this.state.list.indexOf(currentlist);
    this.setState({
      btn1:"update",
      btn2:"cancel",
      index:idx,
      current: currentlist
    })
  }
  update=(e)=>{
    e.preventDefault();
    let idx = this.state.index;
    let _list = this.state.list;
    _list[idx].title = this.state.title;
    _list[idx].description = this.state.description;
    console.log(this.state.index, this.state.title, this.state.description);
    
    this.setState({
      list:_list,
      btn1:"add",
      btn2:"reset",
    })
    
    
  }
  cancel(){
    let obj={
      title:"",
      description:""
    }
    this.setState({
      title:"",
      description:"",
      _currentlist:obj,
      btn1:"add",
      btn2:"reset"
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
        <form className='todo' onSubmit={(this.state.btn1 ==="add")? this.addToList.bind(this): this.update.bind(this)}
         > 
          <label htmlFor="title">Title</label>
          <input type="text" name='title' id='title'  onChange={this.onTitleChange.bind(this)} defaultValue={this.state._currentlist.title}/>
          <label htmlFor="desc">Description</label>
          <textarea type="text" name="desc" id="desc" cols="10" rows="5" onChange={this.onDescChange.bind(this)} defaultValue={this.state._currentlist.description}></textarea>
          <div>
            <button type="submit">{this.state.btn1}</button>
            <button type="reset" onClick={(this.state.btn2 ==="reset")? this.reset.bind(this): this.cancel.bind(this)}>{this.state.btn2}</button>
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