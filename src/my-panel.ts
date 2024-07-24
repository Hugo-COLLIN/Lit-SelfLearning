import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement("my-panel")
export class MyPanel extends LitElement {
  render() {
    return html`
      <div>Hi there</div>
    `;
  }
}
