 var  firebaseConfig = {
    apiKey: "AIzaSyDIn7o_8myFZzSqnmoNOLX8_5U_zhlomrk",
    authDomain: "gold-jewellery-77cf3.firebaseapp.com",
    projectId: "gold-jewellery-77cf3",
    storageBucket: "gold-jewellery-77cf3.appspot.com",
     databaseURL: "https://gold-jewellery-77cf3-default-rtdb.firebaseio.com",
    messagingSenderId: "102521812769",
    appId: "1:102521812769:web:706713ba5ea411a06b3060"
  };

  // Initialize Firebase

  var app = firebase.initializeApp(firebaseConfig);

  function submitForm() {
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    console.log('Form values:', { name, email, message });
  
   
    firebase.database().ref('userdata').push({
      name: name,
      email: email,
      message: message
    }).then(function() {
   
      alert('Your message has been submitted successfully!');
      
  
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
  
      console.log('Form values after clearing:', {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      });
    }).catch(function(error) {
 
      console.error('Error saving message: ', error);
    });
  }




























$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Initialize the second slider
    $('.slider-2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    });
});
var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});