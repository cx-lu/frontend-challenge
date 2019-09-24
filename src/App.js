import React, { Component } from 'react'
import './App.css'

import Nav from './components/Nav'
import Courses from './components/Courses'
import Cart from './components/Cart'

const showCartStyle = {
  display: 'block',
}

const hideStyle = {
  display: 'none',
}

class App extends Component {

  state = {
    showCart: false,
    cart: []
  }

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showCart: !this.state.showCart });
  }

  addItem = (dept, number, title, description, prereqs, card) => {
    var newItem = 
    {
        "dept": dept,
        "number": number,
        "title": title,
        "description": description,
        "prereqs": prereqs
    };
    var currCart = this.state.cart;
    currCart.push(newItem);
    if (currCart.length > 7) {
      alert("You can choose a maximum of 7 courses.")
    } else {
      this.setState({cart: currCart});
      card.setState({showButton: false});
    }
  }

  render() {
    return (
      <>
        <Nav />
        <div style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '0 calc(1rem + 10%)',
        }}>
          <Courses addItem={this.addItem} cart={this.cart}/>

        <div style={{textAlign: 'center', padding: '20px'}}>
          <button class="cartButton" onClick={this.handleClick}>
            View / Hide Cart
          </button>
        </div>
          
        
          <div style={this.state.showCart? 
                      showCartStyle: 
                      hideStyle}>
            <Cart items={this.state.cart}/>
          </div>
        </div>
      </>
    );
  }
}

export default App
