import React, { Component } from 'react'
import Nav from './Nav'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CartCourses from './CartCourses'
import Image from './undraw_empty_cart_co35.png'

class Receipt extends Component {
    render() {
        return(
            <div>
                <Nav />

                <div style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '0 calc(1rem + 10%)',
                    textAlign: 'center'
                }}>
                    <p>
                    <b>Thank you for using Penn Course Cart!</b>
                        <br></br>
                        <br></br>
                        <img src={Image} style={{width: '20%'}}/>
                        <br></br>
                        <br></br>
                        You have checked out the following courses:

                        <CartCourses courses={this.props.location.state.items}/>

                    </p>

                    <button>
                        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                            Back
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Receipt;