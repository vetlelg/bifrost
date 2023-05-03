import React,{ useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons'
import { Nav } from '@intility/bifrost-react'
import Test from './Test'

// include bifrost css bundle
import '@intility/bifrost-react/dist/bifrost-app.css'

const App = () => (
    
  <Nav
    appName='App Name'
    top={
      <>
        <a href='/path' title='Profile'>
          <Nav.Item icon={faUser} />
        </a>
        <a href='/path'>
          <Nav.Item>About</Nav.Item>
        </a>
      </>
    }
    side={
      <>
        <a href='/path'>
          <Nav.Item icon={faHome}>Home</Nav.Item>
        </a>
        <a href='/path'>
          <Nav.Item icon={faCog}>Settings</Nav.Item>
        </a>
      </>
    }
  >
    <Test />
  </Nav>
)

ReactDOM.render(<App />, document.getElementById('root'))