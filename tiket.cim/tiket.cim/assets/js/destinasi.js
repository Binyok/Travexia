// Data Destinasi (sama dengan di script.js tapi lebih lengkap)
const destinations = [
  {
    id: 1,
    name: 'Bali',
    hotels: '2,340 Hotel',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=600&fit=crop',
    price: 'Mulai Rp 350.000',
    description: 'Bali adalah pulau surgawi di Indonesia yang terkenal dengan pantai-pantainya yang menakjubkan, pura-pura kuno yang megah, dan budaya yang kaya. Pulau ini menawarkan pengalaman yang sempurna antara keindahan alam, spiritualitas, dan kehidupan modern. Dari sawah terasering yang hijau di Ubud hingga pantai pasir putih di Seminyak, Bali memiliki sesuatu untuk setiap jenis wisatawan.',
    stats: [
      { icon: '🏨', value: '2,340', label: 'Hotel' },
      { icon: '⭐', value: '4.8/5', label: 'Rating' },
      { icon: '✈️', value: '1 Bandara', label: 'Internasional' },
      { icon: '🌡️', value: '27-32°C', label: 'Suhu Rata-rata' }
    ],
    attractions: [
      { icon: '🏖️', name: 'Pantai Kuta', description: 'Pantai populer dengan sunset yang indah' },
      { icon: '🛕', name: 'Tanah Lot', description: 'Pura ikonik di atas batu karang' },
      { icon: '🌾', name: 'Tegalalang', description: 'Sawah terasering yang fotogenik' },
      { icon: '🏔️', name: 'Gunung Batur', description: 'Gunung berapi dengan sunrise terbaik' },
      { icon: '🐵', name: 'Monkey Forest', description: 'Hutan dengan ratusan monyet jinak' },
      { icon: '🏛️', name: 'Uluwatu Temple', description: 'Pura dengan pemandangan laut spektakuler' }
    ],
    activities: [
      { icon: '🏄', name: 'Surfing' },
      { icon: '🤿', name: 'Diving' },
      { icon: '🧘', name: 'Yoga' },
      { icon: '🛍️', name: 'Shopping' },
      { icon: '🍽️', name: 'Kuliner' },
      { icon: '💆', name: 'Spa' }
    ],
    bestTime: [
      {
        season: 'Musim Kemarau (April - Oktober)',
        months: 'April - Oktober',
        description: 'Waktu terbaik untuk berkunjung dengan cuaca cerah dan kering. Sempurna untuk aktivitas pantai dan outdoor.'
      },
      {
        season: 'Musim Hujan (November - Maret)',
        months: 'November - Maret',
        description: 'Harga hotel lebih murah, tapi cuaca tidak menentu. Cocok untuk wisata budaya dan indoor.'
      }
    ],
    tips: [
      { 
        title: 'Sewa Motor atau Mobil', 
        description: 'Untuk kemudahan eksplorasi, sewa kendaraan pribadi karena transportasi umum terbatas.' 
      },
      { 
        title: 'Pakaian Sopan ke Pura', 
        description: 'Gunakan sarung dan selendang saat mengunjungi pura. Biasanya tersedia di lokasi.' 
      },
      { 
        title: 'Hindari Rush Hour', 
        description: 'Lalu lintas Bali cukup padat, hindari jam 7-9 pagi dan 5-7 sore.' 
      },
      { 
        title: 'Tawar-menawar di Pasar', 
        description: 'Harga di pasar tradisional bisa ditawar hingga 50%. Jangan ragu untuk nego!' 
      }
    ],
    hotels: [
      {
        id: 6,
        name: 'The Ritz-Carlton Bali',
        location: 'Nusa Dua, Bali',
        price: 'Rp 3.250.000',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
        rating: '4.9'
      },
      {
        id: 7,
        name: 'Four Seasons Resort Bali',
        location: 'Jimbaran, Bali',
        price: 'Rp 4.500.000',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
        rating: '4.9'
      },
      {
        id: 8,
        name: 'Grand Mirage Resort Bali',
        location: 'Nusa Dua, Bali',
        price: 'Rp 2.150.000',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
        rating: '4.7'
      }
    ]
  },
  {
    id: 2,
    name: 'Jakarta',
    hotels: '3,120 Hotel',
    image: 'https://images.unsplash.com/photo-1555899434-94d1eb536e0f?w=1200&h=600&fit=crop',
    price: 'Mulai Rp 280.000',
    description: 'Jakarta adalah ibu kota Indonesia yang modern dan dinamis. Kota metropolitan ini menawarkan kombinasi sempurna antara gedung pencakar langit modern, pusat perbelanjaan mewah, dan warisan budaya yang kaya. Sebagai pusat bisnis dan hiburan, Jakarta memiliki kehidupan malam yang semarak, kuliner beragam, dan berbagai atraksi wisata untuk semua kalangan.',
    stats: [
      { icon: '🏨', value: '3,120', label: 'Hotel' },
      { icon: '⭐', value: '4.5/5', label: 'Rating' },
      { icon: '✈️', value: '2 Bandara', label: 'Utama' },
      { icon: '🌡️', value: '26-32°C', label: 'Suhu Rata-rata' }
    ],
    attractions: [
      { icon: '🗼', name: 'Monas', description: 'Monumen nasional ikon Jakarta' },
      { icon: '🏛️', name: 'Kota Tua', description: 'Kawasan bersejarah dengan arsitektur kolonial' },
      { icon: '🌊', name: 'Ancol', description: 'Taman rekreasi terbesar di Jakarta' },
      { icon: '🕌', name: 'Masjid Istiqlal', description: 'Masjid terbesar di Asia Tenggara' },
      { icon: '⛪', name: 'Katedral', description: 'Gereja megah bergaya neo-gotik' },
      { icon: '🏙️', name: 'Grand Indonesia', description: 'Pusat perbelanjaan premium' }
    ],
    activities: [
      { icon: '🛍️', name: 'Shopping' },
      { icon: '🍽️', name: 'Kuliner' },
      { icon: '🎭', name: 'Museum' },
      { icon: '🎬', name: 'Cinema' },
      { icon: '🎤', name: 'Karaoke' },
      { icon: '🌃', name: 'Nightlife' }
    ],
    bestTime: [
      {
        season: 'Musim Kemarau (Juni - September)',
        months: 'Juni - September',
        description: 'Cuaca cerah dan tidak terlalu panas. Cocok untuk jalan-jalan dan eksplorasi kota.'
      },
      {
        season: 'Hindari Weekend',
        months: 'Senin - Jumat',
        description: 'Weekend cenderung lebih ramai di mall dan tempat wisata. Weekday lebih nyaman.'
      }
    ],
    tips: [
      { 
        title: 'Gunakan Transportasi Online', 
        description: 'Manfaatkan ojek online atau taksi online untuk menghindari macet dan keamanan lebih terjamin.' 
      },
      { 
        title: 'Kunjungi Mall untuk AC Gratis', 
        description: 'Cuaca Jakarta panas, mall adalah tempat istirahat yang nyaman sambil shopping.' 
      },
      { 
        title: 'Coba Street Food', 
        description: 'Kuliner kaki lima Jakarta sangat beragam dan lezat dengan harga terjangkau.' 
      },
      { 
        title: 'Siapkan Payung', 
        description: 'Cuaca Jakarta tidak menentu, bawa payung untuk antisipasi hujan mendadak.' 
      }
    ],
    hotels: [
      {
        id: 1,
        name: 'Grand Hyatt Jakarta',
        location: 'Thamrin, Jakarta Pusat',
        price: 'Rp 1.850.000',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
        rating: '4.8'
      },
      {
        id: 2,
        name: 'Shangri-La Jakarta',
        location: 'Sudirman, Jakarta Pusat',
        price: 'Rp 2.250.000',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
        rating: '4.8'
      },
      {
        id: 5,
        name: 'Fairmont Jakarta',
        location: 'Senayan, Jakarta Pusat',
        price: 'Rp 2.450.000',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
        rating: '4.9'
      }
    ]
  },
  {
    id: 3,
    name: 'Yogyakarta',
    hotels: '1,580 Hotel',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=600&fit=crop',
    price: 'Mulai Rp 250.000',
    description: 'Yogyakarta adalah kota budaya dan pendidikan di Jawa Tengah yang kaya akan sejarah dan tradisi. Dikenal sebagai kota pelajar, Yogya memiliki atmosfer yang ramah dan harga yang terjangkau. Dari candi-candi megah seperti Borobudur dan Prambanan hingga kuliner khas seperti gudeg, Yogyakarta menawarkan pengalaman autentik budaya Jawa.',
    stats: [
      { icon: '🏨', value: '1,580', label: 'Hotel' },
      { icon: '⭐', value: '4.7/5', label: 'Rating' },
      { icon: '✈️', value: '1 Bandara', label: 'Internasional' },
      { icon: '🌡️', value: '25-32°C', label: 'Suhu Rata-rata' }
    ],
    attractions: [
      { icon: '🛕', name: 'Candi Borobudur', description: 'Candi Buddha terbesar di dunia' },
      { icon: '⛩️', name: 'Candi Prambanan', description: 'Kompleks candi Hindu yang megah' },
      { icon: '🏰', name: 'Keraton Yogyakarta', description: 'Istana Sultan yang masih aktif' },
      { icon: '🏖️', name: 'Pantai Parangtritis', description: 'Pantai dengan legenda mistis' },
      { icon: '🏔️', name: 'Gunung Merapi', description: 'Gunung berapi aktif dengan jeep lava tour' },
      { icon: '🛍️', name: 'Malioboro', description: 'Jantung kota dan surga belanja' }
    ],
    activities: [
      { icon: '📸', name: 'Fotografi' },
      { icon: '🚵', name: 'Jeep Tour' },
      { icon: '🛍️', name: 'Belanja' },
      { icon: '🍽️', name: 'Kuliner' },
      { icon: '🎨', name: 'Seni & Budaya' },
      { icon: '🏛️', name: 'Museum' }
    ],
    bestTime: [
      {
        season: 'Musim Kemarau (April - Oktober)',
        months: 'April - Oktober',
        description: 'Waktu terbaik dengan cuaca cerah untuk mengunjungi candi dan gunung. Sunrise di Borobudur sangat indah.'
      },
      {
        season: 'Hindari Libur Sekolah',
        months: 'Selain Juni-Juli & Desember',
        description: 'Tempat wisata lebih sepi dan harga penginapan lebih murah di luar musim liburan.'
      }
    ],
    tips: [
      { 
        title: 'Naik Becak di Malioboro', 
        description: 'Pengalaman unik berkeliling kota dengan becak tradisional, jangan lupa nego harga dulu!' 
      },
      { 
        title: 'Datang Pagi ke Borobudur', 
        description: 'Untuk sunrise package dan menghindari panas terik siang hari.' 
      },
      { 
        title: 'Coba Gudeg Yu Djum', 
        description: 'Kuliner khas Jogja yang wajib dicoba, buka 24 jam!' 
      },
      { 
        title: 'Sewa Motor untuk Mobilitas', 
        description: 'Cara paling ekonomis dan fleksibel untuk jelajah Yogyakarta.' 
      }
    ],
    hotels: [
      {
        id: 19,
        name: 'The Phoenix Hotel Yogyakarta',
        location: 'Jl. Jenderal Sudirman, Yogyakarta',
        price: 'Rp 1.350.000',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
        rating: '4.7'
      },
      {
        id: 20,
        name: 'Hyatt Regency Yogyakarta',
        location: 'Jl. Palagan Tentara Pelajar, Yogyakarta',
        price: 'Rp 1.680.000',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
        rating: '4.8'
      },
      {
        id: 21,
        name: 'Royal Ambarrukmo Yogyakarta',
        location: 'Jl. Laksda Adisucipto, Yogyakarta',
        price: 'Rp 1.280.000',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
        rating: '4.6'
      }
    ]
  },
  {
    id: 4,
    name: 'Lombok',
    hotels: '890 Hotel',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
    price: 'Mulai Rp 320.000',
    description: 'Lombok adalah pulau surgawi di sebelah timur Bali yang menawarkan keindahan alam yang masih alami dan tenang. Dengan pantai-pantai berpasir putih, air laut yang jernih, dan Gunung Rinjani yang megah, Lombok adalah destinasi sempurna bagi pecinta alam dan petualangan. Pulau ini juga terkenal dengan kerajinan tangan tradisional dan budaya Sasak yang unik.',
    stats: [
      { icon: '🏨', value: '890', label: 'Hotel' },
      { icon: '⭐', value: '4.6/5', label: 'Rating' },
      { icon: '✈️', value: '1 Bandara', label: 'Internasional' },
      { icon: '🌡️', value: '26-31°C', label: 'Suhu Rata-rata' }
    ],
    attractions: [
      { icon: '🏖️', name: 'Pantai Kuta Lombok', description: 'Pantai dengan pasir seperti merica' },
      { icon: '🏝️', name: 'Gili Trawangan', description: 'Pulau kecil tanpa kendaraan bermotor' },
      { icon: '🏔️', name: 'Gunung Rinjani', description: 'Gunung tertinggi kedua di Indonesia' },
      { icon: '💦', name: 'Air Terjun Sendang Gile', description: 'Air terjun spektakuler di kaki Rinjani' },
      { icon: '🌊', name: 'Pink Beach', description: 'Pantai berpasir merah muda langka' },
      { icon: '🏛️', name: 'Desa Sade', description: 'Desa tradisional suku Sasak' }
    ],
    activities: [
      { icon: '🏄', name: 'Surfing' },
      { icon: '🤿', name: 'Snorkeling' },
      { icon: '🥾', name: 'Hiking' },
      { icon: '🚴', name: 'Cycling' },
      { icon: '🛶', name: 'Island Hopping' },
      { icon: '📸', name: 'Photography' }
    ],
    bestTime: [
      {
        season: 'Musim Kemarau (April - November)',
        months: 'April - November',
        description: 'Waktu terbaik dengan cuaca cerah dan laut tenang. Sempurna untuk snorkeling dan hiking Rinjani.'
      },
      {
        season: 'Surfing Season (Juni - Agustus)',
        months: 'Juni - Agustus',
        description: 'Ombak terbaik untuk surfing di pantai selatan Lombok.'
      }
    ],
    tips: [
      { 
        title: 'Bawa Uang Tunai', 
        description: 'ATM terbatas di area wisata, terutama Gili Islands. Siapkan cash yang cukup.' 
      },
      { 
        title: 'Sewa Sepeda di Gili', 
        description: 'Tidak ada motor di Gili Islands, sepeda adalah transportasi utama yang fun!' 
      },
      { 
        title: 'Guide untuk Rinjani', 
        description: 'Wajib menggunakan guide dan porter untuk mendaki Gunung Rinjani demi keamanan.' 
      },
      { 
        title: 'Sunscreen & Topi', 
        description: 'Matahari Lombok sangat terik, perlindungan dari UV sangat penting.' 
      }
    ],
    hotels: [
      {
        id: 24,
        name: 'The Oberoi Beach Resort Lombok',
        location: 'Medana Beach, Lombok',
        price: 'Rp 3.850.000',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop',
        rating: '4.9'
      },
      {
        id: 25,
        name: 'Sheraton Senggigi Beach Resort',
        location: 'Senggigi, Lombok',
        price: 'Rp 2.150.000',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
        rating: '4.6'
      },
      {
        id: 24,
        name: 'The Oberoi Beach Resort Lombok',
        location: 'Medana Beach, Lombok',
        price: 'Rp 3.850.000',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
        rating: '4.9'
      }
    ]
  }
];

