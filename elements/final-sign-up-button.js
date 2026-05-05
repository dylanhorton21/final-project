import { LitElement,html,css } from "lit";
export class FinalSignUpButton extends LitElement{
    static styles = css`
    :host {
        display: block;
        text-align: center;
        margin: var(--ddd-spacing-2);
        
    }
    a{
        display: inline-block;
        background-color: black;
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-5);
        border-radius: var(--ddd-radius-md);
        cursor: pointer;
    }
    a:hover,
    a:focus{
        outline: 2px solid var(--ddd-theme-default-white);
    }
    
    `;
    render(){
        return html`
        <a href ="/?page=register">Register</a>
        `;
    }
    
}
customElements.define("final-sign-up-button", FinalSignUpButton);