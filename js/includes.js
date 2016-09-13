$(document).ready(function() {

  $('#enquirybutton').click(function(e) {
    alert("hi");
    var data = {
      name: $("#name").val(),
      email: $("#email").val(),
      contact_number: $("#contact_number").val()
    };

    console.log(data);
    alert(data);
    $.post("http://www.80startups.com/api/addenquiry", data, function(response, status) {
      console.log(response, status);
    });
  });

  $(function() {
    var $form = $('#payment-form');
    $form.submit(function(event) {
      // Disable the submit button to prevent repeated clicks:
      $form.find('.submit').prop('disabled', true);

      // Request a token from Stripe:
      Stripe.card.createToken($form, function (status, response) {
        // Grab the form:
        var $form = $('#payment-form');

        if (response.error) { // Problem!

          // Show the errors on the form:
          $form.find('.payment-errors').text(response.error.message);
          $form.find('.submit').prop('disabled', false); // Re-enable submission

        } else { // Token was created!

          // Get the token ID:
          var token = response.id;

          // Insert the token ID into the form so it gets submitted to the server:
          $form.append($('<input type="hidden" name="stripeToken">').val(token));

          // Submit the form:
          // $form.get(0).submit();
          $.post("/api/chargeworking", {
              name: $("#name").val(),
              email: $("#email").val(),
              contact_number: $("#contact_number").val(),
              token: token
          }, function(data, status) {
              console.log(data, status);
          });
        }
      });
      // Prevent the form from being submitted:
      return false;
    });
  });
});




function paynow(p1) {
    var p1 = p1
    var page = "paynow.html?p=" + p1;
    window.location.replace(page);
}

(function() {
    var se = document.createElement('script');
    se.type = 'text/javascript';
    se.async = true;
    se.src = '//storage.googleapis.com/code.snapengage.com/js/75834a79-6080-4380-8b5a-60662ce0624b.js';
    var done = false;
    se.onload = se.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
            done = true;
            /* Place your SnapEngage JS API code below */
            /* SnapEngage.allowChatSound(true); Example JS API: Enable sounds for Visitors. */
        }
    };
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(se, s);
})();

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-45832666-2', 'auto');
ga('send', 'pageview');
