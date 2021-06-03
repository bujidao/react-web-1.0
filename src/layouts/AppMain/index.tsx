import React, { Component } from 'react'

class AppMain extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default AppMain
