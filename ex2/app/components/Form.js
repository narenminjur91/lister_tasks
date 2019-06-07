import React from 'react';
import {TextComp} from './textComp';
import {SelectComp} from './selectComp';

class FormComponent extends React.Component{
    constructor(props){
       super(props);
       
       this.getCountryObj = this.getCountryObj.bind(this);
       this.nameValidation = this.nameValidation.bind(this);
       this.displayPayload = this.displayPayload.bind(this);

       this.state = {fname:{value:"",errMsg:""},
                    lname:{value:"",errMsg:""},
                    email:{value:"",errMsg:""},
                    phone:{value:"",errMsg:""},
                    errFlag: false,
                    payload: "",
                    }
    }

    getCountryObj(){
        return [{code:"fr",name:"France"},
            {code:"us",name:"United States of America"},
            {code:"it",name:"Italy"},
            {code:"de",name:"Germany"},
            {code:"ru",name:"Russia"},
            {code:"kr",name:"Korea"}]
    }

    checkRequired(value){
        if(value.trim().length > 0)
            value = value.trim();
        else
            value=false;
        
        return value;
    }

    nameValidation(event,formField,isRequired){
        let stateObj={};
        let checkedVal="";

        if(isRequired=="yes")
            checkedVal = this.checkRequired(event.target.value);
        
        if(checkedVal)
            stateObj[formField] = {"value":event.target.value};
        else
        {
            stateObj[formField] = {"errMsg":"Please enter a value in this field."};
            this.state.errFlag = true;
        }

        this.setState(stateObj);
    }

    displayPayload(){
        
        if(this.state.errFlag)
            this.setState({payload:"Cannot accept input"});
        else
            this.setState((state,props)=>{
                return {
                    payload : JSON.stringify(state)
                }
            });
    }

    render(){

        return(
            <form>
                <TextComp label="First Name" name="fname" required="yes" class="width-45" value={this.state.fname.value} errMsg={this.state.fname.errMsg} changeCallBk={this.nameValidation}/>
                <TextComp label="Last Name" name="lname" required="yes" class="width-45" value={this.state.lname.value} errMsg={this.state.lname.errMsg} changeCallBk={this.nameValidation}/>
                <TextComp label="Email" name="email" required="yes" class="width-94" value={this.state.email.value} errMsg={this.state.email.errMsg}/>
                <TextComp label="Phone" name="phone" required="yes" class="width-94" value={this.state.phone.value} errMsg={this.state.phone.errMsg}/>
                <SelectComp label="Country" name="country" required="yes" class="width-94" selectList={this.getCountryObj()}/>
                <input type="button" value="SUBMIT!!" onClick={this.displayPayload}/>
                <div>{this.state.payload}</div>
            </form>
        );
    }
}

export {FormComponent};