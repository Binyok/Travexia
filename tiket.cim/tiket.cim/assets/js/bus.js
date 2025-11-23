// ===============================================================
//                  DATA BUS & TRAVEL
// ===============================================================
console.log("Bus.js berhasil diload!");

const cities = [
  'Jakarta', 'Bandung', 'Surabaya', 'Yogyakarta', 'Semarang',
  'Solo', 'Malang', 'Bali', 'Medan', 'Palembang',
  'Lampung', 'Bogor', 'Depok', 'Tangerang', 'Bekasi',
  'Cirebon', 'Tasikmalaya', 'Purwokerto', 'Tegal', 'Pekalongan'
];

const busData = [
  // Jakarta - Bandung
  {
    id: 1,
    operator: 'Primajasa',
    logo: 'https://via.placeholder.com/80x50/16a34a/ffffff?text=PRIMAJASA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Bandung',
    departTime: '08:00',
    arriveTime: '11:00',
    duration: '3 jam',
    price: 75000,
    seatsLeft: 12,
    features: ['AC', 'Reclining Seat', 'Toilet'],
    tripType: 'antar-kota'
  },
  {
    id: 2,
    operator: 'Lorena',
    logo: 'https://via.placeholder.com/80x50/2563eb/ffffff?text=LORENA',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Bandung',
    departTime: '09:30',
    arriveTime: '12:30',
    duration: '3 jam',
    price: 95000,
    seatsLeft: 8,
    features: ['AC', 'Reclining Seat', 'Snack', 'WiFi'],
    tripType: 'antar-kota'
  },
  {
    id: 3,
    operator: 'Pahala Kencana',
    logo: 'https://via.placeholder.com/80x50/dc2626/ffffff?text=PAHALA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Bandung',
    departTime: '13:00',
    arriveTime: '16:00',
    duration: '3 jam',
    price: 80000,
    seatsLeft: 15,
    features: ['AC', 'Reclining Seat', 'USB Port'],
    tripType: 'antar-kota'
  },
  {
    id: 4,
    operator: 'Rosalia Indah',
    logo: 'https://via.placeholder.com/80x50/7c3aed/ffffff?text=ROSALIA',
    type: 'Patas AC',
    from: 'Jakarta',
    to: 'Bandung',
    departTime: '15:30',
    arriveTime: '18:30',
    duration: '3 jam',
    price: 65000,
    seatsLeft: 20,
    features: ['AC', 'Standard Seat'],
    tripType: 'antar-kota'
  },

  // Jakarta - Yogyakarta
  {
    id: 5,
    operator: 'Primajasa',
    logo: 'https://via.placeholder.com/80x50/16a34a/ffffff?text=PRIMAJASA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Yogyakarta',
    departTime: '18:00',
    arriveTime: '02:00',
    duration: '8 jam',
    price: 180000,
    seatsLeft: 10,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota'
  },
  {
    id: 6,
    operator: 'Lorena',
    logo: 'https://via.placeholder.com/80x50/2563eb/ffffff?text=LORENA',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Yogyakarta',
    departTime: '20:00',
    arriveTime: '04:00',
    duration: '8 jam',
    price: 200000,
    seatsLeft: 6,
    features: ['AC', 'Reclining Seat', 'Snack', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota'
  },
  {
    id: 7,
    operator: 'Rosalia Indah',
    logo: 'https://via.placeholder.com/80x50/7c3aed/ffffff?text=ROSALIA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Yogyakarta',
    departTime: '19:30',
    arriveTime: '03:30',
    duration: '8 jam',
    price: 175000,
    seatsLeft: 14,
    features: ['AC', 'Reclining Seat', 'Toilet', 'USB Port'],
    tripType: 'antar-kota'
  },

  // Jakarta - Surabaya
  {
    id: 8,
    operator: 'Pahala Kencana',
    logo: 'https://via.placeholder.com/80x50/dc2626/ffffff?text=PAHALA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Surabaya',
    departTime: '17:00',
    arriveTime: '05:00',
    duration: '12 jam',
    price: 250000,
    seatsLeft: 18,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota'
  },
  {
    id: 9,
    operator: 'Lorena',
    logo: 'https://via.placeholder.com/80x50/2563eb/ffffff?text=LORENA',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Surabaya',
    departTime: '18:30',
    arriveTime: '06:30',
    duration: '12 jam',
    price: 280000,
    seatsLeft: 12,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Meal', 'Entertainment'],
    tripType: 'antar-kota'
  },
  {
    id: 10,
    operator: 'Rosalia Indah',
    logo: 'https://via.placeholder.com/80x50/7c3aed/ffffff?text=ROSALIA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Surabaya',
    departTime: '19:00',
    arriveTime: '07:00',
    duration: '12 jam',
    price: 240000,
    seatsLeft: 16,
    features: ['AC', 'Reclining Seat', 'Toilet', 'USB Port'],
    tripType: 'antar-kota'
  },

  // Jakarta - Semarang
  {
    id: 11,
    operator: 'Primajasa',
    logo: 'https://via.placeholder.com/80x50/16a34a/ffffff?text=PRIMAJASA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Semarang',
    departTime: '16:00',
    arriveTime: '22:00',
    duration: '6 jam',
    price: 150000,
    seatsLeft: 20,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota'
  },
  {
    id: 12,
    operator: 'Pahala Kencana',
    logo: 'https://via.placeholder.com/80x50/dc2626/ffffff?text=PAHALA',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Semarang',
    departTime: '17:30',
    arriveTime: '23:30',
    duration: '6 jam',
    price: 170000,
    seatsLeft: 15,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Snack'],
    tripType: 'antar-kota'
  },

  // Jakarta - Solo
  {
    id: 13,
    operator: 'Lorena',
    logo: 'https://via.placeholder.com/80x50/2563eb/ffffff?text=LORENA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Solo',
    departTime: '18:00',
    arriveTime: '01:00',
    duration: '7 jam',
    price: 165000,
    seatsLeft: 18,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota'
  },
  {
    id: 14,
    operator: 'Rosalia Indah',
    logo: 'https://via.placeholder.com/80x50/7c3aed/ffffff?text=ROSALIA',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Solo',
    departTime: '19:30',
    arriveTime: '02:30',
    duration: '7 jam',
    price: 185000,
    seatsLeft: 12,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota'
  },

  // Bandung - Yogyakarta
  {
    id: 15,
    operator: 'Pahala Kencana',
    logo: 'https://via.placeholder.com/80x50/dc2626/ffffff?text=PAHALA',
    type: 'Executive',
    from: 'Bandung',
    to: 'Yogyakarta',
    departTime: '17:00',
    arriveTime: '01:00',
    duration: '8 jam',
    price: 160000,
    seatsLeft: 22,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota'
  },
  {
    id: 16,
    operator: 'Lorena',
    logo: 'https://via.placeholder.com/80x50/2563eb/ffffff?text=LORENA',
    type: 'Super Executive',
    from: 'Bandung',
    to: 'Yogyakarta',
    departTime: '18:30',
    arriveTime: '02:30',
    duration: '8 jam',
    price: 180000,
    seatsLeft: 14,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Snack'],
    tripType: 'antar-kota'
  },

  // Bandung - Surabaya
  {
    id: 17,
    operator: 'Primajasa',
    logo: 'https://via.placeholder.com/80x50/16a34a/ffffff?text=PRIMAJASA',
    type: 'Executive',
    from: 'Bandung',
    to: 'Surabaya',
    departTime: '16:00',
    arriveTime: '04:00',
    duration: '12 jam',
    price: 220000,
    seatsLeft: 16,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota'
  },
  {
    id: 18,
    operator: 'Rosalia Indah',
    logo: 'https://via.placeholder.com/80x50/7c3aed/ffffff?text=ROSALIA',
    type: 'Super Executive',
    from: 'Bandung',
    to: 'Surabaya',
    departTime: '17:30',
    arriveTime: '05:30',
    duration: '12 jam',
    price: 250000,
    seatsLeft: 10,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Meal', 'Entertainment'],
    tripType: 'antar-kota'
  },

  // Surabaya - Bali
  {
    id: 19,
    operator: 'Pahala Kencana',
    logo: 'https://via.placeholder.com/80x50/dc2626/ffffff?text=PAHALA',
    type: 'Executive',
    from: 'Surabaya',
    to: 'Bali',
    departTime: '20:00',
    arriveTime: '01:00',
    duration: '5 jam',
    price: 120000,
    seatsLeft: 24,
    features: ['AC', 'Reclining Seat', 'Toilet'],
    tripType: 'antar-kota'
  },
  {
    id: 20,
    operator: 'Lorena',
    logo: 'https://via.placeholder.com/80x50/2563eb/ffffff?text=LORENA',
    type: 'Super Executive',
    from: 'Surabaya',
    to: 'Bali',
    departTime: '21:30',
    arriveTime: '02:30',
    duration: '5 jam',
    price: 140000,
    seatsLeft: 18,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Snack'],
    tripType: 'antar-kota'
  },
  {
    id: 21,
    operator: 'Primajasa',
    logo: 'https://via.placeholder.com/80x50/16a34a/ffffff?text=PRIMAJASA',
    type: 'Executive',
    from: 'Surabaya',
    to: 'Bali',
    departTime: '22:00',
    arriveTime: '03:00',
    duration: '5 jam',
    price: 130000,
    seatsLeft: 20,
    features: ['AC', 'Reclining Seat', 'Toilet', 'USB Port'],
    tripType: 'antar-kota'
  },

  // Jakarta - Malang
  {
    id: 22,
    operator: 'Rosalia Indah',
    logo: 'https://via.placeholder.com/80x50/7c3aed/ffffff?text=ROSALIA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Malang',
    departTime: '17:00',
    arriveTime: '06:00',
    duration: '13 jam',
    price: 260000,
    seatsLeft: 14,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota'
  },
  {
    id: 23,
    operator: 'Pahala Kencana',
    logo: 'https://via.placeholder.com/80x50/dc2626/ffffff?text=PAHALA',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Malang',
    departTime: '18:30',
    arriveTime: '07:30',
    duration: '13 jam',
    price: 290000,
    seatsLeft: 10,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Meal', 'Entertainment'],
    tripType: 'antar-kota'
  },

  // Jakarta - Cirebon
  {
    id: 24,
    operator: 'Primajasa',
    logo: 'https://via.placeholder.com/80x50/16a34a/ffffff?text=PRIMAJASA',
    type: 'Patas AC',
    from: 'Jakarta',
    to: 'Cirebon',
    departTime: '09:00',
    arriveTime: '13:00',
    duration: '4 jam',
    price: 85000,
    seatsLeft: 28,
    features: ['AC', 'Standard Seat', 'USB Port'],
    tripType: 'antar-kota'
  },
  {
    id: 25,
    operator: 'Lorena',
    logo: 'https://via.placeholder.com/80x50/2563eb/ffffff?text=LORENA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Cirebon',
    departTime: '11:30',
    arriveTime: '15:30',
    duration: '4 jam',
    price: 95000,
    seatsLeft: 22,
    features: ['AC', 'Reclining Seat', 'Toilet'],
    tripType: 'antar-kota'
  },

  // Jakarta - Lampung
  {
    id: 26,
    operator: 'Pahala Kencana',
    logo: 'https://via.placeholder.com/80x50/dc2626/ffffff?text=PAHALA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Lampung',
    departTime: '19:00',
    arriveTime: '04:00',
    duration: '9 jam',
    price: 190000,
    seatsLeft: 16,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota'
  },
  {
    id: 27,
    operator: 'Lorena',
    logo: 'https://via.placeholder.com/80x50/2563eb/ffffff?text=LORENA',
    type: 'Super Executive',
    from: 'Jakarta',
    to: 'Lampung',
    departTime: '20:30',
    arriveTime: '05:30',
    duration: '9 jam',
    price: 210000,
    seatsLeft: 12,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Snack'],
    tripType: 'antar-kota'
  },

  // Yogyakarta - Surabaya
  {
    id: 28,
    operator: 'Rosalia Indah',
    logo: 'https://via.placeholder.com/80x50/7c3aed/ffffff?text=ROSALIA',
    type: 'Executive',
    from: 'Yogyakarta',
    to: 'Surabaya',
    departTime: '20:00',
    arriveTime: '02:00',
    duration: '6 jam',
    price: 130000,
    seatsLeft: 20,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi'],
    tripType: 'antar-kota'
  },
  {
    id: 29,
    operator: 'Primajasa',
    logo: 'https://via.placeholder.com/80x50/16a34a/ffffff?text=PRIMAJASA',
    type: 'Super Executive',
    from: 'Yogyakarta',
    to: 'Surabaya',
    departTime: '21:30',
    arriveTime: '03:30',
    duration: '6 jam',
    price: 150000,
    seatsLeft: 14,
    features: ['AC', 'Reclining Seat', 'Toilet', 'WiFi', 'Entertainment'],
    tripType: 'antar-kota'
  },

  // Jakarta - Tasikmalaya
  {
    id: 30,
    operator: 'Pahala Kencana',
    logo: 'https://via.placeholder.com/80x50/dc2626/ffffff?text=PAHALA',
    type: 'Executive',
    from: 'Jakarta',
    to: 'Tasikmalaya',
    departTime: '14:00',
    arriveTime: '18:00',
    duration: '4 jam',
    price: 90000,
    seatsLeft: 18,
    features: ['AC', 'Reclining Seat', 'USB Port'],
    tripType: 'antar-kota'
  },
];

const popularRoutes = [
  {
    from: 'Jakarta',
    to: 'Bandung',
    duration: '3 jam',
    operators: 12,
    startPrice: 65000,
    popular: true
  },
  {
    from: 'Jakarta',
    to: 'Yogyakarta',
    duration: '8 jam',
    operators: 8,
    startPrice: 180000,
    popular: true
  },
  {
    from: 'Jakarta',
    to: 'Surabaya',
    duration: '12 jam',
    operators: 10,
    startPrice: 120000,
    popular: true
  },
  {
    from: 'Jakarta',
    to: 'Lampung',
    duration: '9 jam',
    operators: 6,
    startPrice: 150000,
    popular: true
  }
];

// State untuk pencarian
const busSearchState = {
  from: '',
  to: '',
  date: '',
  passengers: 1
};

// ===============================================================
//                  HELPER FUNCTIONS
// ===============================================================

function formatPrice(price) {
  return 'Rp ' + price.toLocaleString('id-ID');
}

function getTimeCategory(time) {
  const hour = parseInt(time.split(':')[0]);
  if (hour >= 0 && hour < 12) return 'pagi';
  if (hour >= 12 && hour < 18) return 'siang';
  return 'malam';
}

// ===============================================================
//            AMBIL PARAMETER DARI URL (INDEX)
// ===============================================================

function getSearchParamsFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const dari = urlParams.get('dari');
  const ke = urlParams.get('ke');
  const tanggal = urlParams.get('tanggal');
  const penumpang = urlParams.get('penumpang');
  
  if (dari) busSearchState.from = dari;
  if (ke) busSearchState.to = ke;
  if (tanggal) busSearchState.date = tanggal;
  if (penumpang) {
    const numMatch = penumpang.match(/\d+/);
    if (numMatch) {
      busSearchState.passengers = parseInt(numMatch[0], 10);
    }
  }
  
  console.log('Bus Search Parameters:', busSearchState);
}

