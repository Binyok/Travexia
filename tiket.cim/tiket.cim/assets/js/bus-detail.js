// ===============================================================
//                  DATA BUS (SAMA DENGAN bus.js)
// ===============================================================


const busData = [
  // Jakarta - Bandung
  {
    id: 1,
    operator: 'Primajasa',
    logo: 'PR',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Bandung',
    departTime: '08:00',
    arriveTime: '11:00',
    duration: '3 jam',
    price: 75000,
    seatsLeft: 12,
    features: ['AC', 'Reclining Seat', 'Toilet'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Cicaheum'
  },
  {
    id: 2,
    operator: 'Lorena',
    logo: 'LR',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Bandung',
    departTime: '09:30',
    arriveTime: '12:30',
    duration: '3 jam',
    price: 95000,
    seatsLeft: 8,
    features: ['AC', 'Reclining Seat', 'Snack', 'WiFi'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Cicaheum'
  },
  {
    id: 3,
    operator: 'Pahala Kencana',
    logo: 'PK',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Bandung',
    departTime: '13:00',
    arriveTime: '16:00',
    duration: '3 jam',
    price: 80000,
    seatsLeft: 15,
    features: ['AC', 'Reclining Seat', 'USB Port'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Cicaheum'
  },
  {
    id: 4,
    operator: 'Rosalia Indah',
    logo: 'RI',
    type: 'Patas AC',
    from: 'Jakarta',
    to: 'Bandung',
    departTime: '15:30',
    arriveTime: '18:30',
    duration: '3 jam',
    price: 65000,
    seatsLeft: 20,
    features: ['AC', 'Standard Seat'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Cicaheum'
  },

  // Jakarta - Yogyakarta
  {
    id: 5,
    operator: 'Primajasa',
    logo: 'PR',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Yogyakarta',
    departTime: '18:00',
    arriveTime: '02:00',
    duration: '8 jam',
    price: 180000,
    seatsLeft: 10,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Giwangan'
  },
  {
    id: 6,
    operator: 'Lorena',
    logo: 'LR',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Yogyakarta',
    departTime: '20:00',
    arriveTime: '04:00',
    duration: '8 jam',
    price: 200000,
    seatsLeft: 6,
    features: ['AC', 'Reclining Seat', 'Snack', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Giwangan'
  },
  {
    id: 7,
    operator: 'Rosalia Indah',
    logo: 'RI',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Yogyakarta',
    departTime: '19:30',
    arriveTime: '03:30',
    duration: '8 jam',
    price: 175000,
    seatsLeft: 14,
    features: ['AC', 'Reclining Seat', 'Toilet', 'USB Port'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Giwangan'
  },

  // Jakarta - Surabaya
  {
    id: 8,
    operator: 'Pahala Kencana',
    logo: 'PK',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Surabaya',
    departTime: '17:00',
    arriveTime: '05:00',
    duration: '12 jam',
    price: 250000,
    seatsLeft: 18,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Bungurasih'
  },
  {
    id: 9,
    operator: 'Lorena',
    logo: 'LR',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Surabaya',
    departTime: '18:30',
    arriveTime: '06:30',
    duration: '12 jam',
    price: 280000,
    seatsLeft: 12,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Meal', 'Entertainment'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Bungurasih'
  },
  {
    id: 10,
    operator: 'Rosalia Indah',
    logo: 'RI',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Surabaya',
    departTime: '19:00',
    arriveTime: '07:00',
    duration: '12 jam',
    price: 240000,
    seatsLeft: 16,
    features: ['AC', 'Reclining Seat', 'Toilet', 'USB Port'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Bungurasih'
  },

  // Jakarta - Semarang
  {
    id: 11,
    operator: 'Primajasa',
    logo: 'PR',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Semarang',
    departTime: '16:00',
    arriveTime: '22:00',
    duration: '6 jam',
    price: 150000,
    seatsLeft: 20,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Terboyo'
  },
  {
    id: 12,
    operator: 'Pahala Kencana',
    logo: 'PK',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Semarang',
    departTime: '17:30',
    arriveTime: '23:30',
    duration: '6 jam',
    price: 170000,
    seatsLeft: 15,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Snack'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Terboyo'
  },

  // Jakarta - Solo
  {
    id: 13,
    operator: 'Lorena',
    logo: 'LR',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Solo',
    departTime: '18:00',
    arriveTime: '01:00',
    duration: '7 jam',
    price: 165000,
    seatsLeft: 18,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Tirtonadi'
  },
  {
    id: 14,
    operator: 'Rosalia Indah',
    logo: 'RI',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Solo',
    departTime: '19:30',
    arriveTime: '02:30',
    duration: '7 jam',
    price: 185000,
    seatsLeft: 12,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Tirtonadi'
  },

  // Bandung - Yogyakarta
  {
    id: 15,
    operator: 'Pahala Kencana',
    logo: 'PK',
    type: 'Executive',
    from: 'Bandung',
    to: 'Yogyakarta',
    departTime: '17:00',
    arriveTime: '01:00',
    duration: '8 jam',
    price: 160000,
    seatsLeft: 22,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Cicaheum',
    arriveLocation: 'Terminal Giwangan'
  },
  {
    id: 16,
    operator: 'Lorena',
    logo: 'LR',
    type: 'Super Executive',
    from: 'Bandung',
    to: 'Yogyakarta',
    departTime: '18:30',
    arriveTime: '02:30',
    duration: '8 jam',
    price: 180000,
    seatsLeft: 14,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Snack'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Cicaheum',
    arriveLocation: 'Terminal Giwangan'
  },

  // Bandung - Surabaya
  {
    id: 17,
    operator: 'Primajasa',
    logo: 'PR',
    type: 'Executive',
    from: 'Bandung',
    to: 'Surabaya',
    departTime: '16:00',
    arriveTime: '04:00',
    duration: '12 jam',
    price: 220000,
    seatsLeft: 16,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Cicaheum',
    arriveLocation: 'Terminal Bungurasih'
  },
  {
    id: 18,
    operator: 'Rosalia Indah',
    logo: 'RI',
    type: 'Super Executive',
    from: 'Bandung',
    to: 'Surabaya',
    departTime: '17:30',
    arriveTime: '05:30',
    duration: '12 jam',
    price: 250000,
    seatsLeft: 10,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Meal', 'Entertainment'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Cicaheum',
    arriveLocation: 'Terminal Bungurasih'
  },

  // Surabaya - Bali
  {
    id: 19,
    operator: 'Pahala Kencana',
    logo: 'PK',
    type: 'Executive',
    from: 'Surabaya',
    to: 'Bali',
    departTime: '20:00',
    arriveTime: '01:00',
    duration: '5 jam',
    price: 120000,
    seatsLeft: 24,
    features: ['AC', 'Reclining Seat', 'Toilet'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Bungurasih',
    arriveLocation: 'Terminal Ubung'
  },
  {
    id: 20,
    operator: 'Lorena',
    logo: 'LR',
    type: 'Super Executive',
    from: 'Surabaya',
    to: 'Bali',
    departTime: '21:30',
    arriveTime: '02:30',
    duration: '5 jam',
    price: 140000,
    seatsLeft: 18,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Snack'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Bungurasih',
    arriveLocation: 'Terminal Ubung'
  },
  {
    id: 21,
    operator: 'Primajasa',
    logo: 'PR',
    type: 'Executive',
    from: 'Surabaya',
    to: 'Bali',
    departTime: '22:00',
    arriveTime: '03:00',
    duration: '5 jam',
    price: 130000,
    seatsLeft: 20,
    features: ['AC', 'Reclining Seat', 'Toilet', 'USB Port'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Bungurasih',
    arriveLocation: 'Terminal Ubung'
  },

  // Jakarta - Malang
  {
    id: 22,
    operator: 'Rosalia Indah',
    logo: 'RI',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Malang',
    departTime: '17:00',
    arriveTime: '06:00',
    duration: '13 jam',
    price: 260000,
    seatsLeft: 14,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Arjosari'
  },
  {
    id: 23,
    operator: 'Pahala Kencana',
    logo: 'PK',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Malang',
    departTime: '18:30',
    arriveTime: '07:30',
    duration: '13 jam',
    price: 290000,
    seatsLeft: 10,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Meal', 'Entertainment'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Arjosari'
  },

  // Jakarta - Cirebon
  {
    id: 24,
    operator: 'Primajasa',
    logo: 'PR',
    type: 'Patas AC',
    from: 'Jakarta',
    to: 'Cirebon',
    departTime: '09:00',
    arriveTime: '13:00',
    duration: '4 jam',
    price: 85000,
    seatsLeft: 28,
    features: ['AC', 'Standard Seat', 'USB Port'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Harjamukti'
  },
  {
    id: 25,
    operator: 'Lorena',
    logo: 'LR',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Cirebon',
    departTime: '11:30',
    arriveTime: '15:30',
    duration: '4 jam',
    price: 95000,
    seatsLeft: 22,
    features: ['AC', 'Reclining Seat', 'Toilet'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Harjamukti'
  },

  // Jakarta - Lampung
  {
    id: 26,
    operator: 'Pahala Kencana',
    logo: 'PK',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Lampung',
    departTime: '19:00',
    arriveTime: '04:00',
    duration: '9 jam',
    price: 190000,
    seatsLeft: 16,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Rajabasa'
  },
  {
    id: 27,
    operator: 'Lorena',
    logo: 'LR',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Lampung',
    departTime: '20:30',
    arriveTime: '05:30',
    duration: '9 jam',
    price: 210000,
    seatsLeft: 12,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Snack'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Rajabasa'
  },

  // Yogyakarta - Surabaya
  {
    id: 28,
    operator: 'Rosalia Indah',
    logo: 'RI',
    type: 'Executive',
    from: 'Yogyakarta',
    to: 'Surabaya',
    departTime: '20:00',
    arriveTime: '02:00',
    duration: '6 jam',
    price: 130000,
    seatsLeft: 20,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Giwangan',
    arriveLocation: 'Terminal Bungurasih'
  },
  {
    id: 29,
    operator: 'Primajasa',
    logo: 'PR',
    type: 'Super Executive',
    from: 'Yogyakarta',
    to: 'Surabaya',
    departTime: '21:30',
    arriveTime: '03:30',
    duration: '6 jam',
    price: 150000,
    seatsLeft: 14,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Giwangan',
    arriveLocation: 'Terminal Bungurasih'
  },

  // Jakarta - Tasikmalaya
  {
    id: 30,
    operator: 'Pahala Kencana',
    logo: 'PK',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Tasikmalaya',
    departTime: '14:00',
    arriveTime: '18:00',
    duration: '4 jam',
    price: 90000,
    seatsLeft: 18,
    features: ['AC', 'Reclining Seat', 'USB Port'],
    tripType: 'antar-kota',
    departLocation: 'Terminal Kampung Rambutan',
    arriveLocation: 'Terminal Tasikmalaya'
  },
];

// ===============================================================
//                  STATE DETAIL BUS
// ===============================================================

const busDetailState = {
  bus: null,
  selectedSeats: 1,
  travelDate: '',
  totalPassengers: 1
};

// ===============================================================
//                  UTILITY FUNCTIONS
// ===============================================================

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

function formatDate(dateString) {
  if (!dateString) return '-';
  
  const date = new Date(dateString);
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  return date.toLocaleDateString('id-ID', options);
}

// ===============================================================
//          AMBIL DATA BUS DARI URL
// ===============================================================

function getBusFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const busId = urlParams.get('id');
  const tanggal = urlParams.get('tanggal');
  const penumpang = urlParams.get('penumpang');
  
  if (!busId) {
    alert('Bus tidak ditemukan. Kembali ke halaman pencarian.');
    window.location.href = 'bus.html';
    return null;
  }
  
  const bus = busData.find(b => b.id === parseInt(busId, 10));
  
  if (!bus) {
    alert('Data bus tidak ditemukan.');
    window.location.href = 'bus.html';
    return null;
  }
  
  // Set state
  busDetailState.bus = bus;
  busDetailState.travelDate = tanggal || '';
  
  if (penumpang) {
    busDetailState.totalPassengers = parseInt(penumpang, 10) || 1;
    busDetailState.selectedSeats = parseInt(penumpang, 10) || 1;
  }
  
  console.log('Bus Detail State:', busDetailState);
  
  return bus;
}

// ===============================================================
//          RENDER INFO BUS
// ===============================================================

function renderBusInfo() {
  const bus = busDetailState.bus;
  if (!bus) return;
  
  // Update logo
  const logoEl = document.querySelector('[data-detail-bus-logo]');
  if (logoEl) {
    logoEl.textContent = bus.logo;
  }
  
  // Update bus number
  const numberEl = document.querySelector('[data-detail-bus-number]');
  if (numberEl) {
    numberEl.textContent = `BUS-${String(bus.id).padStart(3, '0')}`;
  }
  
  // Update operator name
  const operatorEl = document.querySelector('[data-detail-bus-operator]');
  if (operatorEl) {
    operatorEl.textContent = bus.operator;
  }
  
  // Update bus type
  const typeEl = document.querySelector('[data-detail-bus-type]');
  if (typeEl) {
    typeEl.textContent = bus.type;
  }
  
  // Update seats left
  const seatsEl = document.querySelector('[data-detail-seats]');
  if (seatsEl) {
    seatsEl.textContent = `${bus.seatsLeft} kursi tersisa`;
  }
  
  // Update departure info
  const depTimeEl = document.querySelector('[data-detail-departure-time]');
  if (depTimeEl) {
    depTimeEl.textContent = bus.departTime;
  }
  
  const depCityEl = document.querySelector('[data-detail-departure-city]');
  if (depCityEl) {
    depCityEl.textContent = bus.from;
  }
  
  const depLocationEl = document.querySelector('[data-detail-departure-location]');
  if (depLocationEl) {
    depLocationEl.textContent = bus.departLocation;
  }
  
  // Update arrival info
  const arrTimeEl = document.querySelector('[data-detail-arrival-time]');
  if (arrTimeEl) {
    arrTimeEl.textContent = bus.arriveTime;
  }
  
  const arrCityEl = document.querySelector('[data-detail-arrival-city]');
  if (arrCityEl) {
    arrCityEl.textContent = bus.to;
  }
  
  const arrLocationEl = document.querySelector('[data-detail-arrival-location]');
  if (arrLocationEl) {
    arrLocationEl.textContent = bus.arriveLocation;
  }
  
  // Update duration
  const durationEl = document.querySelector('[data-detail-duration]');
  if (durationEl) {
    durationEl.textContent = `Durasi ${bus.duration}`;
  }
  
  // Update features
  const featuresContainer = document.querySelector('[data-detail-features]');
  if (featuresContainer && bus.features) {
    featuresContainer.innerHTML = bus.features
      .map(f => `<span class="detail-chip">${f}</span>`)
      .join('');
  }
}

// ===============================================================
//          RENDER PILIHAN KURSI
// ===============================================================

function renderSeatOptions() {
  const bus = busDetailState.bus;
  if (!bus) return;
  
  const seatList = document.querySelector('[data-seat-list]');
  if (!seatList) return;
  
  seatList.innerHTML = '';
  
  // Generate pilihan 1-4+ kursi
  const seatOptions = [
    { count: 1, label: '1 Kursi', desc: 'Untuk 1 Penumpang' },
    { count: 2, label: '2 Kursi', desc: 'Untuk 2 Penumpang' },
    { count: 3, label: '3 Kursi', desc: 'Untuk 3 Penumpang' },
    { count: 4, label: '4+ Kursi', desc: 'Untuk 4 atau lebih Penumpang' }
  ];
  
  seatOptions.forEach((option) => {
    const isSelected = option.count === busDetailState.selectedSeats;
    const totalPrice = bus.price * option.count;
    
    const label = document.createElement('label');
    label.className = `class-card ${isSelected ? 'is-selected' : ''}`;
    label.setAttribute('data-seat-card', '');
    label.setAttribute('data-seat-count', option.count);
    
    label.innerHTML = `
      <input type="radio" name="seatCount" value="${option.count}" ${isSelected ? 'checked' : ''} />
      <div class="class-card-body">
        <div>
          <p class="class-name">${option.label}</p>
          <p class="class-features">${option.desc}</p>
        </div>
        <p class="class-price" data-seat-price-${option.count}>${formatPrice(totalPrice)}</p>
      </div>
    `;
    
    seatList.appendChild(label);
  });
}

// ===============================================================
//          SETUP SEAT SELECTION
// ===============================================================

function setupSeatSelection() {
  const seatList = document.querySelector('[data-seat-list]');
  if (!seatList) return;
  
  seatList.addEventListener('change', (e) => {
    if (e.target.type === 'radio') {
      busDetailState.selectedSeats = parseInt(e.target.value, 10);
      
      // Update visual selected state
      const cards = seatList.querySelectorAll('.class-card');
      cards.forEach(card => card.classList.remove('is-selected'));
      
      const selectedCard = e.target.closest('.class-card');
      if (selectedCard) {
        selectedCard.classList.add('is-selected');
      }
      
      // Update summary
      updateSummary();
    }
  });
}

// ===============================================================
//          UPDATE SUMMARY
// ===============================================================

function updateSummary() {
  const bus = busDetailState.bus;
  if (!bus) return;
  
  const ticketPrice = bus.price * busDetailState.selectedSeats;
  const serviceFee = 5000 * busDetailState.selectedSeats;
  const total = ticketPrice + serviceFee;
  
  // Update passengers
  const passengersEl = document.querySelector('[data-summary-passengers]');
  if (passengersEl) {
    passengersEl.textContent = `${busDetailState.selectedSeats} Penumpang`;
  }
  
  // Update date
  const dateEl = document.querySelector('[data-summary-date]');
  if (dateEl) {
    if (busDetailState.travelDate) {
      const date = new Date(busDetailState.travelDate);
      const formatted = date.toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      });
      dateEl.textContent = formatted;
    } else {
      dateEl.textContent = '-';
    }
  }
  
  // Update price
  const priceEl = document.querySelector('[data-summary-price]');
  if (priceEl) {
    priceEl.textContent = formatPrice(ticketPrice);
  }
  
  // Update service fee
  const feeEl = document.querySelector('[data-summary-fee]');
  if (feeEl) {
    feeEl.textContent = formatPrice(serviceFee);
  }
  
  // Update total
  const totalEl = document.querySelector('[data-summary-total]');
  if (totalEl) {
    totalEl.textContent = formatPrice(total);
  }
  
  console.log('Summary updated:', {
    seats: busDetailState.selectedSeats,
    ticketPrice: ticketPrice,
    serviceFee: serviceFee,
    total: total
  });
}

// ===============================================================
//          SETUP PAYMENT BUTTON
// ===============================================================

function setupPaymentButton() {
  const btnPay = document.getElementById('btnPay');
  if (!btnPay) return;
  
  btnPay.addEventListener('click', function() {
    const bus = busDetailState.bus;
    if (!bus) return;
    
    // Update summary terakhir kali
    updateSummary();
    
    // Get summary values
    const operator = document.querySelector('[data-detail-bus-operator]').innerText;
    const busNumber = document.querySelector('[data-detail-bus-number]').innerText;
    const fromCity = document.querySelector('[data-detail-departure-city]').innerText;
    const toCity = document.querySelector('[data-detail-arrival-city]').innerText;
    const departTime = document.querySelector('[data-detail-departure-time]').innerText;
    const arriveTime = document.querySelector('[data-detail-arrival-time]').innerText;
    const passengers = document.querySelector('[data-summary-passengers]').innerText;
    const travelDate = document.querySelector('[data-summary-date]').innerText;
    const total = document.querySelector('[data-summary-total]').innerText;
    
    // Buat pesan WhatsApp
    const message = `
Halo Admin Travexia, saya ingin memesan tiket bus:

🚌 *${operator}* (${busNumber})
📍 *${fromCity}* (${departTime}) → *${toCity}* (${arriveTime})
📅 Tanggal: *${travelDate}*
👤 Penumpang: *${passengers}*
💰 Total: *${total}*

Mohon dibantu proses pembayaran dan konfirmasi.
Terima kasih 🙏
    `;
    
    const phone = "62895639068080";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
  });
}

// ===============================================================
//          INITIALIZE BUS DETAIL
// ===============================================================

function initBusDetail() {
  const bus = getBusFromUrl();
  
  if (!bus) return;
  
  renderBusInfo();
  renderSeatOptions();
  setupSeatSelection();
  updateSummary();
  setupPaymentButton();
  
  console.log('Bus detail initialized successfully');
}

// ===============================================================
//          RUN ON PAGE LOAD
// ===============================================================

window.addEventListener('DOMContentLoaded', () => {
  initBusDetail();
});