import { LitElement,html,css } from "lit";
export class FinalNavigationMenu extends LitElement{
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
    }
    a:hover
    `;
    render(){
        return html`
        <nav>
            <div class="name">Harrisburg Hoopers AAU</div>
            <div class="links">
            <a href="/?page=home">Home</a>
            <a href="/?page=schedule">Schedule</a>
            <a href="/?page=teams">Teams</a>
            <a href="/?page=register">Register</a>
            </div>
        </nav>
        `;
    }
}
customElements.define("final-navigation-menu", FinalNavigationMenu);