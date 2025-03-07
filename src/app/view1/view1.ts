import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcDialogComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcDialogComponent);

@customElement('app-view1')
export default class View1 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
  `;

  @query('#dialog')
  private dialog?: IgcDialogComponent;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-button type="button" @click="${() => this.dialog?.toggle()}" class="button">
          Button
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-dialog ?close-on-outside-click="${true}" id="dialog">
          <h5 slot="title">
            Confirmation
          </h5>
          <p class="typography__body-1 text">
            This is a simple custom dialog
          </p>
          <div slot="footer">
            <igc-button variant="flat" type="button" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button type="button" class="button">
              Button
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </igc-dialog>
      </div>
    `;
  }
}
