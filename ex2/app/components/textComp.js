import React from 'react';

class TextComp extends React.Component{
    constructor(props){
        super(props);
        this.changeCallBkFunc = this.changeCallBkFunc.bind(this);
    }
    
    changeCallBkFunc(ev){
        if(this.props.changeCallBk)
        {
            this.props.changeCallBk(ev,this.props.name,this.props.required);
        }
        else
            return;
    }

    render(){
        return  <div className={this.props.class + " form-field-container"}>
                    <label>{this.props.label}{this.props.required=="yes" ? "*" : ""}</label>
                    <input type="text" name={this.props.name} value={this.props.value} onChange={this.changeCallBkFunc}/>
                    <p>{this.props.errMsg}</p>
                </div>
    }
}

export {TextComp}