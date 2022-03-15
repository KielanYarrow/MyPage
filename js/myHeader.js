class Header extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
  this.innerHTML = `

<header>
      <nav id = "header-nav" class="navbar-expand-md navbar-light">
        <div class="container">
          
          <a href="index.html" class="navbar-brand d-none d-sm-block letsFloat">
            <img src="images/Kielan_sketch.jpg" id = "logo-img" alt="Logo image">            
          </a>
          <a href="index.html" class="navbar-brand letsFloat">          
            <h1>Kielan Yarrow's Academic Website</h1>
            <p>Certified "Not Professionally designed" &copy; 2022</p>
          </a>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">
                  Home<br>
                  <i class="bi-house"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Publications.html">
                  Publications<br>
                  <i class="bi-file-pdf-fill"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Research.html">
                  Research themes<br>
                  <i class="bi-graph-up"></i>
                </a>
              </li>                   
              <li class="nav-item">
                <a class="nav-link" href="Code.html">
                  Code<br>
                  <i class="bi-code-slash"></i>
                </a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="Gallery.html">
                  Gallery etc.<br>
                  <i class="bi-images"></i>
                </a>
              </li> 
            </ul>
          </div>

        </div>
      </nav>
  </header>

  `;

}
}

customElements.define('header-component', Header);