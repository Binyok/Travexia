// =====================================================
// DATA HOTEL
// =====================================================
const hotelsData = [
  // Jakarta
  {
    id: 1,
    name: 'Grand Hyatt Jakarta',
    location: 'Thamrin, Jakarta Pusat',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 2340,
    price: 1850000,
    originalPrice: 2200000,
    discount: 16,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Parkir'],
    description: 'Hotel bintang 5 dengan fasilitas lengkap di pusat kota Jakarta',
    city: 'Jakarta',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 2,
    name: 'Shangri-La Jakarta',
    location: 'Sudirman, Jakarta Pusat',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 2890,
    price: 2250000,
    originalPrice: 2700000,
    discount: 17,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Hotel bintang 5 dengan layanan kelas dunia',
    city: 'Jakarta',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 3,
    name: 'The Westin Jakarta',
    location: 'Kuningan, Jakarta Selatan',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 1980,
    price: 1650000,
    originalPrice: 1950000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Parkir'],
    description: 'Hotel modern dengan pemandangan kota yang menawan',
    city: 'Jakarta',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 4,
    name: 'Aryaduta Suites Semanggi',
    location: 'Semanggi, Jakarta Selatan',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 1680,
    price: 1280000,
    originalPrice: 1500000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym'],
    description: 'Suite hotel dengan lokasi strategis di Jakarta',
    city: 'Jakarta',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 5,
    name: 'Fairmont Jakarta',
    location: 'Senayan, Jakarta Pusat',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 3120,
    price: 2450000,
    originalPrice: 2900000,
    discount: 16,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa', 'Parkir'],
    description: 'Hotel mewah dengan standar internasional',
    city: 'Jakarta',
    checkIn: '14:00',
    checkOut: '12:00'
  },

  // Bali
  {
    id: 6,
    name: 'The Ritz-Carlton Bali',
    location: 'Nusa Dua, Bali',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 3120,
    price: 3250000,
    originalPrice: 3800000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Resort mewah dengan pemandangan laut yang menakjubkan',
    city: 'Bali',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 7,
    name: 'Four Seasons Resort Bali',
    location: 'Jimbaran, Bali',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 3450,
    price: 4500000,
    originalPrice: 5200000,
    discount: 13,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Resort eksklusif dengan villa privat dan pantai pribadi',
    city: 'Bali',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 8,
    name: 'Grand Mirage Resort Bali',
    location: 'Nusa Dua, Bali',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 2580,
    price: 2150000,
    originalPrice: 2550000,
    discount: 16,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Kids Club'],
    description: 'Resort keluarga dengan fasilitas all-inclusive',
    city: 'Bali',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 9,
    name: 'AYANA Resort Bali',
    location: 'Jimbaran, Bali',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 2980,
    price: 3850000,
    originalPrice: 4500000,
    discount: 14,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Spa', 'Private Beach'],
    description: 'Resort mewah dengan Rock Bar yang terkenal',
    city: 'Bali',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 10,
    name: 'Padma Resort Legian',
    location: 'Legian, Bali',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 2240,
    price: 1980000,
    originalPrice: 2350000,
    discount: 16,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Resort dengan akses langsung ke Pantai Legian',
    city: 'Bali',
    checkIn: '14:00',
    checkOut: '12:00'
  },

  // Bandung
  {
    id: 11,
    name: 'Pullman Bandung Grand Central',
    location: 'Dago, Bandung',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 1580,
    price: 950000,
    originalPrice: 1150000,
    discount: 17,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym'],
    description: 'Hotel modern dengan akses mudah ke tempat wisata',
    city: 'Bandung',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 12,
    name: 'The Trans Luxury Hotel',
    location: 'Setiabudi, Bandung',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 2100,
    price: 2100000,
    originalPrice: 2500000,
    discount: 16,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Hotel mewah dengan arsitektur unik',
    city: 'Bandung',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 13,
    name: 'Hilton Bandung',
    location: 'Pasteur, Bandung',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 1890,
    price: 1650000,
    originalPrice: 1950000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Hotel bintang 5 dengan pemandangan kota Bandung',
    city: 'Bandung',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 14,
    name: 'Sheraton Bandung Hotel & Towers',
    location: 'Ir. H. Djuanda, Bandung',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
    rating: 4.5,
    reviews: 1680,
    price: 1280000,
    originalPrice: 1500000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym'],
    description: 'Hotel dengan lokasi strategis di pusat kota',
    city: 'Bandung',
    checkIn: '14:00',
    checkOut: '12:00'
  },

  // Surabaya
  {
    id: 15,
    name: 'JW Marriott Surabaya',
    location: 'Embong Malang, Surabaya',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 2450,
    price: 1950000,
    originalPrice: 2300000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Hotel mewah di jantung kota Surabaya',
    city: 'Surabaya',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 16,
    name: 'Shangri-La Surabaya',
    location: 'Mayjend Sungkono, Surabaya',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 2180,
    price: 1780000,
    originalPrice: 2100000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Hotel bintang 5 dengan layanan premium',
    city: 'Surabaya',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 17,
    name: 'Hotel Ciputra World Surabaya',
    location: 'Mayjend Sungkono, Surabaya',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 1920,
    price: 1450000,
    originalPrice: 1700000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym'],
    description: 'Hotel modern dengan akses langsung ke mall',
    city: 'Surabaya',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 18,
    name: 'Vasa Hotel Surabaya',
    location: 'Gubeng, Surabaya',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop',
    rating: 4.5,
    reviews: 1560,
    price: 1180000,
    originalPrice: 1400000,
    discount: 16,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym'],
    description: 'Hotel dengan desain kontemporer dan lokasi strategis',
    city: 'Surabaya',
    checkIn: '14:00',
    checkOut: '12:00'
  },

  // Yogyakarta
  {
    id: 19,
    name: 'The Phoenix Hotel Yogyakarta',
    location: 'Jl. Jenderal Sudirman, Yogyakarta',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 1980,
    price: 1350000,
    originalPrice: 1600000,
    discount: 16,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Spa'],
    description: 'Hotel heritage dengan nuansa klasik kolonial',
    city: 'Yogyakarta',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 20,
    name: 'Hyatt Regency Yogyakarta',
    location: 'Jl. Palagan Tentara Pelajar, Yogyakarta',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 2340,
    price: 1680000,
    originalPrice: 1980000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Resort dengan pemandangan sawah dan Gunung Merapi',
    city: 'Yogyakarta',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 21,
    name: 'Royal Ambarrukmo Yogyakarta',
    location: 'Jl. Laksda Adisucipto, Yogyakarta',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 2120,
    price: 1280000,
    originalPrice: 1500000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Hotel mewah dengan heritage keraton',
    city: 'Yogyakarta',
    checkIn: '14:00',
    checkOut: '12:00'
  },

  // Medan
  {
    id: 22,
    name: 'Grand Aston City Hall Medan',
    location: 'Jl. Balai Kota, Medan',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 1680,
    price: 1250000,
    originalPrice: 1480000,
    discount: 16,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym'],
    description: 'Hotel modern di pusat kota Medan',
    city: 'Medan',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 23,
    name: 'JW Marriott Medan',
    location: 'Jl. Putri Hijau, Medan',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 1890,
    price: 1580000,
    originalPrice: 1850000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Hotel bintang 5 dengan fasilitas kelas dunia',
    city: 'Medan',
    checkIn: '14:00',
    checkOut: '12:00'
  },

  // Lombok
  {
    id: 24,
    name: 'The Oberoi Beach Resort Lombok',
    location: 'Medana Beach, Lombok',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 2580,
    price: 3850000,
    originalPrice: 4500000,
    discount: 14,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Spa', 'Private Beach'],
    description: 'Resort eksklusif dengan villa tepi pantai',
    city: 'Lombok',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 25,
    name: 'Sheraton Senggigi Beach Resort',
    location: 'Senggigi, Lombok',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 1980,
    price: 2150000,
    originalPrice: 2550000,
    discount: 16,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Resort dengan pemandangan sunset yang indah',
    city: 'Lombok',
    checkIn: '14:00',
    checkOut: '12:00'
  },

  // Malang
  {
    id: 26,
    name: 'Tugu Malang Hotel',
    location: 'Jl. Tugu, Malang',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 1560,
    price: 1480000,
    originalPrice: 1750000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Spa'],
    description: 'Hotel heritage dengan koleksi seni antik',
    city: 'Malang',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 27,
    name: 'Atria Hotel Malang',
    location: 'Jl. Letjend S. Parman, Malang',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop',
    rating: 4.5,
    reviews: 1340,
    price: 980000,
    originalPrice: 1150000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym'],
    description: 'Hotel modern dengan lokasi strategis',
    city: 'Malang',
    checkIn: '14:00',
    checkOut: '12:00'
  },

  // Semarang
  {
    id: 28,
    name: 'Quest Hotel Semarang',
    location: 'Simpang Lima, Semarang',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 1680,
    price: 850000,
    originalPrice: 1000000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym'],
    description: 'Hotel modern di pusat kota Semarang',
    city: 'Semarang',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 29,
    name: 'Novotel Semarang',
    location: 'Jl. Pemuda, Semarang',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.5,
    reviews: 1450,
    price: 1180000,
    originalPrice: 1400000,
    discount: 16,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Hotel bintang 4 dengan fasilitas lengkap',
    city: 'Semarang',
    checkIn: '14:00',
    checkOut: '12:00'
  },

  // Solo
  {
    id: 30,
    name: 'Alila Solo',
    location: 'Jl. Slamet Riyadi, Solo',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 1890,
    price: 1650000,
    originalPrice: 1950000,
    discount: 15,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    description: 'Hotel mewah dengan desain kontemporer Jawa',
    city: 'Solo',
    checkIn: '14:00',
    checkOut: '12:00'
  },
];

