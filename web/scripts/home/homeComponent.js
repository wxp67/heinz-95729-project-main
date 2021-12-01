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
              <a href="#">South American/a>
              <a href="#">Southeast Asian</a>
              <a href="#">Southern</a>
              <a href="#">Southwestern</a>
              <a href="#">Spanish</a>
              <a href="#">Turkish</a>
              <a href="#">Thai</a>
              <a href="#">Vietnamese</a>
              <a href="#">Ukranian</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Price Range
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Below $15</a>
              <a href="#">$15 - $30</a>
              <a href="#">$30 - $50</a>
              <a href="#">above $50</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Service Quality
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Fair Food</a>
              <a href="#">Extraordinary food</a>
              <a href="#">Excellent Food</a>
              <a href="#">Near-perfect Food</a>
              <a href="#">Fair Service</a>
              <a href="#">Extraordinary Service</a>
              <a href="#">Excellent Service</a>
              <a href="#">Near-perfect Service</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Visit preference
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Open on Mondays</a>
              <a href="#">Open on Sundays</a>
              <a href="#">Open on weekends</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Venue Type
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Dining Outdoors</a>
              <a href="#">Dining after Theatre</a>
              <a href="#">Early Dining</a>
              <a href="#">Classic Hotel Dining</a>
              <a href="#">Pre-Theatre Dining</a>
              <a href="#">Down-Home</a>
              <a href="#">After Hours Dining</a>
              <a href="#">Buffet Dining</a>
              <a href="#">Cafe/Garden Dining</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Amenities
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Cab</a>
              <a href="#">Entertainment</a>
              <a href="#">Fabulous Views</a>
              <a href="#">Good Out of Town Business</a>
              <a href="#">Good for Younger Kids</a>
              <a href="#">Late Night Menu</a>
              <a href="#">No Smoking Allowed</a>
              <a href="#">No Liquour Served</a>
              <a href="#">Parking and Valet</a>
              <a href="#">Private rooms available</a>
              <a href="#">Romantic</a>
              <a href="#">Single scene</a>
              <a href="#">Warm space by the fire</a>
              <a href="#">Wheelchair access</a>
            </div>
          </div>
          <div class="dropdown" style="float:center;">
            <button class="dropbtn" style="margin:5px;">Fav Restaurants
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="#">Moti Mahal</a>
              <a href="#">Standard India</a>
              <a href="#">Bukhara</a>
              <a href="#">Clay Oven</a>
              <a href="#">Udipi Palace</a>
              <a href="#">Ethiopian Village</a>
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
