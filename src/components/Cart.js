import React, { Component } from 'react'
import CartCourses from './CartCourses'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class Cart extends Component {
  render() {
    if (this.props.items.length == 0) {
      return (
        <div style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          marginBottom: '1.5rem',
          borderRadius: '4px',
        }}>
          <h4>Course Cart</h4>
      
          <p>Your cart is currently empty!</p>

        </div>
      ) 
    } else {
      return (
        <div style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          marginBottom: '1.5rem',
          borderRadius: '4px',
        }}>
          <h4>Course Cart</h4>
      
          <CartCourses courses={this.props.items}/>
          
        <div style={{textAlign: 'center', padding: '20px'}}>
          <button class="cartButton">
            <Link to={{pathname: "/receipt", state: {items: this.props.items}}} style={{textDecoration: 'none', color: 'white'}}>
              Checkout
            </Link>
          </button>
        </div>
          
        </div>
      )
    }
  }

}

export default Cart;

