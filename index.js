class WordsCounter extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' }); // sets and returns 'this.shadowRoot'

    // Create (nested) span elements
    const wrapper = document.createElement('p');
    wrapper.setAttribute('class', 'words-counter');

    const textString = this.textContent || "";
    const wordsCount = textString.split(" ").length;

    wrapper.innerText = textString;
    
    const counterElement = document.createElement("span");
    counterElement.innerText = `(${wordsCount})`;
    wrapper.appendChild(counterElement);

    // Apply external styles to the shadow dom
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'words-counter.css');

    // Attach the created element to the shadow dom
    shadow.appendChild(linkElem);

    // attach the created elements to the shadow DOM
    shadow.appendChild(wrapper);
  }
}

customElements.define('words-counter', WordsCounter);
