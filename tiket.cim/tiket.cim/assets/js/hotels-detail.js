// Data hotel yang ada di sistem
const hotelsData = [
  {
    id: 1,
    name: 'Grand Hyatt Jakarta',
    location: 'Thamrin, Jakarta Pusat',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 2340,
    price: 1850000,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Parkir'],
    city: 'Jakarta',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 2,
    name: 'The Ritz-Carlton Bali',
    location: 'Nusa Dua, Bali',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 3120,
    price: 3250000,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Spa'],
    city: 'Bali',
    checkIn: '14:00',
    checkOut: '12:00'
  },
  {
    id: 3,
    name: 'Pullman Bandung Grand Central',
    location: 'Dago, Bandung',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 1580,
    price: 950000,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym'],
    city: 'Bandung',
    checkIn: '14:00',
    checkOut: '12:00'
  }
];

// Room types
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

// State detail hotel
const hotelDetailState = {
  hotel: null,
  selectedRoom: 'standard',
  guests: 1,
  nights: 1,
  checkIn: '',
  checkOut: ''
};

// Format harga
function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

// Hitung jumlah malam
function calculateNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 1;
  
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays > 0 ? diffDays : 1;
}

// Fungsi untuk membuat hotel object dari data destinasi
function createHotelFromDestinationData(destHotel, city) {
  // Parse harga dari format "Rp 2.500.000" ke number
  let price = 850000; // default
  if (destHotel.price) {
    const priceStr = destHotel.price.replace(/[^\d]/g, '');
    price = parseInt(priceStr) || 850000;
  }
  
  // Parse rating
  let rating = 4.5; // default
  if (destHotel.rating) {
    rating = parseFloat(destHotel.rating);
  }
  
  return {
    id: Math.floor(Math.random() * 10000), // Generate random ID
    name: destHotel.name || 'Hotel Premium',
    location: destHotel.location || city,
    image: destHotel.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: rating,
    reviews: Math.floor(Math.random() * 2000) + 500,
    price: price,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym', 'Parkir'],
    city: city || 'Indonesia',
    checkIn: '14:00',
    checkOut: '12:00'
  };
}

// Ambil hotel dari URL parameter
function getHotelFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  
  // Cek apakah ini dari halaman hotels.html (punya id di hotelsData)
  const hotelId = urlParams.get('id');
  if (hotelId) {
    const existingHotel = hotelsData.find(h => h.id === parseInt(hotelId, 10));
    if (existingHotel) {
      // Hotel dari hotels.html
      hotelDetailState.hotel = existingHotel;
      hotelDetailState.checkIn = urlParams.get('checkin') || '';
      hotelDetailState.checkOut = urlParams.get('checkout') || '';
      
      const guests = urlParams.get('tamu');
      if (guests) {
        const numMatch = guests.match(/\d+/);
        if (numMatch) {
          hotelDetailState.guests = parseInt(numMatch[0], 10);
        }
      }
      
      hotelDetailState.nights = calculateNights(hotelDetailState.checkIn, hotelDetailState.checkOut);
      
      return existingHotel;
    }
  }
  
  // Jika tidak ada, berarti dari destinasi.js
  // Ambil data hotel dari URL params
  const hotelName = urlParams.get('hotel');
  const hotelLocation = urlParams.get('location');
  const hotelPrice = urlParams.get('price');
  const hotelRating = urlParams.get('rating');
  const hotelImage = urlParams.get('image');
  const city = urlParams.get('city');
  const checkIn = urlParams.get('checkin') || '';
  const checkOut = urlParams.get('checkout') || '';
  const guests = urlParams.get('guests') || '2 Tamu';
  
  if (!hotelName) {
    alert('Hotel tidak ditemukan. Kembali ke halaman sebelumnya.');
    window.history.back();
    return null;
  }
  
  // Buat object hotel dari data URL
  const hotel = {
    id: Math.floor(Math.random() * 10000),
    name: hotelName,
    location: hotelLocation || city || 'Indonesia',
    image: hotelImage || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: parseFloat(hotelRating) || 4.5,
    reviews: Math.floor(Math.random() * 2000) + 500,
    price: parseInt(hotelPrice) || 850000,
    amenities: ['WiFi', 'Kolam Renang', 'Restoran', 'Gym'],
    city: city || 'Indonesia',
    checkIn: '14:00',
    checkOut: '12:00'
  };
  
  // Set state
  hotelDetailState.hotel = hotel;
  hotelDetailState.checkIn = checkIn;
  hotelDetailState.checkOut = checkOut;
  
  // Extract jumlah tamu
  const numMatch = guests.match(/\d+/);
  if (numMatch) {
    hotelDetailState.guests = parseInt(numMatch[0], 10);
  }
  
  // Hitung jumlah malam
  hotelDetailState.nights = calculateNights(checkIn, checkOut);
  
  console.log('Hotel from Destinasi:', hotelDetailState);
  
  return hotel;
}

