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
        console.log(clickCount);   
        console.log(qaArray[clickCount])         
        clickCount++;


        //create new div
        let qDiv = document.createElement('div');
        qDiv.classList.add('div-block-278');
        qDiv.innerHTML = `<div class="rep-div"><div class="div-block-279"><img src="https://assets.website-files.com/63fdf140d3e5fb227d1c78ba/640f14a724ccc79823003a6c_user.png" loading="lazy" alt="" class="image-25"></div><div>`+ qaArray[clickCount].question +`<br></div></div>`;
        $('.chat-response .grow-flex').append(qDiv);

        let aDiv = document.createElement('div');
        aDiv.classList.add('div-block-278 bot-rep');
        aDiv.innerHTML = `<div class="rep-div bot-rep"><div class="div-block-279 bot-gb"><img src="https://assets.website-files.com/63fdf140d3e5fb227d1c78ba/640f142dfef4eb2eca0a0d91_abstract.png" loading="lazy" alt="" class="image-25 bot-img"></div><div class="div-block-281"><div class="text-block-187 index_`+clickCount+`"></div></div></div>`;
        $('.chat-response .grow-flex').append(aDiv);
      });
});
