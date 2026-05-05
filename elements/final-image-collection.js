import { LitElement,html,css } from "lit";
const firstImage = new URL("../images/first.jpeg", import.meta.url).href;
const secondImage = new URL("../images/first.jpeg", import.meta.url).href;
const thirdImage = new URL("../images/first.jpeg", import.meta.url).href;
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
    .images img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: var(--ddd-radius-md);
    }
    @media (max-width: 768px){
        .image{
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
        <div class="image">
            <div class="images">
                <img src="${firstImage}" alt="Number 8 on Harrisburg Hoopers"/>
            </div>
            <div class="images">
                <img src="${secondImage}" alt="Number 1 on Harrisburg Hoopers"/>
            </div>
            <div class="images">
                <img src="${thirdImage}" alt="Number 24 on Harrisburg Hoopers"/>
            </div>
        </div>
        `
    }
}
customElements.define("final-image-collection", FinalImageCollection);