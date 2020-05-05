import * as actionTypes from '../actions/actionTypes';

const initialState = {
  exams: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EXAMS: return {
      ...state,
      exams: action.exams
    };
    case actionTypes.UPDATE_EXAM:
      return {
        ...state,
        exams: [...state.exams.map(item => (item.id === action.updatedExam.id) ? action.updatedExam : item)]
      };
    case actionTypes.REMOVE_EXAM:
      return {
        ...state,
        exams: [...state.exams.filter(item =>  item.id !== action.removedExamId)]
      };
    default:
      return state;
  }
};

export default reducer;

