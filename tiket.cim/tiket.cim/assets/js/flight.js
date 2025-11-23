'use strict';

function formatPriceIDR(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
}

function parseTimeToMinutes(time) {
  if (!time) return 0;
  const [hour, minute] = time.split(':').map(Number);
  return hour * 60 + (minute || 0);
}

function parseDurationToMinutes(durationStr) {
  const match = durationStr.match(/(\d+)h\s*(\d+)?m?/);
  if (!match) return 0;
  const hours = parseInt(match[1], 10) || 0;
  const minutes = parseInt(match[2], 10) || 0;
  return hours * 60 + minutes;
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    dari: params.get('dari') || params.get('from') || '',
    ke: params.get('ke') || params.get('to') || '',
    berangkat: params.get('berangkat') || params.get('depart') || '',
    pulang: params.get('pulang') || params.get('return') || params.get('returnDate') || '',
    pax: params.get('pax') || params.get('passengers') || params.get('adults') || '1',
    type: params.get('type') || 'roundtrip',
    from: params.get('from') || '',
    to: params.get('to') || '',
    depart: params.get('depart') || '',
    returnDate: params.get('return') || '',
    adults: params.get('adults') || '1',
    children: params.get('children') || '0',
    infants: params.get('infants') || '0',
    cabin: params.get('cabin') || 'Economy',
    airline: params.get('airline') || '',
    flightNumber: params.get('flightNumber') || '',
    rating: params.get('rating') || '',
    reviews: params.get('reviews') || '',
    departureCity: params.get('departureCity') || '',
    departureAirport: params.get('departureAirport') || '',
    departureTerminal: params.get('departureTerminal') || '',
    departureTime: params.get('departureTime') || '',
    departureDate: params.get('departureDate') || '',
    arrivalCity: params.get('arrivalCity') || '',
    arrivalAirport: params.get('arrivalAirport') || '',
    arrivalTerminal: params.get('arrivalTerminal') || '',
    arrivalTime: params.get('arrivalTime') || '',
    arrivalDate: params.get('arrivalDate') || '',
    duration: params.get('duration') || '',
    className: params.get('className') || '',
    price: params.get('price') || '',
    route: params.get('route') || '',
    date: params.get('date') || '',
    passengers: params.get('passengers') || '1',
  };
}

