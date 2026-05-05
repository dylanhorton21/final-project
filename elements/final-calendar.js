import { LitElement,html,css } from "lit";
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
            const response = await fetch("/api/schedule.json");
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
        grid-template-columns:  repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--ddd-spacing-4);
        max-width: 1000px;
    }
    .event{
        border: var(--ddd-border-sm) solid var(--ddd-theme-default-limestoneLight);
        border-left: var(--ddd-border-md) solid var(--ddd-theme-default-nittanyNavy);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-4);
        background: var(--ddd-theme-default-white);
        box-shadow: 0 2px 6px;
    }
    h3{
        color: var(--ddd-theme-default-nittanyNavy);
        font-size: var(--ddd-font-size-m);
    }
    p{
        color: var(--ddd-theme-default-nittanyNavy);
    }
    @media (max-width: 700px){
        .list{
            grid-template-columns: 1fr;
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