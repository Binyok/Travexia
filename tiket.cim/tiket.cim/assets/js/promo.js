// Data Promo (sama dengan di script.js)
const promos = [
  {
    id: 1,
    title: 'Diskon 40% Hotel',
    description: 'Untuk pemesanan hotel pilihan di seluruh Indonesia',
    discount: '40%',
    color: 'linear-gradient(to right, #3b82f6, #1d4ed8)',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
    category: 'HOTEL',
    fullDescription: 'Nikmati diskon hingga 40% untuk pemesanan hotel pilihan di seluruh Indonesia. Promo ini berlaku untuk berbagai tipe kamar dan destinasi populer.',
    benefits: [
      'Diskon hingga 40% untuk hotel pilihan',
      'Gratis pembatalan hingga 24 jam sebelumnya',
      'Cashback tambahan 5% dalam bentuk poin',
      'Upgrade kamar gratis (tergantung ketersediaan)'
    ],
    hotelTypes: ['Hotel Bintang 3', 'Hotel Bintang 4', 'Hotel Bintang 5', 'Resort', 'Villa'],
    terms: [
      'Berlaku untuk pemesanan mulai hari ini',
      'Terbatas untuk 1000 pemesanan pertama',
      'Tidak dapat digabung dengan promo lain',
      'Berlaku hingga 31 Desember 2025'
    ],
    validUntil: '2025-12-31',
    link: 'hotels.html'
  },
  {
    id: 2,
    title: 'Flash Sale Pesawat',
    description: 'Promo spesial tiket pesawat ke destinasi favorit',
    discount: '30%',
    color: 'linear-gradient(to right, #8b5cf6, #7c3aed)',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop',
    category: 'PESAWAT',
    fullDescription: 'Flash sale spesial untuk tiket pesawat ke destinasi favorit Anda. Dapatkan harga terbaik untuk liburan impian Anda.',
    benefits: [
      'Diskon hingga 30% untuk rute domestik',
      'Gratis bagasi 20kg',
      'Free meal untuk penerbangan >2 jam',
      'Reschedule gratis 1x'
    ],
    hotelTypes: ['Economy Class', 'Business Class', 'First Class'],
    terms: [
      'Berlaku untuk pemesanan hari ini',
      'Terbatas 500 tiket per rute',
      'Keberangkatan minimal 7 hari dari sekarang',
      'Berlaku hingga 31 Desember 2025'
    ],
    validUntil: '2025-12-31',
    link: 'flights.html'
  },
  
{
  id: 3,
  title: 'Promo Bus Antar Kota',
  description: 'Nikmati perjalanan bus antar kota dengan harga hemat',
  discount: '50%',
  color: 'linear-gradient(to right, #22c55e, #16a34a)',
  image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=500&fit=crop',
  
  category: 'BUS',
  fullDescription: 'Promo spesial perjalanan bus antar kota dengan armada terbaik, fasilitas lengkap, dan harga terjangkau. Cocok untuk liburan, mudik, atau perjalanan bisnis.',
  
  benefits: [
    'Diskon hingga 50% untuk rute populer',
    'Armada AC & Eksekutif',
    'Kursi reclining dan hiburan perjalanan',
    'Gratis 20kg bagasi'
  ],

  hotelTypes: ['Ekonomi', 'AC', 'VIP', 'Eksekutif'], // boleh diganti kalau mau

  terms: [
    'Promo berlaku untuk rute tertentu',
    'Tidak dapat digabungkan dengan promo lain',
    'Penukaran tiket wajib menunjukkan identitas',
    'Harga dapat berubah sesuai ketersediaan'
  ],

  validUntil: '2025-12-31',
  link: 'bus.html'
},
{
  id: 4,
  title: 'Promo Kereta Hemat',
  description: 'Diskon tiket kereta untuk berbagai rute favorit',
  discount: '35%',
  color: 'linear-gradient(to right, #0ea5e9, #0284c7)',
  image: 'https://images.unsplash.com/photo-1518544889280-c4f0b5e01b6d?w=800&h=500&fit=crop',

  category: 'KERETA',
  fullDescription: 'Nikmati perjalanan kereta api dengan harga hemat. Cocok untuk perjalanan jarak jauh maupun dekat dengan kenyamanan maksimal.',
  
  benefits: [
    'Diskon hingga 35% untuk semua kelas',
    'Gratis perubahan jadwal 1x',
    'Tempat duduk nyaman & pendingin',
    'Bisa refund sesuai syarat & ketentuan'
  ],

  hotelTypes: ['Ekonomi', 'Bisnis', 'Eksekutif'], // tetap pakai nama field yang sama biar nggak error

  terms: [
    'Promo berlaku di tanggal tertentu',
    'Kuota terbatas per kereta',
    'Nama pemesan harus sesuai KTP',
    'Tidak berlaku untuk kereta sleeper'
  ],

  validUntil: '2025-12-31',
  link: 'kereta.html'
}


];

