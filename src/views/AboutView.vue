<template>

  <section class="hero">
  <div class="text-content">
    <h1>Buffer Free Car is our Pride</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
    <a href="#">Explore Services →</a>
  </div>
  <div class="carousel">
    <img src="./pexels-poodles2doodles-1458925.jpg" alt="Car Image 1" class="active">
    <!-- <img src="./___1_-removebg-preview.png" alt="Car Image 2">
    <img src="./download__25_-removebg-preview.png" alt="Car Image 3"> -->
  </div>
  </section>

    <!-- Services Section -->
    <section class="services">
        <div class="container">
            <h2>Save time managing your business with our services</h2>
            <div class="service-cards">
                <div class="service-card">
                    <h3>Web Design</h3>
                    <p>Our experts will help you design beautiful, responsive websites.</p>
                </div>
                <div class="service-card">
                    <h3>Development</h3>
                    <p>Develop robust and scalable applications tailored to your needs.</p>
                </div>
                <div class="service-card">
                    <h3>Ecommerce</h3>
                    <p>Grow your business online with our custom eCommerce solutions.</p>
                </div>
            </div>
        </div>
    </section>
  
</template>

<script>

</script>

<style scoped>
/* General Styles */
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #f4f4f4;
    color: #333;
}
.hero {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 80px 100px;
      background: linear-gradient(45deg, rgb(0, 0, 0), rgb(255, 0, 0));
    }
    .hero .text-content {
      max-width: 50%;
    }
    .hero h1 {
      font-size: 48px;
      color: #FFFFFF;
      margin-bottom: 20px;
    }
    .hero p {
      color: #FFFFFF;
      margin-bottom: 20px;
    }
    .hero a {
      text-decoration: none;
      background: #FFFFFF;
      color: white;
      padding: 12px 25px;
      border-radius: 5px;
    }
    /* Carousel */
    .carousel {
      width: 50%;
      position: relative;
    }
    .carousel img {
      width: 100%;
      border-radius: 10px;
      display: none;
    }
    .carousel img.active {
      display: block;
    }
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
}

/* Header Section */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}

.nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
}

.contact-button {
    padding: 10px 20px;
    border: none;
    background-color: #ffcd38;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}

/* Hero Section */
.hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0;
    background-color: #fff;
}

.hero-content {
    max-width: 500px;
}

.hero-content h1 {
    font-size: 42px;
    margin-bottom: 20px;
}

.get-started-button {
    padding: 12px 25px;
    border: none;
    background-color: #ff6f61;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}

.hero-images {
    display: flex;
    gap: 20px;
}

.hero-image {
    width: 150px;
    border-radius: 15px;
}

/* Services Section */
.services {
    padding: 50px 0;
    background-color: #f9f9f9;
    text-align: center;
}

.services h2 {
    margin-bottom: 30px;
    font-size: 28px;
}

.service-cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.service-card {
    flex: 1;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.service-card h3 {
    font-size: 22px;
    margin-bottom: 10px;
}

.service-card p {
    font-size: 16px;
    color: #666;
}

</style>
