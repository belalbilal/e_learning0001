import {COURS_LIST_REQUEST,COURS_LIST_SUCCESS,COURS_LIST_FAIL} from '../constants/coursConstants'

export const coursListReducer =
  (state = { courses: [] },
  action) => {
    switch (action.type) {
      case COURS_LIST_REQUEST:
        return { loding: true, courses: [] };
      case COURS_LIST_SUCCESS:
        return { loding: false, courses: action.payload };
      case COURS_LIST_FAIL:
        return { loding: false, error: action.payload };
      default:
        return state;
    }

  }
  
