import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcNavbarComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcAvatarComponent, IgcButtonComponent, IgcRippleComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .navbar {
      height: max-content;
      min-width: min-content;
    }
    .view-container {
      overflow: auto;
      display: block;
      position: relative;
      flex-grow: 1;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .avatar {
      margin: 0 8px 0 0;
    }
    .avatar::part(base) {
      background-color: transparent;
    }
    .button {
      --ig-size: var(--ig-size-medium);
      margin: 0 8px 0 0;
      height: max-content;
      flex-shrink: 0;
    }
    .button::part(base) {
      color: var(--ig-gray-900);
    }
  `;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-navbar class="navbar">
        <div class="row-layout group">
          <igc-avatar src="/src/assets/Logo.svg" shape="circle" class="avatar"></igc-avatar>
          <igc-button variant="flat" type="button" @click="${() => Router.go(`/view1`)}" class="button">
            View 1
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" @click="${() => Router.go(`/view2`)}" class="button">
            View 2
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" type="button" @click="${() => Router.go(`/view3`)}" class="button">
            View 3
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-navbar>
      <router-outlet class="view-container"></router-outlet>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
