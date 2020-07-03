import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { Mail } from './components';
import { validateUser } from './redux/actions';
import { ILoginFormParams } from './ILogin';

const mapStateToProps = (state: IAppState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    validateUser: (credentials: ILoginFormParams) => dispatch(validateUser(credentials)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mail);
