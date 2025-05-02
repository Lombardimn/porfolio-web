class MenuButton extends HTMLElement {
  private btn!: HTMLButtonElement
  private menu!: HTMLElement | null

  constructor() {
    super()
  }

  connectedCallback() {
    /** Referencia al botón del menú */
    this.btn = this.querySelector('button')!
    
    /** Referencia al menú desplegable */
    const targetId = this.getAttribute('menu-target')
    if (!targetId) {
      console.warn('MenuButton: missing "menu-target" attribute.')
      return
    }

    this.menu = document.getElementById(targetId)

    /** Validaciones */
    if (!this.btn || !this.menu) {
      console.warn('MenuButton: button or menu element not found.')
      return
    }

    /** Oculta el menú al iniciar */
    this.menu.classList.add('hidden')
    this.btn.setAttribute('aria-expanded', 'false')

    this.btn.addEventListener('click', this.toggleMenu)
  }

  /** Remueve el escuchador del botón */
  disconnectedCallback() {
    this.btn?.removeEventListener('click', this.toggleMenu)
  }

  /** Abre o cierra el menú */
  private toggleMenu = () => {
    if (!this.menu) return
    const expanded = this.menu.classList.contains('hidden')
    this.menu.classList.toggle('hidden', !expanded)
    this.btn.setAttribute('aria-expanded', String(expanded))
  }
}

customElements.define('menu-button', MenuButton)