// Room types yang tersedia
const roomTypes = [
  {
    id: 'standard',
    name: 'Standard Room',
    features: 'AC • TV • Shower • WiFi',
    basePrice: 350000
  },
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    features: 'AC • Breakfast • TV • Kolam Renang',
    basePrice: 650000
  },
  {
    id: 'suite',
    name: 'Suite Room',
    features: 'AC • Breakfast • Bathtub • Premium Lounge',
    basePrice: 1200000
  }
];

// =====================================================
// SETTING UNTUK HALAMAN LIST
// =====================================================
let hotelViewLocation = "";
let hotelSortBy = 'price-asc';
let hotelVisibleCount = 4;

// =====================================================
// SETTING UNTUK HALAMAN DETAIL
// =====================================================
const hotelDetailState = {
  hotel: null,
  selectedRoom: 'standard',
  guests: 1,
  nights: 1,
  checkIn: '',
  checkOut: ''
};

// =====================================================
// UTILITY FUNCTIONS
// =====================================================
function hotelFormatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

function calculateNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 1;
  
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays > 0 ? diffDays : 1;
}

// =====================================================
// HALAMAN LIST HOTEL
// =====================================================
function getUrlParametersForList() {
  const urlParams = new URLSearchParams(window.location.search);
  const kota = urlParams.get('kota');
  const checkin = urlParams.get('checkin');
  const checkout = urlParams.get('checkout');
  const tamu = urlParams.get('tamu');
  
  if (kota) {
    hotelViewLocation = kota;
    const input = document.getElementById('hotelLocationInput');
    if (input) {
      input.value = kota;
    }
  }
  
  console.log('Hotel Search Parameters:', {
    kota,
    checkin,
    checkout,
    tamu
  });
}

