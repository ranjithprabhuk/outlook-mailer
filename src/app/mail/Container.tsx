import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { fetchMails } from './redux/actions';
import Mail from './Mail';

const mapStateToProps = (state: IAppState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchMails: () => dispatch(fetchMails()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mail);
