// ===============================================================
//                    TOAST NOTIFICATION SYSTEM
// ===============================================================

function getToastContainer() {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
}

function showToast(type = 'info', message = '', duration = 3000) {
  const container = getToastContainer();
  
  const icons = {
    error: '✕',
    success: '✓',
    warning: '⚠',
    info: 'ℹ'
  };

  const titles = {
    error: 'Error',
    success: 'Berhasil',
    warning: 'Perhatian',
    info: 'Informasi'
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || icons.info}</div>
    <div class="toast-content">
      <div class="toast-title">${titles[type] || titles.info}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close">×</button>
    <div class="toast-progress"></div>
  `;

  container.appendChild(toast);

  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => {
    removeToast(toast);
  });

  setTimeout(() => {
    removeToast(toast);
  }, duration);
}

function removeToast(toast) {
  toast.classList.add('toast-exit');
  setTimeout(() => {
    toast.remove();
  }, 300);
}

// Wrapper functions
function showError(message) {
  showToast('error', message);
}

function showSuccess(message) {
  showToast('success', message);
}

function showWarning(message) {
  showToast('warning', message);
}

function showInfo(message) {
  showToast('info', message);
}


// ===============================================================
//                  DATA PROMO, DESTINASI, FITUR
// ===============================================================

const promos = [
  {
    id: 1,
    title: 'Diskon 40% Hotel',
    description: 'Untuk pemesanan hotel pilihan di seluruh Indonesia',
    discount: '40%',
    color: 'linear-gradient(to right, #3b82f6, #1d4ed8)',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Flash Sale Pesawat',
    description: 'Promo spesial tiket pesawat ke destinasi favorit',
    discount: '30%',
    color: 'linear-gradient(to right, #8b5cf6, #7c3aed)',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Spesial Bus Antar Kota',
    description: 'Nikmati perjalanan dengan harga spesial',
    discount: '50%',
    color: 'linear-gradient(to right, #22c55e, #16a34a)',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500&h=300&fit=crop'
  }
];

const popularDestinations = [
  {
    id: 1,
    name: 'Bali',
    hotels: '2,340 Hotel',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
    price: 'Mulai Rp 350.000'
  },
  {
    id: 2,
    name: 'Jakarta',
    hotels: '3,120 Hotel',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=400&h=300&fit=crop',
    price: 'Mulai Rp 280.000'
  },
  {
    id: 3,
    name: 'Yogyakarta',
    hotels: '1,580 Hotel',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop',
    price: 'Mulai Rp 250.000'
  },
  {
    id: 4,
    name: 'Lombok',
    hotels: '890 Hotel',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    price: 'Mulai Rp 320.000'
  }
];

const features = [
  { icon: '🛡️', title: 'Transaksi Aman', description: 'Pembayaran terproteksi dengan sistem keamanan terbaik' },
  { icon: '💸', title: 'Harga Terbaik', description: 'Dapatkan harga terbaik dengan banyak promo menarik' },
  { icon: '⏰', title: 'Support 24/7', description: 'Customer service siap membantu Anda kapan saja' },
  { icon: '📈', title: 'Rewards Points', description: 'Kumpulkan poin setiap transaksi untuk diskon istimewa' }
];

const paymentMethods = ['BCA', 'Mandiri', 'BNI', 'BRI', 'Visa', 'Mastercard', 'GoPay', 'OVO', 'DANA', 'ShopeePay'];


// ===============================================================
//                  HELPER ELEMENT CREATOR
// ===============================================================

function createElement(tag, className, children) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (typeof children === 'string') el.textContent = children;
  else if (Array.isArray(children)) children.forEach((child) => child && el.appendChild(child));
  else if (children instanceof Node) el.appendChild(children);
  return el;
}


// ===============================================================
//                         RENDER PROMOS
// ===============================================================

function renderPromos() {
  const container = document.getElementById('promoList');
  if (!container) return;

  promos.forEach((promo) => {
    const card = createElement('div', 'card');

    const imageWrapper = createElement('div', null);
    imageWrapper.style.position = 'relative';
    imageWrapper.style.height = '12rem';
    imageWrapper.style.overflow = 'hidden';

    const img = document.createElement('img');
    img.src = promo.image;
    img.alt = promo.title;
    img.loading = 'lazy';
    img.style.transition = 'transform 0.4s';

    card.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
    card.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');

    const badge = createElement('div', 'promo-badge', promo.discount);
    badge.style.backgroundImage = promo.color;

    imageWrapper.appendChild(img);
    imageWrapper.appendChild(badge);

    const body = createElement('div', 'card-body', [
      createElement('h3', 'card-title', promo.title),
      createElement('p', 'card-text', promo.description),
      (() => {
        const btn = createElement('button', 'card-link', 'Pesan Sekarang →');
        btn.type = 'button';
        btn.addEventListener('click', () => {
          window.location.href = 'p/promo-detail.html?id=' + promo.id;
        });
        return btn;
      })()
    ]);

    card.appendChild(imageWrapper);
    card.appendChild(body);
    container.appendChild(card);
  });
}


// ===============================================================
//                 RENDER DESTINATIONS / FEATURES / PAYMENT
// ===============================================================

function renderDestinations() {
  const container = document.getElementById('destinationList');
  if (!container) return;

  popularDestinations.forEach((dest) => {
    const card = createElement('div', 'card');
    card.style.cursor = 'pointer';
    
    const wrapper = createElement('div', null);
    wrapper.style.position = 'relative';
    wrapper.style.height = '16rem';
    wrapper.style.overflow = 'hidden';

    const img = document.createElement('img');
    img.src = dest.image;
    img.alt = dest.name;
    img.loading = 'lazy';
    img.style.transition = 'transform 0.4s';

    card.addEventListener('mouseenter', () => img.style.transform = 'scale(1.08)');
    card.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');

    card.addEventListener('click', () => {
      window.location.href = 'p/destinasi-detail.html?id=' + dest.id;
    });

    const overlay = createElement('div', 'dest-overlay');
    const info = createElement('div', 'dest-info', [
      createElement('h3', null, dest.name),
      createElement('p', null, dest.hotels),
      createElement('p', 'dest-price', dest.price)
    ]);

    wrapper.appendChild(img);
    wrapper.appendChild(overlay);
    wrapper.appendChild(info);
    card.appendChild(wrapper);

    container.appendChild(card);
  });
}

function renderFeatures() {
  const container = document.getElementById('featureList');
  if (!container) return;
  features.forEach((feature) =>
    container.appendChild(
      createElement('div', 'feature-item', [
        createElement('div', 'feature-icon', feature.icon),
        createElement('h3', 'feature-title', feature.title),
        createElement('p', 'feature-text', feature.description)
      ])
    )
  );
}

function renderPayments() {
  const container = document.getElementById('paymentList');
  if (!container) return;
  paymentMethods.forEach((m) => container.appendChild(createElement('div', 'payment-chip', m)));
}


// ===============================================================
//                           TABS
// ===============================================================

function setupTabs() {
  const tabButtons = document.querySelectorAll('#searchTabs .tab-button');
  const panels = {
    flight: document.getElementById('tab-flight'),
    hotel: document.getElementById('tab-hotel'),
    train: document.getElementById('tab-train'),
    bus: document.getElementById('tab-bus'),
    car: document.getElementById('tab-car')
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      Object.keys(panels).forEach((k) => {
        if (k === tab) panels[k].classList.remove('hidden');
        else panels[k].classList.add('hidden');
      });
    });
  });
}


// ===============================================================
//          FLIGHT TRIP TYPE (ROUNDTRIP / ONEWAY)
// ===============================================================

function setupFlightTripType() {
  const radios = document.querySelectorAll('input[name="tripType"]');
  const extraField = document.getElementById('flightExtraField');
  const passengerRow = document.getElementById('flightPassengerRow');

  if (!radios.length || !extraField || !passengerRow) return;

  function update() {
    const selected = document.querySelector('input[name="tripType"]:checked');
    const type = selected ? selected.value : 'roundtrip';

    extraField.innerHTML = '';

    if (type === 'roundtrip') {
      extraField.innerHTML = `
        <label>Tanggal Pulang</label>
        <input type="date" id="return" class="input-date">
      `;
      passengerRow.style.display = '';
    } else {
      extraField.innerHTML = `
        <label>Penumpang</label>
        <select id="pax">
          <option>1 Penumpang</option>
          <option>2 Penumpang</option>
          <option>3 Penumpang</option>
          <option>4+ Penumpang</option>
        </select>
      `;
      passengerRow.style.display = 'none';
    }
  }

  radios.forEach((r) => r.addEventListener('change', update));
  update();
}


// ===============================================================
//                VALIDASI & TOAST HELPER
// ===============================================================

function validateFlightForm() {
  const dari = document.getElementById('from')?.value.trim() || '';
  const ke = document.getElementById('to')?.value.trim() || '';
  
  if (!dari) {
    showError('Mohon isi kota asal penerbangan!');
    return false;
  }
  
  if (!ke) {
    showError('Mohon isi kota tujuan penerbangan!');
    return false;
  }
  
  return true;
}

function validateHotelForm() {
  const hotelInput = document.querySelector('#tab-hotel input[type="text"]');
  const kota = hotelInput?.value.trim() || '';
  
  if (!kota) {
    showError('Mohon isi kota atau nama hotel!');
    return false;
  }
  
  return true;
}

function validateTrainForm() {
  const inputs = document.querySelectorAll('#tab-train input[type="text"]');
  const stasiunAsal = inputs[0]?.value.trim() || '';
  const stasiunTujuan = inputs[1]?.value.trim() || '';
  
  if (!stasiunAsal) {
    showError('Mohon isi stasiun asal!');
    return false;
  }
  
  if (!stasiunTujuan) {
    showError('Mohon isi stasiun tujuan!');
    return false;
  }
  
  return true;
}


// ===============================================================
//                     FLIGHT SEARCH BUTTON
// ===============================================================

function setupFlightSearchButton() {
  const searchBtn = document.getElementById('flightSearchButton');
  if (!searchBtn) return;

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!validateFlightForm()) {
      return;
    }
    
    const dari = document.getElementById('from')?.value || '';
    const ke = document.getElementById('to')?.value || '';
    const berangkat = document.getElementById('depart')?.value || '';
    
    const tripType = document.querySelector('input[name="tripType"]:checked')?.value || 'roundtrip';
    
    let pulang = '';
    let pax = '';
    
    if (tripType === 'roundtrip') {
      pulang = document.getElementById('return')?.value || '';
      pax = document.getElementById('pax')?.value || '1 Penumpang';
    } else {
      pax = document.getElementById('pax')?.value || '1 Penumpang';
    }
    
    const params = new URLSearchParams({
      dari: dari,
      ke: ke,
      berangkat: berangkat,
      pulang: pulang,
      pax: pax,
      type: tripType
    });
    
    showSuccess('Mencari penerbangan terbaik untuk Anda...');
    
    setTimeout(() => {
      window.location.href = `p/flights.html?${params.toString()}`;
    }, 800);
  });
}


// ===============================================================
//                     HOTEL SEARCH BUTTON
// ===============================================================

function setupHotelSearchButton() {
  const hotelBtn = document.getElementById('hotelSearchButton');
  if (!hotelBtn) return;

  hotelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!validateHotelForm()) {
      return;
    }
    
    const inputs = document.querySelectorAll('#tab-hotel input');
    const kota = inputs[0]?.value.trim() || '';
    const checkin = inputs[1]?.value || '';
    const checkout = inputs[2]?.value || '';
    
    const select = document.querySelector('#tab-hotel select');
    const tamu = select?.value || '1 Kamar, 2 Tamu';
    
    const params = new URLSearchParams({
      kota: kota,
      checkin: checkin,
      checkout: checkout,
      tamu: tamu
    });
    
    showSuccess('Mencari hotel terbaik untuk Anda...');
    
    setTimeout(() => {
      window.location.href = `p/hotels.html?${params.toString()}`;
    }, 800);
  });
}


// ===============================================================
//                     TRAIN SEARCH BUTTON
// ===============================================================

function setupTrainSearchButton() {
  const trainBtn = document.getElementById('trainSearchButton');
  if (!trainBtn) return;

  trainBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!validateTrainForm()) {
      return;
    }
    
    const inputs = document.querySelectorAll('#tab-train input');
    const stasiunAsal = inputs[0]?.value.trim() || '';
    const stasiunTujuan = inputs[1]?.value.trim() || '';
    const tanggal = inputs[2]?.value || '';
    
    const select = document.querySelector('#tab-train select');
    const penumpang = select?.value || '1 Dewasa';
    
    const params = new URLSearchParams({
      dari: stasiunAsal,
      ke: stasiunTujuan,
      tanggal: tanggal,
      penumpang: penumpang
    });
    
    showSuccess('Mencari kereta api untuk Anda...');
    
    setTimeout(() => {
      window.location.href = `p/trains.html?${params.toString()}`;
    }, 800);
  });
}


// ===============================================================
//                     BUS SEARCH BUTTON
// ===============================================================

function setupBusSearchButton() {
  const busBtn = document.getElementById('busSearchButton');
  if (!busBtn) return;

  busBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const inputs = document.querySelectorAll('#tab-bus input');
    const kotaAsal = inputs[0]?.value.trim() || '';
    const kotaTujuan = inputs[1]?.value.trim() || '';
    const tanggal = inputs[2]?.value || '';
    const select = document.querySelector('#tab-bus select');
    const penumpang = select?.value || '1 Dewasa';
    
    if (!kotaAsal) {
      showError('Mohon isi kota asal!');
      return;
    }
    
    if (!kotaTujuan) {
      showError('Mohon isi kota tujuan!');
      return;
    }
    
    const params = new URLSearchParams({
      dari: kotaAsal,
      ke: kotaTujuan,
      tanggal: tanggal,
      penumpang: penumpang
    });
    
    showSuccess('Mencari bus untuk Anda...');
    
    setTimeout(() => {
      window.location.href = `p/bus.html?${params.toString()}`;
    }, 800);
  });
}


// ===============================================================
//                        HEADER MENU
// ===============================================================

function setupHeaderMenus() {
  const userBtn = document.getElementById('userMenuButton');
  const userMenu = document.getElementById('userMenu');
  const mobileBtn = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (userBtn && userMenu) {
    userBtn.addEventListener('click', () => userMenu.classList.toggle('hidden'));

    document.addEventListener('click', (e) => {
      if (!userMenu.contains(e.target) && !userBtn.contains(e.target)) {
        userMenu.classList.add('hidden');
      }
    });
  }

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    mobileMenu.querySelectorAll('a').forEach((link) =>
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
    );
  }
}


// ===============================================================
//                      INIT SEMUA FUNGSI
// ===============================================================

window.addEventListener('DOMContentLoaded', () => {
  renderPromos();
  renderDestinations();
  renderFeatures();
  renderPayments();

  setupTabs();
  setupFlightTripType();
  setupFlightSearchButton();
  setupHotelSearchButton();
  setupTrainSearchButton();
  setupBusSearchButton();
});


// ===============================================================
//                       FAQ ACCORDION
// ===============================================================

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item h3').forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('faq-active');
    });
  });
});


// ===============================================================
//                  FORCE SETUP MOBILE MENU
// ===============================================================

(function() {
  const mobileBtn = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileBtn && mobileMenu) {
    console.log('Mobile menu found!');
    
    mobileMenu.style.position = 'relative';
    mobileMenu.style.zIndex = '9999';
    mobileMenu.style.backgroundColor = '#fff';
    mobileMenu.style.width = '100%';
    
    mobileBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Button clicked!');
      mobileMenu.classList.toggle('hidden');
      
      if (mobileMenu.classList.contains('hidden')) {
        mobileBtn.textContent = '☰';
      } else {
        mobileBtn.textContent = '✕';
      }
    });

    const mobileLinks = mobileMenu.querySelectorAll('a:not(.dropdown-content a)');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileBtn.textContent = '☰';
      });
    });

    const mobileDropdownBtns = mobileMenu.querySelectorAll('.dropdown-btn');
    mobileDropdownBtns.forEach((btn) => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Dropdown clicked!');
        
        this.classList.toggle('active');
        
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
          if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
          } else {
            dropdownContent.style.display = 'block';
          }
        }
      });
    });

    const dropdownLinks = mobileMenu.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileBtn.textContent = '☰';
      });
    });
    
  } else {
    console.log('Mobile menu NOT found!');
  }
})();