function getFilteredHotels() {
  return hotelsData.filter((h) => {
    if (hotelViewLocation === "" || hotelViewLocation === null) return true;
    return h.city.toLowerCase() === hotelViewLocation.toLowerCase();
  });
}

function getSortedHotels() {
  const filtered = getFilteredHotels();
  return filtered.slice().sort((a, b) => {
    switch (hotelSortBy) {
      case 'price-asc': return a.price - b.price;
      case 'rating-desc': return b.rating - a.rating;
      case 'popular': return b.reviews - a.reviews;
      default: return 0;
    }
  });
}

function createHotelCard(hotel) {
  const card = document.createElement('article');
  card.className = 'card hotel-card';

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'hotel-card-image';

  const img = document.createElement('img');
  img.src = hotel.image;
  img.alt = hotel.name;
  img.loading = 'lazy';
  imgWrapper.appendChild(img);

  if (hotel.discount) {
    const badge = document.createElement('div');
    badge.className = 'hotel-discount-badge';
    badge.textContent = `${hotel.discount}% OFF`;
    imgWrapper.appendChild(badge);
  }

  const body = document.createElement('div');
  body.className = 'hotel-card-body';

  const header = document.createElement('div');
  header.className = 'hotel-card-header';

  const titleLoc = document.createElement('div');
  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = hotel.name;

  const loc = document.createElement('p');
  loc.className = 'hotel-location';
  loc.textContent = hotel.location;

  titleLoc.appendChild(title);
  titleLoc.appendChild(loc);

  const rating = document.createElement('div');
  rating.className = 'hotel-rating';
  rating.innerHTML = `<span class="hotel-rating-star">★</span><span>${hotel.rating}</span>`;

  header.appendChild(titleLoc);
  header.appendChild(rating);

  const desc = document.createElement('p');
  desc.className = 'card-text';
  desc.textContent = hotel.description;

  const amenities = document.createElement('div');
  amenities.className = 'hotel-amenities';
  hotel.amenities.slice(0, 4).forEach((a) => {
    const chip = document.createElement('span');
    chip.className = 'hotel-amenity-chip';
    chip.textContent = a;
    amenities.appendChild(chip);
  });

  const reviews = document.createElement('p');
  reviews.className = 'hotel-reviews';
  reviews.textContent = `${hotel.reviews.toLocaleString('id-ID')} ulasan`;

  const priceRow = document.createElement('div');
  priceRow.className = 'hotel-price-row';
  priceRow.innerHTML = `
    <div>
      <p class="hotel-original-price">${hotelFormatPrice(hotel.originalPrice)}</p>
      <p class="hotel-price">${hotelFormatPrice(hotel.price)}</p>
      <p class="hotel-price-note">per malam</p>
    </div>
    <button type="button" class="btn-primary hotel-select-btn">Pilih</button>
  `;

  // Event listener untuk tombol pilih
  const selectBtn = priceRow.querySelector('.hotel-select-btn');
  selectBtn.addEventListener('click', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const checkin = urlParams.get('checkin') || new Date().toISOString().split('T')[0];
    const checkout = urlParams.get('checkout') || new Date(Date.now() + 86400000).toISOString().split('T')[0];
    const tamu = urlParams.get('tamu') || '1 Tamu';
    
    const params = new URLSearchParams({
      id: hotel.id,
      checkin: checkin,
      checkout: checkout,
      tamu: tamu
    });
    
    window.location.href = `hotel-detail.html?${params.toString()}`;
  });

  body.appendChild(header);
  body.appendChild(desc);
  body.appendChild(amenities);
  body.appendChild(reviews);
  body.appendChild(priceRow);

  card.appendChild(imgWrapper);
  card.appendChild(body);

  return card;
}

