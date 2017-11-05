import React from 'react';
import {connect} from "react-redux";
import {getResult} from "../redux/actions/index";


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            operator: '+',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        const {props : {result,onSubmit} , state : {firstNumber ,secondNumber,operator}} = this;
        return (
            <div>
                <input name='firstNumber' onChange={this.handleChange} value={firstNumber} type='number'/>
                <select name='operator' onChange={this.handleChange} value={operator}>
                    <option value='+'> +</option>
                    <option value='-'> -</option>
                    <option value='*'> *</option>
                    <option value='/'> /</option>
                </select>
                <input name='secondNumber' onChange={this.handleChange} value={secondNumber} type='number'/>
                <button  onClick={()=>
                {onSubmit(firstNumber,secondNumber,operator)}}>=</button>
                <input value={result} readOnly/>
            </div>

        )

    }
}


const mapStateToProps= (state,props) => {
  return ({result : state.result})
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (a,b,op) => dispatch(getResult(a,b,op))
    }
}
const CalculatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator)


export  default CalculatorContainer