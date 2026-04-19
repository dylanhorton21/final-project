import { LitElement,html,css } from "lit";
export class FinalJSONMenu extends LitElement{
    static styles = css`
    :host {
        display: block;
        padding: 16px;
        margin: 8px 0;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
    `;
    render(){
        return html`<div>FinalJSONMenu</div>`
    }
}
customElements.define("final-json-menu", FinalJSONMenu);