function renderHotels() {
  const titleEl = document.getElementById('hotelResultsTitle');
  const subtitleEl = document.getElementById('hotelResultsSubtitle');
  const listEl = document.getElementById('hotelCards');
  const loadMoreWrapper = document.getElementById('hotelLoadMoreWrapper');

  if (!titleEl || !subtitleEl || !listEl) return;

  const sorted = getSortedHotels();
  const cityLabel = hotelViewLocation || 'Indonesia';

  titleEl.textContent = `Hotel di ${cityLabel}`;
  subtitleEl.textContent = `${sorted.length} hotel ditemukan`;

  listEl.innerHTML = '';
  const toShow = sorted.slice(0, hotelVisibleCount);
  toShow.forEach((h) => listEl.appendChild(createHotelCard(h)));

  if (sorted.length > hotelVisibleCount) {
    loadMoreWrapper?.classList.remove('hidden');
  } else {
    loadMoreWrapper?.classList.add('hidden');
  }
}

function setupHotelControls() {
  const sortSelect = document.getElementById('hotelSortSelect');
  const loadMoreBtn = document.getElementById('hotelLoadMoreButton');

  sortSelect?.addEventListener('change', () => {
    hotelSortBy = sortSelect.value;
    hotelVisibleCount = 4;
    renderHotels();
  });

  loadMoreBtn?.addEventListener('click', () => {
    const total = getSortedHotels().length;
    hotelVisibleCount = Math.min(hotelVisibleCount + 3, total);
    renderHotels();
  });
}

