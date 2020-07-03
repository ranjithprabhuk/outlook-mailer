import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { updateSelectedMail } from './redux/actions';
import { SideBar } from './SideBar';
import { IMails } from '../mail/IMail';

const mapStateToProps = (state: IAppState) => {
  return {
    mails: state.mail.mails || [],
    selectedCategory: state.mailHeader.selectedCategory,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateSelectedMail: (mail: IMails) => dispatch(updateSelectedMail(mail)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
