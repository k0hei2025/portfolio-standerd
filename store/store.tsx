import {createSlice , configureStore} from "@reduxjs/toolkit"

const initialState = {
               mobState : false
}

const majorStoreSlice = createSlice({
               name : "portfolio",
               initialState : initialState,
               reducers : {
                              setMobileState(state : any){
                                             if (window.innerWidth <=900){
                                                            state.mobState = true;
                                             }
                              }
               },



})

export const store = configureStore({
               reducer : majorStoreSlice.reducer
})

export type RootState = ReturnType<typeof 
store.getState>


export const actionStore  = majorStoreSlice.actions;  