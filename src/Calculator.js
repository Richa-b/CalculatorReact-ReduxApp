import React from 'react';


export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            operator: '+',
            result : 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit() {
        const firstNum = parseInt(this.state.firstNumber);
        const secondNum = parseInt(this.state.secondNumber);

        switch (this.state.operator){
            case '+' :
                this.setState({result: firstNum + secondNum });
                break;
            case '-' :
                this.setState({result: firstNum - secondNum });
                break;
            case '*' :
                this.setState({result: firstNum * secondNum });
                break;
            case '/' :
                this.setState({result: firstNum / secondNum });
                break;

        }
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
                <button  onClick={this.handleSubmit}>=</button>
                <input value={this.state.result} readOnly/>
            </div>

        )

    }
}
