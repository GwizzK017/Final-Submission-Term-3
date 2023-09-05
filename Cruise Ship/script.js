$(document).ready(function () {
   console.log('Document is ready.');

   // Replace #Welcome element with a welcome message
   $("#Welcome").replaceWith("<h1 id='Welcome'>Welcome to RogueTide Expeditions</h1>");
   console.log('Welcome message replaced.');

   // Your OpenWeather API key (replace with your actual API key)
   const apiKey = "YOUR_OPENWEATHER_API_KEY"; // Replace with your actual API key

   // Function to fetch and display weather data
   function fetchWeatherData() {
       // Example: Fetch weather data for Cape Town, South Africa
       fetch(`https://api.openweathermap.org/data/2.5/weather?id=964420&appid=${apiKey}`)
           .then((response) => response.json())
           .then((data) => {
               const weatherDescription = data.weather[0].description;
               const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius

               const weatherHTML = `
                   <p>Weather in Cape Town, South Africa:</p>
                   <p>Description: ${weatherDescription}</p>
                   <p>Temperature: ${temperature}°C</p>
               `;

               $('.weather-data').html(weatherHTML);
               console.log('Weather data fetched and displayed.');
           })
           .catch((error) => {
               console.error("Error fetching weather data: ", error);
               $('.weather-data').html("<p>Failed to fetch weather data.</p>");
           });
   }

   // Call the fetchWeatherData function to load weather data
   fetchWeatherData();

   // JavaScript to make the accordion work
   $('.accordion-header').click(function () {
       const content = $(this).next();

       if (content.is(':visible')) {
           content.slideUp();
       } else {
           content.slideDown();
       }
       console.log('Accordion header clicked.');
   });

   // JavaScript to handle image click
   $(".image").click(function () {
       $("#image").attr("src", "add_shopping_cart_FILL0_wght400_GRAD0_opsz48.svg");
       console.log('Image clicked.');
   });

   // JavaScript to handle logo hover
   $(".logo").hover(function () {
       // over
       $(this).css({ "color": "#D59E38" });
       console.log('Logo hovered (mouse over).');
   }, function () {
       // out
       $(this).css({ "color": "#000000" });
       console.log('Logo hovered (mouse out).');
   });

   // JavaScript to hide table data on button click
   $("#r_a").click(function () {
       $("td").hide();
       console.log('r_a button clicked.');
   });

   // JavaScript to handle button hover (remove and remove1)
   $("#remove, #remove1").hover(function () {
       // over
       $(this).css({ "background-color": "blue" });
       console.log('Button hovered (mouse over).');
   }, function () {
       // out
       $(this).css({ "background-color": "transparent" });
       console.log('Button hovered (mouse out).');
   });

   // JavaScript to hide table rows on remove and remove1 button click
   $("#remove").click(function () {
       $("#r1").hide();
       console.log('remove button clicked.');
   });

   $("#remove1").click(function () {
       $("#r2").hide();
       console.log('remove1 button clicked.');
   });

   // JavaScript to handle purchase and submit button click
   $("#purchase, #submit").click(function () {
       alert("Purchase Successful");
       console.log('Purchase/Submit button clicked.');
   });

   // JavaScript for mobile menu toggle
   let menu = $('#menu-btn');
   let navbar = $('.header .navbar');

   menu.click(function () {
       menu.toggleClass('fa-times');
       navbar.toggleClass('active');
       console.log('Menu button clicked.');
   });

   // JavaScript to reset mobile menu on page scroll
   $(window).scroll(function () {
       menu.removeClass('fa-times');
       navbar.removeClass('active');
       console.log('Page scrolled.');
   });

   // Initialize Swiper sliders
   var homeSwiper = new Swiper(".home-slider", {
       loop: true,
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
       },
   });
   console.log('Home slider initialized.');

   var reviewsSwiper = new Swiper(".reviews-slider", {
       grabCursor: true,
       loop: true,
       autoHeight: true,
       spaceBetween: 20,
       breakpoints: {
           0: {
               slidesPerView: 1,
           },
           700: {
               slidesPerView: 2,
           },
           1000: {
               slidesPerView: 3,
           },
       },
   });
   console.log('Reviews slider initialized.');

   // Load more packages on button click
   let loadMoreBtn = $('.packages .load-more .btn');
   let currentItem = 3;

   loadMoreBtn.click(function () {
       let boxes = $('.packages .box-container .box');
       for (var i = currentItem; i < currentItem + 3; i++) {
           if (boxes[i]) {
               boxes.eq(i).css('display', 'inline-block');
           }
       }
       currentItem += 3;
       if (currentItem >= boxes.length) {
           loadMoreBtn.css('display', 'none');
       }
       console.log('Load more button clicked.');
   });

   console.log('All event listeners are set.');
});
