import React from "react"
import { connect } from 'react-redux'
import {
    increment,
    decrement
} from 'actions/counter'

// page component
class Counter extends React.Component {

    render = () => {
        const {
            counter,
            dispatchIncrement,
            dispatchDecrement
        } = this.props;
        return (<div>
            <div> Welcome to counter </div>
            <button onClick={() => dispatchIncrement()} > + </button>
            <div> {counter} </div>
            <button onClick={() => dispatchDecrement()} > - </button>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.counter,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatchIncrement: () => {
            return dispatch(increment());
        },
        dispatchDecrement: () => {
            return dispatch(decrement());
        },
    }
}

// export default Index
export default connect(mapStateToProps, mapDispatchToProps)(Counter);