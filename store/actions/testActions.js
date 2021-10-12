import { SAVE_EXAM_STATE, SAVE_EXAM_TYPE } from "../constants/testConstants"

export const saveExamInfo = (selectedState, selectedExam={}) => (dispatch) => {
  dispatch({
    type: SAVE_EXAM_STATE,
    payload: selectedState,
  })
  dispatch({
    type: SAVE_EXAM_TYPE,
    payload: selectedExam,
  })
}