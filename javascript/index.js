
function modal() {
    //console.log("ENTER");
    // Get the modal
    var modal = $("#testimonialModal");

    // Get the button that opens the modal
    var btn = $('.view-btn');

    // Get the Close button that opens the modal
    var btnClose = $('.btn-close');

    // Get the <span> element that closes the modal
    var span = $(".close");

    // When the user clicks on the button, open the modal
    btn.click(function () {
        //console.log("Pressed");
        modal.attr("style", "display:block");
    })


    // When the user clicks on <span> (x), close the modal
    span.click(function () {
        modal.attr("style", "display:none");
        $(".modal-body").empty();//to clear what ever is appended when the submit is clicked. like refreshing the page
        $(".modal-title-container").empty();
    }
    )

    // When the user clicks on <button> close, close the modal
    btnClose.click(function () {
        modal.attr("style", "display:none");
        $(".modal-body").empty();//to clear what ever is appended when the submit is clicked. like refreshing the page
        $(".modal-title-container").empty();
    }
    )


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.attr("style", "display:none");
        }
    }
}

function loadTestimonialSubstring() {

    // Register modal for viewing testimonial
    modal()
    $('.testimonial-wrapper').each(function () {
        //var content = $(this).text();
        var content = $(this).find(".testimonial-text").text();;

        $(this).find(".testimonial-text").html(content.substring(0, 700));

        // register on view button click, show the full testimonial in a modal
        $(this).find(".view-btn").click(function () {
            //$(".modal-title-container").append(`<h4 class="modal-title">Testimonial</h4>`);

            $(".modal-body").append(`
                ${content}
            `);
        });
    });


}


function registerViewPDF() {
    $(".view-pdf-btn").click(function(event){
        window.open("../Testimonial_Mallvin Rajamohan_1935587_DIT.pdf");
        return false;
    })
}


$(document).ready(function () {
    loadTestimonialSubstring();
    registerViewPDF();
});