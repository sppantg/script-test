$ = jQuery;
$(document).ready(function () {
  // Get the HTML form element
  const formElement = $("#email-form-4");

  // Create a new div element
  const divElement = $("<div>");

  // Set the class attribute of the div element
  divElement.attr("class", formElement.attr("class"));

  // Set the inner HTML of the div element to the HTML content of the form element
  divElement.html(formElement.html());

  // Replace the form element with the new div element
  formElement.replaceWith(divElement);
});
