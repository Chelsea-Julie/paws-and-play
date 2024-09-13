<template>
    <div class="login-container">
      <div class="login-card">
        <div class="login-image">
          <!-- Replace the src with an appropriate dog-related image -->
          <img src="https://chelsea-julie.github.io/all-images/images/capstone/pexels-camille-c-137933427-16606843.jpg" alt="Welcome to Paws and Play" />
        </div>
        <div class="form-container">
          <h2 class="login-title">Welcome Back!</h2>
          <form class="form" @submit.prevent="login">
            <div class="form-control-wrapper">
              <label for="email" class="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                class="form-control"
                placeholder="Enter your email"
                v-model="payload.emailAdd"
                pattern="^[A-Za-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$"
                required
              />
            </div>
            <div class="form-control-wrapper">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                id="password"
                class="form-control"
                placeholder="Enter your password"
                v-model="payload.pwd"
                minlength="4"
                required
              />
            </div>
            <button type="submit" class="btn btn-login">Login</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex'
  import { reactive } from 'vue'
  
  const store = useStore()
  
  const payload = reactive({
    emailAdd: '',
    pwd: '',
  })
  
  function login() {
    store.dispatch('login', payload)
  }
  </script>
  
  <style scoped>
  /* Container and Layout */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f4f8; /* Soft, light background color for the page */
  padding: 50px;
}

.login-card {
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2; /* Light color for card */
  border-radius: 20px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 1000px; /* Slightly reduced width */
  width: 100%;
  transform: scale(1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.login-card:hover {
  transform: scale(1.02);
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.15);
}

/* Image Section */
.login-image {
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff; /* White background to match contact page */
}

.login-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0 20px 20px 0;
}

/* Form Section */
.form-container {
  flex: 1;
  padding: 40px; /* Slightly reduced padding */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-title {
  color: #5b3a29; /* Dark brown color */
  font-size: 34px; /* Slightly reduced font size */
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  animation: fadeIn 1s ease-in;
}

/* Fade-In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.form-control-wrapper {
  margin-bottom: 25px; /* Slightly reduced margin */
}

.form-label {
  color: #a0522d; /* Lighter brown color */
  font-size: 16px; /* Slightly reduced font size */
  margin-bottom: 8px;
  display: block;
}

/* Input Styling */
.form-control {
  width: 100%;
  padding: 14px; /* Slightly reduced padding */
  border: 2px solid #d2691e; /* Lighter orange-brown color */
  border-radius: 12px;
  background-color: #ffffff; /* White background for input fields */
  color: #5b3a29;
  font-size: 16px; /* Slightly reduced font size */
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-control:focus {
  border-color: #a0522d; /* Lighter brown color */
  outline: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

/* Buttons */
.btn {
  padding: 14px 20px; /* Slightly reduced padding */
  border-radius: 12px;
  font-size: 16px; /* Slightly reduced font size */
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-login {
  background-color: #d2691e; /* Orange-brown color for button */
  border: none;
  color: #ffffff;
}

.btn-login:hover {
  background-color: #a0522d; /* Lighter brown color for hover effect */
  transform: scale(1.05);
}

  </style>
  