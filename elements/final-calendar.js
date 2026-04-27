import { LitElement,html,css } from "lit";
export class FinalCalendar extends LitElement{
    static styles = css`
    :host {
        display: block;
        padding: 22px;
        margin: 8px 0;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
    `;
    render(){
        return html`<div>Calender section, next step</div>`
    }
}
customElements.define("final-calendar", FinalCalendar);