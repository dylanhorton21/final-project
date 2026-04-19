import { LitElement,html,css } from "lit";
export class FinalSignUpButton extends LitElement{
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
        return html`<div>FinalSignUpButton</div>`
    }
}
customElements.define("final-sign-up-button", FinalSignUpButton);