const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// jQuery for modal handling
$(document).ready(function() {
    $("body").on("click", ".item", function() {
        const id = $(this).attr('id');

        // Get the video data (ensure videoData is defined somewhere in your code)
        const { title, video, camera, gimbal, app, resolution, encoding, log } = videoData[id];

        // Update modal content
        $("#modalTitle").text(title);
        $("#modalVideo").attr("src", video);
        $("#modalCamera").text(camera);
        $("#modalGimbal").text(gimbal);
        $("#modalApp").text(app);
        $("#modalResolution").text(resolution);
        $("#modalEncoding").text(encoding);
        $("#modalLog").text(log);

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

$(document).ready(function() {
    $("body").on("click", ".e-item", function() {
        const id = $(this).attr('id');

        // Get the video data (ensure videoData is defined somewhere in your code)
        const { etitle, evideo, editor  } = editData[id];

        // Update modal content
        $("#modalEtitle").text(etitle);
        $("#modalEvideo").attr("src", evideo);
        $("#modalEditor").text(editor);

        // Show the modal
        $("#myModal2").modal("show");

        // Append the modal and its backdrop to the .content div
        setTimeout(function() {
            $('#myModal2').appendTo('.content');   // Move the modal inside the content
            $('.modal-backdrop').appendTo('.content'); // Move the backdrop inside the content
        }, 10);

        // Ensure the body doesn't have the padding or modal-open class
        $('body').removeClass("modal-open");
        $('body').css("padding-right", "");
    });

    // Reset the modal content when it is closed
    $('#myModal2').on('hidden.bs.modal', function() {
        $("#modalEvideo").attr("src", "");
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
        camera: " iPhone 15 Pro Max",
        gimbal: " DJI Osmo Mobile 4",
        app: " Blackmagic Camera",
        resolution: " 3840x1608 | 30fps",
        encoding: " Apple ProRes 422 HQ",
        log: " Apple Log"
    },
    2: {
        title: "Redeeming The Time 2023",
        video: "https://www.youtube.com/embed/lncn7Wmwhdk?si=AhJIdUV_06Jxp9zj",
        camera: " iPhone 12 Pro Max",
        gimbal: " DJI Osmo Mobile 4",
        app: " Filmic Pro v6",
        resolution: " 1920x802 | 60fps",
        encoding: " H.264",
        log: " Filmic Log v3"
    },
    3: {
        title: "Fear To Freedom 2022",
        video: "https://www.youtube.com/embed/6C6_q-DRGJg?si=mQ7OHQ-cFBgQCcOP",
        camera: " iPhone XS Max",
        gimbal: " DJI Osmo Mobile 4",
        app: " Filmic Pro v6",
        resolution: " 1920x802 | 60fps",
        encoding: " H.264",
        log: " Filmic Log v2"
    },
    4: {
        title: "TFBC Fun Run 2022",
        video: "https://www.youtube.com/embed/h-3F9NINxgg?si=Z5cj_-zaIiRF0bx4",
        camera: " iPhone XS Max",
        gimbal: " DJI Osmo Mobile 4",
        app: " Filmic Pro v6",
        resolution: " 1920x802 | 60fps",
        encoding: " H.264",
        log: " Standard"
    },
    5: {
        title: "Restored 2022",
        video: "https://www.youtube.com/embed/pzwQsgOwLOg?si=yixdv6LJCk9WVbef",
        camera: " iPhone XS Max",
        gimbal: " DJI Osmo Mobile 4",
        app: " Filmic Pro v6",
        resolution: " 1920x802 | 60fps",
        encoding: " H.264",
        log: " Standard"
    },
    6: {
        title: "Temple Days 2020",
        video: "https://www.youtube.com/embed/5hhQknB4Nx4?si=Ds8xXJa_Jlh741Ws",
        camera: " iPhone 7 Plus",
        gimbal: " Handheld",
        app: " Stock Camera App",
        resolution: " 1920x1080 | 60fps",
        encoding: " H.264",
        log: " Standard"
    }
};

const editData = {
    e1: {
        etitle: "Anonymous Ilonggos - Valorant Roster - 2021",
        evideo: "https://drive.google.com/file/d/144roeYZha47PupFAOwG9ckY3ECKW22s4/preview",
        editor: " Adobe After Effects 2022"
    },
    e2: {
        etitle: "Ilonggo Battlegrounds - Rust Trailer",
        evideo: "https://drive.google.com/file/d/1HSRfWANYc65bOYT64L7cS2_b8yOJL5bG/preview",
        editor: " Adobe After Effects 2020"
    },
    e3: {
        etitle: "Anonymous Ilonggos - Team Introduction",
        evideo: "https://drive.google.com/file/d/17C0yJLAhJtlgdXZdtTxjoFCaOXiX7Yqs/preview",
        editor: " Adobe After Effects 2020"
    },
    e4: {
        etitle: "NoxusRealms - The Return - 2018",
        evideo: "https://www.youtube.com/embed/ffflvbR6erw?si=-Q1vKC_Zprbv_wAB",
        editor: " Adobe After Effects 2017"
    }
}

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
