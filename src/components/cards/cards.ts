import csscards from "./cards.css"
import { VariableAppAtate } from "../../store/store";

export enum attributees {
    "head" ="head",
    "body" ="body",
    "feet" ="feet",
}

export class Cards extends HTMLElement{

    head?:string
    body?:string
    feet?:string

    constructor(){
        super();
        this.attachShadow({mode: "open"});    
    }
    static get observedAttributes(){
        const attrs: Record<attributees, null> = {
            head: null,
            body: null,
            feet: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: attributees,oldValue: string | undefined,newValue: string | undefined){
        switch (propName) {
            case attributees.head:
                this.head = newValue
            break
            case attributees.body:
                this.body = newValue
            break;
            case attributees.feet:
                this.feet = newValue
            break;
        }
this.render
    }

    connectedCallback(){
        this.render()
        console.log(VariableAppAtate)
    }

    render(){
        if(this.shadowRoot){
         this.shadowRoot.innerHTML = `
        <style>${csscards}</style>
        <div>
        <img src="${this.head}" width="150px" >
        <img src="${this.body} "width="150px">
        <img src="${this.feet}" width="150px">
        </div>
         `
        }
    }

}

customElements.define("my-cards", Cards);