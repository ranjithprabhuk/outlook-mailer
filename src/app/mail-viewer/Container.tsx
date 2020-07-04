import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { displayMails } from './redux/actions';
import { MailViewer } from './MailViewer';
import { IMails } from '../mail/IMail';
import { toggleArchive } from '../mail/redux';

const mapStateToProps = (state: IAppState) => {
  return {
    selectedMail: state.sidebar.selectedMail,
    state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    displayMails: (category: string) => dispatch(displayMails(category)),
    toggleArchive: (mail: IMails) => dispatch(toggleArchive(mail)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MailViewer);
