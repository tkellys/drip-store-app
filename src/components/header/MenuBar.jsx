import React from "react"
import { Image } from "react-bootstrap"


export const MenuBar = () => {
    return( 
<header class="p-3 text-bg-dark">
    <div class="container">
      <div class="justify-content-center">
          <Image class="bi me-2" width="40" height="32" role="img" aria-label="College" src="src\assets\logoDC.png"/>
          <a href="/" id="nome-loja" class="align-self-end text-decoration-none">Digital Store
          </a>

          <div class="container d-flex flex-wrap justify-content-center">
          <form class="d-flex align-items-start justify-content-center" role="search">
          <input type="search" class="form-control form-control-dark text-bg-white" placeholder="Tenis..." aria-label="Search">
          </input>
          </form> 

        <div class="col-2 d-flex align-items-top justify-content-center">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>

        <div class="container d-flex flex-wrap justify-content-center">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0">
          <li><a href="#" class="align-self-end nav-link px-3 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-3 text-white">Produtos</a></li>
          <li><a href="#" class="nav-link px-3 text-white">Categorias</a></li>
          <li><a href="#" class="nav-link px-3 text-white">Meus Pedidos</a></li>
      
        </ul>

      </div>
      </div>
    </div>
    </div>
  </header>
  )
  }

