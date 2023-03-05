class SectionComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
    
      connectedCallback() {
        this.render();
      }

      static get observedAttributes() {
        return ['title', 'description'];
      }

      attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
      }
    
      render() {
        this.shadowRoot.innerHTML = `
              <link rel="stylesheet" href="/src/components/sectionComponent/styles.css">
              <section>
                <h1>${this.title}</h1>
                <p>${this.description}</p>
                <slot></slot>
              </section>
              `;
      }
    }
    
    customElements.define('section-component', SectionComponent);
    export default SectionComponent;
    