// Extended flight data with more routes
// Extended flight data with more routes
function getStaticFlightsData() {
  return [
    // Jakarta ke Bali
    {
      id: 1,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-150',
      departure: {
        time: '08:00',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Rabu, 18 Nov 2025',
      },
      arrival: {
        time: '10:30',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Domestik',
        date: 'Rabu, 18 Nov 2025',
      },
      duration: '2h 30m',
      price: 1250000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.5,
      reviews: 2340,
    },
    {
      id: 2,
      airline: 'Lion Air',
      logoText: 'JT',
      flightNumber: 'JT-802',
      departure: {
        time: '09:30',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 1C',
        date: 'Rabu, 18 Nov 2025',
      },
      arrival: {
        time: '12:00',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Domestik',
        date: 'Rabu, 18 Nov 2025',
      },
      duration: '2h 30m',
      price: 950000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.2,
      reviews: 1580,
    },
    {
      id: 3,
      airline: 'AirAsia',
      logoText: 'AK',
      flightNumber: 'AK-375',
      departure: {
        time: '11:00',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 2F',
        date: 'Rabu, 18 Nov 2025',
      },
      arrival: {
        time: '13:30',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Internasional',
        date: 'Rabu, 18 Nov 2025',
      },
      duration: '2h 30m',
      price: 850000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.0,
      reviews: 980,
    },
    {
      id: 4,
      airline: 'Batik Air',
      logoText: 'ID',
      flightNumber: 'ID-6884',
      departure: {
        time: '13:30',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 2E',
        date: 'Rabu, 18 Nov 2025',
      },
      arrival: {
        time: '16:00',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Domestik',
        date: 'Rabu, 18 Nov 2025',
      },
      duration: '2h 30m',
      price: 1100000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.3,
      reviews: 1275,
    },
    {
      id: 5,
      airline: 'Citilink',
      logoText: 'QG',
      flightNumber: 'QG-680',
      departure: {
        time: '15:00',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Rabu, 18 Nov 2025',
      },
      arrival: {
        time: '17:30',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Domestik',
        date: 'Rabu, 18 Nov 2025',
      },
      duration: '2h 30m',
      price: 920000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.1,
      reviews: 860,
    },
    
    // Surabaya ke Bali
    {
      id: 6,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-330',
      departure: {
        time: '07:00',
        airport: 'SUB',
        city: 'Surabaya',
        terminal: 'Terminal 1',
        date: 'Rabu, 18 Nov 2025',
      },
      arrival: {
        time: '08:15',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Domestik',
        date: 'Rabu, 18 Nov 2025',
      },
      duration: '1h 15m',
      price: 750000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.6,
      reviews: 1850,
    },
    {
      id: 7,
      airline: 'Citilink',
      logoText: 'QG',
      flightNumber: 'QG-520',
      departure: {
        time: '09:30',
        airport: 'SUB',
        city: 'Surabaya',
        terminal: 'Terminal 1',
        date: 'Rabu, 18 Nov 2025',
      },
      arrival: {
        time: '10:45',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Domestik',
        date: 'Rabu, 18 Nov 2025',
      },
      duration: '1h 15m',
      price: 580000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.3,
      reviews: 1420,
    },
    {
      id: 8,
      airline: 'Lion Air',
      logoText: 'JT',
      flightNumber: 'JT-950',
      departure: {
        time: '14:00',
        airport: 'SUB',
        city: 'Surabaya',
        terminal: 'Terminal 1',
        date: 'Rabu, 18 Nov 2025',
      },
      arrival: {
        time: '15:15',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Domestik',
        date: 'Rabu, 18 Nov 2025',
      },
      duration: '1h 15m',
      price: 520000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.1,
      reviews: 980,
    },
    
    // Jakarta ke Surabaya
    {
      id: 9,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-310',
      departure: {
        time: '06:00',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Rabu, 18 Nov 2025',
      },
      arrival: {
        time: '07:30',
        airport: 'SUB',
        city: 'Surabaya',
        terminal: 'Terminal 1',
        date: 'Rabu, 18 Nov 2025',
      },
      duration: '1h 30m',
      price: 980000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.5,
      reviews: 2100,
    },
    {
      id: 10,
      airline: 'Lion Air',
      logoText: 'JT',
      flightNumber: 'JT-570',
      departure: {
        time: '10:00',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 1C',
        date: 'Rabu, 18 Nov 2025',
      },
      arrival: {
        time: '11:30',
        airport: 'SUB',
        city: 'Surabaya',
        terminal: 'Terminal 1',
        date: 'Rabu, 18 Nov 2025',
      },
      duration: '1h 30m',
      price: 720000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.2,
      reviews: 1650,
    },

    // Jakarta ke Medan
    {
      id: 11,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-125',
      departure: {
        time: '07:15',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Kamis, 19 Nov 2025',
      },
      arrival: {
        time: '09:30',
        airport: 'KNO',
        city: 'Medan',
        terminal: 'Terminal Internasional',
        date: 'Kamis, 19 Nov 2025',
      },
      duration: '2h 15m',
      price: 1450000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.6,
      reviews: 1890,
    },
    {
      id: 12,
      airline: 'Lion Air',
      logoText: 'JT',
      flightNumber: 'JT-152',
      departure: {
        time: '10:45',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 1C',
        date: 'Kamis, 19 Nov 2025',
      },
      arrival: {
        time: '13:00',
        airport: 'KNO',
        city: 'Medan',
        terminal: 'Terminal Internasional',
        date: 'Kamis, 19 Nov 2025',
      },
      duration: '2h 15m',
      price: 1180000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.3,
      reviews: 1420,
    },
    {
      id: 13,
      airline: 'Citilink',
      logoText: 'QG',
      flightNumber: 'QG-195',
      departure: {
        time: '15:30',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Kamis, 19 Nov 2025',
      },
      arrival: {
        time: '17:45',
        airport: 'KNO',
        city: 'Medan',
        terminal: 'Terminal Internasional',
        date: 'Kamis, 19 Nov 2025',
      },
      duration: '2h 15m',
      price: 1050000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.2,
      reviews: 980,
    },

    // Jakarta ke Makassar
    {
      id: 14,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-610',
      departure: {
        time: '08:30',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Jumat, 20 Nov 2025',
      },
      arrival: {
        time: '12:00',
        airport: 'UPG',
        city: 'Makassar',
        terminal: 'Terminal Domestik',
        date: 'Jumat, 20 Nov 2025',
      },
      duration: '2h 30m',
      price: 1680000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.7,
      reviews: 2150,
    },
    {
      id: 15,
      airline: 'Batik Air',
      logoText: 'ID',
      flightNumber: 'ID-6520',
      departure: {
        time: '11:15',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 2E',
        date: 'Jumat, 20 Nov 2025',
      },
      arrival: {
        time: '14:45',
        airport: 'UPG',
        city: 'Makassar',
        terminal: 'Terminal Domestik',
        date: 'Jumat, 20 Nov 2025',
      },
      duration: '2h 30m',
      price: 1420000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.4,
      reviews: 1680,
    },
    {
      id: 16,
      airline: 'Lion Air',
      logoText: 'JT',
      flightNumber: 'JT-780',
      departure: {
        time: '16:00',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 1C',
        date: 'Jumat, 20 Nov 2025',
      },
      arrival: {
        time: '19:30',
        airport: 'UPG',
        city: 'Makassar',
        terminal: 'Terminal Domestik',
        date: 'Jumat, 20 Nov 2025',
      },
      duration: '2h 30m',
      price: 1250000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.1,
      reviews: 1340,
    },

    // Jakarta ke Balikpapan
    {
      id: 17,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-570',
      departure: {
        time: '09:00',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Sabtu, 21 Nov 2025',
      },
      arrival: {
        time: '11:45',
        airport: 'BPN',
        city: 'Balikpapan',
        terminal: 'Terminal Domestik',
        date: 'Sabtu, 21 Nov 2025',
      },
      duration: '2h 45m',
      price: 1850000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.5,
      reviews: 1560,
    },
    {
      id: 18,
      airline: 'Citilink',
      logoText: 'QG',
      flightNumber: 'QG-875',
      departure: {
        time: '13:30',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Sabtu, 21 Nov 2025',
      },
      arrival: {
        time: '16:15',
        airport: 'BPN',
        city: 'Balikpapan',
        terminal: 'Terminal Domestik',
        date: 'Sabtu, 21 Nov 2025',
      },
      duration: '2h 45m',
      price: 1520000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.3,
      reviews: 1180,
    },

    // Jakarta ke Palembang
    {
      id: 19,
      airline: 'Sriwijaya Air',
      logoText: 'SJ',
      flightNumber: 'SJ-230',
      departure: {
        time: '07:30',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 2',
        date: 'Minggu, 22 Nov 2025',
      },
      arrival: {
        time: '08:30',
        airport: 'PLM',
        city: 'Palembang',
        terminal: 'Terminal Domestik',
        date: 'Minggu, 22 Nov 2025',
      },
      duration: '1h 00m',
      price: 650000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.4,
      reviews: 1520,
    },
    {
      id: 20,
      airline: 'Lion Air',
      logoText: 'JT',
      flightNumber: 'JT-320',
      departure: {
        time: '11:00',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 1C',
        date: 'Minggu, 22 Nov 2025',
      },
      arrival: {
        time: '12:00',
        airport: 'PLM',
        city: 'Palembang',
        terminal: 'Terminal Domestik',
        date: 'Minggu, 22 Nov 2025',
      },
      duration: '1h 00m',
      price: 580000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.2,
      reviews: 1340,
    },
    {
      id: 21,
      airline: 'Citilink',
      logoText: 'QG',
      flightNumber: 'QG-410',
      departure: {
        time: '15:45',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Minggu, 22 Nov 2025',
      },
      arrival: {
        time: '16:45',
        airport: 'PLM',
        city: 'Palembang',
        terminal: 'Terminal Domestik',
        date: 'Minggu, 22 Nov 2025',
      },
      duration: '1h 00m',
      price: 620000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.3,
      reviews: 890,
    },

    // Jakarta ke Pontianak
    {
      id: 22,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-440',
      departure: {
        time: '08:15',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Senin, 23 Nov 2025',
      },
      arrival: {
        time: '09:45',
        airport: 'PNK',
        city: 'Pontianak',
        terminal: 'Terminal Domestik',
        date: 'Senin, 23 Nov 2025',
      },
      duration: '1h 30m',
      price: 1180000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.5,
      reviews: 1420,
    },
    {
      id: 23,
      airline: 'Lion Air',
      logoText: 'JT',
      flightNumber: 'JT-664',
      departure: {
        time: '12:30',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 1C',
        date: 'Senin, 23 Nov 2025',
      },
      arrival: {
        time: '14:00',
        airport: 'PNK',
        city: 'Pontianak',
        terminal: 'Terminal Domestik',
        date: 'Senin, 23 Nov 2025',
      },
      duration: '1h 30m',
      price: 920000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.1,
      reviews: 980,
    },

    // Jakarta ke Manado
    {
      id: 24,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-675',
      departure: {
        time: '10:00',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 3',
        date: 'Selasa, 24 Nov 2025',
      },
      arrival: {
        time: '13:45',
        airport: 'MDC',
        city: 'Manado',
        terminal: 'Terminal Domestik',
        date: 'Selasa, 24 Nov 2025',
      },
      duration: '3h 45m',
      price: 2150000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.6,
      reviews: 1680,
    },
    {
      id: 25,
      airline: 'Lion Air',
      logoText: 'JT',
      flightNumber: 'JT-890',
      departure: {
        time: '14:30',
        airport: 'CGK',
        city: 'Jakarta',
        terminal: 'Terminal 1C',
        date: 'Selasa, 24 Nov 2025',
      },
      arrival: {
        time: '18:15',
        airport: 'MDC',
        city: 'Manado',
        terminal: 'Terminal Domestik',
        date: 'Selasa, 24 Nov 2025',
      },
      duration: '3h 45m',
      price: 1850000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.3,
      reviews: 1420,
    },

    // Surabaya ke Lombok
    {
      id: 26,
      airline: 'Citilink',
      logoText: 'QG',
      flightNumber: 'QG-715',
      departure: {
        time: '08:45',
        airport: 'SUB',
        city: 'Surabaya',
        terminal: 'Terminal 1',
        date: 'Rabu, 25 Nov 2025',
      },
      arrival: {
        time: '10:00',
        airport: 'LOP',
        city: 'Lombok',
        terminal: 'Terminal Internasional',
        date: 'Rabu, 25 Nov 2025',
      },
      duration: '1h 15m',
      price: 680000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.4,
      reviews: 1280,
    },
    {
      id: 27,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-385',
      departure: {
        time: '13:15',
        airport: 'SUB',
        city: 'Surabaya',
        terminal: 'Terminal 1',
        date: 'Rabu, 25 Nov 2025',
      },
      arrival: {
        time: '14:30',
        airport: 'LOP',
        city: 'Lombok',
        terminal: 'Terminal Internasional',
        date: 'Rabu, 25 Nov 2025',
      },
      duration: '1h 15m',
      price: 820000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.5,
      reviews: 1560,
    },

    // Bali ke Labuan Bajo
    {
      id: 28,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-725',
      departure: {
        time: '09:30',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Domestik',
        date: 'Kamis, 26 Nov 2025',
      },
      arrival: {
        time: '10:45',
        airport: 'LBJ',
        city: 'Labuan Bajo',
        terminal: 'Terminal Domestik',
        date: 'Kamis, 26 Nov 2025',
      },
      duration: '1h 15m',
      price: 1280000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.7,
      reviews: 980,
    },
    {
      id: 29,
      airline: 'Batik Air',
      logoText: 'ID',
      flightNumber: 'ID-7420',
      departure: {
        time: '14:00',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Domestik',
        date: 'Kamis, 26 Nov 2025',
      },
      arrival: {
        time: '15:15',
        airport: 'LBJ',
        city: 'Labuan Bajo',
        terminal: 'Terminal Domestik',
        date: 'Kamis, 26 Nov 2025',
      },
      duration: '1h 15m',
      price: 1150000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.4,
      reviews: 850,
    },

    // Bandung ke Bali
    {
      id: 30,
      airline: 'Garuda Indonesia',
      logoText: 'GA',
      flightNumber: 'GA-295',
      departure: {
        time: '10:15',
        airport: 'BDO',
        city: 'Bandung',
        terminal: 'Terminal Domestik',
        date: 'Jumat, 27 Nov 2025',
      },
      arrival: {
        time: '12:45',
        airport: 'DPS',
        city: 'Bali',
        terminal: 'Terminal Domestik',
        date: 'Jumat, 27 Nov 2025',
      },
      duration: '2h 30m',
      price: 1380000,
      className: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.6,
      reviews: 1240,
    },
  ];
}

