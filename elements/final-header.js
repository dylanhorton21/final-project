import { LitElement,html,css } from "lit";
export class FinalHeader extends LitElement{
    static styles = css`
    :host {
        display: block;
        padding: var(--ddd-spacing-4);
        margin: var(--ddd-spacing-2);
        border: 1px solid #ccc;
        border-radius: var(--ddd-radius-md);
    }
    `;
    render(){
        return html`
        <h1>Harrisburg Hoopers AAU</h1>
        <p>Building team players, who have love for the game</p>
        `
    }
}
customElements.define("final-header", FinalHeader);