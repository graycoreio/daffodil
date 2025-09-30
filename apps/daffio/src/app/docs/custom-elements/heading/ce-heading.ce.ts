export class CeDaffioHeading extends HTMLElement {
  private _size = 'h1';
  private _slug = '';

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const slot = document.createElement('slot');
    shadow.appendChild(slot);

    const anchor = this.createAnchor();
    shadow.appendChild(anchor);

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: inline-flex;
        align-items: baseline;
      }
      ::slotted(h1), ::slotted(h2), ::slotted(h3), ::slotted(h4) {
        margin: 0;
      }
      .daffio-markdown-heading-link {
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      :host(:hover) .daffio-markdown-heading-link {
        opacity: 1;
      }
    `;
    shadow.appendChild(style);
  }

  static get observedAttributes() {
    return ['size', 'slug'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'size' && newValue) {
      this._size = newValue;
    }
    if (name === 'slug' && newValue) {
      this._slug = newValue;
      const anchor = <HTMLAnchorElement>this.shadowRoot?.querySelector('a');
      if (anchor) {
        anchor.href = `#${this._slug}`;
      }
    }
  }

  private createAnchor(): HTMLElement {
    const link = document.createElement('a');
    link.className = 'daffio-docs-heading-link daffio-markdown-heading-link';
    link.setAttribute('aria-label', 'Link to this section');
    link.setAttribute('title', 'Copy link to this section');
    link.style.marginInline = '5px';

    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg.classList.add('daffio-docs-heading-link__icon');
    iconSvg.setAttribute('viewBox', '0 0 512 512');
    iconSvg.setAttribute('width', '12');
    iconSvg.setAttribute('height', '12');
    iconSvg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'dimgrey');
    path.setAttribute('d', 'M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z');  // Full path
    iconSvg.appendChild(path);
    link.appendChild(iconSvg);

    link.addEventListener('click', (event) => {
      event.preventDefault();
      const baseUrl = document.location.href.split('#')[0];
      navigator.clipboard.writeText(`${baseUrl}#${this._slug}`).then(() => {
        link.classList.add('copied');
        setTimeout(() => link.classList.remove('copied'), 1500);
      }).catch(console.error);
    });

    return link;
  }
}
