import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import MailHeader from './MailHeader';
import { updateSelectedCategory, updateSearchText } from './redux/actions';
import { clearUserInformation } from '../login/redux/actions';

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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MailHeader);
