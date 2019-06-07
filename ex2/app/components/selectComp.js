import React from 'react';

class SelectComp extends React.Component{
    render(){
        return  <div className={this.props.class + " form-field-container"}>
                    <label>{this.props.label}{this.props.required=="yes" ? "*" : ""}</label>
                    <select>
                        <option value="" selected></option>
                        {this.props.selectList.map(function(country,idx){
                            return <option val={country.code}>{country.name}</option>
                        })}
                    </select>
                </div>
    }
}

export {SelectComp};