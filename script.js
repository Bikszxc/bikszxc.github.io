// jQuery for modal handling
$(document).ready(function() {
    $("body").on("click", ".item", function() {
        const id = $(this).attr('id');

        // Get the video data (ensure videoData is defined somewhere in your code)
        const { title, video, camera } = videoData[id];

        // Update modal content
        $("#modalTitle").text(title);
        $("#modalVideo").attr("src", video);
        $("#modalCamera").text(camera);

        // Show the modal
        $("#myModal").modal("show");

        // Append the modal and its backdrop to the .content div
        setTimeout(function() {
            $('#myModal').appendTo('.content');   // Move the modal inside the content
            $('.modal-backdrop').appendTo('.content'); // Move the backdrop inside the content
        }, 10);

        // Ensure the body doesn't have the padding or modal-open class
        $('body').removeClass("modal-open");
        $('body').css("padding-right", "");
    });

    // Reset the modal content when it is closed
    $('#myModal').on('hidden.bs.modal', function() {
        $("#modalVideo").attr("src", "");
        const backdrop = $('.modal-backdrop');
        if (backdrop) {
            backdrop.remove(); // Remove the backdrop after the modal is closed
        }
    });
});



// Vanilla JS for sidebar toggle and dynamic modal content
const toggler = document.querySelector(".navbar-toggler");
const sidebar = document.querySelector("#sidebar");

function toggleSidebar() {
    sidebar.classList.toggle("collapsed");
    toggler.classList.toggle("collapsed");
}

function handleResize() {
    if (window.innerWidth >= 768) {
        sidebar.classList.remove("collapsed");
        toggler.classList.remove("collapsed");
    }
}

toggler.addEventListener("click", toggleSidebar);
window.addEventListener("resize", handleResize);
handleResize();

const videoData = {
    1: {
        title: "Limitless 2024",
        video: "https://www.youtube.com/embed/1IS4OlMgQ1w?si=JBd9O7MsXFpFVqIs",
        camera: "Mama mo camera"
    },
    2: {
        title: "Second Video Title",
        video: "https://www.youtube.com/embed/VIDEO_ID_2",
        camera: "This is the second video description."
    }
};

// Handling modal close
const modalElement = document.getElementById('myModal');
modalElement.addEventListener('hidden.bs.modal', function () {
    document.getElementById('modalVideo').src = '';

    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
        backdrop.remove();
    }

    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
        modal.dispose();
    }
});
