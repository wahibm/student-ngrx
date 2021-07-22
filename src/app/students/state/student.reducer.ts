import * as studentActions from "./student.action";
import { Student } from "../student.model";
import * as fromRoot from "../../state/app_state";
import {createFeatureSelector, createSelector, Selector} from "@ngrx/store";
import {EntityState,EntityAdapter,createEntityAdapter} from '@ngrx/entity'

export interface StudentState extends EntityState<Student>{
    selectedStudentid:number | string,
    loading:boolean,
    loaded:boolean,
    error:string
}
export interface AppState extends fromRoot.AppState{
    students:StudentState
}

export const studentAdapter :EntityAdapter<Student>=createEntityAdapter<Student>();

export const defaultStudent:StudentState={
ids:[],
entities:{},
selectedStudentid:0,
loading:false,
loaded:false,
error:""
}


export const InitialState=studentAdapter.getInitialState(defaultStudent);

export function studentReducer
(state=InitialState,action: studentActions.Actions)
:StudentState{
    switch (action.type) {      

            case studentActions.StudentActionTypes.LOAD_STUDENTS_SUCCESS:{
                return studentAdapter.addMany(action.payload, {
                    ...state,
                    loading: false,
                    loaded: true
                  });
            }
            case studentActions.StudentActionTypes.LOAD_STUDENTS_FAILED:{
                return {
                    ...state,
                    entities: {},
                    loading: false,
                    loaded: false,
                    error: action.payload
                    
                   }
            }             
                
                case studentActions.StudentActionTypes.LOAD_STUDENT_SUCCESS:{
                    return studentAdapter.addOne(action.payload, {
                        ...state,
                        selectedStudentid:action.payload.id
                    });
                }
                case studentActions.StudentActionTypes.LOAD_STUDENT_FAILED:{
                    return {
                        ...state,                       
                        error: action.payload                        
                       }
                }

                case studentActions.StudentActionTypes.CREATE_STUDENT_SUCCESS:{
                    return studentAdapter.addOne(action.payload, state);
                }
                case studentActions.StudentActionTypes.CREATE_STUDENT_FAILED:{
                    return {
                        ...state,                       
                        error: action.payload                        
                       }
                }
                case studentActions.StudentActionTypes.UPDATE_STUDENT_SUCCESS:{
                    return studentAdapter.updateOne(action.payload, state);
                }
                case studentActions.StudentActionTypes.UPDATE_STUDENT_FAIL:{
                    return {
                        ...state,                       
                        error: action.payload                        
                       }
                }
                case studentActions.StudentActionTypes.DELETE_STUDENT_SUCCESS:{
                    return studentAdapter.removeOne(action.payload, state);
                }
                case studentActions.StudentActionTypes.DELETE_STUDENT_FAIL:{
                    return {
                        ...state,                       
                        error: action.payload                        
                       }
                }
            
        default:return state
            break;
    }
}

const getStudentFeatureState=createFeatureSelector<StudentState>("students")

export const getStudents=createSelector(getStudentFeatureState,
    studentAdapter.getSelectors().selectAll
)
export const getStudentLoading=createSelector(getStudentFeatureState,(state:StudentState)=>state.loading)
export const getStudentLoaded=createSelector(getStudentFeatureState,(state:StudentState)=>state.loaded)
export const getStudentErorr=createSelector(getStudentFeatureState,(state:StudentState)=>state.loaded)

export const getCurrentStudentId = createSelector(
    getStudentFeatureState,
    (state: StudentState) => state.selectedStudentid
  );
  export const getCurrentStudent= createSelector(
    getStudentFeatureState,
    getCurrentStudentId,
    state => state.entities[state.selectedStudentid]
  );








