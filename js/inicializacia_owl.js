$(document).ready(function () {
  $('.carouselTokyo').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $('.carouselKyoto').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $('.carouselOsaka').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $('.carouselHimeji').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
});
