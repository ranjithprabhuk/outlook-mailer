import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { clearAlertMessage } from './redux/actions';
import { Alert } from './Alert';

const mapStateToProps = (state: IAppState) => {
  return {
    alert: state.alert,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    clearAlert: () => dispatch(clearAlertMessage()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);
