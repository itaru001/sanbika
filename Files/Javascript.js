


// smooth scroll


$(function() {
          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  var target = $(this.hash);

                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({

                  scrollTop: target.offset().top - 225  //前は、この「225」は入ってなかった。ちゃんと行列と並ぶようにoffsetをいじった。
                }, 1000);
                
                return false;
                }
            }
          });
      });









// Nav bar に付ける関数
function Home() {
  location.href = "#"
}

function HomeFromSong () {
  location.href = "../../index.html"
}

function HomeFromInfo() {
  location.href = "../index.html";
}





