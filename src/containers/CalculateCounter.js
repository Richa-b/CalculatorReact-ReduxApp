import {Calculator} from "../components/Calculator";
import {getResult} from "../redux/actions/index";
import {connect} from "react-redux";

const mapStateToProps= (state, props) => {
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
)(Calculator);


export  default CalculatorContainer