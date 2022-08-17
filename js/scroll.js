const desktop_screen = window.matchMedia('(min-width: 768px)')
            if (desktop_screen.matches) {
            window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    document.getElementById("navpanel").style.padding = ".5rem 0";
                    document.getElementById("nav-ul").style.fontSize = "0.8 em";
                    document.getElementById("nav-ul").style.marginRight = "100px";
                    document.getElementById("logo").style.clipPath = "inset(0% 63% 0% 0%)";
                    document.getElementById("logo").style.marginLeft = "100px";
                    document.getElementById("logo").height= "90";

                }
                else {
                    document.getElementById("navpanel").style.padding = "1.5rem 0";
                    document.getElementById("nav-ul").style.fontSize = "1.2 em";
                    document.getElementById("nav-ul").style.marginRight = "0px";
                    document.getElementById("logo").src = "img/logo2.png";
                    document.getElementById("logo").style.clipPath = "inset(0% 0% 0% 0%)";
                    document.getElementById("logo").style.marginLeft = "0px";
                    document.getElementById("logo").height= "90";
                }
            }}