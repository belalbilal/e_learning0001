import axios from 'axios'
import {COURS_LIST_REQUEST,COURS_LIST_SUCCESS,COURS_LIST_FAIL,COURS_DETAILS_REQUEST,COURS_DETAILS_SUCCESS,COURS_DETAILS_FAIL} from '../constants/coursConstants'
export const listCourses= () => async(dispatch)=>{
    try{
        dispatch({type: COURS_LIST_REQUEST})
        const {data}=await axios.get('/api/courses')
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


export const listCoursDetails= (id) => async(dispatch)=>{
    try{
        dispatch({type: COURS_DETAILS_REQUEST})
        const {data}=await axios.get(`/api/courses/${id}`)
        dispatch({
                type:COURS_DETAILS_SUCCESS,
                payload:data
        })

    }catch(error){
        dispatch({
            type:COURS_DETAILS_FAIL,
            payload:error.response&&error.response.data.message
            ?error.response.data.message
            :error.message,
        })


    }

}