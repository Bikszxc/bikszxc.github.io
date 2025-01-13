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
            backdrop.remove();
        }
    });
});

$(document).ready(function() {
    $("body").on("click", ".p-item", function() {
        const id = $(this).attr('id');

        
        const { ptitle, pictures, pcamera, pinfo } = photoData[id];

        $("#modalPtitle").text(ptitle);
        $("#modalPcamera").text(pcamera);
        $("#modalPinfo").text(pinfo);

        const swiperWrapper = document.querySelector('.carousel-inner');
        swiperWrapper.innerHTML = '';
        
pictures.forEach((picture, index) => {
    const slide = document.createElement('div');
    slide.className = index === 0 ? 'carousel-item active' : 'carousel-item';

    const container = document.createElement('div');
    const img = document.createElement('img');
    img.src = picture;
    img.alt = 'Photo';
    img.className = 'center-block'

    slide.appendChild(img);
    swiperWrapper.appendChild(slide);
});
        // Show the modal
        $("#myModal3").modal("show");

        // Append the modal and its backdrop to the .content div
        setTimeout(function() {
            $('#myModal3').appendTo('.content');
            $('.modal-backdrop').appendTo('.content');
        }, 10);

        // Ensure the body doesn't have the padding or modal-open class
        $('body').removeClass("modal-open");
        $('body').css("padding-right", "");
    });

    // Reset the modal content when it is closed
    $('#myModal3').on('hidden.bs.modal', function() {
        $("#picture").attr("src", "");
        const backdrop = $('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
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
    },
    e5: {
        etitle: "AI - PUBG Roster",
        evideo: "https://drive.google.com/file/d/1da4Xa0j7qYDFyjt2MoY-4Ye-ZlNNZICi/preview",
        editor: " Adobe After Effects 2022"
    },
    e6: {
        etitle: "TFBC - Fun Run Advertisement",
        evideo: "https://drive.google.com/file/d/1h3dqhJou0PLA132zyWEavaxWW4kPiLve/preview",
        editor: " Adobe After Effects 2022"
    },
    e7: {
        etitle: "HaikiPlays - Rust",
        evideo: "https://www.youtube.com/embed/HIiwR9M8dK0?si=PWtaWdwxXH_Ie7td",
        editor: " DaVinci Resolove Studio 19"
    },
    e8: {
        etitle: "HaikiPlays - Rust 2",
        evideo: "https://www.youtube.com/embed/bu0IpLsijsg?si=FFk4tU_d8d_q1rDm",
        editor: " DaVinci Resolve Studio 19"
    },
    e9: {
        etitle: "HaikiPlays - Rust 3",
        evideo: "https://www.youtube.com/embed/-zTW_VjaEv4?si=tokc5LRucLEZtCW-",
        editor: " Davinci Resolve Studio 19"
    },
    e10: {
        etitle: "HaikiPlays - Apex Squads pt. 1",
        evideo: "https://www.youtube.com/embed/C5604Dw6Nfc?si=Gr4-NcAwvzM4qVPh",
        editor: " Davinci Resolove Studio 19"
    }
}

const photoData = {
    p1: {
        ptitle: "Some Photo Collection",
        pictures: [
            "https://images.pexels.com/photos/16534745/pexels-photo-16534745/free-photo-of-pavilions-on-gadisar-lake.jpeg",
            "https://images.pexels.com/photos/26124934/pexels-photo-26124934/free-photo-of-zebra-on-field.jpeg",
            "https://images.pexels.com/photos/27637373/pexels-photo-27637373/free-photo-of-the-ancient-building-in-ephesus-turkey.jpeg",
            "https://images.pexels.com/photos/27637373/pexels-photo-27637373/free-photo-of-the-ancient-building-in-ephesus-turkey.jpeg"
        ],
        pcamera: "Camera Model",
        pinfo: "Some additional information"
    },
};

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
