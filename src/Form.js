import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textField: "",
            textSubmitted: "",
          };
        this.onChange= this.onChange.bind(this);
    }

    onChange = (event) => {
        this.setState({textField: event.target.value
        });
        this.props.callbackFromParentChange(event.target.value);
    }

    onSubmit = (event) => {
        this.setState({
            textSubmitted: this.state.textField,
            textField: "",
        });
        this.props.callbackFromParentSubmit(this.state.textField);
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