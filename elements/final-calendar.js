import { LitElement,html,css } from "lit";
const scheduleURL = new URL("../api/schedule.json", import.meta.url).href;
export class FinalCalendar extends LitElement{
    static properties = {
        events:{type:Array},
    };
    constructor(){
        super();
        this.events = [];
    }
    connectedCallback(){
        super.connectedCallback();
        this.JSONSchedule();
    }
    async JSONSchedule(){
        try{
            const response = await fetch(scheduleURL);
            this.events = await response.json();
        } catch (errors){
            console.error("Error", errors)
        }
    
    }
    static styles = css`
    :host {
        display: block;
    }
    .list {
        display: grid;
        grid-template-columns:  repeat(auto-fit, minmax(var(--ddd-spacing-30), 1fr));
        gap: var(--ddd-spacing-4);
        max-width: var(--ddd-spacing-32);
    }
    .event{
        border: var(--ddd-border-sm) solid var(--ddd-theme-default-limestoneLight);
        border-left: var(--ddd-border-md) solid var(--ddd-theme-default-nittanyNavy);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-4);
        background: var(--ddd-theme-default-white);
        box-shadow: var(--ddd-boxShadow-md);
    }
    h3{
        color: var(--ddd-theme-default-nittanyNavy);
        font-size: var(--ddd-font-size-m);
    }
    p{
        color: var(--ddd-theme-default-nittanyNavy);
    }
    @media (max-width: var(--ddd-spacing-28)){
        .list{
            grid-template-columns: 1fr;
        }
    }
    @media (prefers-color-scheme: dark){
        .card,
        .event,
        .sponsor,
        .images {
          background-color: var(--ddd-theme-default-coalyGray);
          color: var(--ddd-theme-default-white);
        }
        h3,
        p {
          color: var(--ddd-theme-default-white);
        }
      }
    
    `;
    render(){
        return html`
        <div class= "list">
        ${this.events.map(
            (event) => html`
            <div class = "event">
                <h3>${event.date}</h3>
                <p>${event.type}</p>
                <p>${event.time}</p>
            </div>
            `
        )}
        </div>
        `;
    }
}
customElements.define("final-calendar", FinalCalendar);