import { connect } from 'react-redux';
import { IAppState } from '../../Model';
import { updateSelectedCategory } from './redux/actions';
import { MailHeader } from './MailHeader';

const mapStateToProps = (state: IAppState) => {
  return {
    ...state.mail,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateSelectedCategory: (category: string) => dispatch(updateSelectedCategory(category)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MailHeader);
