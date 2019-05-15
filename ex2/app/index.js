import React from 'react';
import ReactDOM from 'react-dom';

const FirstApp = (props) => <h1>This is my First {props.framework} App</h1>;
const NewText = (props) => <h1>The text has been changed now</h1>;

class MainComp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            showText : false,
        };
        this.toggleText = this.toggleText.bind(this);
    }

    toggleText()
    {
        this.setState((state,props) => ({showText : !state.showText}));
    }

    render(){
        return(
            <div id="app">
                <button onClick={this.toggleText}>Change Text!!!</button>
                {this.state.showText ? <NewText /> : <FirstApp framework="React"/>}
            </div>
        );
    }
}

ReactDOM.render(
    <MainComp />,
    document.getElementById('root')
);