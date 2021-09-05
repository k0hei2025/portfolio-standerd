import {createSlice , configureStore} from "@reduxjs/toolkit"

const initialState = {
               mobState : false,
               progress : 0,
               buffer : 10
}

const majorStoreSlice = createSlice({
               name : "portfolio",
               initialState : initialState,
               reducers : {
                              setMobileState(state : any){
                                             if (window.innerWidth <=900){
                                                            state.mobState = true;
                                             }
                              },

                              setSpinnerTools(state : any , action : any){
                                    state.progress = action.payload.progress1,
                                    state.buffer = action.payload.buffer1             
                              }

               },



})

export const store = configureStore({
               reducer : majorStoreSlice.reducer
})

export type RootState = ReturnType<typeof 
store.getState>


export const actionStore  = majorStoreSlice.actions;  