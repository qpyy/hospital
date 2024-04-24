import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import AllActionCreators from '../store/action-creators/';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllActionCreators, dispatch);
};

export default useActions;
