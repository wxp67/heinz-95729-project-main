module.exports = {
  scope: 'heinz',
  name: 'homeComponent',
  dependencies: ['Vue', 'locale'],
  factory: (Vue, locale) => {
    'use strict'

    const component = Vue.component('home', {
      template: `
      <section class="tm-welcome-section">
      <div class="container tm-position-relative">
        <div class="tm-lights-container">
          <img src="/images/restaurants/light.png" alt="Light" class="light light-1" width="600" height="100">
          <img src="/images/restaurants/light.png" alt="Light" class="light light-2">
          <img src="/images/restaurants/light.png" alt="Light" class="light light-3">  
        </div>        
        <div class="row tm-welcome-content">
          <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="/images/restaurants/header-line.png" alt="Line" class="tm-header-line">&nbsp;Welcome To&nbsp;&nbsp;<img src="/images/restaurants/header-line.png" alt="Line" class="tm-header-line"></h2>
          <h2 class="gold-text tm-welcome-header-2">Foodie</h2>
          <p class="gray-text tm-welcome-description">Our website can help you by giving suggestions to find that perfect restaurant crafted for your needs!</p>
          <p span class="gold-text">Hover on the below dropdowns to start searching!</span></p>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Type of Cuisine
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Price Range
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Service Quality Provided
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Day of the Week
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Venue Type
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Amenities provided
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>  
        <div class="row tm-welcome-content">
        <a href="#main" class="tm-more-button tm-more-button-welcome">Find Restaurants!</a>
        </div>      
      </div>      
      </section>`,
    StyleSheet: "",
      data: () => {
        return {
          heading: locale.pages.home.heading,
          body: locale.pages.home.body,
        }
      },
    })

    return { component }
  },
}
