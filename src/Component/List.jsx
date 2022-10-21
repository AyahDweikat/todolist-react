import React, { Component } from 'react'
import './List.css'
export default class List extends Component {
  render() {
    let {title, description}= this.props.listShow;
    return (
      <div className='list'>
        <h3>List Title: {title}</h3>
        <p>List Description: {description}</p>
        <button className='btn btn-info' onClick={this.props.editList.bind(this,this.props.listShow)}>Edit</button>
        <button className='btn btn-danger' onClick={this.props.deleteList.bind(this,this.props.listShow)}>Delete</button>
      </div>
    )
  }
}
// 