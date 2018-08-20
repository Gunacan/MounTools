import React, { Component } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react'
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import CardsComponent from './components/CardsComponent'
import Footer from './components/Footer'


class App extends Component {
  state = {
    activities: [],
    isLoaded: false
  }

  componentDidMount = () => {
    fetch('https://trailist-p3.herokuapp.com/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          activities: data,
          isLoaded: true
        })
      })
  }
  
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        { !this.state.isLoaded 
          ? (
            <Dimmer active>
              <Loader />
            </Dimmer>
          ) 
          : (<CardsComponent {...this.state}/>) }
        
        <Footer />
      </React.Fragment>
    )
  }
}

export default App