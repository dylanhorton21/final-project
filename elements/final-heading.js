import { LitElement,html,css } from "lit";
export class FinalHeading extends LitElement{
    static properties = {
        title: {type:String}
    };
    static styles = css`
    h2{
        color: var(--ddd-theme-default-nittanyNavy);
        margin: var(--ddd-spacing-4);
    }
    @media (prefers-color-scheme: dark){
        h2{
            color: var(--ddd-theme-default-white);
        }
    }
    `;
    render(){
        return html`<h2>${this.title}</h2>`
    }
}
customElements.define("final-heading", FinalHeading);