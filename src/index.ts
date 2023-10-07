import "./screens/main"
import "./components/indexhijo"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render()
    }


    render(){
        const mainpage = this.ownerDocument.createElement("main-page")
        this.shadowRoot?.appendChild(mainpage)
            
    }
}

customElements.define("app-container", AppContainer);