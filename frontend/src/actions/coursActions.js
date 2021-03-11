import axios from 'axios'
import {COURS_LIST_REQUEST,COURS_LIST_SUCCESS,COURS_LIST_FAIL} from '../constants/coursConstants'
export const listCourses= () => async(dispatch)=>{
    try{
        dispatch({type: COURS_LIST_REQUEST})
        const {data}=await axios.get('api/courses')
        dispatch({
                type:COURS_LIST_SUCCESS,
                payload:data
        })

    }catch(error){
        dispatch({
            type:COURS_LIST_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message,
        })


    }

}