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
      });
});
