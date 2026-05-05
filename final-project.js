/**
 * Copyright 2026 dylanhorton21
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./elements/final-announcement-card.js";
import "./elements/final-calendar.js";
import "./elements/final-footer.js";
import "./elements/final-header.js";
import "./elements/final-image-collection.js";
import "./elements/final-json-menu.js";
import "./elements/final-navigation-menu.js";
import "./elements/final-reminder-card.js";
import "./elements/final-sign-up-button.js";
import "./elements/final-sponsors.js";

/**
 * `final-project`
 * 
 * @demo index.html
 * @element final-project
 */
export class FinalProject extends DDDSuper(I18NMixin(LitElement)) {
//push check
  static get tag() {
    return "final-project";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.page = "home";
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/final-project.ar.json", import.meta.url).href +
        "/../",
    });
  }
  connectedCallback(){
    super.connectedCallback();
    const params = new URLSearchParams(window.location.search);
    this.page = params.get("page") || "home";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      page: {type: String}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-default-potentialMidnight);
        background-color: var(--ddd-theme-default-white);
        font-family: var(--ddd-font-navigation);
      }
      main{
        max-width: 1200px;
        margin: 0 auto;
      }
      .wrapper {
        margin: var(--ddd-spacing-4);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--final-project-label-font-size, var(--ddd-font-size-s));
      }
      .priority{
        padding: var(--ddd-spacing-10);
        background-color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-lg);
        margin: var(--ddd-spacing-4);
      }
      .cards{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--ddd-spacing-5);
        margin: var(--ddd-spacing-5);
      }
      .information{
        background-color: var(--ddd-theme-default-white);
        padding : var(--ddd-spacing-5);
        margin: var(--ddd-spacing-5);
        border-radius: var(--ddd-radius-lg);
      }
      .images{
        background-color: var(--ddd-theme-default-white);
        padding : var(--ddd-spacing-5);
        margin: var(--ddd-spacing-5);
        border-radius: var(--ddd-radius-lg);
      }
      .sponsor{
        background-color: var(--ddd-theme-default-white);
        padding : var(--ddd-spacing-5);
        margin: var(--ddd-spacing-5);
        border-radius: var(--ddd-radius-lg);
      }
      h2{
        margin: var(--ddd-spacing-4) 0 var(--ddd-spacing-3) var(--ddd-spacing-4);
        color: var(--ddd-theme0-default-nittanyNavy);
        font-size: var(--ddd-font-size);
      
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <main>
        <final-navigation-menu></final-navigation-menu>
        ${this.page === "home" ? html`
        <section class = "priority">
          <final-header></final-header>
          <final-sign-up-button></final-sign-up-button>
        </section>
        <section class = "cards">
          <final-announcement-card></final-announcement-card>
          <final-reminder-card></final-reminder-card>
        </section>
        <section class = "information">
          <h2>Upcoming Schedule</h2>
          <final-calendar></final-calendar>
        </section>
        <section class = "images">
          <h2>Highlights</h2>
          <final-image-collection></final-image-collection>
        </section>
        <section class = "sponsor">
          <h2>Our Sponsors</h2>
          <final-sponsors></final-sponsors>
        </section>
          `:""}
        ${this.page === "schedule" ? html`
        <section class = "information">
          <h2>Schedule</h2>
          <final-calendar></final-calendar>
        </section>
        `:""}
        ${this.page === "teams" ? html`
        <section class = "information">
          <h2>Teams</h2>
          <p>There are 8 total teams in the league</p>
          <p>1,2,3,4,5,6,7,8</p>
        </section>
          `:""}
        ${this.page === "register" ? html`
        <section class = "information">
          <h2>Register</h2>
          <p>Click here to sign up for a competitive AAU league where you can grow as both a teamate and a player.</p>
          <final-sign-up-button></final-sign-up-button>
        </section>
        `:""}
      <final-footer></final-footer>
    </main>
`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(FinalProject.tag, FinalProject);