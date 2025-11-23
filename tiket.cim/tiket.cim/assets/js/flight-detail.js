/* ============================================================
   FLIGHT DETAIL PAGE - FIXED VERSION
============================================================== */

'use strict';

/* ============================================================
   HELPER FUNCTIONS
============================================================== */
function formatPrice(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    airline: params.get('airline') || 'Garuda Indonesia',
    flightNumber: params.get('flightNumber') || 'GA-150',
    rating: params.get('rating') || '4.5',
    reviews: params.get('reviews') || '2340',
    departureCity: params.get('departureCity') || 'Jakarta',
    departureAirport: params.get('departureAirport') || 'CGK',
    departureTerminal: params.get('departureTerminal') || 'Terminal 3',
    departureTime: params.get('departureTime') || '08:00',
    departureDate: params.get('departureDate') || 'Rabu, 18 Nov 2025',
    arrivalCity: params.get('arrivalCity') || 'Bali',
    arrivalAirport: params.get('arrivalAirport') || 'DPS',
    arrivalTerminal: params.get('arrivalTerminal') || 'Terminal Domestik',
    arrivalTime: params.get('arrivalTime') || '10:30',
    arrivalDate: params.get('arrivalDate') || 'Rabu, 18 Nov 2025',
    duration: params.get('duration') || '2h 30m',
    className: params.get('className') || 'Ekonomi',
    price: parseInt(params.get('price')) || 1250000,
    route: params.get('route') || 'Jakarta → Bali',
    date: params.get('date') || 'Rabu, 18 Nov 2025',
    passengers: params.get('passengers') || '1',
  };
}

/* ============================================================
   CLASS TYPES CONFIGURATION
============================================================== */
const classTypes = [
  {
    id: 'economy',
    name: 'Ekonomi',
    features: 'Bagasi 20kg • Cabin Bag 7kg • Meal • Entertainment',
    multiplier: 1.0
  },
  {
    id: 'business',
    name: 'Bisnis',
    features: 'Bagasi 30kg • Lounge • Priority Boarding • Full Meal',
    multiplier: 2.8
  },
  {
    id: 'first',
    name: 'First Class',
    features: 'Bagasi 40kg • Premium Lounge • Private Suite • Gourmet Dining',
    multiplier: 5.2
  }
];

/* ============================================================
   STATE
============================================================== */
const flightDetailState = {
  basePrice: 1250000,
  selectedClass: 'economy',
  passengers: 1,
  taxAmount: 150000
};

/* ============================================================
   INITIALIZE FLIGHT DETAIL PAGE
============================================================== */
function initFlightDetailPage() {
  const page = document.body.getAttribute('data-page');
  if (page !== 'flight-detail') return;

  const params = getQueryParams();
  
  // Set base price from URL
  flightDetailState.basePrice = params.price;
  flightDetailState.passengers = parseInt(params.passengers) || 1;
  
  // Populate flight info
  populateFlightInfo(params);
  
  // Generate class options with correct prices
  generateClassOptions();
  
  // Setup class selection handlers
  setupClassSelection();
  
  // Initial summary update
  updateSummary();
}

/* ============================================================
   POPULATE FLIGHT INFO
============================================================== */
function populateFlightInfo(params) {
  // Airline info
  const logoEl = document.querySelector('[data-detail-airline-logo]');
  if (logoEl) logoEl.textContent = params.airline.substring(0, 2).toUpperCase();
  
  const nameEl = document.querySelector('[data-detail-airline-name]');
  if (nameEl) nameEl.textContent = params.airline;
  
  const numberEl = document.querySelector('[data-detail-flight-number]');
  if (numberEl) numberEl.textContent = params.flightNumber;
  
  const ratingEl = document.querySelector('[data-detail-rating]');
  if (ratingEl) {
    const reviews = parseInt(params.reviews).toLocaleString('id-ID');
    ratingEl.textContent = `★ ${params.rating} (${reviews} ulasan)`;
  }
  
  // Departure info
  const depTimeEl = document.querySelector('[data-detail-departure-time]');
  if (depTimeEl) depTimeEl.textContent = params.departureTime;
  
  const depCityEl = document.querySelector('[data-detail-departure-city]');
  if (depCityEl) depCityEl.textContent = params.departureCity;
  
  const depAirportEl = document.querySelector('[data-detail-departure-airport]');
  if (depAirportEl) depAirportEl.textContent = `${params.departureAirport} · ${params.departureTerminal}`;
  
  // Arrival info
  const arrTimeEl = document.querySelector('[data-detail-arrival-time]');
  if (arrTimeEl) arrTimeEl.textContent = params.arrivalTime;
  
  const arrCityEl = document.querySelector('[data-detail-arrival-city]');
  if (arrCityEl) arrCityEl.textContent = params.arrivalCity;
  
  const arrAirportEl = document.querySelector('[data-detail-arrival-airport]');
  if (arrAirportEl) arrAirportEl.textContent = `${params.arrivalAirport} · ${params.arrivalTerminal}`;
  
  // Duration
  const durationEl = document.querySelector('[data-detail-duration]');
  if (durationEl) durationEl.textContent = `Durasi ${params.duration}`;
}

