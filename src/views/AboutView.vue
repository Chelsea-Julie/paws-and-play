<template>
    <section class="about-us-section">
      <!-- Sailor's Hero Section -->
      <div class="hero">
        <div class="hero-text">
          <h1 class="hero-title">About Us</h1>
          <h2 class="hero-subtitle">Paws and Play</h2>
          <p class="hero-description">
            At Paws and Play, we’re dedicated to providing a fun, safe, and loving environment where your furry friends can thrive. 
            Our passionate team of dog lovers brings years of experience to ensure that each dog receives personalized care, attention,
             and plenty of playtime. Whether your pup is a social butterfly or a more reserved companion, we offer a range of activities 
             and enrichment tailored to their needs. Our facility is equipped with state-of-the-art amenities and is designed to make every 
             visit enjoyable. At Paws and Play, we treat every dog like family because we know that each one deserves the best. Join us and 
             let your dog experience the joy and excitement of their new favorite place!
          </p>
        </div>
        <div class="hero-image">
          <img src="https://chelsea-julie.github.io/all-images/images/capstone/istockphoto-2163581030-612x612.jpg" alt="Sailor main image" />
        </div>
      </div>
    
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
  };
  </script>
  
  <style scoped>
    /* General Styles */
    body {
        background-color: hsl(46, 100%, 97%);
        margin: 0;
        font-family: Arial, sans-serif;
        transition: background-color 0.5s ease;
    }

    /* Hero Section */
    .hero {
        display: flex;
        justify-content: space-between;
        padding: 50px;
        background-color: hsl(46, 100%, 97%);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        animation: fadeIn 1.5s ease-out;
    }

    .form-section {
        width: 40%;
        animation: slideInFromLeft 1s ease-out;
    }

    .form-section h1 {
        font-size: 2.8rem;
        color: #f7941d;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        animation: fadeInUp 1s ease-out;
    }

    .form-section p {
        font-size: 1.1rem;
        color: #666;
        animation: fadeInUp 1.2s ease-out;
    }

    .form-section form input,
    .form-section form button {
        display: block;
        width: 100%;
        margin: 15px 0;
        padding: 15px;
        font-size: 1rem;
        border-radius: 10px;
        border: none;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .form-section form input:focus,
    .form-section form button:hover {
        background-color: #f2f2f2;
        transform: scale(1.02);
    }

    .form-section form button {
        background-color: #f7941d;
        color: white;
        cursor: pointer;
        font-weight: bold;
    }

    .image-section {
        width: 35%;
        position: relative;
        text-align: center;
        animation: slideInFromRight 1s ease-out;
    }

    .hero-dog {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .hero-dog:hover {
        transform: scale(1.05);
    }

    .say-woof {
        position: absolute;
        top: -10px;
        right: -50px;
        background-color: #f7941d;
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-size: 1.2rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        animation: bounce 2s infinite;
    }

    /* Categories Section */
    .categories {
        display: flex;
        justify-content: space-between;
        padding: 50px;
        background-color: #f9f9f9;
        animation: fadeIn 1.5s ease-out;
    }

    .category {
        text-align: center;
        flex: 1;
        animation: fadeInUp 1s ease-out;
    }

    .category img {
        width: 100px;
        height: 100px;
        border-radius: 15px;
        margin-bottom: 10px;
        transition: transform 0.3s ease;
    }

    .category img:hover {
        transform: scale(1.1);
    }

    .category h3 {
        font-size: 1.2rem;
        color: #333;
    }

    /* Services Section */
    .services {
        background-color: #fff;
        padding: 50px;
        text-align: center;
        animation: fadeIn 1.5s ease-out;
    }

    .services h2 {
        font-size: 2.5rem;
        color: #f7941d;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .services p {
        font-size: 1.1rem;
        margin: 20px 0 30px;
    }

    .service-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .service-item {
        width: 22%;
        text-align: center;
        margin-bottom: 20px;
        animation: fadeInUp 1s ease-out;
    }

    .service-item img {
        width: 100px;
        height: auto;
        margin-bottom: 10px;
        transition: transform 0.3s ease;
    }

    .service-item img:hover {
        transform: scale(1.1);
    }

    .service-item h4 {
        font-size: 1.1rem;
    }

    /* Chart */
    .chart {
        margin-top: 50px;
        text-align: left;
        animation: fadeIn 1.5s ease-out;
    }

    .chart h3 {
        font-size: 1.2rem;
        color: #333;
    }

    .chart ul {
        list-style: none;
        padding: 0;
    }

    .chart li {
        font-size: 1rem;
        margin-bottom: 10px;
    }

    .chart li span {
        float: right;
        color: #f7941d;
    }

    /* Keyframes */
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInFromLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInFromRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-10px);
        }
    }
</style>
