<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Công ty cổ phần nông nghiệp Hạnh Cường</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <div id="preloader">
        <div class="spinner"></div>
    </div>

    <?php include 'includes/navbar.php'; ?>

    <!-- Banner tiêu đề trang -->
    <header class="page-hero">
        <div class="page-hero-overlay"></div>
        <div class="container relative-z">
            <h1 class="page-hero-title" data-aos="fade-up">Liên hệ hợp tác</h1>
            <p class="page-hero-subtitle" data-aos="fade-up" data-aos-delay="100">
                Hạnh Cường luôn sẵn sàng hợp tác phát triển cùng quý đối tác<br>& bà con nông dân
            </p>
        </div>
    </header>

    <!-- Khối hình ảnh định hướng hợp tác chiến lược -->
    <section class="cooperate-sectors section-spacing">
        <div class="container">
            

            <div class="cooperate-image-box" data-aos="zoom-in" data-aos-delay="100">
                <img src="assets/images/lien-he-hop-tac.jpg" alt="Các lĩnh vực hợp tác trọng tâm" class="cooperate-single-img">
            </div>
        </div>
    </section>

    <!-- thông tin và vị trí -->
    <section class="contact-map-section section-spacing bg-light">
        <div class="container">
            <div class="contact-main-grid">
                
                <!--thông tin kết nối -->
                <div class="contact-details-sidebar" data-aos="fade-right">
                    <div class="company-meta-box">
                        <h2 class="sidebar-grid-title">Văn phòng điều hành</h2>
                        <p class="sidebar-grid-desc">Quý đối tác, doanh nghiệp có nhu cầu làm việc trực tiếp vui lòng kết nối qua các cổng thông tin sau:</p>
                        
                        <div class="meta-info-list">
                            <div class="meta-info-item">
                                <div class="meta-icon"><i class="fa-solid fa-building"></i></div>
                                <div class="meta-text">
                                    <h4>Tên công ty</h4>
                                    <p>Công ty cổ phần nông nghiệp Hạnh Cường</p>
                                </div>
                            </div>

                            <div class="meta-info-item">
                                <div class="meta-icon"><i class="fa-solid fa-location-dot"></i></div>
                                <div class="meta-text">
                                    <h4>Địa chỉ trụ sở</h4>
                                    <p>Tỉnh lộ 941, Xã Bình Hòa, Huyện Châu Thành, Tỉnh An Giang, Việt Nam</p>
                                </div>
                            </div>

                            <div class="meta-info-item">
                                <div class="meta-icon"><i class="fa-solid fa-phone-volume"></i></div>
                                <div class="meta-text">
                                    <h4>Phòng kinh doanh & Hợp tác</h4>
                                    <p><a href="tel:0939660004">0939 660 004</a></p>
                                </div>
                            </div>

                            <div class="meta-info-item">
                                <div class="meta-icon"><i class="fa-solid fa-envelope-open-text"></i></div>
                                <div class="meta-text">
                                    <h4>Hòm thư điện tử</h4>
                                    <p><a href="mailto:phoquocduyvn@gmail.com">phoquocduyvn@gmail.com</a></p>
                                </div>
                            </div>

                            <div class="meta-info-item">
                                <div class="meta-icon"><i class="fa-solid fa-business-time"></i></div>
                                <div class="meta-text">
                                    <h4>Giờ tiếp đón đối tác</h4>
                                    <p>Thứ 2 - Thứ 7: 07:30 - 17:00 (Chủ nhật nghỉ)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- bản đồ thực tế -->
                <div class="contact-map-wrapper" data-aos="fade-left" data-aos-delay="100">
                    <div class="map-embed-container">
                        <iframe 
                            src="https://maps.google.com/maps?q=10°27'09.6%22N+105°18'53.9%22E&z=16&output=embed" 
                            width="100%" 
                            height="100%" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <?php include 'includes/footer.php'; ?>

    <div class="scroll-top" id="scrollTopBtn">
        <i class="fa-solid fa-arrow-up"></i>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

    <script src="assets/js/javascript.js"></script>
</body>

</html>