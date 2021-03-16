import {COURS_LIST_REQUEST,COURS_LIST_SUCCESS,COURS_LIST_FAIL,COURS_DETAILS_REQUEST,COURS_DETAILS_SUCCESS,COURS_DETAILS_FAIL} from '../constants/coursConstants'

export const coursListReducer =
  (state = { courses: [] },
  action) => {
    switch (action.type) {
      case COURS_LIST_REQUEST:
        return { loding: true, ...state };
      case COURS_LIST_SUCCESS:
        return { loding: false, courses: action.payload };
      case COURS_LIST_FAIL:
        return { loding: false, error: action.payload };
      default:
        return state;
    }

  }
  
  
export const coursDetailsReducer =
(state = { cours: {reviews:[]} },
action) => {
  switch (action.type) {
    case COURS_DETAILS_REQUEST:
      return { loding: true, cours: [] };
    case COURS_DETAILS_SUCCESS:
      return { loding: false, cours: action.payload };
    case COURS_DETAILS_FAIL:
      return { loding: false, error: action.payload };
    default:
      return state;
  }

}
