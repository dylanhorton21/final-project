import { LitElement,html,css } from "lit";
export class FinalSponsors extends LitElement{
    static styles = css`
    :host {
        display: block;
    }
    .sponsors{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--ddd-spacing-4);
    }
    .sponsor{
        background-color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-4);
        text-align: center;
    }
    @media (max-width: 768px){
        .sponsors{
            grid-template-columns: 1fr 1fr;
        }
    }
    `;
    render(){
        return html`<div class="sponsors">
            <div class="sponsor">
                Harrisburg Sports Academy
            </div>
            <div class="sponsor">Harrisburg Local Bank</div>
            <div class="sponsor">Harrisburg Hamburger Home</div>
            <div class="sponsor">Harrisburg Highschool</div>
        </div>`
    }
}
customElements.define("final-sponsors", FinalSponsors);