// Fungsi untuk mendapatkan parameter dari URL
function getDestIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');
  if (name) {
    return destinations.findIndex(d => d.name.toLowerCase() === name.toLowerCase()) + 1;
  }
  return parseInt(params.get('id')) || 1;
}

// Fungsi untuk render detail destinasi
function renderDestinationDetail() {
  const destId = getDestIdFromURL();
  const dest = destinations.find(d => d.id === destId);
  
  if (!dest) {
    window.location.href = 'index.html';
    return;
  }

  // Update Page Title & Hero
  document.getElementById('destHero').style.backgroundImage = `url('${dest.image}')`;
  document.getElementById('destBreadcrumb').textContent = dest.name;
  document.getElementById('destTitle').textContent = dest.name;
  document.getElementById('destSubtitle').textContent = dest.description.substring(0, 100) + '...';

  // Update all destination names
  document.getElementById('destName').textContent = dest.name;
  document.getElementById('destNameSidebar').textContent = dest.name;
  document.getElementById('destNameHotels').textContent = dest.name;

  // Update Description
  document.getElementById('destDescription').innerHTML = `<p>${dest.description}</p>`;

  // Update Stats
  const statsHTML = dest.stats.map(stat => `
    <div class="dest-stat-card">
      <div class="dest-stat-icon">${stat.icon}</div>
      <span class="dest-stat-value">${stat.value}</span>
      <span class="dest-stat-label">${stat.label}</span>
    </div>
  `).join('');
  document.getElementById('destStats').innerHTML = statsHTML;

  // Update Attractions
  const attractionsHTML = dest.attractions.map(attr => `
    <div class="attraction-item">
      <div class="attraction-icon">${attr.icon}</div>
      <div class="attraction-content">
        <h4>${attr.name}</h4>
        <p>${attr.description}</p>
      </div>
    </div>
  `).join('');
  document.getElementById('attractionsList').innerHTML = attractionsHTML;

  // Update Activities
  const activitiesHTML = dest.activities.map(act => `
    <div class="activity-chip">
      <div class="activity-chip-icon">${act.icon}</div>
      <div class="activity-chip-name">${act.name}</div>
    </div>
  `).join('');
  document.getElementById('activitiesList').innerHTML = activitiesHTML;

  // Update Best Time
  const bestTimeHTML = dest.bestTime.map(time => `
    <div class="season-card">
      <h4>${time.season}</h4>
      <div class="season-months">${time.months}</div>
      <p>${time.description}</p>
    </div>
  `).join('');
  document.getElementById('bestTimeContent').innerHTML = bestTimeHTML;

  // Update Tips
  const tipsHTML = dest.tips.map((tip, index) => `
    <div class="tip-item">
      <div class="tip-number">${index + 1}</div>
      <div class="tip-content">
        <h5>${tip.title}</h5>
        <p>${tip.description}</p>
      </div>
    </div>
  `).join('');
  document.getElementById('tipsList').innerHTML = tipsHTML;

  // Update Starting Price
  document.getElementById('startingPrice').textContent = dest.price;

  // Re-initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Fungsi untuk render popular hotels - FIXED VERSION
function renderPopularHotels() {
  const destId = getDestIdFromURL();
  const dest = destinations.find(d => d.id === destId);
  
  if (!dest || !dest.hotels) return;

  const container = document.getElementById('popularHotels');
  container.innerHTML = '';

  dest.hotels.forEach((hotel) => {
    const card = document.createElement('div');
    card.className = 'hotel-card';
    
    card.innerHTML = `
      <div class="hotel-card-image">
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy">
      </div>
      <div class="hotel-card-body">
        <h4>${hotel.name}</h4>
        <div class="hotel-location">
          <i data-lucide="map-pin"></i>
          ${hotel.location}
        </div>
        <div class="hotel-rating">
          <span class="hotel-stars">★ ${hotel.rating}</span>
        </div>
        <div>
          <span class="hotel-price">${hotel.price}</span>
          <span class="hotel-price-note">/malam</span>
        </div>
      </div>
    `;

    // Event click - redirect dengan ID yang benar dari hotels.js
    card.addEventListener('click', () => {
      // Ambil data check-in/out dari form quick booking jika ada
      const checkIn = document.getElementById('checkin')?.value || '';
      const checkOut = document.getElementById('checkout')?.value || '';
      const guests = document.getElementById('guests')?.value || '1 Kamar, 2 Tamu';
      
      // Gunakan ID yang sudah ada di data hotel (dari hotels.js)
      const params = new URLSearchParams({
        id: hotel.id, // ID asli dari hotels.js - INI YANG PENTING!
        checkin: checkIn,
        checkout: checkOut,
        tamu: guests
      });
      
      console.log('Redirecting to hotel detail with ID:', hotel.id);
      
      // Redirect ke hotel-detail.html
      window.location.href = `hotel-detail.html?${params.toString()}`;
    });

    container.appendChild(card);
  });

  // Re-initialize Lucide icons jika ada
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Fungsi untuk render other destinations
function renderOtherDestinations() {
  const destId = getDestIdFromURL();
  const otherDests = destinations.filter(d => d.id !== destId);
  const container = document.getElementById('otherDestinations');
  
  if (!container) return;

  container.innerHTML = '';
  
  otherDests.forEach((dest) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.cursor = 'pointer';
    
    card.innerHTML = `
      <div style="position: relative; height: 16rem; overflow: hidden;">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy" 
             style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s;">
        <div class="dest-overlay"></div>
        <div class="dest-info">
          <h3>${dest.name}</h3>
          <p>${dest.hotels}</p>
          <p class="dest-price">${dest.price}</p>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      window.location.href = `destinasi-detail.html?id=${dest.id}`;
    });
    
    const img = card.querySelector('img');
    card.addEventListener('mouseenter', () => img.style.transform = 'scale(1.08)');
    card.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
    
    container.appendChild(card);
  });
}

// Setup quick booking form
function setupQuickBooking() {
  const form = document.getElementById('quickBookingForm');
  if (!form) return;

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('checkin').setAttribute('min', today);
  document.getElementById('checkout').setAttribute('min', today);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const destId = getDestIdFromURL();
    const dest = destinations.find(d => d.id === destId);
    
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    if (!checkin || !checkout) {
      alert('Mohon isi tanggal check-in dan check-out');
      return;
    }

    const params = new URLSearchParams({
      kota: dest.name,
      checkin: checkin,
      checkout: checkout,
      tamu: guests
    });

    window.location.href = `hotels.html?${params.toString()}`;
  });

  // Validate checkout date
  document.getElementById('checkin').addEventListener('change', function() {
    document.getElementById('checkout').setAttribute('min', this.value);
  });
}

// Mobile menu setup
function setupMobileMenu() 
  {
  const mobileBtn = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
    });

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
  renderDestinationDetail();
  renderPopularHotels();
  renderOtherDestinations();
  setupQuickBooking();
  setupMobileMenu();
});