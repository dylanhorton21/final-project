import { LitElement,html,css } from "lit";
export class FinalNavigationMenu extends LitElement{
    static properties ={
        menu:{type: Array},
    };
    constructor(){
        super();
        this.menu = [];
    }
    connectedCallback(){
        super.connectedCallback();
        this.loadMenu();
    }
    async loadMenu(){
        try{
            const response = await fetch("/api/menu.json");
            this.menu = await response.json();
        } catch(error){
            console.error("Error", error);
        }
    }
    static styles = css`
    :host {
        display: block;
        padding: var(--ddd-spacing-5);
        background-color: var(--ddd-theme-default-nittanyNavy)
    }
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--ddd-spacing-4);
    } 
    .name{
        color: var(--ddd-theme-default-white);
        font-size: var(--ddd-font-size-m);
    }
    .links{
        display: flex;
        gap: var(--ddd-spacing-4);
    }
    a{
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-theme-default-bold);
    }
    a:hover,
    a:focus{
        text-decoration:underline;
        opacity : .5;
    }
    `;
    render(){
        return html`
        <nav>
            <div class="name">Harrisburg Hoopers AAU</div>
            <div class="links">
            ${this.menu.map(
                (item) => html`
                <a href="${item.slug}">${item.title}</a>`
            )}
            </div>
        </nav>
        `;
    }
}
customElements.define("final-navigation-menu", FinalNavigationMenu);