// Normalize city name for comparison
function normalizeCity(cityString) {
  if (!cityString) return '';
  
  // Extract city name before parenthesis if present (e.g., "Jakarta (CGK)" -> "Jakarta")
  const cityName = cityString.split('(')[0].trim().toLowerCase();
  
  // Remove common prefixes
  return cityName.replace(/^kota\s+/i, '').trim();
}

// Filter flights based on search criteria
function filterFlightsByRoute(flights, searchParams) {
  const fromCity = normalizeCity(searchParams.dari || searchParams.from);
  const toCity = normalizeCity(searchParams.ke || searchParams.to);
  
  if (!fromCity || !toCity) {
    return flights; // Return all if no search criteria
  }
  
  return flights.filter((flight) => {
    const departureCity = normalizeCity(flight.departure.city);
    const arrivalCity = normalizeCity(flight.arrival.city);
    
    return departureCity === fromCity && arrivalCity === toCity;
  });
}

function filterFlights(flights, state) {
  return flights.filter((flight) => {
    if (flight.price > state.priceMax) return false;

    if (state.selectedAirlines.length > 0 && !state.selectedAirlines.includes(flight.airline)) {
      return false;
    }

    if (state.selectedTimeSlots.length > 0) {
      const minutes = parseTimeToMinutes(flight.departure.time);
      const inSlot = state.selectedTimeSlots.some((slot) => {
        switch (slot) {
          case 'morning':
            return minutes >= 0 && minutes < 6 * 60;
          case 'afternoon':
            return minutes >= 6 * 60 && minutes < 12 * 60;
          case 'evening':
            return minutes >= 12 * 60 && minutes < 18 * 60;
          case 'night':
            return minutes >= 18 * 60 && minutes < 24 * 60;
          default:
            return true;
        }
      });
      if (!inSlot) return false;
    }

    return true;
  });
}

