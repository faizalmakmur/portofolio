// script.js - Modern & Interactive
document.addEventListener('DOMContentLoaded', function() {
    // Data projects yang lebih modern
    const projects = [
        {
            id: 1,
            title: "Company Profile Website",
            description: "Website profil perusahaan berbasis CodeIgniter 3 dengan CMS untuk memudahkan admin memperbarui konten.",
            longDescription: "Website profil perusahaan berbasis CodeIgniter 3 dengan CMS untuk memudahkan admin memperbarui konten. Tampilan UI/UX responsif dioptimalkan menggunakan Bootstrap.",
            image: "assets/mtn.png",
            tech: ["HTML,", " CSS,", " JavaScript,", " Bootstrap,", " PHP,", " CodeIgniter 3,"," MySQL."],
            features: [
                "Content Management System (CMS)",
                "Manajemen konten dinamis (profil, layanan, berita)",
                "Responsif design untuk semua perangkat",
            ],
            codeUrl: "https://github.com/faizalmakmur/website-perusahaan "
        },
        {
            id: 2,
            title: "Interactive Educational Website",
            description: "Platform edukasi interaktif berbasis web untuk kesadaran kesehatan gigi siswa SD",
            longDescription: "Website edukasi interaktif berbasis web untuk meningkatkan kesadaran kesehatan gigi siswa SD, dilengkapi fitur gamifikasi seperti kuis interaktif dan animasi. Antarmuka ramah anak dan responsif untuk perangkat mobile maupun desktop.",
            image: "assets/gimut.png",
            tech: ["HTML5,", " CSS,", " JavaScript,", " Bootstrap 5,", " Figma."],
            features: [
                "Kuis interaktif dengan sistem penilaian",
                "Animasi dan visual ramah anak",
                "Desain responsif untuk mobile dan desktop",
                "Navigasi sederhana dan mudah dipahami pengguna",
],
            demoUrl: "https://gimut.vercel.app ",
            codeUrl: "https://github.com/faizalmakmur/gimut"
        },
        {
            id: 3,
            title: "Online Game Marketplace Website",
            description: "Aplikasi web e-commerce full stack untuk transaksi game digital dengan autentikasi pengguna, CRUD, keranjang belanja, dan manajemen sesi.",
            longDescription: "Aplikasi web e-commerce full stack untuk transaksi game digital, dengan autentikasi pengguna, CRUD, keranjang belanja, dan manajemen sesi. Database relasional MySQL mendukung pengelolaan produk dan riwayat transaksi.",
            image: "assets/gstore.png",
            tech: ["HTML,", " CSS,", " JavaScript,", " Bootstrap,", " PHP,", " CodeIgniter 3,"," MySQL."],
            features: [
                "User authentication dan session management",
                "Manajemen produk (CRUD)",
                "Riwayat transaksi pengguna",
                "Database relasional untuk data produk dan pengguna",
            ],
            
            codeUrl: "https://github.com/faizalmakmur/gamestore"
        },
        
    ];

    // Fungsi untuk menampilkan proyek
    function displayProjects() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = '';

    projects.forEach(project => {
        const techTags = project.tech.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        // 👉 Live Demo hanya muncul jika demoUrl ADA
        const demoButton = project.demoUrl
            ? `<a href="${project.demoUrl.trim()}" target="_blank" class="btn btn-primary btn-sm me-1">Live Demo</a>`
            : '';

        const projectCard = `
            <div class="col-lg-4 col-md-6">
                <div class="card portfolio-card h-100">
                    <div class="card-img-container">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <div class="tech-tags">
                            ${techTags}
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-outline-primary btn-sm view-project-btn" data-id="${project.id}">
                            View Details
                        </button>
                        <div>
                            ${demoButton}
                            <a href="${project.codeUrl.trim()}" target="_blank" class="btn btn-outline-primary btn-sm">
                                Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        portfolioGrid.innerHTML += projectCard;
    });

    document.querySelectorAll('.view-project-btn').forEach(button => {
        button.addEventListener('click', function () {
            const projectId = parseInt(this.getAttribute('data-id'));
            openProjectModal(projectId);
        });
    });
}

    
    // Fungsi untuk membuka modal proyek
    function openProjectModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        
        if (!project) return;
        
        // Mengisi konten modal
        document.getElementById('projectModalTitle').textContent = project.title;
        document.getElementById('projectModalImage').src = project.image;
        document.getElementById('projectModalImage').alt = project.title;
        document.getElementById('projectModalDescription').textContent = project.longDescription;
        
        // Mengisi tech stack
        const techContainer = document.getElementById('projectModalTech');
        techContainer.innerHTML = '';
        project.tech.forEach(tech => {
            const badge = document.createElement('span');
            badge.className = 'tech-tag';
            badge.textContent = tech;
            techContainer.appendChild(badge);
        });
        
        // Mengisi fitur
        const featuresContainer = document.getElementById('projectModalFeatures');
        featuresContainer.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresContainer.appendChild(li);
        });
        
        // Mengatur link demo dan source code
        document.getElementById('projectModalDemo').href = project.demoUrl;
        document.getElementById('projectModalCode').href = project.codeUrl;
        
        // Menampilkan modal
        const modal = new bootstrap.Modal(document.getElementById('projectModal'));
        modal.show();
    }
    
    // Smooth scroll untuk navigation
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if(this.getAttribute('href') === '#') return;
                
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
    }
    
    // Navbar scroll effect
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', function() {
            if(window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Update active nav link berdasarkan scroll position
            updateActiveNavLink();
        });
    }
    
    // Update active nav link berdasarkan posisi scroll
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update tahun di footer
    function updateFooterYear() {
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }
    
    // Animasi skill bars saat scroll
    function initSkillAnimations() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0';
                    
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 300);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }
    
    // Inisialisasi semua fungsi
    function init() {
        displayProjects();
        initSmoothScroll();
        initNavbarScroll();
        updateFooterYear();
        
        // Inisialisasi animasi skill bars setelah sedikit delay
        setTimeout(initSkillAnimations, 500);
        
        // Tambahkan class active ke link home saat pertama kali load
        document.querySelector('a[href="#home"]').classList.add('active');
    }
    
    // Jalankan inisialisasi
    init();
});
// script.js - Tambahkan fungsi ini

// Fungsi untuk memperbaiki navbar pada mobile
function initMobileNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Tutup navbar saat link di klik (pada mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
}

// Fungsi untuk detect device dan menambahkan class body
function detectDevice() {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 992;
    
    if (isMobile) {
        document.body.classList.add('is-mobile');
        document.body.classList.remove('is-tablet', 'is-desktop');
    } else if (isTablet) {
        document.body.classList.add('is-tablet');
        document.body.classList.remove('is-mobile', 'is-desktop');
    } else {
        document.body.classList.add('is-desktop');
        document.body.classList.remove('is-mobile', 'is-tablet');
    }
}

// Fungsi untuk memperbaiki image loading pada mobile
function optimizeImagesForMobile() {
    if (window.innerWidth < 768) {
        // Reduce image quality atau load smaller images jika diperlukan
        document.querySelectorAll('img').forEach(img => {
            if (img.dataset.srcMobile) {
                img.src = img.dataset.srcMobile;
            }
        });
    }
}

// Update init function
function init() {
    // ... fungsi yang sudah ada ...
    
    // Tambahkan fungsi baru
    initMobileNavbar();
    detectDevice();
    optimizeImagesForMobile();
    
    // Event listener untuk resize window
    window.addEventListener('resize', function() {
        detectDevice();
        optimizeImagesForMobile();
    });
}

const demoBtn = document.getElementById('projectModalDemo');
const codeBtn = document.getElementById('projectModalCode');

// Demo
if (project.demoUrl) {
    demoBtn.href = project.demoUrl.trim();
    demoBtn.style.display = 'inline-block';
} else {
    demoBtn.style.display = 'none';
}

// Code
codeBtn.href = project.codeUrl.trim();
codeBtn.style.display = 'inline-block';
