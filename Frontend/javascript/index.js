

function loadTestimonialSubstring() {
 
    var testimonials = [];
    $('.testimonial-wrapper .testimonial-text').each(function(){
        var content = $(this).text();
        testimonials.push(content);
        
        $(this).html(content.substring(0,700));
     });

    // register on view button click, show the full testimonial in a modal
}


$(document).ready(function () {
    loadTestimonialSubstring();
});