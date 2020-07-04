import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { MailViewer } from './MailViewer';
import { IMails } from '../mail/IMail';
import { toggleArchive, deleteMail } from '../mail/redux';
import { toggleReply, sendMail } from '../sidebar/redux';

const mapStateToProps = (state: IAppState) => {
  return {
    selectedMail: state.sidebar.selectedMail,
    ...state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    toggleArchive: (mail: IMails) => dispatch(toggleArchive(mail)),
    deleteMail: (mail: IMails) => dispatch(deleteMail(mail)),
    toggleReply: (mail: IMails) => dispatch(toggleReply(mail)),
    sendMail: (mail: IMails) => dispatch(sendMail(mail)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MailViewer);
