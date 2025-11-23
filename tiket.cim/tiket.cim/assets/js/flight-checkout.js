const flightsDataCheckout = [
  {
    id: 1,
    airline: 'Garuda Indonesia',
    departure: { time: '08:00', airport: 'CGK', city: 'Jakarta' },
    arrival: { time: '10:30', airport: 'DPS', city: 'Bali' },
    duration: '2h 30m',
    price: 1250000,
    class: 'Ekonomi',
  },
  {
    id: 2,
    airline: 'Lion Air',
    departure: { time: '09:30', airport: 'CGK', city: 'Jakarta' },
    arrival: { time: '12:00', airport: 'DPS', city: 'Bali' },
    duration: '2h 30m',
    price: 950000,
    class: 'Ekonomi',
  },
  {
    id: 3,
    airline: 'AirAsia',
    departure: { time: '11:00', airport: 'CGK', city: 'Jakarta' },
    arrival: { time: '13:30', airport: 'DPS', city: 'Bali' },
    duration: '2h 30m',
    price: 850000,
    class: 'Ekonomi',
  },
];

function fcFormatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

function fcGetFlight() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id') || '1', 10);
  return flightsDataCheckout.find((f) => f.id === id) || flightsDataCheckout[0];
}

function fcRenderSummary() {
  const flight = fcGetFlight();
  const summary = document.getElementById('checkoutSummary');
  const totalEl = document.getElementById('checkoutTotal');
  if (!summary || !totalEl) return;

  const serviceFee = 25000;
  const total = flight.price + serviceFee;

  summary.innerHTML = `
    <p style="margin-bottom: 0.35rem;"><strong>${flight.airline}</strong> • ${flight.class}</p>
    <p style="margin-bottom: 0.25rem;">${flight.departure.city} (${flight.departure.airport}) → ${flight.arrival.city} (${flight.arrival.airport})</p>
    <p style="margin-bottom: 0.35rem; font-size:0.85rem; color:#6b7280;">${flight.departure.time} - ${flight.arrival.time} • ${flight.duration}</p>
    <div style="margin-top:0.5rem; border-top:1px solid #e5e7eb; padding-top:0.5rem;">
      <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
        <span>Tiket Dewasa (1x)</span><span>${fcFormatPrice(flight.price)}</span>
      </div>
      <div style="display:flex; justify-content:space-between;">
        <span>Biaya Layanan</span><span>${fcFormatPrice(serviceFee)}</span>
      </div>
    </div>
  `;

  totalEl.textContent = fcFormatPrice(total);
}

function fcSetupPayButton() {
  const btn = document.getElementById('payButton');
  btn?.addEventListener('click', () => {
    alert('Checkout berhasil (dummy). Di versi produksi dihubungkan ke payment gateway.');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  fcRenderSummary();
  fcSetupPayButton();
});
