/* ==========================mobile scroll start======================= */
//register the scroll event
window.addEventListener('scroll', onScroll, false);

//Get all the section reference
var sectionOne = document.querySelector('.frame1');
var sectionTwo = document.querySelector('.frame2');
var sectionThree = document.querySelector('.frame3');
var sectionForth = document.querySelector('.frame4');
var sectionFivth = document.querySelector('.frame5');
var sectionSixth = document.querySelector('.frame6');
var sectionSeventh = document.querySelector('.frame7');

//Calculate their individual height
var SectionOneHeight = getComputedStyle(sectionOne).height.split('vh')[0];
var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('vh')[0];
var SectionThreeHeight = getComputedStyle(sectionThree).height.split('vh')[0];
var SectionForthHeight = getComputedStyle(sectionForth).height.split('vh')[0];
var SectionFivthHeight = getComputedStyle(sectionFivth).height.split('vh')[0];
var SectionSixthHeight = getComputedStyle(sectionSixth).height.split('vh')[0];
// var SectionSeventhHeight = getComputedStyle(sectionSeventh).height.split('vh')[0];

//calculate the checkpoint where item need to be modified
var checkPointOne = parseFloat(SectionOneHeight);
var checkPointTwo = checkPointOne + parseFloat(SectionTwoHeight);
var checkPointThree = checkPointTwo + parseFloat(SectionThreeHeight);
var checkPointForth = checkPointThree + parseFloat(SectionForthHeight);
var checkPointFivth = checkPointForth + parseFloat(SectionFivthHeight);
// var checkPointSixth = checkPointFivth + parseFloat(SectionSixthHeight);

//Scroll logic
function onScroll() {
  //get the current scrollbar position
  var scrollBarPosition = window.pageYOffset | document.body.scrollTop
  // console.log(scrollBarPosition + ' : ' + checkPointOne)
  //First section is already fixed
  if (scrollBarPosition >= 0 && scrollBarPosition < checkPointOne) {
    removeClass(sectionTwo, sectionThree)
  } else if (scrollBarPosition > checkPointOne && scrollBarPosition <= checkPointTwo) {
    addClass(sectionTwo, sectionThree, checkPointTwo)
    removeClass(sectionThree, sectionForth)
  } else if (scrollBarPosition > checkPointTwo && scrollBarPosition <= checkPointThree) {
    addClass(sectionThree, sectionForth, checkPointThree)
    removeClass(sectionForth, sectionFivth)
  } else if (scrollBarPosition > checkPointThree && scrollBarPosition <= checkPointForth) {
    addClass(sectionForth, sectionFivth, checkPointForth)
    removeClass(sectionFivth, sectionSixth)
  } else if (scrollBarPosition > checkPointForth && scrollBarPosition <= checkPointFivth) {
    addClass(sectionFivth, sectionSixth, checkPointFivth)
  }
}

function addClass(elemOne, elemTwo, margin) {
  elemOne.classList.add('fixed');
  elemTwo.style.marginTop = (margin) + 'px';
}

function removeClass(elemOne, elemTwo) {
  elemOne.classList.remove('fixed');
  elemTwo.style.marginTop = '0px';
}
/* ==========================mobile scroll end======================= */





















// const parallax = document.getElementById("parallax");

// // Parallax Effect for DIV 1
// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = offset * 0.7 + "px";
//   // DIV 1 background will move slower than other elements on scroll.
// });



$(document).ready(function () {
  $('#toggle').click(function () {
    $(this).addClass('active');
    $('#overlay').addClass('open');
  });


  $('#nav_close').click(function () {
    $(this).removeClass('active');
    $('#overlay').removeClass('open');
  });

});

$('.carousel .carousel-item').each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});

