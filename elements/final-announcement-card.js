import { LitElement,html,css } from "lit";
export class FinalAnnoucementCard extends LitElement{
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
        return html`<div>FinalAnnoucementCard</div>`
    }
}
customElements.define("final-announcement-card", FinalAnnoucementCard);