
$("#register-form").validate(
    {
        rules:{
             
            username:{
                required:true,
                minlength:3,
                maxlength:50
            },

            email:{
                required:true
            },

            phone:{
                required:true,
                minlength:10,
                maxlength:40
            },
            age:{
                required: true,
                number:true,
                range:[18,120]
            },
            gender:{
                required:true,
                minlength:4,
                maxlength:15
            },
            address:{
                maxlength:50
            }

       
        },
      
        messages:{
            username:{
                required:"This field is required",
                minlength:"Name should have minimum 3 characters",
                maxlength:"Name length should not be more than 50 characters"
            },

            email:{
                required:"This field is required"
            },

            phone:{
                required:"This field is required",
                minlength:"Phone number should have atleast 10 numbers",
                maxlength:"phone number cannot exceed 40 numbers"
            },
            age:{
                required:"This field is required",
                number:"Age should be a number",
                range:"Age should be a number between 18 and 120"
            },
            gender:{
                required:"This field is required",
                minlength:"Gender should have atleast 4 characters",
                maxlength:"Gender should not exceed 15 characters"
            },
            address:{
                maxlength:"Address should not exceed 50 characters"
            }
        }
    }


)