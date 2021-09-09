import { StopTwoTone } from "@material-ui/icons";
import {createSlice , configureStore} from "@reduxjs/toolkit"

const initialState = {
               mobState : false,
               progress : 0,
               buffer : 10,
            
               japanese : false,
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
                              },

                              setJapanese(state : any , action : any){ 
                                  

                                    state.japanese =  action.payload;
                              },



               },





})

export const store = configureStore({
               reducer : majorStoreSlice.reducer
})

export type RootState = ReturnType<typeof 
store.getState>


export const actionStore  = majorStoreSlice.actions;  