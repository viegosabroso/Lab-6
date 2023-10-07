
import { CHANGEBODYy, CHANGEFEETt,  CHANGEHEADd } from "../../store/actions";
import { reducer } from "../../store/reducer";
import { dispatch, oneobserver } from "../../store/store";
import botonescss from "./botones.css"
import { VariableAppAtate } from "../../store/store";

export enum attributes {
    "head" = "head",
    "body" = "body",
    "feet" = "feet"
}
   
export class buttons extends HTMLElement{

    head?:string
    body?:string
    feet?:string

    constructor(){
        super();
        this.attachShadow({mode: "open"});   
        oneobserver(this); 
    }
    
    connectedCallback(){
        this.mount()

    }
    static get observedAttributes(){
        const attrs: Record<attributes, null> = {
            head: null,
            body: null,
            feet: null
        }
        return Object.keys(attrs);
    }
    attributeChangedCallback(propName: attributes,oldValue: string | undefined,newValue: string | undefined){
        this[propName] = newValue
         this.render()
     }

    mount(){
        this.render()
        const btn1 = this.shadowRoot?.querySelector(".btn1")
        btn1?.addEventListener('click',() => {console.log("fuciona 1")
            dispatch(CHANGEHEADd(this.head))})

        const btn2 = this.shadowRoot?.querySelector(".btn2")
        btn2?.addEventListener('click',() => {console.log("fuciona 2")
            dispatch(CHANGEBODYy(this.body))})

        const btn3 = this.shadowRoot?.querySelector(".btn3")
        btn3?.addEventListener('click',() =>{console.log("fuciona 3")
            dispatch(CHANGEFEETt(this.feet))})
    }

    render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML = `
        <style>${botonescss}</style>
        <div>
        <img src="${this.head}" class="btn1" width="100px" height="100px">
        <img src="${this.body}" class="btn2" width="100px" height="100px">
        <img src="${this.feet}" class="btn3" width="100px" height="100px">
        </div>`
    }}
}

customElements.define("my-buttons",buttons)