function setupHotelDropdown() {
  const input = document.getElementById("hotelLocationInput");
  const dropdown = document.getElementById("hotelDropdown");

  if (!input || !dropdown) return;

  const cities = ["Jakarta", "Bali", "Bandung"];

  function showDropdown() {
    dropdown.innerHTML = "";

    cities.forEach(city => {
      const item = document.createElement("div");
      item.className = "dropdown-item";
      item.textContent = city;
      item.style.padding = "10px";
      item.style.cursor = "pointer";
      item.style.borderBottom = "1px solid #eee";

      item.addEventListener("mouseenter", () => {
        item.style.backgroundColor = "#f0f0f0";
      });

      item.addEventListener("mouseleave", () => {
        item.style.backgroundColor = "white";
      });

      item.addEventListener("click", () => {
        input.value = city;
        hotelViewLocation = city;
        renderHotels();
        dropdown.style.display = "none";
      });

      dropdown.appendChild(item);
    });

    dropdown.style.display = "block";
  }

  input.addEventListener("input", () => {
    const val = input.value.trim();

    if (val === "") {
      hotelViewLocation = "";
      renderHotels();
    }

    showDropdown();
  });

  input.addEventListener("focus", showDropdown);

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && e.target !== input) {
      dropdown.style.display = "none";
    }
  });
}

function initHotelList() {
  getUrlParametersForList();
  setupHotelControls();
  setupHotelDropdown();
  renderHotels();
}

// =====================================================
// HALAMAN DETAIL HOTEL
// =====================================================
function getHotelFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get('id');
  const checkIn = urlParams.get('checkin');
  const checkOut = urlParams.get('checkout');
  const guests = urlParams.get('tamu');
  
  if (!hotelId) {
    alert('Hotel tidak ditemukan. Kembali ke halaman pencarian.');
    window.location.href = 'hotels.html';
    return null;
  }
  
  const hotel = hotelsData.find(h => h.id === parseInt(hotelId, 10));
  
  if (!hotel) {
    alert('Data hotel tidak ditemukan.');
    window.location.href = 'hotels.html';
    return null;
  }
  
  hotelDetailState.hotel = hotel;
  hotelDetailState.checkIn = checkIn || '';
  hotelDetailState.checkOut = checkOut || '';
  
  if (guests) {
    const numMatch = guests.match(/\d+/);
    if (numMatch) {
      hotelDetailState.guests = parseInt(numMatch[0], 10);
    }
  }
  
  hotelDetailState.nights = calculateNights(checkIn, checkOut);
  
  console.log('Hotel Detail State:', hotelDetailState);
  
  return hotel;
}

function renderHotelInfo() {
  const hotel = hotelDetailState.hotel;
  if (!hotel) return;
  
  const logoEl = document.querySelector('[data-detail-airline-logo]');
  if (logoEl) {
    logoEl.textContent = hotel.name.substring(0, 2).toUpperCase();
  }
  
  const numberEl = document.querySelector('[data-detail-flight-number]');
  if (numberEl) {
    numberEl.textContent = `HTL-${String(hotel.id).padStart(3, '0')}`;
  }
  
  const nameEl = document.querySelector('[data-detail-airline-name]');
  if (nameEl) {
    nameEl.textContent = hotel.name;
  }
  
  const ratingEl = document.querySelector('[data-detail-rating]');
  if (ratingEl) {
    ratingEl.innerHTML = `★ ${hotel.rating} (${hotel.reviews.toLocaleString('id-ID')} ulasan)`;
  }
  
  const checkInTimeEl = document.querySelector('[data-detail-departure-time]');
  if (checkInTimeEl) {
    checkInTimeEl.textContent = `Check-in ${hotel.checkIn}`;
  }
  
  const checkInCityEl = document.querySelector('[data-detail-departure-city]');
  if (checkInCityEl) {
    checkInCityEl.textContent = hotel.city;
  }
  
  const checkInAirportEl = document.querySelector('[data-detail-departure-airport]');
  if (checkInAirportEl) {
    checkInAirportEl.textContent = hotel.location;
  }
  
  const checkOutTimeEl = document.querySelector('[data-detail-arrival-time]');
  if (checkOutTimeEl) {
    checkOutTimeEl.textContent = `Check-out ${hotel.checkOut}`;
  }
  
  const checkOutCityEl = document.querySelector('[data-detail-arrival-city]');
  if (checkOutCityEl) {
    checkOutCityEl.textContent = hotel.city;
  }
  
  const checkOutAirportEl = document.querySelector('[data-detail-arrival-airport]');
  if (checkOutAirportEl) {
    checkOutAirportEl.textContent = hotel.location;
  }
  
  const durationEl = document.querySelector('[data-detail-duration]');
  if (durationEl) {
    durationEl.textContent = `${hotelDetailState.nights} Malam`;
  }
  
  const amenitiesContainer = document.querySelector('.detail-amenities');
  if (amenitiesContainer && hotel.amenities) {
    amenitiesContainer.innerHTML = hotel.amenities
      .map(a => `<span class="detail-chip">${a}</span>`)
      .join('');
  }
}

