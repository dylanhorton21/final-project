import { LitElement,html,css } from "lit";
const logo = new URL("../images/logo.jpeg", import.meta.url).href;
export class FinalNavigationMenu extends LitElement{
    static properties ={
        menu:{type: Array},
        team:{type: Boolean}
    };
    constructor(){
        super();
        this.menu = [];
        this.team = false;
    }
    connectedCallback(){
        super.connectedCallback();
        this.loadMenu();
    }
    dropdownTeam(){
        this.team = !this.team;
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
    @media(max-width: 768px){
        nav{
            flex-direction: column;
        }
    }
    .name{
        color: var(--ddd-theme-default-white);
        font-size: var(--ddd-font-size-m);
    }
    .links{
        display: flex;
        gap: var(--ddd-spacing-4);
        flex-wrap: wrap;
    }
    a{
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-font-weight-bold);
    }
    a:hover,
    a:focus{
        text-decoration:underline;
        opacity : .5;
    }
    .dropdown{
        position: relative;
    }
    .dropdown button{
        background: none;
        border: none;
        color: var(--ddd-theme-default-white);
        cursor:pointer;
        font-size: inherit;
        text-decoration: underline;
    }
    .dropdown-menu{
        position: absolute;
        background: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-3);
        display: grid;
    }
    .dropdown-menu a{
        color: var(--ddd-theme-default-nittanyNavy);
    }
    .logo{
        display: flex;
        color: var(--ddd-theme-default-white);
        font-size: var(--ddd-font-size-m);
    }
    .logo img{
        height: 40px;
        width: 40px;
    }
    `;
    render(){
        return html`
        <nav>
            <div class="logo">
            <img src="${logo}" alt="HH AAU logo"/>
            <span>Harrisburg Hoopers AAU</span>
        </div>
            <div class="links">
            ${this.menu.map((item) => item.title === "Teams"
                ? html`
                <div class = "dropdown">
                <button @click= "${this.dropdownTeam}">
                    Teams ${this.team ? "↑" : "↓"}
                </button>
                ${this.team ? html`
                <div class = "dropdown-menu">
                    <a href = "/?page=teams">Ballers</a>
                    <a href = "/?page=teams">Hoopers</a>
                    <a href = "/?page=teams">Sharks</a>
                    <a href = "/?page=teams">Bears</a>
                    <a href = "/?page=teams">Bees</a>
                    <a href = "/?page=teams">Koalas</a>
                    <a href = "/?page=teams">Foxes</a>
                    <a href = "/?page=teams">Squids</a>
                </div>
                `: ""}
                </div>
                `
                : html`
                <a href="${item.slug}">${item.title}</a>
                `
            )}
            
            </div>
        </nav>
        `;
    }
}
customElements.define("final-navigation-menu", FinalNavigationMenu);