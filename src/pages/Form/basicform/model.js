

import { message } from 'antd';
import { getClient } from './service';

const Model = {
  namespace: 'basicFormModel',
  state: {
    formInfo: {
      note:0,
      clientName: "",
      pageNum:1,
      pageSize:10
    },
    List1:{}
  },
  effects: {
    // *submitStepForm({ payload }, { call, put }) {
    //   yield call(fakeSubmitForm, payload);
    //   yield put({
    //     type: 'saveStepFormData',
    //     payload,
    //   });
    //   yield put({
    //     type: 'saveCurrentStep',
    //     payload: 'result',
    //   });
    // },
    *submitForm({ payload }, { call, put,select }) {
      const res = yield call(getClient, payload);
      yield put({type:'saveStepFormData',payload:{List1:res.data.records || {}}})
      const zzz=yield select(state=>state.basicFormModel.List1[0].clientName)
      //
      // console.log(yield select(state=>state.formAndbasicForm))
      message.success('提交成功'+zzz);
      // console.log(zzz)
    }
  },
  reducers: {
    saveStepFormData(state, { payload }) {
      return ({...state},{...payload});
    },
    // saveFormData(state, { payload }) {
    //   //返回新的状态，以及一个处理方法
    //   state.formInfo.note = payload.note+1
    //   // console.log(payload.note)
    //   console.log(state)
    //   return state;
    // },
  //
  //   saveStepFormData(state, { payload }) {
  //     return { ...state, step: { ...state.step, ...payload } };
  //   },
  },
};
export default Model;
