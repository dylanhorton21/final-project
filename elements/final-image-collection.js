import { LitElement,html,css } from "lit";
export class FinalImageCollection extends LitElement{
    static styles = css`
    :host {
        display: block;
    }
    .image{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--ddd-spacing-4);
    }
    .images{
        background-color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 768px){
        .sponsors{
            grid-template-columns: 1fr 1fr;
        }
    `;
    render(){
        return html`
        <div class="image">
            <div class="images">Photo</div>
            <div class="images">Photo</div>
            <div class="images">Photo</div>
        </div>
        `
    }
}
customElements.define("final-image-collection", FinalImageCollection);