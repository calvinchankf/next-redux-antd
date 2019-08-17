import {
  increment,
  decrement
} from 'actions/counter'
import { connect } from "react-redux"
// components
import Header from 'components/Header'
import Footer from 'components/Footer'

// page component
class Index extends React.Component {

  static async getInitialProps({ req, res, pathname, query, asPath, isServer, store }) {
    return {
      pathname,
      query,
      asPath,
    }
  }

  render = () => {
    const {
      pathname,
      query,
      counter,
      dispatchIncrement,
      dispatchDecrement
    } = this.props;
    return (<div>
      <Header />
      <div> Welcome to counter </div>
      <button onClick={() => dispatchIncrement()} > + </button>
      <div> {counter} </div>
      <button onClick={() => dispatchDecrement()} > - </button>
      <Footer />
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
export default connect(mapStateToProps, mapDispatchToProps)(Index);