import {actions} from "../Types/types"

export const CHANGEHEADd = (payload: any) => {

    return{
        actions: actions.CHANGEHEAD,
        payload,
    }


}
export const CHANGEBODYy = (payload: any) => {

    return{
        actions: actions.CHANGEBODY,
        payload,
    }


}
export const CHANGEFEETt = (payload: any) => {

    return{
        actions: actions.CHANGEFEET,
        payload,
    }


}

