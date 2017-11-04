import React from 'react';


export class Calculator extends React.Component {
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
        return (
            <div>
                <input name='firstNumber' onChange={this.handleChange} value={this.state.firstNumber} type='number'/>
                <select name='operator' onChange={this.handleChange} value={this.state.operator}>
                    <option value='+'> +</option>
                    <option value='-'> -</option>
                    <option value='*'> *</option>
                    <option value='/'> /</option>
                </select>
                <input name='secondNumber' onChange={this.handleChange} value={this.state.secondNumber} type='number'/>
                <button  onClick={()=>
                {this.props.onSubmit(this.state.firstNumber,this.state.secondNumber,this.state.operator)}}>=</button>
                <input value={this.props.result} readOnly/>
            </div>

        )

    }
}
