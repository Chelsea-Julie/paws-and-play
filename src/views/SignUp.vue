<template>
    <div class="register-container">
      <div class="register-card">
        <div class="register-image">
          <!-- Updated image for a profile-related context -->
          <img src="https://chelsea-julie.github.io/all-images/images/capstone/pexels-barnabas-davoti-31615494-25695963.jpg" alt="Profile Image" />
        </div>
        <div class="form-container">
          <h2 class="register-title">Register</h2>
          <form class="form" @submit.prevent="register">
            <div class="form-control-wrapper">
              <label for="firstName" class="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                class="form-control"
                placeholder="First name"
                v-model="payload.firstName"
                required
              />
            </div>
            <div class="form-control-wrapper">
              <label for="lastName" class="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                class="form-control"
                placeholder="Last name"
                v-model="payload.lastName"
                required
              />
            </div>
            <div class="form-control-wrapper">
              <label for="age" class="form-label">Age</label>
              <input
                type="number"
                id="age"
                class="form-control"
                placeholder="Age"
                v-model="payload.age"
                required
              />
            </div>
            <div class="form-control-wrapper">
              <label for="gender" class="form-label">Gender</label>
              <input
                type="text"
                id="gender"
                class="form-control"
                placeholder="Gender"
                v-model="payload.gender"
                required
              />
            </div>
            <div class="form-control-wrapper">
              <label for="userEmail" class="form-label">Email Address</label>
              <input
                type="email"
                id="userEmail"
                class="form-control"
                placeholder="Email address"
                v-model="payload.userEmail"
                required
              />
            </div>
            <div class="form-control-wrapper">
              <label for="userPwd" class="form-label">Password</label>
              <input
                type="password"
                id="userPwd"
                class="form-control"
                placeholder="Password"
                v-model="payload.userPwd"
                required
              />
            </div>
            <div class="form-control-wrapper">
              <label for="userRole" class="form-label">User Role</label>
              <input
                type="text"
                id="userRole"
                class="form-control"
                placeholder="User Role"
                v-model="payload.userRole"
                required
              />
            </div>
            <div class="form-control-wrapper">
              <label for="profileURL" class="form-label">Profile Link</label>
              <input
                type="url"
                id="profileURL"
                class="form-control"
                placeholder="Profile link"
                v-model="payload.profileURL"
                required
              />
            </div>
            <div class="form-control-wrapper">
              <button type="submit" class="btn btn-submit">Submit</button>
              <button type="reset" class="btn btn-reset">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const payload = reactive({
      firstName: '',
      lastName: '',
      age: 0,
      gender: '',
      userEmail: '',
      userPwd: '',
      userRole: '',
      profileURL: 'https://chelsea-julie.github.io/all-images/images/capstone/pexels-barnabas-davoti-31615494-25695963.jpg'
  })
  
  function register() {
      console.log({...payload});
      
      // store.dispatch('register', payload)
  }
  </script>
  
  <style scoped>
  /* Container and Layout */
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #e8f4f8; /* Light blue background to match contact page */
    padding: 50px;
  }
  
  .register-card {
    display: flex;
    flex-direction: row;
    background-color: #ffffff; /* White background for card */
    border-radius: 20px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    max-width: 1200px; /* Increased max width for larger card */
    width: 100%;
    transform: scale(1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .register-card:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  }
  
  /* Image Section */
  .register-image {
    flex: 2; /* Increased flex value for larger image */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f4f8; /* Light blue background */
  }
  
  .register-image img {
    width: 100%;
    height: auto;
    max-height: 100%; /* Ensure image height scales correctly */
    object-fit: cover;
    border-radius: 0 20px 20px 0;
  }
  
  /* Form Section */
  .form-container {
    flex: 1.5;
    padding: 40px; /* Adjusted padding */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .register-title {
    color: #5b3a29; /* Dark brown color */
    font-size: 34px; /* Adjusted font size */
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
    margin-bottom: 25px;
  }
  
  .form-label {
    color: #a0522d; /* Lighter brown color */
    font-size: 16px;
    margin-bottom: 8px;
    display: block;
  }
  
  /* Input Styling */
  .form-control {
    width: 100%;
    padding: 14px;
    border: 2px solid #d2691e; /* Lighter orange-brown color */
    border-radius: 12px;
    background-color: #ffffff; /* White background for input fields */
    color: #5b3a29;
    font-size: 16px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .form-control:focus {
    border-color: #a0522d; /* Lighter brown color */
    outline: none;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Buttons */
  .btn {
    padding: 14px 20px;
    border-radius: 12px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .btn-submit {
    background-color: #d2691e; /* Orange-brown color for button */
    border: none;
    color: #ffffff;
  }
  
  .btn-submit:hover {
    background-color: #a0522d; /* Lighter brown color for hover effect */
    transform: scale(1.05);
  }
  
  .btn-reset {
    background-color: #5b3a29; /* Dark brown color for reset button */
    border: none;
    color: #ffffff;
  }
  
  .btn-reset:hover {
    background-color: #3d2b1f; /* Darker brown color for hover effect */
    transform: scale(1.05);
  }
  </style>
  