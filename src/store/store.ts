import { Observer,Appstate} from "../Types/types";
import { reducer } from "./reducer";

export let VariableAppAtate: Appstate = {
    head:"https://tr.rbxcdn.com/64bb6babb23f27638b2450fa048cfd63/420/420/DynamicHeadOutfit/Png",
    body:"https://tr.rbxcdn.com/65267ae92afb543eeef43c0e939b22e4/420/420/LayeredAccessory/Png",
    feet:"https://tr.rbxcdn.com/2d69048fc6ea944c5d3ef372fafb212e/420/420/Hat/Png"
}

let Observers: Observer[] =[]

export const dispatch = (action: any)=>{
    const convertir = JSON.parse(JSON.stringify(VariableAppAtate))
    VariableAppAtate = reducer(action, convertir)
    Observers.forEach(Element => Element.render)
    console.log("funciona tambien el dispatch")
} 

export const oneobserver = (ref: Observer)=>{
    Observers = [...Observers,ref]
}