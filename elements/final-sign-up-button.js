import { LitElement,html,css } from "lit";
export class FinalSignUpButton extends LitElement{
    static styles = css`
    :host {
        display: block;
        text-align: center;
        margin: 8px;
        
    }
    button{
        background-color: black;
        color: var(--ddd-theme-default-white);
        border: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-5);
        border-radius: var(--ddd-radius-md);
        cursor: pointer;
    }
    
    `;
    render(){
        return html`<button>Register</button>`;
    }
}
customElements.define("final-sign-up-button", FinalSignUpButton);