function sortFlights(flights, sortBy) {
  const list = flights.slice();
  list.sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    }
    if (sortBy === 'departure') {
      return parseTimeToMinutes(a.departure.time) - parseTimeToMinutes(b.departure.time);
    }
    if (sortBy === 'arrival') {
      return parseTimeToMinutes(a.arrival.time) - parseTimeToMinutes(b.arrival.time);
    }
    if (sortBy === 'duration') {
      return parseDurationToMinutes(a.duration) - parseDurationToMinutes(b.duration);
    }
    return 0;
  });
  return list;
}

function renderFlights(list, visibleCount, container, searchValues = {}) {
  container.innerHTML = '';

  if (list.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.style.cssText = 'text-align: center; padding: 3rem 1rem; color: #6b7280;';
    noResults.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem;">✈️</div>
      <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: #374151;">Tidak Ada Penerbangan Ditemukan</h3>
      <p>Maaf, tidak ada penerbangan yang sesuai dengan pencarian Anda.</p>
      <p style="margin-top: 1rem;">Coba ubah filter atau kriteria pencarian Anda.</p>
    `;
    container.appendChild(noResults);
    return;
  }

  const slice = list.slice(0, visibleCount);

  slice.forEach((flight) => {
    const card = document.createElement('article');
    card.className = 'flight-card';

    const main = document.createElement('div');
    main.className = 'flight-card-main';

    const airlineCol = document.createElement('div');
    const logo = document.createElement('div');
    logo.style.width = '80px';
    logo.style.height = '40px';
    logo.style.borderRadius = '0.5rem';
    logo.style.backgroundColor = '#f3f4f6';
    logo.style.display = 'flex';
    logo.style.alignItems = 'center';
    logo.style.justifyContent = 'center';
    logo.style.fontSize = '0.8rem';
    logo.textContent = flight.logoText;

    const airlineName = document.createElement('div');
    airlineName.className = 'flight-airline';
    airlineName.textContent = flight.airline;

    const rating = document.createElement('div');
    rating.className = 'flight-rating';
    rating.textContent = '★ ' + flight.rating.toFixed(1);

    airlineCol.appendChild(logo);
    airlineCol.appendChild(airlineName);
    airlineCol.appendChild(rating);

    const timesCol = document.createElement('div');
    timesCol.className = 'flight-times';

    const depBlock = document.createElement('div');
    depBlock.className = 'flight-time-block';
    depBlock.innerHTML =
      '<div class="flight-time-time">' +
      flight.departure.time +
      '</div>' +
      '<div class="flight-time-airport">' +
      flight.departure.airport +
      '</div>' +
      '<div class="flight-time-city">' +
      flight.departure.city +
      '</div>';

    const pathBlock = document.createElement('div');
    pathBlock.className = 'flight-path';
    pathBlock.innerHTML =
      '<div class="flight-path-line"></div>' +
      '<div>' +
      flight.duration +
      '</div>' +
      '<div class="flight-path-stops">' +
      flight.stops +
      '</div>';

    const arrBlock = document.createElement('div');
    arrBlock.className = 'flight-time-block';
    arrBlock.innerHTML =
      '<div class="flight-time-time">' +
      flight.arrival.time +
      '</div>' +
      '<div class="flight-time-airport">' +
      flight.arrival.airport +
      '</div>' +
      '<div class="flight-time-city">' +
      flight.arrival.city +
      '</div>';

    timesCol.appendChild(depBlock);
    timesCol.appendChild(pathBlock);
    timesCol.appendChild(arrBlock);

    const priceCol = document.createElement('div');
    priceCol.className = 'flight-price-block';
    const classEl = document.createElement('div');
    classEl.className = 'flight-class';
    classEl.textContent = flight.className;
    const priceEl = document.createElement('div');
    priceEl.className = 'flight-price';
    priceEl.textContent = formatPriceIDR(flight.price);
    const noteEl = document.createElement('div');
    noteEl.className = 'flight-price-note';
    noteEl.textContent = 'per orang';
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary btn-small';
    btn.textContent = 'Pilih';
    btn.addEventListener('click', () => {
      const params = new URLSearchParams({
        airline: flight.airline,
        flightNumber: flight.flightNumber || `FL-${flight.id}`,
        departureCity: flight.departure.city,
        departureAirport: flight.departure.airport,
        departureTerminal: flight.departure.terminal || '',
        departureTime: flight.departure.time,
        departureDate: flight.departure.date || '',
        arrivalCity: flight.arrival.city,
        arrivalAirport: flight.arrival.airport,
        arrivalTerminal: flight.arrival.terminal || '',
        arrivalTime: flight.arrival.time,
        arrivalDate: flight.arrival.date || '',
        duration: flight.duration,
        rating: flight.rating,
        reviews: flight.reviews || 0,
        className: flight.className,
        price: flight.price,
        route:
          searchValues.route || `${flight.departure.city} → ${flight.arrival.city}`,
        date: searchValues.date || flight.departure.date || '',
        passengers: searchValues.passengers || '1',
      });
      window.location.href = `flight-detail.html?${params.toString()}`;
    });

    const bag = document.createElement('div');
    bag.className = 'flight-baggage';
    bag.textContent = 'Bagasi: ' + flight.baggage;

    priceCol.appendChild(classEl);
    priceCol.appendChild(priceEl);
    priceCol.appendChild(noteEl);
    priceCol.appendChild(btn);
    priceCol.appendChild(bag);

    main.appendChild(airlineCol);
    main.appendChild(timesCol);
    main.appendChild(priceCol);

    const footer = document.createElement('div');
    footer.className = 'flight-card-footer';
    const left = document.createElement('div');
    left.className = 'flight-footer-left';
    left.textContent = 'Refundable • Reschedule tersedia';

    footer.appendChild(left);

    card.appendChild(main);
    card.appendChild(footer);

    container.appendChild(card);
  });
}

function setupFlightsPage() {
  const page = document.body.getAttribute('data-page');
  if (page !== 'flights') return;

  const searchParams = getQueryParams();
  const allFlights = getStaticFlightsData();
  
  // Filter flights based on route from search form
  const routeFilteredFlights = filterFlightsByRoute(allFlights, searchParams);
  
  const state = {
    priceMax: 10000000,
    selectedAirlines: [],
    selectedTimeSlots: [],
    sortBy: 'price',
    visibleCount: 3,
    flights: routeFilteredFlights, // Use filtered flights
  };

  const listEl = document.querySelector('[data-flights-list]');
  const priceMaxInput = document.getElementById('price-max');
  const priceMaxLabel = document.getElementById('price-max-label');
  const airlineCheckboxes = document.querySelectorAll('[data-filter-airline]');
  const timeCheckboxes = document.querySelectorAll('[data-filter-time]');
  const sortSelect = document.getElementById('sort-by');
  const resetBtn = document.getElementById('reset-filters');
  const loadMoreBtn = document.getElementById('load-more-flights');
  const loadMoreWrapper = document.getElementById('load-more-wrapper');
  const routeTitle = document.getElementById('results-route');
  const metaEl = document.getElementById('results-meta');
  const summaryEl = document.getElementById('search-summary');

  // Display search summary
  if (summaryEl) {
    const fromText = searchParams.dari || searchParams.from || 'Asal';
    const toText = searchParams.ke || searchParams.to || 'Tujuan';
    const dateText = searchParams.berangkat || searchParams.depart || '';
    const paxText = searchParams.pax || searchParams.passengers || '1';
    
    summaryEl.innerHTML = `
      <h2>Hasil Pencarian</h2>
      <p>
        <strong>${fromText}</strong> → <strong>${toText}</strong><br>
        ${dateText ? `Tanggal: ${dateText}<br>` : ''}
        Penumpang: ${paxText}
      </p>
    `;
  }

  function updateRouteHeader(total) {
    const fromText = (searchParams.dari || searchParams.from || 'Asal').split('(')[0].trim();
    const toText = (searchParams.ke || searchParams.to || 'Tujuan').split('(')[0].trim();
    const routeText = `${fromText} → ${toText}`;
    
    if (routeTitle) {
      routeTitle.textContent = routeText;
    }
    
    if (metaEl) {
      const parts = [];
      parts.push(total + ' penerbangan ditemukan');
      const dateText = searchParams.berangkat || searchParams.depart;
      if (dateText) {
        parts.push(dateText);
      }
      const paxText = searchParams.pax || searchParams.passengers || '1';
      parts.push(paxText + ' penumpang');
      metaEl.textContent = parts.join(' • ');
    }
    
    return routeText;
  }

  function recompute() {
    const filtered = filterFlights(state.flights, state);
    const sorted = sortFlights(filtered, state.sortBy);
    const routeText = updateRouteHeader(sorted.length);
    const searchValues = {
      route: routeText,
      date: searchParams.berangkat || searchParams.depart || '',
      passengers: searchParams.pax || searchParams.passengers || '1',
    };
    renderFlights(sorted, state.visibleCount, listEl, searchValues);

    if (sorted.length > state.visibleCount) {
      loadMoreWrapper.style.display = 'block';
    } else {
      loadMoreWrapper.style.display = 'none';
    }
  }

  if (priceMaxInput && priceMaxLabel) {
    priceMaxInput.addEventListener('input', () => {
      state.priceMax = parseInt(priceMaxInput.value || '0', 10) || 0;
      priceMaxLabel.textContent = formatPriceIDR(state.priceMax);
      state.visibleCount = 3;
      recompute();
    });
  }

  airlineCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const value = checkbox.value;
      if (checkbox.checked) {
        if (!state.selectedAirlines.includes(value)) {
          state.selectedAirlines.push(value);
        }
      } else {
        state.selectedAirlines = state.selectedAirlines.filter((v) => v !== value);
      }
      state.visibleCount = 3;
      recompute();
    });
  });

  timeCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const value = checkbox.value;
      if (checkbox.checked) {
        if (!state.selectedTimeSlots.includes(value)) {
          state.selectedTimeSlots.push(value);
        }
      } else {
        state.selectedTimeSlots = state.selectedTimeSlots.filter((v) => v !== value);
      }
      state.visibleCount = 3;
      recompute();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      state.sortBy = sortSelect.value;
      state.visibleCount = 3;
      recompute();
    });
  }

  if (resetBtn && priceMaxInput && priceMaxLabel) {
    resetBtn.addEventListener('click', () => {
      state.priceMax = 10000000;
      state.selectedAirlines = [];
      state.selectedTimeSlots = [];
      state.sortBy = 'price';
      state.visibleCount = 3;

      priceMaxInput.value = '10000000';
      priceMaxLabel.textContent = 'Rp 10.000.000';

      airlineCheckboxes.forEach((c) => {
        c.checked = false;
      });
      timeCheckboxes.forEach((c) => {
        c.checked = false;
      });
      if (sortSelect) {
        sortSelect.value = 'price';
      }

      recompute();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      state.visibleCount += 3;
      recompute();
    });
  }

  recompute();
}

const TAX_AMOUNT = 150000;
const SERVICE_FEE = 25000;

function setupFlightDetailPage() {
  const page = document.body.getAttribute('data-page');
  if (page !== 'flight-detail') return;

  const params = getQueryParams();
  const flight = {
    airline: params.airline || 'Garuda Indonesia',
    flightNumber: params.flightNumber || 'GA-150',
    rating: toNumber(params.rating, 4.5),
    reviews: params.reviews ? Number(params.reviews).toLocaleString('id-ID') : '2.340',
    departure: {
      time: params.departureTime || '08:00',
      city: params.departureCity || 'Jakarta',
      airport: params.departureAirport || 'CGK',
      terminal: params.departureTerminal || 'Terminal 3',
      date: params.departureDate || 'Rabu, 18 Nov 2025',
    },
    arrival: {
      time: params.arrivalTime || '10:30',
      city: params.arrivalCity || 'Bali',
      airport: params.arrivalAirport || 'DPS',
      terminal: params.arrivalTerminal || 'Terminal Domestik',
      date: params.arrivalDate || 'Rabu, 18 Nov 2025',
    },
    duration: params.duration || '2h 30m',
    className: params.className || 'Ekonomi',
    price: toNumber(params.price, 1250000),
    route: params.route || `${params.departureCity || 'Jakarta'} → ${params.arrivalCity || 'Bali'}`,
    date: params.date || params.departureDate || 'Rabu, 18 Nov 2025',
    passengers: toNumber(params.passengers, 1),
  };

  const logoEl = document.querySelector('[data-detail-airline-logo]');
  const nameEl = document.querySelector('[data-detail-airline-name]');
  const numberEl = document.querySelector('[data-detail-flight-number]');
  const ratingEl = document.querySelector('[data-detail-rating]');
  const depTimeEl = document.querySelector('[data-detail-departure-time]');
  const depCityEl = document.querySelector('[data-detail-departure-city]');
  const depAirportEl = document.querySelector('[data-detail-departure-airport]');
  const depDateEl = document.querySelector('[data-detail-departure-date]');
  const arrTimeEl = document.querySelector('[data-detail-arrival-time]');
  const arrCityEl = document.querySelector('[data-detail-arrival-city]');
  const arrAirportEl = document.querySelector('[data-detail-arrival-airport]');
  const arrDateEl = document.querySelector('[data-detail-arrival-date]');
  const durationEl = document.querySelector('[data-detail-duration]');

  if (logoEl) logoEl.textContent = (params.airline || 'GA').slice(0, 2).toUpperCase();
  if (nameEl) nameEl.textContent = flight.airline;
  if (numberEl) numberEl.textContent = flight.flightNumber;
  if (ratingEl) ratingEl.textContent = `★ ${flight.rating.toFixed(1)} (${flight.reviews} ulasan)`;
  if (depTimeEl) depTimeEl.textContent = flight.departure.time;
  if (depCityEl) depCityEl.textContent = flight.departure.city;
  if (depAirportEl)
    depAirportEl.textContent = `${flight.departure.airport} · ${flight.departure.terminal}`;
  if (depDateEl) depDateEl.textContent = flight.departure.date;
  if (arrTimeEl) arrTimeEl.textContent = flight.arrival.time;
  if (arrCityEl) arrCityEl.textContent = flight.arrival.city;
  if (arrAirportEl)
    arrAirportEl.textContent = `${flight.arrival.airport} · ${flight.arrival.terminal}`;
  if (arrDateEl) arrDateEl.textContent = flight.arrival.date;
  if (durationEl) durationEl.textContent = `Durasi ${flight.duration}`;

  const summaryRoute = document.querySelector('[data-summary-route]');
  const summaryDate = document.querySelector('[data-summary-date]');
  const summaryPassengers = document.querySelector('[data-summary-passengers]');
  const summaryClass = document.querySelector('[data-summary-class]');
  const summaryPrice = document.querySelector('[data-summary-price]');
  const summaryTax = document.querySelector('[data-summary-tax]');
  const summaryTotal = document.querySelector('[data-summary-total]');

  if (summaryRoute) summaryRoute.textContent = flight.route;
  if (summaryDate) summaryDate.textContent = flight.date;
  if (summaryPassengers) summaryPassengers.textContent = `${flight.passengers} Penumpang`;
  if (summaryClass) summaryClass.textContent = flight.className;
  if (summaryPrice) summaryPrice.textContent = formatPriceIDR(flight.price);
  if (summaryTax) summaryTax.textContent = formatPriceIDR(TAX_AMOUNT);
  if (summaryTotal) summaryTotal.textContent = formatPriceIDR(flight.price + TAX_AMOUNT);

  const classCards = document.querySelectorAll('[data-class-card]');
  let currentClass = flight.className;

  function updateClassSelection(card, { syncRadio = true } = {}) {
    classCards.forEach((c) => {
      c.classList.remove('is-selected');
      if (syncRadio) {
        const input = c.querySelector('input');
        if (input) input.checked = false;
      }
    });
    card.classList.add('is-selected');
    if (syncRadio) {
      const input = card.querySelector('input');
      if (input) input.checked = true;
    }
    const className = card.getAttribute('data-class-name');
    const classPrice = toNumber(card.getAttribute('data-class-price'), flight.price);
    currentClass = className || currentClass;
    currentClassPrice = classPrice;
    if (summaryClass) summaryClass.textContent = currentClass;
    if (summaryPrice) summaryPrice.textContent = formatPriceIDR(classPrice);
    if (summaryTotal) summaryTotal.textContent = formatPriceIDR(classPrice + TAX_AMOUNT);
  }

  classCards.forEach((card) => {
    card.addEventListener('click', () => {
      updateClassSelection(card);
    });
  });

  let currentClassPrice = flight.price;
  const defaultCard = document.querySelector('[data-class-card].is-selected') || classCards[0];
  if (defaultCard) {
    updateClassSelection(defaultCard, { syncRadio: true });
  }

  const checkoutBtn = document.getElementById('detailCheckoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const selectedCard = document.querySelector('[data-class-card].is-selected');
      const selectedClass = {
        name: selectedCard?.getAttribute('data-class-name') || currentClass,
        price: toNumber(selectedCard?.getAttribute('data-class-price'), flight.price),
      };

      const paramsCheckout = new URLSearchParams({
        airline: flight.airline,
        flightNumber: flight.flightNumber,
        departureCity: flight.departure.city,
        departureAirport: flight.departure.airport,
        departureTerminal: flight.departure.terminal,
        departureTime: flight.departure.time,
        departureDate: flight.departure.date,
        arrivalCity: flight.arrival.city,
        arrivalAirport: flight.arrival.airport,
        arrivalTerminal: flight.arrival.terminal,
        arrivalTime: flight.arrival.time,
        arrivalDate: flight.arrival.date,
        duration: flight.duration,
        className: selectedClass.name,
        price: String(selectedClass.price),
        passengers: String(flight.passengers),
        route: flight.route,
        date: flight.date,
      });
      window.location.href = `flight-checkout.html?${paramsCheckout.toString()}`;
    });
  }
}

function setupFlightCheckoutPage() {
  const page = document.body.getAttribute('data-page');
  if (page !== 'flight-checkout') return;

  const params = getQueryParams();
  const booking = {
    airline: params.airline || 'Garuda Indonesia',
    flightNumber: params.flightNumber || 'GA-150',
    route: params.route || 'Jakarta (CGK) - Bali (DPS)',
    date: params.date || 'Rabu, 18 Nov 2025',
    time:
      params.departureTime && params.arrivalTime
        ? `${params.departureTime} - ${params.arrivalTime}`
        : '08:00 - 10:30',
    className: params.className || 'Ekonomi',
    passengers: toNumber(params.passengers, 1),
    pricePerPassenger: toNumber(params.price, 1250000),
  };

  const subtotal = booking.pricePerPassenger * booking.passengers;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax + SERVICE_FEE;

  const routeEl = document.querySelector('[data-checkout-route]');
  const dateEl = document.querySelector('[data-checkout-date]');
  const timeEl = document.querySelector('[data-checkout-time]');
  const airlineEl = document.querySelector('[data-checkout-airline]');
  const classEl = document.querySelector('[data-checkout-class]');
  const passengerEl = document.querySelector('[data-checkout-passengers]');
  const priceEl = document.querySelector('[data-checkout-price]');
  const taxEl = document.querySelector('[data-checkout-tax]');
  const serviceFeeEl = document.querySelector('[data-checkout-service-fee]');
  const totalEl = document.querySelector('[data-checkout-total]');

  if (routeEl) routeEl.textContent = booking.route;
  if (dateEl) dateEl.textContent = booking.date;
  if (timeEl) timeEl.textContent = booking.time;
  if (airlineEl) airlineEl.textContent = `${booking.airline} (${booking.flightNumber})`;
  if (classEl) classEl.textContent = booking.className;
  if (passengerEl) passengerEl.textContent = `${booking.passengers} Orang`;
  if (priceEl) priceEl.textContent = formatPriceIDR(subtotal);
  if (taxEl) taxEl.textContent = formatPriceIDR(tax);
  if (serviceFeeEl) serviceFeeEl.textContent = formatPriceIDR(SERVICE_FEE);
  if (totalEl) totalEl.textContent = formatPriceIDR(total);

  const paymentCards = document.querySelectorAll('[data-payment-card]');
  const paymentChildContainers = document.querySelectorAll('[data-payment-child]');

  function activatePayment(card) {
    paymentCards.forEach((c) => c.classList.remove('is-active'));
    card.classList.add('is-active');
    const targetId = card.getAttribute('data-payment-target');
    paymentChildContainers.forEach((child) => {
      if (child.id === targetId) {
        child.hidden = false;
      } else {
        child.hidden = true;
      }
    });
  }

  paymentCards.forEach((card) => {
    card.addEventListener('click', () => activatePayment(card));
  });

  if (paymentCards.length) {
    activatePayment(paymentCards[0]);
  }
}

function setupHeader() {
  const mobileToggle = document.querySelector('[data-toggle="mobile-menu"]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-open');
    });
  }

  const userToggle = document.querySelector('[data-toggle="user-menu"]');
  const userMenu = document.querySelector('[data-user-menu]');
  if (userToggle && userMenu) {
    userToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      userMenu.classList.toggle('is-open');
    });

    document.addEventListener('click', () => {
      userMenu.classList.remove('is-open');
    });

    userMenu.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }
}

function setupTabs() {
  const tabButtons = document.querySelectorAll('[data-tab-button]');
  const tabPanels = document.querySelectorAll('[data-tab-content]');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab-button');

      tabButtons.forEach((btn) => {
        btn.classList.toggle('is-active', btn === button);
      });

      tabPanels.forEach((panel) => {
        const id = panel.getAttribute('data-tab-content');
        panel.classList.toggle('is-active', id === target);
      });
    });
  });
}

function setupHomePage() {
  const page = document.body.getAttribute('data-page');
  if (page !== 'home') return;

  const flightForm = document.getElementById('flight-search-form');
  if (flightForm) {
    flightForm.addEventListener('submit', (event) => {
      event.preventDefault();
      window.location.href = 'flights.html';
    });
  }

  const hotelForm = document.getElementById('hotel-search-form');
  if (hotelForm) {
    hotelForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Pencarian hotel belum terhubung ke data dinamis di versi statis ini.');
    });
  }

  const trainForm = document.getElementById('train-search-form');
  if (trainForm) {
    trainForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Pencarian kereta belum terhubung ke data dinamis di versi statis ini.');
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setupHeader();
  setupTabs();
  setupHomePage();
  setupFlightsPage();
  setupFlightDetailPage();
  setupFlightCheckoutPage();
});