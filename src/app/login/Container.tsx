
import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { Login } from './components';

const mapStateToProps = (state: IAppState) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);