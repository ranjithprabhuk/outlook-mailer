import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import MailHeader from './MailHeader';
import { updateSelectedCategory, updateSearchText } from './redux/actions';
import { clearUserInformation } from '../login/redux/actions';
import { IMails } from '../mail/IMail';
import { updateSelectedMail } from '../sidebar/redux';

const mapStateToProps = (state: IAppState) => {
  return {
    ...state.mail,
    selectedCategory: state.mailHeader.selectedCategory,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateSelectedCategory: (category: string) => dispatch(updateSelectedCategory(category)),
    updateSearchText: (searchText: string) => dispatch(updateSearchText(searchText)),
    logout: () => dispatch(clearUserInformation()),
    updateSelectedMail: (mail: IMails) => dispatch(updateSelectedMail(mail)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MailHeader);
