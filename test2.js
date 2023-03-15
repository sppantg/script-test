
    $(document).ready(function(){
        $( ".add-r-w" ).click(function() {
            var name = $(this).attr( "data-name" );
            $( ".block-url" ).removeClass( "show" );
            $( ".block-url[data-name='" + name + "']" ).addClass( "show" );
          });
          
              $('.close-url').click(function(){
            var name = $(this).attr( "data-name" );
            $( ".block-url[data-name='" + name + "']" ).removeClass( "show" );
            
        });
    $('.browse-computer, .resource-drop-down').click(function(event) {
        if (!$(event.target).is('.file-upload-train, .file-upload-train *')) {
            $('.file-upload-train').click();
        }
    });
      $( ".link-options-train" ).click(function() {
      let name = $(this).attr('data-name');
      $( ".link-options-train" ).each(function( index ) {
          $(this).removeClass('active');
      });
      $(this).addClass('active');
      $( ".panel" ).each(function( index ) {
          $(this).removeClass('active');
      });
      $('.panel[data-name='+name+']').addClass('active');
    });
    
    $( ".w_about" ).click(function() {
        $('.chat-panel.active .content-2.r-hide').addClass('hide');
        $('.about_p_popup').addClass('show');
    });
    
    
    $('.close-about-p').click(function() {
        $('.about_p_popup').removeClass('show');
        $('.chat-panel.active .content-2.r-hide').removeClass('hide');
    } );
    
    
     $( ".train-div" ).click(function() {
        $('.add_content_popup').addClass('show');
        $('.r-hide').addClass('h-hide');
      });
      
      $( ".close-add-r" ).click(function() {
        $('.add_content_popup').removeClass('show');
        $('.r-hide').removeClass('h-hide');
      });
    
      
    
      
    
    
    $( ".div-block-294" ).click(function() {
        console.log('clicked');
         $(this).parent().addClass('open');
          $(this).parent().next('.rel-answer').addClass('open');
    
    
      });
        
          $( ".div-block-294-open" ).click(function() {
         $(this).parent().removeClass('open');
                 $(this).parent().next('.rel-answer').removeClass('open');
    
    
      });
    
    
     $( ".image-106" ).click(function() {
        $( ".full" ).toggleClass( "w-bar" );
        $('.chat-box').toggleClass('active');
        $('body').toggleClass('chat-active');
      });
      
     $(".image-106.right").click();
    
    
    
    $( ".style-div" ).click(function() {
        $( ".style-div" ).removeClass("active");
        $(this).addClass("active");
      });
      
      $( ".length-div" ).click(function() {
        $( ".length-div" ).removeClass("active");
        $(this).addClass("active");
      });
      
      $( ".layout-selector" ).click(function() {
        $( ".layout-selector" ).removeClass("active");
        $(this).addClass("active");
      });
    
    
    $( ".text-block-169" ).click(function() {
        $( ".text-block-169" ).removeClass("active");
        $(this).addClass("active");
        let name = $(this).attr("data-name");
        $('.chat-panel').removeClass('active');
        $('.chat-panel[data-name="' + name + '"]').addClass('active');
    
        if(name = 'summarize'){
            //add 1 second delay
            setTimeout(function(){
                typeWriter4();
            }, 1000);
    
    
        }
    
      });
    
    
      var is = 0;
    var txts = 'Python is a high-level, interpreted programming language that is known for its simplicity, readability, and versatility. It was first released in 1991 by Guido van Rossum and has since become one of the most popular programming languages in the world. Python is often used in a variety of applications, including web development, scientific computing, artificial intelligence, data analysis, and automation.';
    var speeds = 20;
    
    function typeWriter4() {
      if (is < txts.length) {
        $('.text-block-187-sum')[0].innerHTML += txts.charAt(is);
        is++;
        speed = Math.floor(Math.random() * 15) + 1;
        setTimeout(typeWriter4, speeds);
      } 
      else {
        $('.text-block-187-sum')[0].classList.add("no-after");
        $('.sources-sum').removeClass('hidden');
        $('.related-sum').removeClass('hidden');
    
      }
    }

        var formObj = $('#email-form-4'); //get the form object
        var divObj = $('<div>').append(formObj.contents()); //create a new div and append the form contents to it
        formObj.replaceWith(divObj); //replace the form with the new div

        var formObj = $('.form-2.ns.f'); //get the form object
        var divObj = $('<div>').append(formObj.contents()); //create a new div and append the form contents to it
        formObj.replaceWith(divObj); //replace the form with the new div
        
            var formObj = $('.div-block-276.second .form-2'); //get the form object
        var divObj = $('<div class="second-input">').append(formObj.contents()); //create a new div and append the form contents to it
        formObj.replaceWith(divObj); //replace the form with the new div
      });
    
        $('.ask-input').keydown(function(event) {
          if (event.which == 13) {
          
               if ($('.ask-input').val() == '') {
                return ;
            }else{
                $(".div-block-305.fire-f").trigger("click");
    
            }
          
          }
        });
      
    
        $('.form-block-8').removeClass( "w-form" );
    
          $( ".close-box" ).click(function() {
        $( ".body" ).removeClass( "chat-active" );
    
      });
    
    $( ".div-block-305.fire-f" ).click(function(event) {
        if ($('.ask-input').val() == '') {
            return ;
        }
       
    //   $('.div-block-276.first')[0].style.display='none';
    //   $('.div-block-276.second')[0].style.display='flex';
    
      $('.chat-1').addClass('hidden');
      $('.chat-response').removeClass('hidden');
    
    
    
        var i = 0;
    var txt = 'Quantum computing is a field that aims to develop computers that use the principles of quantum physics to perform computations.';
    var speed = 20;
    
    function typeWriter1() {
      $('.history').removeClass('hidden');
      if (i < txt.length) {
        $('.text-block-187')[0].innerHTML += txt.charAt(i);
        i++;
        speed = Math.floor(Math.random() * 15) + 1;
        setTimeout(typeWriter1, speed);
      } else {
        $('.text-block-187')[0].classList.add("no-after");
        typeWriter2();
      }
    }
    
    function typeWriter2() {
      var y = 0;
      var txt2 = 'One of the most important concepts in quantum computing is superposition, which allows qubits to be in multiple states simultaneously.';
    
      setTimeout(function() {
        $('.text-block-187')[1].style.display = 'block';
    
        function type() {
          if (y < txt2.length) {
            $('.text-block-187')[1].innerHTML += txt2.charAt(y);
            y++;
            speed = Math.floor(Math.random() * 10) + 1;
            setTimeout(type, speed);
          } else {
            $('.text-block-187')[1].classList.add("no-after");
            $('.reg-btn').removeClass('hidden');
            $('.sources').removeClass('hidden')
            $('.related').removeClass('hidden');
            $('.reg').addClass('reg-show');
    
             typeWriter3();
    
    
          }
        }
    
        type();
      }, 10);
    }
        
        
    function typeWriter3() {
              $('.new-chat-text').html('');
             $('.new-chat-text').addClass('with_blink');
        var y = 0;
        var txt3 = 'Quantum computing';
    
        setTimeout(function() {
          $('.text-block-169')[1].style.display = 'block';
      
          function type3() {
              $('.div-block-325').addClass('rel');
    
            if (y < txt3.length) {
              $('.new-chat-text')[0].innerHTML += txt3.charAt(y);
            //   $('.new-chat-text')[1].innerHTML += txt3.charAt(y);
              y++;
              speed = Math.floor(Math.random() * 100) + 4;
              setTimeout(type3, speed);
            } 
            else {
              $('.new-chat-text').removeClass('with_blink');
            }
          }
      
          type3();
        }, 1000);
      }
    setTimeout(typeWriter1, 2000);
    
    });
    
