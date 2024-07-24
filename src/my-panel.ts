import {css, html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {when} from "lit/directives/when.js";

@customElement("my-panel")
export class MyPanel extends LitElement {
  @property({type: String})
  title = "Default Title";

  @property({type: Boolean})
  opened = false;

  static styles = css`
  .title {
    background: aquamarine;
    color: var(--my-panel-primary-color, black);
    font-size: 20px;
    font-weight: bold;
    border-top-left-radius: 10px;
  }
      
  .body {
    padding: 1rem;
    border: 2px solid darkorange;
  }
  `


  render() {
    return html`
      <div>
        <div class="title" @click=${() => this.opened = !this.opened}>
          ${this.title} - ${this.opened ? "Opened" : "Closed"}
        </div>
        <div class="body">
          ${when(
            this.opened, 
              () => html`<slot name="header">Header Content</slot>`,
              () => html`closed`
          )}
          <slot>Default Content</slot>
        </div>
      </div>
    `;
  }
}
