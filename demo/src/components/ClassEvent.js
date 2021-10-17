import React, { Component } from 'react'

class ClassEvent extends Component {
     clickHandler(){
        console.log('I am clicked');
    }
    render() {
        return (
            <div>
               <button onClick={this.clickHandler}>Click Me</button>  
            </div>
        )
    }
}

export default ClassEvent
