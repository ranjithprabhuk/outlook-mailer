import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { updateSelectedCategory, updateSearchText } from './redux/actions';
import { MailHeader } from './MailHeader';

const mapStateToProps = (state: IAppState) => {
  return {
    ...state.mail,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateSelectedCategory: (category: string) => dispatch(updateSelectedCategory(category)),
    updateSearchText: (searchText: string) => dispatch(updateSearchText(searchText)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MailHeader);
