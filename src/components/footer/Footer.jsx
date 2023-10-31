import React from 'react'
import iconesBrands from '../../assets/iconesBrands/dc_branco.png'
import iconeFace from '../../assets/iconesBrands/facebook.png'
import iconeInsta from '../../assets/iconesBrands/instagram.png'
import iconeTwitter from '../../assets/iconesBrands/twitter.png'
import './Footer.css'
import { Row } from 'react-bootstrap'

export const Footer = () => {
  return (
  <div class="footer">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-bottom">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <img class="bi me-2" width="40" src={iconesBrands} height="32"/>
        <span>Digital Store</span>
      </a>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi voluptatum, at voluptatem aspernatur fuga molestias alias corrupti culpa enim dolor minus facilis officiis iure, cum suscipit magnam odio esse!</p>
      <div class="d-flex justify-content-around">
      <img src={iconeFace} />
      <img src={iconeInsta} />
      <img src={iconeTwitter}/>
      </div>
    </div>
   
    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>
    
  </footer>
  <div class="">
     <p id='data-desenvolvimento' class="text-muted "> © 2022</p>
     </div>
</div>
);
  };