// Fungsi untuk mendapatkan parameter dari URL
function getPromoIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id')) || 1;
}

// Fungsi untuk menghitung hari tersisa
function calculateDaysLeft(validUntil) {
  const today = new Date();
  const endDate = new Date(validUntil);
  const diffTime = endDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? `${diffDays} Hari Lagi` : 'Promo Berakhir';
}

// Fungsi untuk render detail promo
function renderPromoDetail() {
  const promoId = getPromoIdFromURL();
  const promo = promos.find(p => p.id === promoId);
  
  if (!promo) {
    window.location.href = 'index.html';
    return;
  }

  // Update Page Title & Hero
  document.getElementById('promoHero').style.backgroundImage = `url('${promo.image}')`;
  document.getElementById('promoBreadcrumb').textContent = promo.title;
  document.getElementById('promoTitle').textContent = promo.title;
  document.getElementById('promoSubtitle').textContent = promo.description;

  // Update Image
  document.getElementById('promoImage').src = promo.image;
  document.getElementById('promoImage').alt = promo.title;
  document.getElementById('promoDiscountBadge').textContent = promo.discount;

  // Update Category & Title
  document.getElementById('promoCategory').textContent = promo.category;
  document.getElementById('promoMainTitle').textContent = promo.title;

  // Update Description with Benefits
  const descriptionHTML = `
    <p>${promo.fullDescription}</p>
    
    <h4>Keuntungan Promo Ini:</h4>
    <ul class="promo-benefits">
      ${promo.benefits.map(benefit => `
        <li><i data-lucide="check-circle"></i> ${benefit}</li>
      `).join('')}
    </ul>

    <h4>${promo.category === 'HOTEL' ? 'Hotel yang Tersedia:' : promo.category === 'PESAWAT' ? 'Kelas yang Tersedia:' : 'Tipe Kendaraan:'}</h4>
    <div class="hotel-tags">
      ${promo.hotelTypes.map(type => `<span class="hotel-tag">${type}</span>`).join('')}
    </div>
  `;
  document.getElementById('promoDescription').innerHTML = descriptionHTML;

  // Update Terms
  const termsHTML = promo.terms.map(term => `<li>${term}</li>`).join('');
  document.getElementById('promoTerms').innerHTML = termsHTML;

  // Update Countdown
  document.getElementById('promoCountdown').textContent = calculateDaysLeft(promo.validUntil);

  // Re-initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Fungsi untuk render related promos
function renderRelatedPromos() {
  const promoId = getPromoIdFromURL();
  const relatedPromos = promos.filter(p => p.id !== promoId);
  const container = document.getElementById('relatedPromos');
  
  if (!container) return;

  container.innerHTML = '';
  
  relatedPromos.forEach((promo) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.cursor = 'pointer';
    
    card.innerHTML = `
      <div style="position: relative; height: 12rem; overflow: hidden;">
        <img src="${promo.image}" alt="${promo.title}" loading="lazy" 
             style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s;">
        <div class="promo-badge" style="background-image: ${promo.color};">${promo.discount}</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${promo.title}</h3>
        <p class="card-text">${promo.description}</p>
        <button class="card-link" type="button">Lihat Detail →</button>
      </div>
    `;
    
    // Add click event
    card.addEventListener('click', () => {
      window.location.href = `promo-detail.html?id=${promo.id}`;
    });
    
    // Add hover effect
    const img = card.querySelector('img');
    card.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
    card.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
    
    container.appendChild(card);
  });
}

// Share functionality
function setupShareButton() {
  const shareBtn = document.getElementById('sharePromo');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', () => {
    const promoId = getPromoIdFromURL();
    const promo = promos.find(p => p.id === promoId);
    
    const shareData = {
      title: promo.title,
      text: `${promo.description} - Diskon ${promo.discount}!`,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link promo berhasil disalin!');
      });
    }
  });
}

// Mobile menu setup
function setupMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
    });

    // Handle dropdown in mobile menu
    const dropdownBtns = mobileMenu.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach((btn) => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent) {
          dropdownContent.style.display = 
            dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
      });
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileBtn.textContent = '☰';
      });
    });
  }
}

// Initialize everything
window.addEventListener('DOMContentLoaded', () => {
  renderPromoDetail();
  renderRelatedPromos();
  setupShareButton();
  setupMobileMenu();
});