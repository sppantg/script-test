$ = jQuery;
$(document).ready(function(){
    const qaArray = [
{
question: 'What is Python?',
answer: 'Python is a high-level programming language that is easy to learn and widely used in many fields, including data science and machine learning.'
},
{
question: 'What is machine learning?',
answer: 'Machine learning is a subset of artificial intelligence that involves training algorithms to learn from data and make predictions or decisions without being explicitly programmed.'
},
{
question: 'What is the difference between supervised and unsupervised learning?',
answer: 'Supervised learning involves training a machine learning model with labeled data, while unsupervised learning involves training a model with unlabeled data.'
},
{
question: 'What is the purpose of a Python library such as Pandas in machine learning?',
answer: 'Pandas is a popular Python library that provides data manipulation and analysis tools, which can be helpful for preparing data for machine learning models.'
},
{
question: 'What is overfitting in machine learning?',
answer: 'Overfitting occurs when a machine learning model is trained too well on a particular set of data, to the point that it becomes too specialized to that data and performs poorly on new, unseen data.'
}
];
    let clickCount = 0;
    $( ".ask-submit-follow-up" ).click(function() {
        if(clickCount == qaArray.length){
            clickCount = 0;
        }

        $('.ask-input2').val('');
        $('.reg-btn').hide();
        console.log(clickCount);   
        console.log(qaArray[clickCount])         


        //create new div
        let qDiv = document.createElement('div');
        qDiv.classList.add('div-block-278');
        qDiv.innerHTML = `<div class="rep-div"><div class="div-block-279"><img src="https://assets.website-files.com/63fdf140d3e5fb227d1c78ba/640f14a724ccc79823003a6c_user.png" loading="lazy" alt="" class="image-25"></div><div>`+ qaArray[clickCount].question +`<br></div></div>`;
        $('.chat-response .grow-flex').append(qDiv);

        let aDiv = document.createElement('div');
        aDiv.className = 'div-block-278 bot-rep';

        aDiv.innerHTML = `<div class="rep-div bot-rep"><div class="div-block-279 bot-gb"><img src="https://assets.website-files.com/63fdf140d3e5fb227d1c78ba/640f142dfef4eb2eca0a0d91_abstract.png" loading="lazy" alt="" class="image-25 bot-img"></div><div class="div-block-281"><div class="text-block-187 index_`+clickCount+`"></div><div class="sources_f index_`+clickCount+`"><div class="text-block-104">Learn more:</div><div><a href="#" class="link-block-21 w-inline-block"><div class="text-block-172">1. en.wikipedia.org</div></a></div><div><a href="#" class="link-block-21 w-inline-block"><div class="text-block-172">2. investopedia.com</div></a></div><div><a href="#" class="link-block-21 w-inline-block"><div class="text-block-172">3. ibm.com</div></a></div></div><div class="related_f index_`+clickCount+`"><div class="text-block-171">Related:</div><div class="rel-row"><div class="text-block-192">Ways to make a difference</div><div class="div-block-294-open"><img src="https://assets.website-files.com/63fdf140d3e5fb227d1c78ba/640b1c608bfe23641e3af04a_delete.png" loading="lazy" alt="" class="hidden-img"><img src="https://assets.website-files.com/63fdf140d3e5fb227d1c78ba/640b1c608bfe23fd843af04c_delete1x.png" loading="lazy" alt="" class="hidden-img-rot"></div><div class="div-block-294"><img src="https://assets.website-files.com/63efb3c265a5145314a5ae68/63f8f51f6471e138ecf5f406_63efb3c265a5144988a5aea8_63ea59c8a06f760a6f1b3d18_plus.png" loading="lazy" alt="" class="image-116"><img src="https://assets.website-files.com/63efb3c265a5145314a5ae68/63f8f51f6471e138ecf5f406_63efb3c265a5144988a5aea8_63ea59c8a06f760a6f1b3d18_plus.png" loading="lazy" alt="" class="image-93-rot"></div></div><div class="rel-answer"><div class="answer-text">One &nbsp;way to make a difference is by practicing kindness in your daily interactions with others. This could be as simple as holding the door open for someone, offering a smile or compliment, or lending a listening ear to a friend or stranger. Small acts of kindness can have a ripple effect and contribute to a more positive and compassionate world.</div></div><div class="rel-row sec"><div class="text-block-192">How to help the environment</div><div class="div-block-294-open"><img src="https://assets.website-files.com/63fdf140d3e5fb227d1c78ba/640b1c608bfe23641e3af04a_delete.png" loading="lazy" alt="" class="hidden-img"><img src="https://assets.website-files.com/63fdf140d3e5fb227d1c78ba/640b1c608bfe23fd843af04c_delete1x.png" loading="lazy" alt="" class="hidden-img-rot"></div><div class="div-block-294"><img src="https://assets.website-files.com/63efb3c265a5145314a5ae68/63f8f51f6471e138ecf5f406_63efb3c265a5144988a5aea8_63ea59c8a06f760a6f1b3d18_plus.png" loading="lazy" alt="" class="image-116"><img src="https://assets.website-files.com/63efb3c265a5145314a5ae68/63f8f51f6471e138ecf5f406_63efb3c265a5144988a5aea8_63ea59c8a06f760a6f1b3d18_plus.png" loading="lazy" alt="" class="image-93-rot"></div></div><div class="rel-answer"><div class="answer-text">To help the environment, there are many things we can do in our daily lives. One of the most important is to reduce our waste by using reusable bags, containers, and water bottles, and recycling whenever possible.</div></div><div class="rel-row sec"><div class="text-block-192">Volunteer opportunities </div><div class="div-block-294-open"><img src="https://assets.website-files.com/63fdf140d3e5fb227d1c78ba/640b1c608bfe23641e3af04a_delete.png" loading="lazy" alt="" class="hidden-img"><img src="https://assets.website-files.com/63fdf140d3e5fb227d1c78ba/640b1c608bfe23fd843af04c_delete1x.png" loading="lazy" alt="" class="hidden-img-rot"></div><div class="div-block-294"><img src="https://assets.website-files.com/63efb3c265a5145314a5ae68/63f8f51f6471e138ecf5f406_63efb3c265a5144988a5aea8_63ea59c8a06f760a6f1b3d18_plus.png" loading="lazy" alt="" class="image-116"><img src="https://assets.website-files.com/63efb3c265a5145314a5ae68/63f8f51f6471e138ecf5f406_63efb3c265a5144988a5aea8_63ea59c8a06f760a6f1b3d18_plus.png" loading="lazy" alt="" class="image-93-rot"></div></div><div class="rel-answer"><div class="answer-text">One of the most popular volunteer opportunities is in environmental organizations, where volunteers can help with tasks such as cleaning up litter, planting trees, and conducting environmental research.</div></div></div></div></div>`;
        $('.chat-response .grow-flex').append(aDiv);

        setTimeout(function(){
            followTypeWriter(qaArray,clickCount);
            clickCount++;

        }
        , 1000);
      });
});

