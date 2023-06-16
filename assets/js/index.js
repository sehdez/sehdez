
//Detectar si están navegando en una pc o en un celular
  window.onload = function() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|iphone|ipad|android/.test(userAgent);
    const links = document.getElementsByClassName('whats')
    if (isMobile) {
      for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.href = 'https://api.whatsapp.com/send?phone=523334812449&text=Hola,%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte.';
      }
    } else {
      for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.href = 'https://web.whatsapp.com/send?phone=523334812449&text=Hola,%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte.';
      }
    }
  };

  // Función para hacer una petición al servidor de devshop y para encenderlo ya que permanece en reposo si no se hacen peticiones

  const getRequest = async () => {
    try {
      const response = await fetch('https://dev-shop.herokuapp.com/product/women_plaid_mode_tee');
      const data = await response.json();
      console.log(data)
    } catch (error) {
      // Manejar el error aquí
    }
  }
  // getRequest();


// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".advertising",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

  $(document).ready(function() {
   
  });