document.addEventListener("DOMContentLoaded", function () 
{
  let e = document.getElementById("storybtn"),
    ee = document.getElementById("mobstorybtn"),
    tt = document.getElementById("mobservicebtn"),
    ss = document.getElementById("mobcrewbtn"),
    ii = document.getElementById("mobnewsroombtn"),
    t = document.getElementById("servicebtn"),
    s = document.getElementById("teambtn"),
    i = document.getElementById("newsroombtn"),
    n = document.getElementById("our-story-nav"),
    a = document.getElementById("our-services-nav"),
    l = document.getElementById("our-crew-nav"),
    o = document.getElementById("our-newsroom-nav"),
    c = document.getElementById("our-home"),
    r = document.getElementById("contact-btn"),
    d = new bootstrap.Modal(document.getElementById("storymodal")),
    m = new bootstrap.Modal(document.getElementById("storymodal1")),
    f = document.querySelector(".modal-body"),
    v = document.querySelector(".navbar"),
    p = document.querySelector(".close"),
    h = document.querySelector(".btn-close"),
    g = document.querySelector(".pke_logo_bg"),
    y = document.querySelector(".pineapple-logo"),
    E = document.querySelector(".storyclose"),
    b = document.querySelector(".stoclose"),
    mobtogg = document.querySelector(".mobtogg"),

    mobstory = document.querySelector("#our-story-mob");
  mobserv = document.querySelector("#our-ser-mob");
  mobcrew = document.querySelector("#our-crew-mob");
  mobnews = document.querySelector("#our-news-mob");
  mobhome = document.querySelector("#home-mob");

  overlay = document.querySelector("#overlay");
  toggle = document.querySelector("#toggle");


  n.style.color = "#561d6f";
  a.style.color = "#561d6f";
  l.style.color = "#561d6f";
  o.style.color = "#561d6f";
  c.style.color = "#561d6f";
  r.style.color = "#561d6f";

  mobstory.style.color = "#ffffff";
  mobserv.style.color = "#ffffff";
  mobcrew.style.color = "#ffffff";
  mobnews.style.color = "#ffffff";
  mobhome.style.color = "#ffffff";

  // on close navbar
  function _() {
    (v.style.backgroundColor = "#ffffff8f"),
      (v.style.boxShadow = "0px -8px 20px #00000054"),
      (g.style.display = "block"),
      (y.src = "../assets/logo.png"),
      (n.style.color = "#561d6f"),
      (a.style.color = "#561d6f"),
      (l.style.color = "#561d6f"),
      (o.style.color = "#561d6f"),
      (c.style.color = "#561d6f"),
      (toggle.style.color = "#000000"),
      (r.style.color = "#561d6f"),
      (r.style.borderColor = "#561d6f"),
      (r.style.backgroundColor = "transparent"),
      r.addEventListener("mouseover", () => {
        (r.style.backgroundColor = "#561d6f"), (r.style.color = "#fff");
      }),
      r.addEventListener("mouseout", () => {
        (r.style.backgroundColor = "transparent"), (r.style.color = "#561d6f");
      });
  }
  // on open navbar
  function I() {
    (v.style.backgroundColor = "#1c0227"),
      (v.style.boxShadow = "none"),
      (g.style.display = "none"),
      (y.src = "../assets/logo_w.png"),
      (n.style.color = "#ffffff"),
      (a.style.color = "#ffffff"),
      (l.style.color = "#ffffff"),
      (o.style.color = "#ffffff"),
      (c.style.color = "#ffffff"),
      (r.style.color = "#ffffff"),
      (toggle.style.color = "#ffffff"),
      (r.style.borderColor = "#ffffff"),
      (r.style.backgroundColor = "transparent"),
      r.addEventListener("mouseover", () => {
        (r.style.backgroundColor = "#ffc107"), (r.style.color = "#ffffff");
      }),
      r.addEventListener("mouseout", () => {
        (r.style.backgroundColor = "transparent"), (r.style.color = "#ffffff");
      });
  }

  mobserv.addEventListener("click", function () {
    I();
    overlay.classList.remove("open");
    m.show();
  });

  tt.addEventListener("click", function () {
    I();
    overlay.classList.remove("open");
    m.show();
  });


  mobstory.addEventListener("click", function () {
    overlay.classList.remove("open");
    A();
  });

  ee.addEventListener("click", function () {
    overlay.classList.remove("open");
    A();
  });

  mobcrew.addEventListener("click", function () {
    overlay.classList.remove("open");
    T();
  });

  ss.addEventListener("click", function () {
    overlay.classList.remove("open");
    T();
  });

  mobnews.addEventListener("click", function () {
    overlay.classList.remove("open");
    k();
  });

  ii.addEventListener("click", function () {
    overlay.classList.remove("open");
    k();
  });

  function A() {
    I(),
      m.hide(),
      d.show(),
      (f.innerHTML = ""),
      (f.innerHTML = `
        <div class="container p-1">
              <div class="our-story-modal row p-5">
                <h5 class="modal-title">Our Story</h5>
                <h3 class="modal-subtitle my-3">A DRIVE TO ENTERTAINMENT: SERVING LAUGHTER AND INSPIRATION</h3>

                <p class="my-2">Making Entertainment Extraordinary</p>

                <p class="my-2">We are the ultimate launchpad for talented content creators.</p>

                <p class="my-2">With an approach to giving opportunity to individuals to entertain people, we are aiming to transform the entertainment landscape and create unforgettable experiences for audiences worldwide.</p>

                <p class="my-2">It all started when three friends went on a drive, feeling a little bored.</p>

                <p class="my-2">Deciding to solve the problem of boredom by keeping everyone entertained, every day, Pineapple Khichadi was born in 2021, exploring the possibilities of different realms of entertainment in the digital space.</p>

                 <p class="my-2">From diverse backgrounds and with extensive experience in media, technology, and finance, Pineapple Khichadi comes together to offer a visual feast, capturing the spicy, sour, and sweet moments of everyday life- amusingly portraying the real-life situations, the unexpected moments, and the relatable ones in the most humorous of ways.</p>
                 
                 <p class="my-2">Bringing newness to entertainment and empowering content creators by recognizing the value of their creative pursuits in the digital space, we are here to offer boundless entertainment with a cinematic experience that stands out from the crowd and meets everyone’s entertainment needs.</p>
                 
                 <p class="my-2">We are Pineapple Khichadi. Here to Inspire, Entertain, and Motivate.</p>

              </div>
            </div>
            <div class="infographic container-fluid">
              <h1 class="text-center p-5 m-5">Infographic</h1>
            </div>
            <div class="container p-1">
              <div class="our-story-modal row p-5">
                <h5 class="modal-title">Mission:</h5>
                <h3 class="modal-subtitle my-3">OPENING DOORS TO CREATIVE FREEDOM: FUELLING CREATIVITY, UNLEASHING BRILLIANCE</h3>

                <p class="my-2">To empower content creators to make their best work and get it in front of the audience they deserve.</p>

                <p class="my-2">Aiming to showcase a diverse range of content creators and their unique perspectives, at Pineapple Khichadi we give a platform to content creators and the freedom to express themselves creatively in the entertainment industry.</p>

                <h5 class="modal-title mt-5">Vision:</h5>
                <h3 class="modal-subtitle my-3">THE GATEWAY TO ENTERTAINMENT- OUR VISION TO CAPTIVATE AUDIENCE</h3>

                <p class="my-2">To become a leading entertainment and content provider through giving opportunity and development to people with talents to showcase their unique and quality content to fulfil all the viewers. </p>

                <p class="my-2">As a leading content and entertainment provider we stay at the forefront of technology hand-in-hand with creativity that brings freshness to content that is viewed by the audiences.</p>

                <div class="button-container d-flex justify-content-center align-items-center my-5">
                  <button class="backbtn2 btn btn-outline-warning px-5 py-3"  data-bs-dismiss="modal">Back to Main Screen</button>
             
                  <p>
                    &emsp;<br> 
                  </p>

          
                </div>
                

              </div>
            </div>
      `);
    let e = document.querySelector(".backbtn2");
    e.addEventListener("click", function () 
    {
      _();
    });
  }
  function T() {
    I(),
      m.hide(),
      d.show(),
      (f.innerHTML = ""),
      (f.innerHTML = `<div class="container p-1">
              <div class="our-story-modal row p-5">
                <h5 class="modal-title">Crew</h5>

                <h3 class="modal-subtitle my-3">BEHIND-THE SCENES CREATORS</h3>

                <p>Our team of professionals who are making the magic happen for you to get entertained.</p>

                <div class="row my-3">
                <div class="col-xl-6 col-md-12 ">
                    <div class="image-container">
                        <div class="violet-rectangle">
                            <img class="crew-img img-fluid " src="../PKE Images/5.jpg">
                            <img class="pineapple-crew" src="../assets/pineapple-half.png">
                            <h6 class="left-desig">Director</h6>
                            <h5 class="left-name">SACHU</h5>
                        </div>
                    </div>
                </div>


                <div class="col-xl-6 col-md-12   left_team mt-5 mt-lg-5">
                    <div class="image-container mt-3 mt-lg-5">
                        <div class="violet-rectangle1">
                            <img class="crew-img img-fluid " src="../PKE Images/6.jpg">
                            <img class="pineapple-crew1" src="../assets/pineapple-half.png">
                            <h6 class="right-desig">Associate<br> Director</h6>
                            <h5 class="right-name">LATHEESH<br> ACHARYA</h5>


                        </div>

                    </div>
                </div>


            </div>


            <div class="row mt-5">
                <div class="col-xl-6 col-md-12">
                    <div class="image-container">
                        <div class="violet-rectangle">
                            <img class="crew-img img-fluid " src="../PKE Images/5.jpg">
                            <img class="pineapple-crew" src="../assets/pineapple-half.png">
                            <h6 class="left-desig">Director</h6>
                            <h5 class="left-name">SACHU</h5>
                        </div>
                    </div>
                </div>


                <div class="col-xl-6 col-md-12 left_team mt-5 mt-lg-5">
                    <div class="image-container mt-3 mt-lg-5">
                        <div class="violet-rectangle1">
                            <img class="crew-img img-fluid " src="../PKE Images/6.jpg">
                            <img class="pineapple-crew1" src="../assets/pineapple-half.png">
                            <h6 class="right-desig">Associate<br> Director</h6>
                            <h5 class="right-name">LATHEESH<br> ACHARYA</h5>


                        </div>

                    </div>
                </div>




                <div class="col-lg-12 mt-5">

                    <div class="button-container d-flex justify-content-center align-items-center my-5">
                        <button class="backbtn3 btn btn-outline-warning px-5 py-3" data-bs-dismiss="modal">Back to Main
                            Screen</button>
                    </div>
                </div>
            </div>

              </div>
            </div>`);
    let e = document.querySelector(".backbtn3");
    e.addEventListener("click", function () {
      _();
    });
  }
  function k() {
    I(),
      m.hide(),
      d.show(),
      (f.innerHTML = ""),
      (f.innerHTML = `<div class="container p-1">
              <div class="our-story-modal row p-5">
                

                <div class="row">

                  <div class="col-sm-12 col-xl-6">
                  <h5 class="modal-title">Newsroom</h5>
                    <img class="img-fluid mt-4" src="../PKE Images/2.jpg">
                    <h4 class="modal-subtitle mt-4">MAKING ENTERTAINMENT EXTRAORDINARY ENTERTAINMENT</h4>
                    <p class="mb-0">It all started when three friends went on a drive.</p>
                    <small>12 May 2023</small>
                  </div>

                  <div class="col-sm-12 col-xl-6">
                    <div class="row">
                      <div class="col-md-4 col-sm-12">
                        <img class="img-fluid mt-4" src="../PKE Images/3.jpg">
                      </div>
                      <div class="col-md-8  col-sm-12">
                        <h5 class="mt-4 fw-bold text-white">MAKING ENTERTAINMENT EXTRAORDINARY</h5>
                        <p class="news_p">It all started when three friends went on a drive.</p>
                        <small>12 May 2023</small>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12"> 
                        <span style="border-top : 1px solid #707070; width: 100%;display: block; " class="mt-4 mb-3"> </span>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-4  col-sm-12">
                        <img class="img-fluid mt-3" src="../PKE Images/1.jpg">
                      </div>
                      <div class="col-md-8 col-sm-12">
                        <h5 class="mt-3 fw-bold text-white">MAKING ENTERTAINMENT EXTRAORDINARY</h5>
                        <p class="news_p">It all started when three friends went on a drive.</p>
                        <small>12 May 2023</small>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12"> 
                        <span style="border-top : 1px solid #707070; width: 100%;display: block; " class="mt-4 mb-3"> </span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4 col-sm-12">
                        <img class="img-fluid mt-3" src="../PKE Images/4.jpg">
                      </div>
                      <div class="col-md-8 col-sm-12">
                        <h5 class="mt-3 fw-bold text-white">MAKING ENTERTAINMENT EXTRAORDINARY</h5>
                        <p class="news_p">It all started when three friends went on a drive.</p>
                        <small>12 May 2023</small>
                      </div>
                    </div>
                  </div>

                </div>
         
                <div class="button-container d-flex justify-content-center align-items-center my-5">
                  <button class="btnclose1 btn btn-outline-warning px-5 py-3" data-bs-dismiss="modal">Back to Main Screen</button>
                </div>

              </div>
            </div>`);
    let e = document.querySelector(".btnclose1");
    e.addEventListener("click", function () {
      _();
    });
  }
  p.addEventListener("click", function () {
    _();
  }),
    h.addEventListener("click", function () {
      _();
    }),
    b.addEventListener("click", function () {
      _();
    }),
    E.addEventListener("click", function () {
      _();
    }),
    e.addEventListener("click", function () {
      A();
    }),
    n.addEventListener("click", function () {
      A();
    }),
    t.addEventListener("click", function () {
      I(), d.hide(), m.show();
    }),
    a.addEventListener("click", function () {
      I(), d.hide(), m.show();
    }),
    s.addEventListener("click", function () {
      T();
    }),
    l.addEventListener("click", function () {
      T();
    }),
    i.addEventListener("click", function () {
      k();
    }),
    o.addEventListener("click", function () {
      k();
    });
});
