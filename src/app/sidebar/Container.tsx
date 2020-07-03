import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { displayMails } from './redux/actions';
import { SideBar } from './SideBar';

const mapStateToProps = (state: IAppState) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    displayMails: (category: string) => dispatch(displayMails(category)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
