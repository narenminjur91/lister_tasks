import React from 'react';
import ReactDOM from 'react-dom';
import url from './style.css';
import {FormComponent} from './components/Form.js';

const FirstApp = (props) => <h1 className="center-align">This is my First {props.framework} App</h1>;
const NewText = (props) => <h1>The text has been changed now</h1>;

class MainComp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            showForm : true,
        };
        this.toggleText = this.toggleText.bind(this);
    }

    toggleText()
    {
        this.setState((state,props) => ({showForm : !state.showForm}));
    }

    render(){
        return(
            <div id="app">
                <FirstApp framework="React"/>
                <button className="info-button lft-45" onClick={this.toggleText}>Show Form!!!</button>
                {this.state.showForm ?  <FormComponent /> : ""}                
            </div>
        );
    }
}

ReactDOM.render(
    <MainComp />,
    document.getElementById('root')
);