import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { validateUser } from './redux/actions';
import Mail from './Mail';

const mapStateToProps = (state: IAppState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    validateUser: (credentials: any) => dispatch(validateUser(credentials)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mail);
