import React, { Component } from "react";

class ClassClick extends Component {
    clickHandler() {
        alert("Class button was clicked");
        console.log("Class button click has been logged");
    }
    render() {
        return (
            <>
              <button onClick={this.clickHandler}>Class Click</button>
            </>
        );
    }
        
}

export default ClassClick;
