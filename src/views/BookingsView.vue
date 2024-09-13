<template lang="">
   

    <!-- Hero Section -->
    <section class="hero">
        <div class="form-section">
            <h1>Yay, We Love Your Pets!</h1>
            <p>Please give us basic information. Thanks!</p>
            <form class="form">
                <input type="date" placeholder="Check-in Date">
                <input type="date" placeholder="Check-out Date">
                <input type="text" placeholder="Pet Type">
                <input type="text" placeholder="Your Name">
                <button type="submit">Book!</button>
            </form>
        </div>
        <div class="image-section">
            <img src="https://chelsea-julie.github.io/all-images/images/capstone/b397567d7e407e6d712fe51837efb5a4.jpg" alt="Dog Image">
            <div class="say-woof">
                <p>Say Woof!</p>
            </div>
        </div>
    </section>



    <!-- Services Section -->
    <section class="services">
        <h2>Pet Care With Love</h2>
        <p>We offer high-class care services and activities for your pets. No matter what accommodation type you choose, your pet will always receive premium meals, daily exercise, and constant care.</p>

        <div class="service-list">
            <div class="service-item">
                <img src="https://chelsea-julie.github.io/all-images/images/capstone/36ee35b3f48f3a7887110f5b50f78de1.jpg" alt="Best Grooming">
                <h4>Best Grooming</h4>
                <p>Our grooming services include baths, haircuts, nail trimming, and ear cleaning. We use high-quality products and methods to ensure your pet looks and feels their best. Our skilled groomers provide personalized attention to meet each pet's unique grooming needs, ensuring a comfortable and enjoyable experience.</p>
            </div>
            <div class="service-item">
                <img src="https://chelsea-julie.github.io/all-images/images/capstone/3e7aeb3850255d9ffb70f499bc92c40f.jpg" alt="Dog Training">
                <h4>Dog Training</h4>
                <p>Our dog training programs focus on developing good behavior and obedience. We use positive reinforcement techniques to make learning fun and effective. Whether you need basic command training or help with specific behavior issues, our experienced trainers tailor programs to meet your dog's needs and enhance their skills.</p>
            </div>
            <div class="service-item">
                <img src="https://chelsea-julie.github.io/all-images/images/capstone/pexels-cottonbro-6568949.jpg" alt="Special Diet">
                <h4>Special Diet</h4>
                <p>We offer tailored meal plans to address your pet's dietary needs. Our nutrition experts create balanced diets for pets with special requirements or preferences. Using high-quality ingredients, we ensure each meal supports your pet's health and well-being, providing a nutritious and enjoyable dining experience.</p>
            </div>
            <div class="service-item">
                <img src="https://chelsea-julie.github.io/all-images/images/capstone/2cc30e87af062d819b2ad4bd57aa48a5.jpg" alt="Vet Services">
                <h4>Vet Services</h4>
                <p>Our veterinary services cover routine check-ups, vaccinations, and medical treatments. We focus on preventative care and early detection of health issues. Our compassionate veterinarians provide thorough examinations and tailored treatments to keep your pet healthy and happy, ensuring their ongoing well-being.</p>
            </div>
        </div>

        <!-- Bar Chart Section -->
        <!-- <div class="chart">
            <h3>The most requested services by our clients</h3>
            <ul>
                <li>Dog Care <span>42%</span></li>
                <li>Cat Care <span>34%</span></li>
                <li>Exotic Pet Care <span>24%</span></li>
            </ul>
        </div> -->
    </section>

 
 </template>
 <script>
 export default {
     
 }
 </script>
 <style scoped>
   /* General Styles */

/* Hero Section */
.hero {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    background-color: hsl(46, 100%, 97%);
}

.form-section {
    width: 40%;
}

.form-section h1 {
    font-size: 2.8rem;
    color: #f7941d;
    margin-bottom: 10px;
}

.form-section p {
    font-size: 1.1rem;
    color: #666;
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
}

.hero-dog {
    max-width: 100%;
    height: auto;
    object-fit: cover;
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
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Categories Section */
.categories {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    background-color: #f9f9f9;
}

.category {
    text-align: center;
    flex: 1;
}

.category img {
    width: 100px;
    height: 100px;
    border-radius: 15px;
    margin-bottom: 10px;
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
}

.services h2 {
    font-size: 2.5rem;
    color: #f7941d;
}

.services p {
    font-size: 1.1rem;
    margin: 20px 0 30px;
}

.service-list {
    display: flex;
    justify-content: space-between;
}

.service-item {
    width: 22%;
    text-align: center;
}

.service-item img {
    width: 100px; /* Increased size */
    height: auto; /* Maintain aspect ratio */
    margin-bottom: 10px;

}

.service-item h4 {
    font-size: 1.1rem;
}

/* Chart */
.chart {
    margin-top: 50px;
    text-align: left;
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

 </style>