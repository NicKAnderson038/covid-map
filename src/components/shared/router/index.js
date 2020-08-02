import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'rsuite/dist/styles/rsuite-default.css'
import { Navbar, Nav, Icon } from 'rsuite'
import Map from '../../views/map'
import Table from '../../views/table'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Navigation(props) {
  const [key, setKey] = useState('1')
  const { data } = props
  const onSelect = (k) => setKey(k)

  return (
    <Router>
      <div>
        <Navbar>
          <Navbar.Header>
            <h5>COVID Tracker</h5>
          </Navbar.Header>
          <Navbar.Body>
            <Nav onSelect={onSelect} activeKey={key}>
              <Nav.Item
                eventKey="1"
                icon={<Icon icon="home" />}
                componentClass={Link}
                to="/">
                Home
              </Nav.Item>
              <Nav.Item eventKey="2" componentClass={Link} to="/map">
                Map
              </Nav.Item>
              <Nav.Item eventKey="3" componentClass={Link} to="/table">
                Table
              </Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <Map data={data} />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}
