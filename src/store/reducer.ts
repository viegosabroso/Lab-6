import { Appstate, actions } from "../Types/types"
import { Actions } from "../Types/types"


export const reducer = (currentactions: Actions ,currentstate:Appstate): Appstate =>{ 
    const {action, payload} = currentactions
    
    switch(action){
        case actions.CHANGEHEAD:
        return{
            ...currentstate,
            head: payload
            
        }
        case actions.CHANGEBODY:
        return{
            ...currentstate,
            body: payload
            
        }
        case actions.CHANGEFEET:
        return{
            ...currentstate,
            feet: payload
        }
        default:
            return currentstate

    }

}