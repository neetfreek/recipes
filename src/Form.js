import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textField: "",
            textSubmitted: "",
          };

        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }

    onChange = event => {
        this.setState({textField: event.target.value
        });
    }

    onSubmit = event => {
        alert(`1. submitted ${this.state.textField} to field`);
        this.setState({
            textSubmitted: this.state.textField,
        });
        this.props.callbackFromParent(this.state.textField);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>
                    Recipe:
                    <input type= "text" value= {this.state.textField} onChange={this.onChange}/>
                </label>
                <input type="submit" value="Search"/>
            </form>
        );
    }
}

export default Form;