// ===============================================================
//                  CITY AUTOCOMPLETE
// ===============================================================

function setupCityAutocomplete(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  
  if (!input || !dropdown) return;

  input.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    
    if (value.length < 1) {
      dropdown.classList.remove('open');
      return;
    }

    const filtered = cities.filter(city => 
      city.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
      dropdown.innerHTML = '<div class="city-option" style="cursor: default; color: #9ca3af;">Kota tidak ditemukan</div>';
    } else {
      dropdown.innerHTML = filtered.map(city => `
        <button type="button" class="city-option" data-city="${city}">
          <span class="city-name">${city}</span>
        </button>
      `).join('');
    }

    dropdown.classList.add('open');

    dropdown.querySelectorAll('.city-option').forEach(option => {
      option.addEventListener('click', function() {
        const city = this.getAttribute('data-city');
        if (city) {
          input.value = city;
          dropdown.classList.remove('open');
          
          // Update state dan render ulang
          if (inputId === 'busFrom') {
            busSearchState.from = city;
          } else if (inputId === 'busTo') {
            busSearchState.to = city;
          }
        }
      });
    });
  });

  document.addEventListener('click', function(e) {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
}

// ===============================================================
//                  TAB SWITCHING (ONE WAY / ROUND TRIP)
// ===============================================================

function setupBusTabs() {
  const tabButtons = document.querySelectorAll('.bus-tab-btn');
  const returnField = document.getElementById('busReturnField');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      tabButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const type = this.getAttribute('data-type');
      if (type === 'roundtrip') {
        returnField.style.display = 'block';
      } else {
        returnField.style.display = 'none';
      }
    });
  });
}