function renderRoomTypes() {
  const hotel = hotelDetailState.hotel;
  if (!hotel) return;
  
  const classList = document.querySelector('[data-class-list]');
  if (!classList) return;
  
  classList.innerHTML = '';
  
  roomTypes.forEach((room) => {
    const isSelected = room.id === hotelDetailState.selectedRoom;
    const pricePerNight = Math.round(hotel.price * (room.basePrice / 350000));
    
    const label = document.createElement('label');
    label.className = `class-card ${isSelected ? 'is-selected' : ''}`;
    label.setAttribute('data-class-card', '');
    label.setAttribute('data-class-id', room.id);
    label.setAttribute('data-class-name', room.name);
    label.setAttribute('data-class-price', pricePerNight);
    
    label.innerHTML = `
      <input type="radio" name="flightClass" value="${room.id}" ${isSelected ? 'checked' : ''} />
      <div class="class-card-body">
        <div>
          <p class="class-name">${room.name}</p>
          <p class="class-features">${room.features}</p>
        </div>
        <p class="class-price">${hotelFormatPrice(pricePerNight)} / malam</p>
      </div>
    `;
    
    classList.appendChild(label);
  });
}

function setupRoomSelection() {
  const classList = document.querySelector('[data-class-list]');
  if (!classList) return;
  
  classList.addEventListener('change', (e) => {
    if (e.target.type === 'radio') {
      hotelDetailState.selectedRoom = e.target.value;
      
      const cards = classList.querySelectorAll('.class-card');
      cards.forEach(card => card.classList.remove('is-selected'));
      
      const selectedCard = e.target.closest('.class-card');
      if (selectedCard) {
        selectedCard.classList.add('is-selected');
      }
      
      updateSummary();
    }
  });
}

function updateSummary() {
  const hotel = hotelDetailState.hotel;
  if (!hotel) return;
  
  const selectedRoomData = roomTypes.find(r => r.id === hotelDetailState.selectedRoom);
  if (!selectedRoomData) return;
  
  const pricePerNight = Math.round(hotel.price * (selectedRoomData.basePrice / 350000));
  const totalRoomPrice = pricePerNight * hotelDetailState.nights;
  const tax = Math.round(totalRoomPrice * 0.15);
  const grandTotal = totalRoomPrice + tax;
  
  const guestsEl = document.querySelector('[data-summary-passengers]');
  if (guestsEl) {
    guestsEl.textContent = `${hotelDetailState.guests} Tamu`;
  }
  
  const classEl = document.querySelector('[data-summary-class]');
  if (classEl) {
    classEl.textContent = selectedRoomData.name;
  }
  
  const priceEl = document.querySelector('[data-summary-price]');
  if (priceEl) {
    priceEl.textContent = hotelFormatPrice(totalRoomPrice);
  }
  
  const taxEl = document.querySelector('[data-summary-tax]');
  if (taxEl) {
    taxEl.textContent = hotelFormatPrice(tax);
  }
  
  const totalEl = document.querySelector('[data-summary-total]');
  if (totalEl) {
    totalEl.textContent = hotelFormatPrice(grandTotal);
  }
}

function setupPaymentButton() {
  const btnPay = document.getElementById('btnPay');
  if (!btnPay) return;
  
  btnPay.addEventListener('click', function(e) {
    updateSummary();
  }, true);
}

function initHotelDetail() {
  const hotel = getHotelFromUrl();
  
  if (!hotel) return;
  
  renderHotelInfo();
  renderRoomTypes();
  setupRoomSelection();
  updateSummary();
  setupPaymentButton();
  
  console.log('Hotel detail initialized successfully');
}

// =====================================================
// INITIALIZE BERDASARKAN HALAMAN
// =====================================================
window.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname;
  
  if (currentPage.includes('hotel-detail.html')) {
    // Halaman detail
    initHotelDetail();
  } else if (currentPage.includes('hotels.html')) {
    // Halaman list
    initHotelList();
  }
});