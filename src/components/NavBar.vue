<template>

    <nav class="navbar navbar-expand-lg navbar-warm sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="https://chelsea-julie.github.io/all-images/images/capstone/pawsandplay.png" alt="logo" style="width: 5rem;">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/about">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/doggydaycare">Doggy Daycare</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/sleepovers">Sleepovers</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/ratespackages">Rates & Packages</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/bookings">Bookings</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/contact">Contact Us</router-link>
            </li>
            <!-- Add margin before Login & Sign Up links -->
            <li class="nav-item ms-lg-4">
              <router-link class="nav-link login-link" active-class="active" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link signup-link" active-class="active" to="/signup">Sign Up</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar-warm {
    background-color: #F7D6A0; /* Soft beige tone to match a cozy theme */
    padding: 1rem;
  }
  
  .navbar-brand img {
    width: 4rem;
    height: auto;
  }
  
  .navbar-nav .nav-link {
    color: #5B3A29; /* Warm brown color */
    padding: 0.75rem 1.25rem;
    font-weight: 500;
    font-size: 1rem;
  }
  
  .navbar-nav .nav-link:hover {
    color: #D2691E; /* Cozy burnt orange on hover */
    background-color: #FFF4E6;  
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .navbar-nav .nav-link.active {
    color: #FFFFFF;
    background-color: #A0522D; /* Darker brown for active link */
    border-radius: 5px;
  }
  
  /* Specific styling for Login and Sign Up links */
  .navbar-nav .login-link {
    color: #5B3A29;
  }
  
  .navbar-nav .signup-link {
    color: #FFFFFF;
    background-color: #D2691E; /* Burnt orange for standout Sign Up button */
    border-radius: 5px;
    padding: 0.75rem 1.25rem;
  }
  
  /* Add space between login and the rest of the links */
  .nav-item.ms-lg-4 {
    margin-left: 1.5rem; /* Add space to the left of the login link on large screens */
  }
  </style>
  