class MainHeader extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    <span class="fs-4"><img src="logos/sm.logo.png" style="width: 300px; background-color:rgb(135, 147, 135); border-radius: 10px 16px;;"></span>
    
  </a>
   
  <ul class="nav nav-pills">
   


    <li class="nav-item"><a href="#" class="nav-link"></a></li>
    <li class="nav-item"><a href="mailto:nazir.camara@gmail.com"></a></li>
    <li class="nav-item"><a href="https://www.youtube.com/@nazircamara7591" class="nav-link"><img src="logos/youtub.png" style="width: 50px;"></a></li>
    <li class="nav-item"><a href="index.html" class="nav-link active" aria-current="page" style="margin: 10px 30px 0px 0px; color: black; background-color:rgb(120, 165, 120);">الصفحة الرئيسية</a></li>
  </ul>
</header>
<div class="back-image"><img src="logos/backImage.png"></div>
 
  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="">
        <form class="d-flex" role="search" style="position: relative; width: 700px; margin: auto;">
          <input class="form-control me-2" type="search" placeholder="بحث Search"  aria-label="Search" style="direction: rtl;">
          <button class="btn btn-outline-success" type="submit" style="font-size: small; height: 50px; width: 200px;">Search  بحث</button>
        </form>
      </div>
    </div>
  </nav>`
    }
}

customElements.define("main-hearder", MainHeader)


class MainFooter extends HTMLElement {
    connectedCallback() {
    this.innerHTML = ` <footer class="py-3 my-4" style="background-color: #7d957d;">
  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <li class="nav-item"><a href="index.html" class="nav-link px-2 text-body-secondary">Home</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">WhatsApp</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Telegram</a></li>
    <li class="nav-item"><a href="mailto:nazircamara@gmail.com" class="nav-link px-2 text-body-secondary">Email Us</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About Us</a></li>
  </ul>
  <p class="text-center text-body-secondary">© 2024 Soninkara Maisi</p>
</footer>
  `
    }
}

customElements.define("main-footer", MainFooter)