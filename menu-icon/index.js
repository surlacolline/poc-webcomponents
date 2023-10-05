class MenuIcon extends HTMLElement {
    constructor() {
      super();
      // Créez un Shadow DOM pour votre composant
      const shadow = this.attachShadow({ mode: 'open' });

      // Créez un bouton et un icône dans le Shadow DOM
      const button = document.createElement('button');
      const icon = document.createElement('span');
      icon.textContent = '☰'; // Vous pouvez utiliser un autre caractère ou une icône ici

      // Ajoutez le bouton et l'icône au Shadow DOM
      button.appendChild(icon);
      shadow.appendChild(button);

      // Ajoutez un gestionnaire d'événements pour le clic sur le bouton
      button.addEventListener('click', () => {
        // Ajoutez ici la logique pour ouvrir le menu
        alert('Menu ouvert !');
      });

      // Ajoutez des styles pour votre composant
      const style = document.createElement('style');
      style.textContent = `
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          font-size: 24px;
        }
      `;

      // Ajoutez les styles au Shadow DOM
      shadow.appendChild(style);
    }
  }

  // Définissez votre composant personnalisé
  customElements.define('menu-icon', MenuIcon);

  customElements.define('menu-icon2', MenuIcon);