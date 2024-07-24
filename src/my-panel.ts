import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement("my-panel")
export class MyPanel extends LitElement {
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
        <div class="title"> TITLE</div>
        <div class="body">CONTENT</div>
      </div>
    `;
  }
}