// Render info hotel
function renderHotelInfo() {
  const hotel = hotelDetailState.hotel;
  if (!hotel) return;
  
  // Update logo
  const logoEl = document.querySelector('[data-detail-airline-logo]');
  if (logoEl) {
    logoEl.textContent = hotel.name.substring(0, 2).toUpperCase();
  }
  
  // Update hotel number
  const numberEl = document.querySelector('[data-detail-flight-number]');
  if (numberEl) {
    numberEl.textContent = `HTL-${String(hotel.id).toString().substring(0, 3).padStart(3, '0')}`;
  }
  
  // Update nama hotel
  const nameEl = document.querySelector('[data-detail-airline-name]');
  if (nameEl) {
    nameEl.textContent = hotel.name;
  }
  
  // Update rating
  const ratingEl = document.querySelector('[data-detail-rating]');
  if (ratingEl) {
    ratingEl.innerHTML = `★ ${hotel.rating} (${hotel.reviews.toLocaleString('id-ID')} ulasan)`;
  }
  
  // Update check-in info
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
  
  // Update check-out info
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
  
  // Update durasi
  const durationEl = document.querySelector('[data-detail-duration]');
  if (durationEl) {
    durationEl.textContent = `${hotelDetailState.nights} Malam`;
  }
  
  // Update amenities
  const amenitiesContainer = document.querySelector('.detail-amenities');
  if (amenitiesContainer && hotel.amenities) {
    amenitiesContainer.innerHTML = hotel.amenities
      .map(a => `<span class="detail-chip">${a}</span>`)
      .join('');
  }
  
  // Update page title
  document.title = `${hotel.name} - Detail Hotel - Travexia`;
}

// Render pilihan tipe kamar
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
        <p class="class-price">${formatPrice(pricePerNight)} / malam</p>
      </div>
    `;
    
    classList.appendChild(label);
  });
}

// Setup room selection
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

// Update summary
function updateSummary() {
  const hotel = hotelDetailState.hotel;
  if (!hotel) return;
  
  const selectedRoomData = roomTypes.find(r => r.id === hotelDetailState.selectedRoom);
  if (!selectedRoomData) return;
  
  const pricePerNight = Math.round(hotel.price * (selectedRoomData.basePrice / 350000));
  const totalRoomPrice = pricePerNight * hotelDetailState.nights;
  const tax = Math.round(totalRoomPrice * 0.15);
  const grandTotal = totalRoomPrice + tax;
  
  // Update guests
  const guestsEl = document.querySelector('[data-summary-passengers]');
  if (guestsEl) {
    guestsEl.textContent = `${hotelDetailState.guests} Tamu`;
  }
  
  // Update room type
  const classEl = document.querySelector('[data-summary-class]');
  if (classEl) {
    classEl.textContent = selectedRoomData.name;
  }
  
  // Update price
  const priceEl = document.querySelector('[data-summary-price]');
  if (priceEl) {
    priceEl.textContent = formatPrice(totalRoomPrice);
  }
  
  // Update tax
  const taxEl = document.querySelector('[data-summary-tax]');
  if (taxEl) {
    taxEl.textContent = formatPrice(tax);
  }
  
  // Update total
  const totalEl = document.querySelector('[data-summary-total]');
  if (totalEl) {
    totalEl.textContent = formatPrice(grandTotal);
  }
}

// Setup payment button
function setupPaymentButton() {
  const btnPay = document.getElementById('btnPay');
  if (!btnPay) return;
  
  btnPay.addEventListener('click', function(e) {
    updateSummary();
  }, true);
}

// Initialize
function initHotelDetail() {
  const hotel = getHotelFromUrl();
  
  if (!hotel) return;
  
  renderHotelInfo();
  renderRoomTypes();
  setupRoomSelection();
  updateSummary();
  setupPaymentButton();
  
  console.log('Hotel detail initialized');
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHotelDetail);
} else {
  initHotelDetail();
}