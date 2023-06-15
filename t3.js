$ = jQuery;
$(document).ready(function () {
  // Get all elements with the ID "email-form-4"
  const formElements = $("#email-form-4");

  formElements.each(function () {
    const formElement = $(this);

    // Create a new div element
    const divElement = $("<div>");

    // Set the class attribute of the div element
    divElement.attr("class", formElement.attr("class"));

    // Set the inner HTML of the div element to the HTML content of the form element
    divElement.html(formElement.html());

    // Replace the form element with the new div element
    formElement.replaceWith(divElement);
  });
});
