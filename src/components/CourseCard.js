import React, { Component } from 'react'
import Cart from './Cart';


const showDescriptionStyle = {
    marginTop: '10px',
    display: 'block',
    fontSize: '0.85em',
}

const hideStyle = {
    display: 'none',
}

const grayedOut = {
    paddingTop: '15px', 
    paddingBottom: '15px',
    backgroundColor: 'lightgray',
}

class CourseCard extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            showDescription: false,  
            showButton: true,
        };
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick() {
        this.setState({ showDescription: !this.state.showDescription });
    }

    addItem = (dept, number, title, description, prereqs, thisCard) => {
        return function() {
            thisCard.props.addItem(dept, number, title, description, prereqs, thisCard);
        }
    }



    render() {
        if (this.props.prereqs != null) {
            return (
                <div class="courseItemDiv">
                  <p class="courseItem" 
                       key={`${this.props.dept}-${this.props.number}`}
                       style={this.state.showButton? {paddingTop: '15px', paddingBottom: '15px'}: grayedOut}>
        
                    <button style={this.state.showButton? {float: 'right', marginTop: '-4px'}: hideStyle}
                            onClick={this.addItem(this.props.dept, this.props.number, this.props.title, this.props.description, this.props.prereqs, this)}>
                        Add to Cart
                    </button>
        
                    <div onClick={this.handleClick}>
                    {this.props.dept}
                    {' '}
                    {this.props.number}
                    {': '}
                    {this.props.title}
                    </div>
        
                    <span style={this.state.showDescription? 
                                 showDescriptionStyle: 
                                 hideStyle}>
        
                        <b>Prerequisites: </b>{this.props.prereqs} 
        
                        <br></br> 
                        {this.props.description}
                    </span>
                  </p>
                </div>
                )
        } else {
            return (
                <div class="courseItemDiv">
                  <p class="courseItem" 
                       key={`${this.props.dept}-${this.props.number}`}
                       style={this.state.showButton? {paddingTop: '15px', paddingBottom: '15px'}: grayedOut}>
        
                    <button style={this.state.showButton? {float: 'right', marginTop: '-4px'}: hideStyle}
                            onClick={this.addItem(this.props.dept, this.props.number, this.props.title, this.props.description, this.props.prereqs, this)}>
                        Add to Cart
                    </button>
        
                    <div onClick={this.handleClick}>
                    {this.props.dept}
                    {' '}
                    {this.props.number}
                    {': '}
                    {this.props.title}
                    </div>
        
                    <span style={this.state.showDescription? 
                                 showDescriptionStyle: 
                                 hideStyle}>
        
                        {this.props.description}
                    </span>
                  </p>
                </div>
                )
        }
    }
}
export default CourseCard;
  
  