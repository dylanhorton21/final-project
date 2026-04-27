import { LitElement,html,css } from "lit";
export class FinalFooter extends LitElement{
    static styles = css`
    :host {
        display: block;
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-nittanyNavy)
    }
    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--ddd-spacing-4);
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
        return html`<footer>
            <div class="links">
            <a href="/?page=home">Terms and Condition</a>
            <a href="/?page=schedule">Contact</a>
            <a href="/?page=teams">Privacy</a>
            </div>
    </footer>`
    }
}
customElements.define("final-footer", FinalFooter);