// ===============================================================
//                  FORM SUBMISSION
// ===============================================================

function setupBusSearchForm() {
  const form = document.getElementById('busSearchForm');
  if (!form) return;

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('busDepart').setAttribute('min', today);
  document.getElementById('busReturn').setAttribute('min', today);

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const from = document.getElementById('busFrom').value.trim();
    const to = document.getElementById('busTo').value.trim();
    const depart = document.getElementById('busDepart').value;
    const passengers = document.getElementById('busPassengers').value;

    if (!from || !to || !depart) {
      alert('Mohon lengkapi semua field yang diperlukan!');
      return;
    }

    busSearchState.from = from;
    busSearchState.to = to;
    busSearchState.date = depart;
    busSearchState.passengers = parseInt(passengers);

    updateResultsTitle();
    renderBusCards();

    document.getElementById('busCards').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function updateResultsTitle() {
  const titleEl = document.getElementById('resultsTitle');
  const subtitleEl = document.getElementById('resultsSubtitle');
  
  if (titleEl && busSearchState.from && busSearchState.to) {
    titleEl.textContent = `${busSearchState.from} → ${busSearchState.to}`;
  }
  
  if (subtitleEl) {
    let subtitle = '';
    if (busSearchState.date) {
      subtitle += busSearchState.date + ' • ';
    }
    subtitle += `${busSearchState.passengers} Penumpang`;
    subtitleEl.textContent = subtitle;
  }
}

// ===============================================================
//                  RENDER BUS CARDS
// ===============================================================

function renderBusCards() {
  const container = document.getElementById('busCards');
  if (!container) return;

  container.innerHTML = '';

  // Filter bus berdasarkan dari dan ke
  let filtered = busData;
  
  if (busSearchState.from && busSearchState.to) {
    filtered = busData.filter(bus => 
      bus.from.toLowerCase() === busSearchState.from.toLowerCase() &&
      bus.to.toLowerCase() === busSearchState.to.toLowerCase()
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🚌</div>
        <h3 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;">
          Tidak Ada Bus Ditemukan
        </h3>
        <p>Coba ubah rute atau tanggal pencarian Anda</p>
      </div>
    `;
    return;
  }

  filtered.forEach(bus => {
    const card = createBusCard(bus);
    container.appendChild(card);
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function createBusCard(bus) {
  const card = document.createElement('div');
  card.className = 'bus-card';

  card.innerHTML = `
    <div class="bus-card-inner">
      
      <div class="bus-col-operator">
        <img src="${bus.logo}" alt="${bus.operator}" class="bus-operator-logo">
        <div class="bus-operator-name">${bus.operator}</div>
        <div class="bus-type-badge">${bus.type}</div>
      </div>

      <div class="bus-col-route">
        <div class="bus-time-block">
          <div class="bus-time">${bus.departTime}</div>
          <div class="bus-location">${bus.from}</div>
        </div>

        <div class="bus-route-mid">
          <div class="bus-route-line"></div>
          <div class="bus-icon">🚌</div>
          <div class="bus-duration">${bus.duration}</div>
        </div>

        <div class="bus-time-block">
          <div class="bus-time">${bus.arriveTime}</div>
          <div class="bus-location">${bus.to}</div>
        </div>
      </div>

      <div class="bus-col-price">
        <div class="bus-seats-left">${bus.seatsLeft} kursi tersisa</div>
        <div class="bus-price">${formatPrice(bus.price)}</div>
        <div class="bus-price-note">/orang</div>
        <button class="bus-select-btn">Pilih</button>
      </div>

    </div>

    <div class="bus-card-footer">
      <div class="bus-footer-features">
        ${bus.features.map(feature => `
          <div class="bus-feature">
            <i data-lucide="check-circle"></i>
            <span>${feature}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const selectBtn = card.querySelector('.bus-select-btn');
  selectBtn.addEventListener('click', () => {
    const params = new URLSearchParams({
      id: bus.id,
      tanggal: busSearchState.date || new Date().toISOString().split('T')[0],
      penumpang: busSearchState.passengers || 1
    });
    window.location.href = `bus-detail.html?${params.toString()}`;
  });

  return card;
}

// ===============================================================
//                  FILTERS
// ===============================================================

function setupFilters() {
  const priceRange = document.getElementById('priceRange');
  const maxPrice = document.getElementById('maxPrice');

  if (priceRange && maxPrice) {
    priceRange.addEventListener('input', function() {
      maxPrice.textContent = formatPrice(parseInt(this.value));
    });
  }

  const resetBtn = document.getElementById('resetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.filter-checkbox input').forEach(cb => cb.checked = false);
      if (priceRange) priceRange.value = 500000;
      if (maxPrice) maxPrice.textContent = 'Rp 500.000';
      renderBusCards();
    });
  }

  document.querySelectorAll('.time-filter, .type-filter, .operator-filter').forEach(filter => {
    filter.addEventListener('change', applyFilters);
  });

  if (priceRange) {
    priceRange.addEventListener('change', applyFilters);
  }

  const showFiltersBtn = document.getElementById('showFilters');
  const filtersAside = document.getElementById('busFilters');

  if (showFiltersBtn && filtersAside) {
    showFiltersBtn.addEventListener('click', () => {
      filtersAside.classList.toggle('filters-open');
    });

    document.addEventListener('click', (e) => {
      if (!filtersAside.contains(e.target) && !showFiltersBtn.contains(e.target)) {
        filtersAside.classList.remove('filters-open');
      }
    });
  }
}

function applyFilters() {
  const maxPrice = parseInt(document.getElementById('priceRange')?.value || 500000);
  
  const timeFilters = Array.from(document.querySelectorAll('.time-filter:checked'))
    .map(cb => cb.value);
  
  const typeFilters = Array.from(document.querySelectorAll('.type-filter:checked'))
    .map(cb => cb.value);
  
  const operatorFilters = Array.from(document.querySelectorAll('.operator-filter:checked'))
    .map(cb => cb.value);

  let baseData = busData;
  
  // Filter berdasarkan rute pencarian
  if (busSearchState.from && busSearchState.to) {
    baseData = busData.filter(bus => 
      bus.from.toLowerCase() === busSearchState.from.toLowerCase() &&
      bus.to.toLowerCase() === busSearchState.to.toLowerCase()
    );
  }

  const filtered = baseData.filter(bus => {
    if (bus.price > maxPrice) return false;

    if (timeFilters.length > 0) {
      const timeCategory = getTimeCategory(bus.departTime);
      if (!timeFilters.includes(timeCategory)) return false;
    }

    if (typeFilters.length > 0) {
      const busTypeKey = bus.type.toLowerCase().replace(' ', '-');
      if (!typeFilters.includes(busTypeKey)) return false;
    }

    if (operatorFilters.length > 0) {
      const operatorKey = bus.operator.toLowerCase().replace(' ', '-');
      if (!operatorFilters.includes(operatorKey)) return false;
    }

    return true;
  });

  const container = document.getElementById('busCards');
  if (!container) return;

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🚌</div>
        <h3 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;">
          Tidak Ada Bus Ditemukan
        </h3>
        <p>Coba ubah filter atau cari rute lain</p>
      </div>
    `;
  } else {
    filtered.forEach(bus => {
      const card = createBusCard(bus);
      container.appendChild(card);
    });
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// ===============================================================
//                  SORTING
// ===============================================================

function setupSorting() {
  const sortSelect = document.getElementById('sortBus');
  if (!sortSelect) return;

  sortSelect.addEventListener('change', function() {
    const sortType = this.value;
    
    let baseData = busData;
    
    if (busSearchState.from && busSearchState.to) {
      baseData = busData.filter(bus => 
        bus.from.toLowerCase() === busSearchState.from.toLowerCase() &&
        bus.to.toLowerCase() === busSearchState.to.toLowerCase()
      );
    }
    
    let sorted = [...baseData];

    switch(sortType) {
      case 'cheapest':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'earliest':
        sorted.sort((a, b) => a.departTime.localeCompare(b.departTime));
        break;
      case 'latest':
        sorted.sort((a, b) => b.departTime.localeCompare(a.departTime));
        break;
      case 'shortest':
        sorted.sort((a, b) => {
          const durationA = parseInt(a.duration);
          const durationB = parseInt(b.duration);
          return durationA - durationB;
        });
        break;
    }

    const container = document.getElementById('busCards');
    if (!container) return;

    container.innerHTML = '';
    sorted.forEach(bus => {
      const card = createBusCard(bus);
      container.appendChild(card);
    });

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });
}

// ===============================================================
//                  POPULAR ROUTES
// ===============================================================

function renderPopularRoutes() {
  const container = document.getElementById('popularRoutes');
  if (!container) return;

  popularRoutes.forEach(route => {
    const card = document.createElement('div');
    card.className = 'route-card';

    card.innerHTML = `
      <div class="route-card-header">
        <div class="route-cities">
          <span>${route.from}</span>
          <span class="route-arrow">→</span>
          <span>${route.to}</span>
        </div>
        ${route.popular ? '<div class="route-badge">Populer</div>' : ''}
      </div>

      <div class="route-info">
        <div class="route-info-item">
          <i data-lucide="clock"></i>
          <span>${route.duration}</span>
        </div>
        <div class="route-info-item">
          <i data-lucide="bus"></i>
          <span>${route.operators} operator tersedia</span>
        </div>
      </div>

      <div class="route-price">
        <span class="route-price-label">Mulai dari</span>
        <span class="route-price-value">${formatPrice(route.startPrice)}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      busSearchState.from = route.from;
      busSearchState.to = route.to;
      
      const fromInput = document.getElementById('busFrom');
      const toInput = document.getElementById('busTo');
      
      if (fromInput) fromInput.value = route.from;
      if (toInput) toInput.value = route.to;
      
      updateResultsTitle();
      renderBusCards();
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    container.appendChild(card);
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// ===============================================================
//                  MOBILE MENU
// ===============================================================

function setupMobileMenu() {
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

// ===============================================================
//                  INITIALIZE ALL
// ===============================================================

window.addEventListener('DOMContentLoaded', () => {
  // Ambil parameter dari URL terlebih dahulu
  getSearchParamsFromUrl();
  
  // Setup form dan autocomplete
  setupCityAutocomplete('busFrom', 'busFromDropdown');
  setupCityAutocomplete('busTo', 'busToDropdown');
  setupBusTabs();
  setupBusSearchForm();
  setupFilters();
  setupSorting();
  renderPopularRoutes();
  setupMobileMenu();

  // Set nilai input dari state
  const fromInput = document.getElementById('busFrom');
  const toInput = document.getElementById('busTo');
  
  if (fromInput && busSearchState.from) {
    fromInput.value = busSearchState.from;
  }
  
  if (toInput && busSearchState.to) {
    toInput.value = busSearchState.to;
  }

  // Update title dan render bus cards
  updateResultsTitle();
  renderBusCards();
});

// Tambahkan state untuk pagination
const paginationState = {
  itemsPerPage: 5,
  currentPage: 1,
  totalItems: 0
};

// ===============================================================
//                  RENDER BUS CARDS WITH PAGINATION
// ===============================================================

function renderBusCards() {
  const container = document.getElementById('busCards');
  if (!container) return;

  // Filter bus berdasarkan dari dan ke
  let filtered = busData;
  
  if (busSearchState.from && busSearchState.to) {
    filtered = busData.filter(bus => 
      bus.from.toLowerCase() === busSearchState.from.toLowerCase() &&
      bus.to.toLowerCase() === busSearchState.to.toLowerCase()
    );
  }

  // Reset pagination
  paginationState.currentPage = 1;
  paginationState.totalItems = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🚌</div>
        <h3 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;">
          Tidak Ada Bus Ditemukan
        </h3>
        <p>Coba ubah rute atau tanggal pencarian Anda</p>
      </div>
    `;
    return;
  }

  // Clear container
  container.innerHTML = '';

  // Render hanya 5 item pertama
  const itemsToShow = filtered.slice(0, paginationState.itemsPerPage);
  itemsToShow.forEach(bus => {
    const card = createBusCard(bus);
    container.appendChild(card);
  });

  // Tambahkan tombol "Muat Lebih Banyak" jika masih ada data
  if (filtered.length > paginationState.itemsPerPage) {
    addLoadMoreButton(filtered);
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function addLoadMoreButton(allBuses) {
  const container = document.getElementById('busCards');
  if (!container) return;

  const loadMoreDiv = document.createElement('div');
  loadMoreDiv.className = 'load-more-container';
  loadMoreDiv.id = 'loadMoreContainer';
  loadMoreDiv.style.cssText = `
    text-align: center;
    padding: 2rem 0;
    margin-top: 1rem;
  `;

  const remainingItems = allBuses.length - (paginationState.currentPage * paginationState.itemsPerPage);
  const showingText = `Menampilkan ${Math.min(paginationState.currentPage * paginationState.itemsPerPage, allBuses.length)} dari ${allBuses.length} bus`;

  loadMoreDiv.innerHTML = `
    <p style="color: #6b7280; margin-bottom: 1rem; font-size: 14px;">
      ${showingText}
    </p>
    <button class="load-more-btn" id="loadMoreBtn" style="
      background: linear-gradient(135deg, #008aff, #0073e6);
      color: white;
      padding: 12px 40px;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 138, 255, 0.3);
    ">
      <i data-lucide="chevron-down" style="width: 18px; height: 18px; vertical-align: middle; margin-right: 5px;"></i>
      Muat Lebih Banyak (${remainingItems} lagi)
    </button>
  `;

  container.appendChild(loadMoreDiv);

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    // Add hover effect
    loadMoreBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 6px 20px rgba(0, 138, 255, 0.4)';
    });

    loadMoreBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 15px rgba(0, 138, 255, 0.3)';
    });

    // Load more functionality
    loadMoreBtn.addEventListener('click', () => {
      loadMoreBuses(allBuses);
    });
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function loadMoreBuses(allBuses) {
  const container = document.getElementById('busCards');
  const loadMoreContainer = document.getElementById('loadMoreContainer');
  
  if (!container) return;

  // Remove existing load more button
  if (loadMoreContainer) {
    loadMoreContainer.remove();
  }

  // Increment page
  paginationState.currentPage++;

  // Calculate range
  const startIndex = (paginationState.currentPage - 1) * paginationState.itemsPerPage;
  const endIndex = startIndex + paginationState.itemsPerPage;
  const newItems = allBuses.slice(startIndex, endIndex);

  // Render new items
  newItems.forEach(bus => {
    const card = createBusCard(bus);
    container.appendChild(card);
  });

  // Add load more button again if there are more items
  if (endIndex < allBuses.length) {
    addLoadMoreButton(allBuses);
  } else {
    // Tampilkan pesan "Semua bus sudah ditampilkan"
    const endMessage = document.createElement('div');
    endMessage.style.cssText = `
      text-align: center;
      padding: 2rem 0;
      color: #6b7280;
      font-size: 14px;
    `;
    endMessage.innerHTML = `
      <p>✓ Semua ${allBuses.length} bus sudah ditampilkan</p>
    `;
    container.appendChild(endMessage);
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Smooth scroll ke item baru pertama
  const newFirstCard = container.children[startIndex];
  if (newFirstCard) {
    newFirstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ===============================================================
//                  UPDATE APPLY FILTERS
// ===============================================================

function applyFilters() {
  const maxPrice = parseInt(document.getElementById('priceRange')?.value || 500000);
  
  const timeFilters = Array.from(document.querySelectorAll('.time-filter:checked'))
    .map(cb => cb.value);
  
  const typeFilters = Array.from(document.querySelectorAll('.type-filter:checked'))
    .map(cb => cb.value);
  
  const operatorFilters = Array.from(document.querySelectorAll('.operator-filter:checked'))
    .map(cb => cb.value);

  let baseData = busData;
  
  // Filter berdasarkan rute pencarian
  if (busSearchState.from && busSearchState.to) {
    baseData = busData.filter(bus => 
      bus.from.toLowerCase() === busSearchState.from.toLowerCase() &&
      bus.to.toLowerCase() === busSearchState.to.toLowerCase()
    );
  }

  const filtered = baseData.filter(bus => {
    if (bus.price > maxPrice) return false;

    if (timeFilters.length > 0) {
      const timeCategory = getTimeCategory(bus.departTime);
      if (!timeFilters.includes(timeCategory)) return false;
    }

    if (typeFilters.length > 0) {
      const busTypeKey = bus.type.toLowerCase().replace(' ', '-');
      if (!typeFilters.includes(busTypeKey)) return false;
    }

    if (operatorFilters.length > 0) {
      const operatorKey = bus.operator.toLowerCase().replace(' ', '-');
      if (!operatorFilters.includes(operatorKey)) return false;
    }

    return true;
  });

  const container = document.getElementById('busCards');
  if (!container) return;

  // Reset pagination
  paginationState.currentPage = 1;
  paginationState.totalItems = filtered.length;

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🚌</div>
        <h3 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;">
          Tidak Ada Bus Ditemukan
        </h3>
        <p>Coba ubah filter atau cari rute lain</p>
      </div>
    `;
  } else {
    // Render 5 item pertama
    const itemsToShow = filtered.slice(0, paginationState.itemsPerPage);
    itemsToShow.forEach(bus => {
      const card = createBusCard(bus);
      container.appendChild(card);
    });

    // Tambahkan tombol load more jika ada lebih dari 5 item
    if (filtered.length > paginationState.itemsPerPage) {
      addLoadMoreButton(filtered);
    }
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// ===============================================================
//                  UPDATE SORTING
// ===============================================================

function setupSorting() {
  const sortSelect = document.getElementById('sortBus');
  if (!sortSelect) return;

  sortSelect.addEventListener('change', function() {
    const sortType = this.value;
    
    let baseData = busData;
    
    if (busSearchState.from && busSearchState.to) {
      baseData = busData.filter(bus => 
        bus.from.toLowerCase() === busSearchState.from.toLowerCase() &&
        bus.to.toLowerCase() === busSearchState.to.toLowerCase()
      );
    }
    
    let sorted = [...baseData];

    switch(sortType) {
      case 'cheapest':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'earliest':
        sorted.sort((a, b) => a.departTime.localeCompare(b.departTime));
        break;
      case 'latest':
        sorted.sort((a, b) => b.departTime.localeCompare(a.departTime));
        break;
      case 'shortest':
        sorted.sort((a, b) => {
          const durationA = parseInt(a.duration);
          const durationB = parseInt(b.duration);
          return durationA - durationB;
        });
        break;
    }

    const container = document.getElementById('busCards');
    if (!container) return;

    // Reset pagination
    paginationState.currentPage = 1;
    paginationState.totalItems = sorted.length;

    container.innerHTML = '';
    
    // Render 5 item pertama
    const itemsToShow = sorted.slice(0, paginationState.itemsPerPage);
    itemsToShow.forEach(bus => {
      const card = createBusCard(bus);
      container.appendChild(card);
    });

    // Tambahkan tombol load more jika ada lebih dari 5 item
    if (sorted.length > paginationState.itemsPerPage) {
      addLoadMoreButton(sorted);
    }

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });
}