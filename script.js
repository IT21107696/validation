$(function() {
  $("form[name='registration]").validate({
      rules: {
          name: "required",
          email: {
              required: true,
              email: true
          },
          password: {
              required: true,
              minlength: 5
          },
          confirmpassword: {
              required : true,
              minlength :5,
              equalTo : "#password"
          }


      },

      messages: {

          name: "please enter your name",

          email: {
              required: "please enter your emaail address",
              email: "please enter a valid email address"
          },

          password: {
              required: "please provide a password",
              minlength: "your password must be consist of at least 5 characters"

          },
          confirmpassword :{
              required : "please re-enter the password",
              minlength : "your password must be consist of at least 5 characters",
              equalTo : "please enter the same password as above"
          }

      }
  });
});


  