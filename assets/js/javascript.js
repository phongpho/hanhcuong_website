
/* ==========================================================================
    1. HIỆU ỨNG MÀN HÌNH CHỜ (PRELOADER)
    - Tác dụng: Ẩn màn hình loading màu trắng sau khi toàn bộ tài nguyên web 
        (hình ảnh, cấu trúc, mã nguồn) đã được trình duyệt tải xong hoàn toàn.
    ========================================================================== */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Làm mờ dần màn hình chờ bằng cách giảm độ trong suốt về 0 (chạy trong 0.5s theo CSS)
    preloader.style.opacity = '0';
    
    // Chờ đúng 500ms (0.5 giây) cho hiệu ứng mờ kết thúc rồi ẩn hẳn phần tử này đi
    setTimeout(() => {
        preloader.style.visibility = 'hidden';
    }, 500);
});


/* ==========================================================================
    2. KÍCH HOẠT THƯ VIỆN HIỆU ỨNG (AOS INITIALIZATION)
    - Tác dụng: Khởi tạo cấu hình cho thư viện Animate On Scroll (Cuộn trang hiển thị hiệu ứng).
    ========================================================================== */
AOS.init({
    duration: 800,       // Thời gian diễn ra hiệu ứng chuyển động là 800ms (0.8 giây)
    easing: 'ease-in-out',// Kiểu chuyển động: Bắt đầu chậm -> nhanh ở giữa -> kết thúc chậm
    once: true,          // Hiệu ứng chỉ chạy duy nhất 1 lần khi cuộn xuống (cuộn ngược lên không chạy lại)
    offset: 100          // Hiệu ứng sẽ kích hoạt khi phần tử cách mép dưới màn hình 100px
});


/* ==========================================================================
    3. HIỆU ỨNG THANH MENU ĐỔI MÀU (STICKY NAVBAR EFFECT)
    - Tác dụng: Thêm nền hoặc thu nhỏ thanh Menu lại khi người dùng cuộn chuột xuống.
    ========================================================================== */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    // Nếu vị trí cuộn chuột của trang lớn hơn 50px tính từ đỉnh trang
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');    // Thêm class '.scrolled' vào để CSS đổi màu nền/độ cao
    } else {
        navbar.classList.remove('scrolled'); // Nếu quay lại đỉnh trang thì xóa class '.scrolled' đi
    }
});

// đánh dấu file hiện tại
document.addEventListener('DOMContentLoaded', () => {
    // Lấy tên file hiện tại từ URL (Ví dụ: "about.php"). Nếu trang chủ trống thì mặc định là "index.php"
    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "" || currentPage === "index") {
        currentPage = "index.php";
    }

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Xóa class active cũ để tránh trùng lặp
        link.classList.remove('active');

        // Lấy tên file đích trong thuộc tính href của thẻ a (Ví dụ: "about.php")
        const linkPage = link.getAttribute('href');

        // Nếu tên file của link trùng với file hệ thống đang chạy
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});


/* ==========================================================================
    5. BẬT/TẮT MENU TRÊN THIẾT BỊ DI ĐỘNG (MOBILE MENU TOGGLE)
    - Tác dụng: Nhấn vào icon 3 gạch để xổ Menu ra trên điện thoại, đồng thời đổi icon 
        3 gạch thành dấu X. Khi bấm vào 1 liên kết bất kỳ hoặc bấm dấu X thì đóng Menu lại.
    ========================================================================== */
const mobileToggle = document.querySelector('.mobile-toggle'); // Nút bấm 3 gạch trên mobile
const navMenu = document.querySelector('.nav-menu');           // Toàn bộ khối menu chứa các đường link

// Xử lý sự kiện khi bấm vào nút 3 gạch / Dấu X
mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Thêm class '.active' để xổ menu ra (nếu chưa có) hoặc xóa đi (nếu đã có)
    
    const icon = mobileToggle.querySelector('i'); // Lấy thẻ chứa icon font-awesome bên trong nút
    if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';    // Nếu menu đang mở -> Đổi icon thành Dấu X
    } else {
        icon.className = 'fa-solid fa-bars';     // Nếu menu đang đóng -> Đổi icon về Lại 3 gạch
    }
});

// nút cuộn
const scrollTopBtn = document.querySelector('.scroll-top'); // Tìm nút bấm cuộn lên đầu trang

// Kiểm tra vị trí cuộn chuột để ẩn/hiện nút bấm
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        scrollTopBtn.classList.add('show');    // Cuộn xuống quá 600px -> Hiện nút lên
    } else {
        scrollTopBtn.classList.remove('show'); // Cuộn ngược lên ít hơn 600px -> Ẩn nút đi
    }
});

// Xử lý hành động bấm vào nút cuộn lên đầu trang
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt mà lướt nhẹ từ từ lên trên chứ không bị giật khựng lên ngay
    });
});


// chuyển hình ảnh qua lại
document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('gallery-track');       // Khung chứa chuỗi ảnh nằm ngang
    const prevBtn = document.getElementById('prev-gallery-btn'); // Nút bấm mũi tên quay lại (Qua trái)
    const nextBtn = document.getElementById('next-gallery-btn'); // Nút bấm mũi tên tiếp theo (Qua phải)

    // Nếu trên trang web tồn tại đủ cả 3 phần tử này thì mới chạy code
    if (track && prevBtn && nextBtn) {
        
        // Hàm tính toán khoảng cách cần dịch chuyển (Lấy chiều rộng của 1 bức ảnh + 24px khoảng cách gap giữa các ảnh)
        const getScrollAmount = () => {
            const firstItem = track.querySelector('.gallery-slide-item');
            return firstItem ? firstItem.offsetWidth + 24 : 300; // Nếu lỗi không tính được sẽ mặc định dịch chuyển 300px
        };

        // Khi click vào nút Tiếp theo -> Cộng thêm khoảng cách cuộn sang bên phải
        nextBtn.addEventListener('click', function () {
            track.scrollLeft += getScrollAmount();
        });

        // Khi click vào nút Quay lại -> Trừ đi khoảng cách cuộn để dịch lùi về bên trái
        prevBtn.addEventListener('click', function () {
            track.scrollLeft -= getScrollAmount();
        });
    }
});
