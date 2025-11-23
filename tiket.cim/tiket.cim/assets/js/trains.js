// =====================================================
// DATA KERETA
// =====================================================
const trainsData = [
  // Jakarta - Yogyakarta
  {
    id: 1,
    name: 'Argo Parahyangan',
    trainNumber: 'KA-123',
    departure: { time: '08:00', station: 'Gambir', code: 'GMR' },
    arrival: { time: '11:30', station: 'Lempuyangan', code: 'LMP' },
    duration: '3h 30m',
    price: 250000,
    class: 'Eksekutif',
    available: 45,
    rating: 4.7,
    reviews: 1234,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 2,
    name: 'Gajayana',
    trainNumber: 'KA-456',
    departure: { time: '10:00', station: 'Gambir', code: 'GMR' },
    arrival: { time: '13:45', station: 'Lempuyangan', code: 'LMP' },
    duration: '3h 45m',
    price: 200000,
    class: 'Bisnis',
    available: 32,
    rating: 4.5,
    reviews: 980,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 3,
    name: 'Taksaka',
    trainNumber: 'KA-789',
    departure: { time: '14:30', station: 'Gambir', code: 'GMR' },
    arrival: { time: '18:15', station: 'Lempuyangan', code: 'LMP' },
    duration: '3h 45m',
    price: 230000,
    class: 'Eksekutif',
    available: 28,
    rating: 4.6,
    reviews: 1120,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 4,
    name: 'Bima',
    trainNumber: 'KA-101',
    departure: { time: '06:30', station: 'Gambir', code: 'GMR' },
    arrival: { time: '10:00', station: 'Lempuyangan', code: 'LMP' },
    duration: '3h 30m',
    price: 220000,
    class: 'Eksekutif',
    available: 38,
    rating: 4.8,
    reviews: 1560,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 5,
    name: 'Lodaya',
    trainNumber: 'KA-202',
    departure: { time: '12:15', station: 'Gambir', code: 'GMR' },
    arrival: { time: '16:00', station: 'Lempuyangan', code: 'LMP' },
    duration: '3h 45m',
    price: 180000,
    class: 'Bisnis',
    available: 42,
    rating: 4.4,
    reviews: 890,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 6,
    name: 'Turangga',
    trainNumber: 'KA-303',
    departure: { time: '16:45', station: 'Gambir', code: 'GMR' },
    arrival: { time: '20:30', station: 'Lempuyangan', code: 'LMP' },
    duration: '3h 45m',
    price: 210000,
    class: 'Eksekutif',
    available: 25,
    rating: 4.7,
    reviews: 1340,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },

  // Jakarta - Surabaya
  {
    id: 7,
    name: 'Argo Bromo Anggrek',
    trainNumber: 'KA-11',
    departure: { time: '18:30', station: 'Gambir', code: 'GMR' },
    arrival: { time: '05:45', station: 'Gubeng', code: 'SGU' },
    duration: '11h 15m',
    price: 350000,
    class: 'Eksekutif',
    available: 40,
    rating: 4.8,
    reviews: 2340,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Makan Malam', 'Colokan Listrik', 'Entertainment']
  },
  {
    id: 8,
    name: 'Bima',
    trainNumber: 'KA-22',
    departure: { time: '19:00', station: 'Gambir', code: 'GMR' },
    arrival: { time: '06:30', station: 'Gubeng', code: 'SGU' },
    duration: '11h 30m',
    price: 320000,
    class: 'Eksekutif',
    available: 35,
    rating: 4.7,
    reviews: 1980,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Makan Malam', 'Colokan Listrik']
  },
  {
    id: 9,
    name: 'Gajayana',
    trainNumber: 'KA-33',
    departure: { time: '17:00', station: 'Gambir', code: 'GMR' },
    arrival: { time: '04:15', station: 'Gubeng', code: 'SGU' },
    duration: '11h 15m',
    price: 280000,
    class: 'Bisnis',
    available: 48,
    rating: 4.6,
    reviews: 1680,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 10,
    name: 'Mutiara Selatan',
    trainNumber: 'KA-44',
    departure: { time: '16:30', station: 'Gambir', code: 'GMR' },
    arrival: { time: '03:45', station: 'Gubeng', code: 'SGU' },
    duration: '11h 15m',
    price: 300000,
    class: 'Eksekutif',
    available: 42,
    rating: 4.7,
    reviews: 1450,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Makan Malam', 'Colokan Listrik']
  },

  // Jakarta - Bandung
  {
    id: 11,
    name: 'Argo Parahyangan',
    trainNumber: 'KA-55',
    departure: { time: '06:00', station: 'Gambir', code: 'GMR' },
    arrival: { time: '09:30', station: 'Bandung', code: 'BD' },
    duration: '3h 30m',
    price: 150000,
    class: 'Eksekutif',
    available: 50,
    rating: 4.8,
    reviews: 2680,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 12,
    name: 'Argo Parahyangan',
    trainNumber: 'KA-56',
    departure: { time: '08:30', station: 'Gambir', code: 'GMR' },
    arrival: { time: '12:00', station: 'Bandung', code: 'BD' },
    duration: '3h 30m',
    price: 150000,
    class: 'Eksekutif',
    available: 48,
    rating: 4.8,
    reviews: 2580,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 13,
    name: 'Argo Parahyangan',
    trainNumber: 'KA-57',
    departure: { time: '11:00', station: 'Gambir', code: 'GMR' },
    arrival: { time: '14:30', station: 'Bandung', code: 'BD' },
    duration: '3h 30m',
    price: 150000,
    class: 'Eksekutif',
    available: 45,
    rating: 4.7,
    reviews: 2420,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 14,
    name: 'Argo Parahyangan',
    trainNumber: 'KA-58',
    departure: { time: '13:30', station: 'Gambir', code: 'GMR' },
    arrival: { time: '17:00', station: 'Bandung', code: 'BD' },
    duration: '3h 30m',
    price: 150000,
    class: 'Eksekutif',
    available: 52,
    rating: 4.8,
    reviews: 2520,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 15,
    name: 'Argo Parahyangan',
    trainNumber: 'KA-59',
    departure: { time: '16:00', station: 'Gambir', code: 'GMR' },
    arrival: { time: '19:30', station: 'Bandung', code: 'BD' },
    duration: '3h 30m',
    price: 150000,
    class: 'Eksekutif',
    available: 46,
    rating: 4.7,
    reviews: 2380,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },

  // Jakarta - Semarang
  {
    id: 16,
    name: 'Argo Muria',
    trainNumber: 'KA-66',
    departure: { time: '07:00', station: 'Gambir', code: 'GMR' },
    arrival: { time: '13:30', station: 'Tawang', code: 'SMG' },
    duration: '6h 30m',
    price: 240000,
    class: 'Eksekutif',
    available: 38,
    rating: 4.7,
    reviews: 1580,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Makan Siang', 'Colokan Listrik']
  },
  {
    id: 17,
    name: 'Argo Muria',
    trainNumber: 'KA-67',
    departure: { time: '14:00', station: 'Gambir', code: 'GMR' },
    arrival: { time: '20:30', station: 'Tawang', code: 'SMG' },
    duration: '6h 30m',
    price: 240000,
    class: 'Eksekutif',
    available: 42,
    rating: 4.6,
    reviews: 1480,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Makan Malam', 'Colokan Listrik']
  },
  {
    id: 18,
    name: 'Fajar Utama',
    trainNumber: 'KA-77',
    departure: { time: '09:30', station: 'Gambir', code: 'GMR' },
    arrival: { time: '16:00', station: 'Tawang', code: 'SMG' },
    duration: '6h 30m',
    price: 200000,
    class: 'Bisnis',
    available: 50,
    rating: 4.5,
    reviews: 1280,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },

  // Jakarta - Solo
  {
    id: 19,
    name: 'Argo Dwipangga',
    trainNumber: 'KA-88',
    departure: { time: '08:00', station: 'Gambir', code: 'GMR' },
    arrival: { time: '15:00', station: 'Solo Balapan', code: 'SLO' },
    duration: '7h 00m',
    price: 260000,
    class: 'Eksekutif',
    available: 40,
    rating: 4.7,
    reviews: 1680,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Makan Siang', 'Colokan Listrik', 'Entertainment']
  },
  {
    id: 20,
    name: 'Argo Dwipangga',
    trainNumber: 'KA-89',
    departure: { time: '15:30', station: 'Gambir', code: 'GMR' },
    arrival: { time: '22:30', station: 'Solo Balapan', code: 'SLO' },
    duration: '7h 00m',
    price: 260000,
    class: 'Eksekutif',
    available: 36,
    rating: 4.6,
    reviews: 1520,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Makan Malam', 'Colokan Listrik', 'Entertainment']
  },

  // Jakarta - Malang
  {
    id: 21,
    name: 'Gajayana',
    trainNumber: 'KA-99',
    departure: { time: '17:30', station: 'Gambir', code: 'GMR' },
    arrival: { time: '05:15', station: 'Malang', code: 'ML' },
    duration: '11h 45m',
    price: 340000,
    class: 'Eksekutif',
    available: 38,
    rating: 4.7,
    reviews: 1890,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Makan Malam', 'Colokan Listrik', 'Entertainment']
  },
  {
    id: 22,
    name: 'Malabar',
    trainNumber: 'KA-100',
    departure: { time: '18:30', station: 'Gambir', code: 'GMR' },
    arrival: { time: '06:30', station: 'Malang', code: 'ML' },
    duration: '12h 00m',
    price: 300000,
    class: 'Bisnis',
    available: 45,
    rating: 4.5,
    reviews: 1580,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },

  // Surabaya - Malang
  {
    id: 23,
    name: 'Penataran',
    trainNumber: 'KA-111',
    departure: { time: '06:00', station: 'Gubeng', code: 'SGU' },
    arrival: { time: '08:30', station: 'Malang', code: 'ML' },
    duration: '2h 30m',
    price: 120000,
    class: 'Eksekutif',
    available: 48,
    rating: 4.6,
    reviews: 1340,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 24,
    name: 'Penataran',
    trainNumber: 'KA-112',
    departure: { time: '10:30', station: 'Gubeng', code: 'SGU' },
    arrival: { time: '13:00', station: 'Malang', code: 'ML' },
    duration: '2h 30m',
    price: 120000,
    class: 'Eksekutif',
    available: 50,
    rating: 4.6,
    reviews: 1280,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 25,
    name: 'Penataran',
    trainNumber: 'KA-113',
    departure: { time: '15:00', station: 'Gubeng', code: 'SGU' },
    arrival: { time: '17:30', station: 'Malang', code: 'ML' },
    duration: '2h 30m',
    price: 120000,
    class: 'Eksekutif',
    available: 46,
    rating: 4.7,
    reviews: 1420,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },

  // Yogyakarta - Surabaya
  {
    id: 26,
    name: 'Sancaka',
    trainNumber: 'KA-122',
    departure: { time: '05:30', station: 'Lempuyangan', code: 'LMP' },
    arrival: { time: '11:15', station: 'Gubeng', code: 'SGU' },
    duration: '5h 45m',
    price: 210000,
    class: 'Eksekutif',
    available: 42,
    rating: 4.7,
    reviews: 1680,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
  {
    id: 27,
    name: 'Sancaka',
    trainNumber: 'KA-123',
    departure: { time: '12:00', station: 'Lempuyangan', code: 'LMP' },
    arrival: { time: '17:45', station: 'Gubeng', code: 'SGU' },
    duration: '5h 45m',
    price: 210000,
    class: 'Eksekutif',
    available: 38,
    rating: 4.6,
    reviews: 1520,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },

  // Bandung - Surabaya
  {
    id: 28,
    name: 'Turangga',
    trainNumber: 'KA-133',
    departure: { time: '16:00', station: 'Bandung', code: 'BD' },
    arrival: { time: '05:30', station: 'Gubeng', code: 'SGU' },
    duration: '13h 30m',
    price: 380000,
    class: 'Eksekutif',
    available: 35,
    rating: 4.7,
    reviews: 1450,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Makan Malam', 'Colokan Listrik', 'Entertainment']
  },
  {
    id: 29,
    name: 'Harina',
    trainNumber: 'KA-144',
    departure: { time: '17:30', station: 'Bandung', code: 'BD' },
    arrival: { time: '07:00', station: 'Gubeng', code: 'SGU' },
    duration: '13h 30m',
    price: 340000,
    class: 'Bisnis',
    available: 42,
    rating: 4.5,
    reviews: 1280,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },

  // Solo - Surabaya
  {
    id: 30,
    name: 'Bengawan',
    trainNumber: 'KA-155',
    departure: { time: '07:00', station: 'Solo Balapan', code: 'SLO' },
    arrival: { time: '11:30', station: 'Gubeng', code: 'SGU' },
    duration: '4h 30m',
    price: 180000,
    class: 'Eksekutif',
    available: 44,
    rating: 4.6,
    reviews: 1380,
    amenities: ['Pendingin Ruangan', 'Reclining Seat', 'Snack & Minuman', 'Colokan Listrik']
  },
];

const trainClasses = [
  {
    id: 'economy',
    name: 'Ekonomi',
    features: 'Bagasi 20kg • AC • Reclining Seat',
    priceMultiplier: 1.0
  },
  {
    id: 'business',
    name: 'Bisnis',
    features: 'Bagasi 30kg • Snack • AC Premium',
    priceMultiplier: 1.5
  },
  {
    id: 'executive',
    name: 'Eksekutif',
    features: 'Bagasi 40kg • Full Meal • AC Premium • Recliner',
    priceMultiplier: 2.4
  }
];

// =====================================================
// STATE
// =====================================================
const trainState = {
  from: '',
  to: '',
  date: '',
  passengers: 1,
};

const trainPaginationState = {
  itemsPerPage: 5,
  currentPage: 1,
  totalItems: 0
};

const trainDetailState = {
  train: null,
  selectedClass: 'economy',
  passengers: 1,
  date: ''
};

// =====================================================
// UTILITY FUNCTIONS
// =====================================================
function trainFormatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

function getTimeCategory(time) {
  const hour = parseInt(time.split(':')[0]);
  if (hour >= 0 && hour < 12) return 'pagi';
  if (hour >= 12 && hour < 18) return 'siang';
  return 'malam';
}

// =====================================================
// URL PARAMETERS
// =====================================================
function getUrlParametersForList() {
  const urlParams = new URLSearchParams(window.location.search);
  const dari = urlParams.get('dari');
  const ke = urlParams.get('ke');
  const tanggal = urlParams.get('tanggal');
  const penumpang = urlParams.get('penumpang');
  
  if (dari) {
    // Ambil nama kota saja tanpa kode
    trainState.from = dari.split('(')[0].trim();
    const fromInput = document.getElementById('trainFromInput');
    if (fromInput) fromInput.value = dari;
  }
  
  if (ke) {
    // Ambil nama kota saja tanpa kode
    trainState.to = ke.split('(')[0].trim();
    const toInput = document.getElementById('trainToInput');
    if (toInput) toInput.value = ke;
  }
  
  if (tanggal) {
    trainState.date = tanggal;
    const dateInput = document.getElementById('trainDateInput');
    if (dateInput) dateInput.value = tanggal;
  }
  
  if (penumpang) {
    const numMatch = penumpang.match(/\d+/);
    if (numMatch) {
      trainState.passengers = parseInt(numMatch[0], 10);
    }
    const passengerSelect = document.getElementById('trainPassengerSelect');
    if (passengerSelect) passengerSelect.value = trainState.passengers;
  }
  
  console.log('Train Search Parameters:', trainState);
}

// =====================================================
// CREATE TRAIN CARD
// =====================================================
function createTrainCard(train) {
  const card = document.createElement('article');
  card.className = 'card train-card';

  const inner = document.createElement('div');
  inner.className = 'train-card-inner';

  const iconCol = document.createElement('div');
  iconCol.className = 'train-col train-col-icon';
  iconCol.innerHTML = `
    <div class="train-icon-circle">🚆</div>
    <p class="train-number">${train.trainNumber}</p>
  `;

  const routeCol = document.createElement('div');
  routeCol.className = 'train-col train-col-route';
  routeCol.innerHTML = `
    <div class="train-time-block">
      <p class="train-time">${train.departure.time}</p>
      <p class="train-station">${train.departure.station}</p>
    </div>
    <div class="train-mid">
      <div class="train-line"></div>
      <span class="train-duration">${train.duration}</span>
      <div class="train-line"></div>
    </div>
    <div class="train-time-block">
      <p class="train-time">${train.arrival.time}</p>
      <p class="train-station">${train.arrival.station}</p>
    </div>
  `;

  const infoCol = document.createElement('div');
  infoCol.className = 'train-col train-col-info';
  
  const totalPrice = train.price * trainState.passengers;
  const priceNote = trainState.passengers > 1 
    ? `${trainState.passengers} penumpang` 
    : 'per orang';
  
  infoCol.innerHTML = `
    <h3 class="train-name">${train.name}</h3>
    <p class="train-class">${train.class}</p>
    <p class="train-availability">${train.available} kursi tersedia</p>
    <p class="train-price">${trainFormatPrice(totalPrice)}</p>
    <p class="train-price-note">${priceNote}</p>
    <button type="button" class="btn-primary train-select-btn">Pilih</button>
  `;
  
  const selectBtn = infoCol.querySelector('button');
  selectBtn.addEventListener('click', () => {
    const params = new URLSearchParams({
      id: train.id,
      dari: `${trainState.from} (${train.departure.code})`,
      ke: `${trainState.to} (${train.arrival.code})`,
      tanggal: trainState.date || new Date().toISOString().split('T')[0],
      penumpang: `${trainState.passengers} Dewasa`
    });
    
    window.location.href = `trains-detail.html?${params.toString()}`;
  });

  inner.appendChild(iconCol);
  inner.appendChild(routeCol);
  inner.appendChild(infoCol);
  card.appendChild(inner);

  return card;
}

// =====================================================
// RENDER TRAINS WITH PAGINATION
// =====================================================
function renderTrains(dataToRender = null) {
  const titleEl = document.getElementById('trainResultsTitle');
  const subtitleEl = document.getElementById('trainResultsSubtitle');
  const listEl = document.getElementById('trainCards');
  
  if (!titleEl || !subtitleEl || !listEl) {
    console.error('Required elements not found!');
    return;
  }

  let data;
  
  // Mapping kota ke stasiun
  const cityToStation = {
    'jakarta': 'gambir',
    'yogyakarta': 'lempuyangan',
    'bandung': 'bandung',
    'surabaya': 'surabaya gubeng',
    'semarang': 'semarang tawang'
  };
  
  // Jika tidak ada data yang diberikan, filter berdasarkan rute
  if (!dataToRender) {
    console.log('Filtering by route:', trainState.from, '->', trainState.to);
    
    // Extract nama kota dari format "Jakarta (GMR)"
    const fromCity = trainState.from.split('(')[0].trim().toLowerCase();
    const toCity = trainState.to.split('(')[0].trim().toLowerCase();
    
    // Dapatkan nama stasiun yang sesuai
    const fromStation = cityToStation[fromCity] || fromCity;
    const toStation = cityToStation[toCity] || toCity;
    
    console.log('Searching for:', fromStation, '->', toStation);
    
    // Filter berdasarkan stasiun keberangkatan dan tujuan
    data = trainsData.filter(train => {
      const trainFromStation = train.departure.station.toLowerCase();
      const trainToStation = train.arrival.station.toLowerCase();
      
      const matchFrom = trainFromStation.includes(fromStation) || fromStation.includes(trainFromStation);
      const matchTo = trainToStation.includes(toStation) || toStation.includes(trainToStation);
      
      console.log(`Train ${train.name}: ${trainFromStation} -> ${trainToStation}, Match: ${matchFrom && matchTo}`);
      
      return matchFrom && matchTo;
    });
    
    console.log('Filtered data:', data.length, 'trains found');
  } else {
    data = dataToRender;
  }

  titleEl.textContent = `Kereta ${trainState.from} → ${trainState.to}`;
  
  let subtitle = `${data.length} kereta tersedia`;
  if (trainState.date) {
    const dateObj = new Date(trainState.date);
    const formattedDate = dateObj.toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    subtitle += ` • ${formattedDate}`;
  }
  
  subtitleEl.textContent = subtitle;

  // Reset pagination
  trainPaginationState.currentPage = 1;
  trainPaginationState.totalItems = data.length;

  listEl.innerHTML = '';
  
  if (data.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🚆</div>
        <h3 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem;">
          Tidak Ada Kereta Ditemukan
        </h3>
        <p>Tidak ada kereta untuk rute <strong>${trainState.from} → ${trainState.to}</strong></p>
        <p style="margin-top: 0.5rem; font-size: 0.875rem;">Coba ubah rute, filter, atau tanggal pencarian Anda</p>
      </div>
    `;
    return;
  

  // Lanjutkan dengan render data yang sudah difilter
  // (kode pagination dan render card di sini)
}
  
  // Render hanya 5 item pertama
  const itemsToShow = data.slice(0, trainPaginationState.itemsPerPage);
  itemsToShow.forEach((t) => listEl.appendChild(createTrainCard(t)));
  
  // Tambahkan tombol "Muat Lebih Banyak" jika masih ada data
  if (data.length > trainPaginationState.itemsPerPage) {
    addTrainLoadMoreButton(data);
  }
}

function addTrainLoadMoreButton(allTrains) {
  const listEl = document.getElementById('trainCards');
  if (!listEl) return;

  const loadMoreDiv = document.createElement('div');
  loadMoreDiv.className = 'load-more-container';
  loadMoreDiv.id = 'trainLoadMoreContainer';

  const remainingItems = allTrains.length - (trainPaginationState.currentPage * trainPaginationState.itemsPerPage);
  const showingText = `Menampilkan ${Math.min(trainPaginationState.currentPage * trainPaginationState.itemsPerPage, allTrains.length)} dari ${allTrains.length} kereta`;

  loadMoreDiv.innerHTML = `
    <p style="color: #6b7280; margin-bottom: 1rem; font-size: 14px;">
      ${showingText}
    </p>
    <button class="train-load-more-btn" id="trainLoadMoreBtn">
      🚆 Muat Lebih Banyak (${remainingItems} lagi)
    </button>
  `;

  listEl.appendChild(loadMoreDiv);

  const loadMoreBtn = document.getElementById('trainLoadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      loadMoreTrains(allTrains);
    });
  }
}

function loadMoreTrains(allTrains) {
  const listEl = document.getElementById('trainCards');
  const loadMoreContainer = document.getElementById('trainLoadMoreContainer');
  
  if (!listEl) return;

  if (loadMoreContainer) {
    loadMoreContainer.remove();
  }

  trainPaginationState.currentPage++;

  const startIndex = (trainPaginationState.currentPage - 1) * trainPaginationState.itemsPerPage;
  const endIndex = startIndex + trainPaginationState.itemsPerPage;
  const newItems = allTrains.slice(startIndex, endIndex);

  newItems.forEach(train => {
    const card = createTrainCard(train);
    listEl.appendChild(card);
  });

  if (endIndex < allTrains.length) {
    addTrainLoadMoreButton(allTrains);
  } else {
    const endMessage = document.createElement('div');
    endMessage.style.cssText = `
      text-align: center;
      padding: 2rem 0;
      color: #6b7280;
      font-size: 14px;
    `;
    endMessage.innerHTML = `
      <p>✓ Semua ${allTrains.length} kereta sudah ditampilkan</p>
    `;
    listEl.appendChild(endMessage);
  }

  const newFirstCard = listEl.children[startIndex];
  if (newFirstCard) {
    newFirstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// =====================================================
// FILTERS
// =====================================================
function applyTrainFilters() {
  const maxPrice = parseInt(document.getElementById('trainPriceRange')?.value || 500000);
  
  const timeFilters = Array.from(document.querySelectorAll('.time-filter:checked'))
    .map(cb => cb.value);
  
  const classFilters = Array.from(document.querySelectorAll('.class-filter:checked'))
    .map(cb => cb.value);
  
  const trainNameFilters = Array.from(document.querySelectorAll('.train-name-filter:checked'))
    .map(cb => cb.value);

  let filtered = trainsData.filter(train => {
    // Filter rute DULU
    const trainFromCity = train.departure.station.toLowerCase();
    const trainToCity = train.arrival.station.toLowerCase();
    const searchFrom = trainState.from.toLowerCase();
    const searchTo = trainState.to.toLowerCase();
    
    if (!trainFromCity.includes(searchFrom) || !trainToCity.includes(searchTo)) {
      return false;
    }

    // Filter harga
    if (train.price > maxPrice) return false;

    // Filter waktu
    if (timeFilters.length > 0) {
      const timeCategory = getTimeCategory(train.departure.time);
      if (!timeFilters.includes(timeCategory)) return false;
    }

    // Filter kelas
    if (classFilters.length > 0) {
      if (!classFilters.includes(train.class.toLowerCase())) return false;
    }

    // Filter nama kereta
    if (trainNameFilters.length > 0) {
      if (!trainNameFilters.includes(train.name.toLowerCase())) return false;
    }

    return true;
  });

  renderTrains(filtered);
}

function setupTrainFilters() {
  // Price range slider
  const priceRange = document.getElementById('trainPriceRange');
  const maxPriceLabel = document.getElementById('trainMaxPrice');

  if (priceRange && maxPriceLabel) {
    priceRange.addEventListener('input', function() {
      maxPriceLabel.textContent = trainFormatPrice(parseInt(this.value));
    });
    
    priceRange.addEventListener('change', applyTrainFilters);
  }

  // Reset button
  const resetBtn = document.getElementById('resetTrainFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      // Reset semua checkbox
      document.querySelectorAll('.time-filter, .class-filter, .train-name-filter').forEach(cb => {
        cb.checked = false;
      });
      
      // Reset price range
      if (priceRange) {
        priceRange.value = 500000;
        if (maxPriceLabel) {
          maxPriceLabel.textContent = 'Rp 500.000';
        }
      }
      
      // Reset pagination dan render ulang
      trainPaginationState.currentPage = 1;
      renderTrains();
    });
  }

  // Filter checkboxes
  document.querySelectorAll('.time-filter, .class-filter, .train-name-filter').forEach(filter => {
    filter.addEventListener('change', applyTrainFilters);
  });

  // Mobile filter toggle
  const showFiltersBtn = document.getElementById('showTrainFilters');
  const filtersAside = document.getElementById('trainFilters');

  if (showFiltersBtn && filtersAside) {
    showFiltersBtn.addEventListener('click', () => {
      filtersAside.classList.toggle('filters-open');
    });

    // Close filter when clicking outside
    document.addEventListener('click', (e) => {
      if (!filtersAside.contains(e.target) && !showFiltersBtn.contains(e.target)) {
        filtersAside.classList.remove('filters-open');
      }
    });
  }
}

// =====================================================
// SORTING
// =====================================================
function setupTrainSorting() {
  const sortSelect = document.getElementById('sortTrains');
  if (!sortSelect) return;

  sortSelect.addEventListener('change', function() {
    const sortType = this.value;
    
    if (!sortType) {
      renderTrains();
      return;
    }
    
    // Filter berdasarkan rute terlebih dahulu
    let sorted = trainsData.filter(train => {
      const trainFromCity = train.departure.station.toLowerCase();
      const trainToCity = train.arrival.station.toLowerCase();
      const searchFrom = trainState.from.toLowerCase();
      const searchTo = trainState.to.toLowerCase();
      
      return trainFromCity.includes(searchFrom) && trainToCity.includes(searchTo);
    });

    switch(sortType) {
      case 'cheapest':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'earliest':
        sorted.sort((a, b) => a.departure.time.localeCompare(b.departure.time));
        break;
      case 'latest':
        sorted.sort((a, b) => b.departure.time.localeCompare(a.departure.time));
        break;
      case 'shortest':
        sorted.sort((a, b) => {
          const durationA = parseInt(a.duration.replace(/\D/g, ''));
          const durationB = parseInt(b.duration.replace(/\D/g, ''));
          return durationA - durationB;
        });
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
    }

    renderTrains(sorted);
  });
}

// =====================================================
// CONTROLS
// =====================================================
function setupTrainControls() {
  const fromInput = document.getElementById('trainFromInput');
  const toInput = document.getElementById('trainToInput');
  const dateInput = document.getElementById('trainDateInput');
  const passengerSelect = document.getElementById('trainPassengerSelect');
  const searchBtn = document.getElementById('trainSearchButton');

  // Set default values jika belum ada
  if (fromInput && !fromInput.value) {
    fromInput.value = `${trainState.from} (GMR)`;
  }
  if (toInput && !toInput.value) {
    toInput.value = `${trainState.to} (LMP)`;
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      if (fromInput) {
        trainState.from = fromInput.value.split('(')[0].trim();
      }
      if (toInput) {
        trainState.to = toInput.value.split('(')[0].trim();
      }
      if (dateInput) {
        trainState.date = dateInput.value;
      }
      if (passengerSelect) {
        trainState.passengers = parseInt(passengerSelect.value, 10) || 1;
      }

      trainPaginationState.currentPage = 1;
      renderTrains();
    });
  }
  
  if (passengerSelect) {
    passengerSelect.addEventListener('change', () => {
      trainState.passengers = parseInt(passengerSelect.value, 10) || 1;
      trainPaginationState.currentPage = 1;
      renderTrains();
    });
  }
}

function setupStationDropdowns() {
  const stations = [
    'Jakarta (GMR)',
    'Yogyakarta (LMP)',
    'Bandung (BD)',
    'Surabaya (SGU)',
    'Semarang (SMG)',
    'Solo (SLO)',
    'Malang (ML)'
  ];
  
  if (!document.getElementById('stationList')) {
    const datalist = document.createElement('datalist');
    datalist.id = 'stationList';
    
    stations.forEach(station => {
      const option = document.createElement('option');
      option.value = station;
      datalist.appendChild(option);
    });
    
    document.body.appendChild(datalist);
  }
}

// =====================================================
// INITIALIZE TRAIN LIST
// =====================================================
function initTrainList() {
  console.log('Initializing train list...');
  getUrlParametersForList();
  setupStationDropdowns();
  setupTrainControls();
  setupTrainFilters();
  setupTrainSorting();
  renderTrains();
  console.log('Train list initialized!');
}

// =====================================================
// TRAIN DETAIL PAGE
// =====================================================
function getTrainFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const trainId = urlParams.get('id');
  
  if (!trainId) {
    alert('Kereta tidak ditemukan. Kembali ke halaman pencarian.');
    window.location.href = 'trains.html';
    return null;
  }
  
  const train = trainsData.find(t => t.id === parseInt(trainId, 10));
  
  if (!train) {
    alert('Data kereta tidak ditemukan.');
    window.location.href = 'trains.html';
    return null;
  }
  
  trainDetailState.train = train;
  
  return train;
}

function initTrainDetail() {
  const train = getTrainFromUrl();
  if (!train) return;
  
  console.log('Train detail initialized for:', train.name);
  // Implementasi detail page lainnya di sini
}

// =====================================================
// INITIALIZE
// =====================================================
window.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname;
  
  console.log('Page loaded:', currentPage);
  
  if (currentPage.includes('trains-detail.html') || currentPage.includes('train-detail.html')) {
    initTrainDetail();
  } else if (currentPage.includes('trains.html')) {
    initTrainList();
  }
});

function initTrainDetail() {
  const train = getTrainFromUrl();
  if (!train) return;
  
  console.log('Train detail initialized for:', train.name);
  
  // ========== UPDATE TAMPILAN HTML ==========
  
  // 1. Update Info Kereta
  const airlineNameEl = document.querySelector('[data-detail-airline-name]');
  const flightNumberEl = document.querySelector('[data-detail-flight-number]');
  const departureCityEl = document.querySelector('[data-detail-departure-city]');
  const departureTimeEl = document.querySelector('[data-detail-departure-time]');
  const departureAirportEl = document.querySelector('[data-detail-departure-airport]');
  const arrivalCityEl = document.querySelector('[data-detail-arrival-city]');
  const arrivalTimeEl = document.querySelector('[data-detail-arrival-time]');
  const arrivalAirportEl = document.querySelector('[data-detail-arrival-airport]');
  const durationEl = document.querySelector('[data-detail-duration]');
  const ratingEl = document.querySelector('[data-detail-rating]');
  
  if (airlineNameEl) airlineNameEl.textContent = train.name;
  if (flightNumberEl) flightNumberEl.textContent = train.trainNumber;
  if (departureCityEl) departureCityEl.textContent = train.departure.station;
  if (departureTimeEl) departureTimeEl.textContent = train.departure.time;
  if (departureAirportEl) departureAirportEl.textContent = `${train.departure.station} (${train.departure.code})`;
  if (arrivalCityEl) arrivalCityEl.textContent = train.arrival.station;
  if (arrivalTimeEl) arrivalTimeEl.textContent = train.arrival.time;
  if (arrivalAirportEl) arrivalAirportEl.textContent = `${train.arrival.station} (${train.arrival.code})`;
  if (durationEl) durationEl.textContent = `Durasi ${train.duration}`;
  if (ratingEl) ratingEl.textContent = `★ ${train.rating} (${train.reviews.toLocaleString('id-ID')} ulasan)`;
  
  // 2. Update Logo Kereta
  const logoEl = document.querySelector('[data-detail-airline-logo]');
  if (logoEl) {
    logoEl.textContent = '🚆';
    logoEl.style.fontSize = '2rem';
  }
  
  // 3. Update Harga untuk setiap kelas
  const urlParams = new URLSearchParams(window.location.search);
  const passengers = parseInt(urlParams.get('penumpang')?.match(/\d+/)?.[0] || '1');
  trainDetailState.passengers = passengers;
  
  trainClasses.forEach(cls => {
    const classCard = document.querySelector(`[data-class-id="${cls.id}"]`);
    if (classCard) {
      const price = Math.round(train.price * cls.priceMultiplier);
      classCard.dataset.classPrice = price;
      
      const priceEl = classCard.querySelector('.class-price');
      if (priceEl) {
        priceEl.textContent = trainFormatPrice(price);
      }
      
      const nameEl = classCard.querySelector('.class-name');
      if (nameEl) {
        nameEl.textContent = cls.name;
      }
      
      const featuresEl = classCard.querySelector('.class-features');
      if (featuresEl) {
        featuresEl.textContent = cls.features;
      }
    }
  });
  
  // 4. Update Summary (Penumpang dan harga awal)
  const summaryPassengersEl = document.querySelector('[data-summary-passengers]');
  if (summaryPassengersEl) {
    summaryPassengersEl.textContent = `${passengers} Dewasa`;
  }
  
  // 5. Set harga default (Ekonomi)
  const defaultPrice = Math.round(train.price * trainClasses[0].priceMultiplier);
  updatePriceSummary(defaultPrice, passengers);
  
  // 6. Setup Event Listener untuk perubahan kelas
  document.querySelectorAll('[data-class-card]').forEach(card => {
    card.addEventListener('click', function() {
      // Hapus class is-selected dari semua card
      document.querySelectorAll('[data-class-card]').forEach(c => {
        c.classList.remove('is-selected');
      });
      
      // Tambahkan is-selected ke card yang diklik
      this.classList.add('is-selected');
      
      // Update summary
      const className = this.dataset.className;
      const classPrice = parseInt(this.dataset.classPrice);
      
      const summaryClassEl = document.querySelector('[data-summary-class]');
      if (summaryClassEl) {
        summaryClassEl.textContent = className;
      }
      
      updatePriceSummary(classPrice, passengers);
    });
  });
}

// Fungsi helper untuk update harga summary
function updatePriceSummary(basePrice, passengers = 1) {
  const tax = 25000;
  const totalPrice = (basePrice * passengers) + tax;
  
  const summaryPriceEl = document.querySelector('[data-summary-price]');
  const summaryTaxEl = document.querySelector('[data-summary-tax]');
  const summaryTotalEl = document.querySelector('[data-summary-total]');
  
  if (summaryPriceEl) {
    summaryPriceEl.textContent = trainFormatPrice(basePrice * passengers);
  }
  
  if (summaryTaxEl) {
    summaryTaxEl.textContent = trainFormatPrice(tax);
  }
  
  if (summaryTotalEl) {
    summaryTotalEl.textContent = trainFormatPrice(totalPrice);
  }
}