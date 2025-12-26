// Ambil elemen header
const header = document.getElementById('main-header');

// Fungsi untuk mendeteksi scroll
window.addEventListener('scroll', function() {
    // Jika posisi scroll lebih dari 50px dari atas
    if (window.scrollY > 5) {
        // Tambahkan class 'scrolled' (mengaktifkan background biru & ukuran kecil)
        header.classList.add('scrolled');
    } else {
        // Jika kembali ke atas, hapus class 'scrolled' (transparan & besar)
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.product-slider-container');

    sliders.forEach((slider) => {
        const track = slider.querySelector('.slider-track');
        const originalSlides = track.children;
        const slideCount = originalSlides.length;

        // 1. CLONE SLIDE PERTAMA
        // Kita copy gambar pertama lalu tempel di paling belakang
        const firstSlideClone = originalSlides[0].cloneNode(true);
        track.appendChild(firstSlideClone);

        let currentIndex = 0;
        
        // Fungsi untuk menggeser slide
        const moveToSlide = (index, useTransition = true) => {
            if (useTransition) {
                track.style.transition = 'transform 0.8s ease-in-out'; // Pakai animasi
            } else {
                track.style.transition = 'none'; // Tanpa animasi (instan)
            }
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        const nextSlide = () => {
            currentIndex++;
            moveToSlide(currentIndex);
        };

        // 2. DETEKSI AKHIR TRANSISI
        // Setiap kali animasi selesai, kita cek apakah kita sedang di Clone?
        track.addEventListener('transitionend', () => {
            // Jika kita sudah sampai di slide terakhir (yang merupakan clone dari slide 1)
            if (currentIndex === slideCount) {
                // Matikan animasi sebentar
                track.style.transition = 'none';
                // Reset index ke 0 (Slide 1 yang asli)
                currentIndex = 0;
                // Pindahkan posisi secara instan
                track.style.transform = `translateX(0)`;
            }
        });

        // Jalankan otomatis setiap 3 detik
        setInterval(nextSlide, 3000);
    });
});