function followTypeWriter(qaArray,index) {
    var i = 0;
    var txt = qaArray[index].answer;
    var speed = 20;

    function ftypeWriter() {
        if (i < txt.length) {
            $('.index_'+index)[0].innerHTML += txt.charAt(i);
            i++;
            speed = Math.floor(Math.random() * 15) + 1;
            setTimeout(ftypeWriter, speed);
        } 
        else {
            $('.index_'+index)[0].classList.add("no-after");
            $('.sources_f.index_'+index).show();
            $('.related_f.index_'+index).show();
            $('.reg-btn').show();

            //if question length is greater than 30 then trim it
            if(qaArray[index].question.length > 27){
                var question = qaArray[index].question.substring(0,27) + '...';
            }
            else{
                var question = qaArray[index].question;
            }

            titleWriter(question);







        }
    }
    ftypeWriter();
}

function titleWriter(txt3) {
    $('.new-chat-text').html('');
   $('.new-chat-text').addClass('with_blink');
var y = 0;

setTimeout(function() {
function titleType() {
  if (y < txt3.length) {
    $('.new-chat-text')[0].innerHTML += txt3.charAt(y);
  //   $('.new-chat-text')[1].innerHTML += txt3.charAt(y);
    y++;
    speed = Math.floor(Math.random() * 100) + 4;
    setTimeout(titleType, speed);
  } 
  else {
    $('.new-chat-text').removeClass('with_blink');
  }
}

titleType();
}, 1000);
}
