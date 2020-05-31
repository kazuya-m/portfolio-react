import { MODALOPEN, MODALCLOSE } from '../actions';

const initialOpen = false;

export default (state = initialOpen, action) => {
  switch(action.type) {
    case MODALOPEN:
      return {isOpen: state.isOpen = true}
    case MODALCLOSE:
      return {isOpen: state.isOpen = false}
    default:
      return {isOpen: state.isOpen}
  }
}