import React from 'react'

import AppHeader from './AppHeader';
import AppMain from './AppMain';
import AppFooter from './AppFooter';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppMain children={this.props.children}/>
        <AppFooter />
      </div>
    )
  }
}

export default App
