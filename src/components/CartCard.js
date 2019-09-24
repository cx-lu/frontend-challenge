import React, { Component } from 'react'


const showDescriptionStyle = {
    display: 'block',
    fontSize: '0.85em',
    marginTop: '10px',
}

const hideStyle = {
    display: 'none',
}

class CartCard extends Component {

    constructor(props) {
        super(props);
        this.state = { showDescription: false };
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick() {
        this.setState({ showDescription: !this.state.showDescription });
    }

    render() {
        if (this.props.prereqs != null) {
            return (
                <div>
                  <p class="courseItem" 
                       key={`${this.props.dept}-${this.props.number}`}>
        
                    <div onClick={this.handleClick}
                         style={{margin: '0'}}>
                    {this.props.dept}
                    {' '}
                    {this.props.number}
                    {': '}
                    {this.props.title}
        
                    <br></br> 
        
                    </div>
        
                    <span style={this.state.showDescription? 
                                 showDescriptionStyle: 
                                 hideStyle}>
                        <b>Prerequisites: </b>{this.props.prereqs} 
        
                        <br></br> 
                        <br></br> 
                        {this.props.description}
                    </span>
                  </p>
                </div>
                )
        } else {
            return (
                <div>
                  <p class="courseItem" 
                       key={`${this.props.dept}-${this.props.number}`}>
        
                    <div onClick={this.handleClick}
                         style={{margin: '0'}}>
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
export default CartCard;
  
  