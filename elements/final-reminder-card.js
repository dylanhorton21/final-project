import { LitElement,html,css } from "lit";
export class FinalReminderCard extends LitElement{
    static styles = css`
    :host {
        display: block;
        padding: 16px;
        margin: 8px 0;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
    .card{
        background-color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-5);
        border-radius: var(--ddd-radius-md);
    }
    h3{
        color: var(--ddd-theme-secondary);
    }
    p{
        margin: 0;
        font-size: var(--ddd-font-size-s);
    `;
    render(){
        return html`
        <div class="card">
            <h3>Reminders</h3>
            <p>Tryouts are on April 5th, arive at 6PM</p>
        </div>
        `
    }
}
customElements.define("final-reminder-card", FinalReminderCard);