/* ============================================================
   GENERATE CLASS OPTIONS
============================================================== */
function generateClassOptions() {
  const classListEl = document.querySelector('[data-class-list]');
  if (!classListEl) return;
  
  classListEl.innerHTML = '';
  
  classTypes.forEach((classType, index) => {
    const price = Math.round(flightDetailState.basePrice * classType.multiplier);
    const isSelected = index === 0; // First option selected by default
    
    const label = document.createElement('label');
    label.className = `class-card ${isSelected ? 'is-selected' : ''}`;
    label.setAttribute('data-class-card', '');
    label.setAttribute('data-class-id', classType.id);
    label.setAttribute('data-class-name', classType.name);
    label.setAttribute('data-class-price', price);
    
    label.innerHTML = `
      <input type="radio" name="flightClass" value="${classType.id}" ${isSelected ? 'checked' : ''} />
      <div class="class-card-body">
        <div>
          <p class="class-name">${classType.name}</p>
          <p class="class-features">${classType.features}</p>
        </div>
        <p class="class-price">${formatPrice(price)}</p>
      </div>
    `;
    
    classListEl.appendChild(label);
  });
  
  // Set initial selected class
  if (classTypes.length > 0) {
    flightDetailState.selectedClass = classTypes[0].id;
  }
}

/* ============================================================
   SETUP CLASS SELECTION
============================================================== */
function setupClassSelection() {
  const classCards = document.querySelectorAll('[data-class-card]');
  
  classCards.forEach(card => {
    card.addEventListener('click', function() {
      // Remove selection from all cards
      classCards.forEach(c => c.classList.remove('is-selected'));
      
      // Add selection to clicked card
      this.classList.add('is-selected');
      
      // Update selected class in state
      flightDetailState.selectedClass = this.getAttribute('data-class-id');
      
      // Update the radio button
      const radio = this.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      
      // Update summary
      updateSummary();
    });
  });
}

/* ============================================================
   UPDATE SUMMARY
============================================================== */
function updateSummary() {
  const selectedCard = document.querySelector('[data-class-card].is-selected');
  if (!selectedCard) return;
  
  const className = selectedCard.getAttribute('data-class-name');
  const classPrice = parseInt(selectedCard.getAttribute('data-class-price'));
  
  // Update summary display
  const summaryClassEl = document.querySelector('[data-summary-class]');
  if (summaryClassEl) summaryClassEl.textContent = className;
  
  const summaryPassengersEl = document.querySelector('[data-summary-passengers]');
  if (summaryPassengersEl) {
    summaryPassengersEl.textContent = `${flightDetailState.passengers} Dewasa`;
  }
  
  // Calculate totals
  const ticketPrice = classPrice * flightDetailState.passengers;
  const taxAmount = flightDetailState.taxAmount;
  const totalPrice = ticketPrice + taxAmount;
  
  // Update price display
  const summaryPriceEl = document.querySelector('[data-summary-price]');
  if (summaryPriceEl) summaryPriceEl.textContent = formatPrice(ticketPrice);
  
  const summaryTaxEl = document.querySelector('[data-summary-tax]');
  if (summaryTaxEl) summaryTaxEl.textContent = formatPrice(taxAmount);
  
  const summaryTotalEl = document.querySelector('[data-summary-total]');
  if (summaryTotalEl) summaryTotalEl.textContent = formatPrice(totalPrice);
}

/* ============================================================
   RUN ON PAGE LOAD
============================================================== */
document.addEventListener('DOMContentLoaded', initFlightDetailPage);