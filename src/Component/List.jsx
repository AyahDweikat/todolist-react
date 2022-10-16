import React, { Component } from 'react'

export default class List extends Component {
  render() {
    let {title, description}= this.props.listShow;
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={this.props.editList.bind(this,this.props.listShow)}>Edit</button>
        <button onClick={this.props.deleteList.bind(this,this.props.listShow)}>Delete</button>
      </div>
    )
  }
}
// 