<template>
    <div class="contact-page">
      <div class="contact-container">
        <img src="https://chelsea-julie.github.io/all-images/images/capstone/47cc64fa4b884ef038798597aef33e32.jpg" alt="Contact Image" class="contact-image" />
        <div class="form-container">
          <h1>Contact Us</h1>
          <form @submit.prevent="submitForm" action="https://formspree.io/f/meqyyrrl" method="POST">
            <div class="form-group">
              <label for="name">Your Name:</label>
              <input type="text" v-model="form.name" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="email">Your Email:</label>
              <input type="email" v-model="form.email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="phone">Your Phone Number:</label>
              <input type="tel" v-model="form.phone" id="phone" name="phone" required />
            </div>
            <div class="form-group">
              <label for="message">Your Message:</label>
              <textarea v-model="form.message" id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <!-- Success message -->
          <p v-if="formSubmitted" class="success-message">Thank you for your message! We'll be in touch soon.</p>
          <div class="contact-info">
            <p><strong>Address:</strong> 123 Bark Avenue, Puppy Town, PA 12345</p>
            <p><strong>Email:</strong> <a href="mailto:info@doggydaycare.com">info@doggydaycare.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          message: ''
        },
        formSubmitted: false
      };
    },
    methods: {
      submitForm() {
        // Simple form validation
        if (this.form.name && this.form.email && this.form.phone && this.form.message) {
          // The form will be submitted to Formspree
          this.form = { name: '', email: '', phone: '', message: '' };
          this.formSubmitted = true;
        } else {
          alert('Please fill in all fields.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-page {
    background-color: #F5F5F5; /* Light gray background color */
    padding: 50px 0;
  }
  
  .contact-container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-family: Arial, sans-serif;
  }
  
  .contact-image {
    flex: 1;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-right: 20px;
  }
  
  .form-container {
    flex: 2;
  }
  
  h1 {
    text-align: center;
    color: #D2691E; /* Chocolate color */
  }
  
  .contact-info {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .contact-info p {
    font-size: 18px;
    color: #A0522D; /* Sienna color */
  }
  
  .contact-info a {
    color: #5B3A29; /* Darker brown color */
    text-decoration: none;
  }
  
  .contact-info a:hover {
    text-decoration: underline;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-size: 16px;
    margin-bottom: 5px;
    display: block;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  textarea {
    resize: vertical;
    height: 150px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #D2691E; /* Chocolate color */
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #A0522D; /* Sienna color */
  }
  
  .success-message {
    text-align: center;
    color: green;
    margin-top: 20px;
  }
  </style>
  