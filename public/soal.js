const quizData = [
  {
    question: "Pernyataan yang benar mengenai reaksi eksoterm adalah...",
    options: [
      "Sistem menyerap kalor dari lingkungan, delta H > 0",
      "Sistem menyerap kalor dari lingkungan, delta H < 0",
      "Sistem melepaskan kalor ke lingkungan, delta H > 0",
      "Sistem melepaskan kalor ke lingkungan, delta H < 0",
      "Tidak ada perubahan kalor"
    ],
    answer: 3
  },
  {
    question: "Entalpi pembentukan standar (∆Hf) adalah perubahan entalpi ketika 1 mol senyawa terbentuk dari unsur-unsurnya dalam keadaan standar. Entalpi pembentukan standar CO₂(g) adalah -393,5 kJ/mol. Reaksi pembentukan standar CO₂(g) adalah...",
    options: [
      "C(s) + O₂(g) → CO₂(g)",
      "2C(s) + O₂(g) → 2CO(g)",
      "C(s) + 2O(g) → CO₂(g)",
      "CO(g) + ½ O₂(g) → CO₂(g)",
      "C₂H₄(g) + 3O₂(g) → 2CO₂(g) + 2H₂O(l)"
    ],
    answer: 0
  },
  {
    question: "Hukum Hess menyatakan bahwa...",
    options: [
      "Perubahan entalpi bergantung pada jalannya reaksi",
      "Perubahan entalpi tergantung pada suhu reaksi",
      "Perubahan entalpi suatu reaksi hanya tergantung pada keadaan awal dan akhir",
      "Reaksi eksoterm selalu menghasilkan produk yang lebih stabil",
      "Energi tidak dapat diubah menjadi bentuk lain"
    ],
    answer: 2
  },
  {
    question: "Kalor jenis air adalah 4,18 J/g°C. Jika 100 g air dipanaskan dari 25°C menjadi 75°C, maka kalor yang dibutuhkan adalah...",
    options: [
      "2.090 J",
      "20.900 J",
      "21.000 J",
      "209.000 J",
      "2.090.000 J"
    ],
    answer: 1
  },
  {
    question: "Tata nama senyawa Na2SO4 adalah...",
    options: [
      "Natrium sulfat",
      "Natrium sulfit",
      "Disodium sulfur oksida",
      "Natrium sulfur",
      "Sodium sulfurik"
    ],
    answer: 0
  },
  {
    question: "Contoh senyawa kovalen polar adalah...",
    options: [
      "Cl2",
      "HCl",
      "CH4",
      "CO2",
      "O2"
    ],
    answer: 1
  },
  {
    question: "Konsep mol menyatakan bahwa 1 mol zat mengandung...",
    options: [
      "6,02 x 10²² partikel",
      "6,02 x 10²³ partikel",
      "6,02 x 10²⁴ partikel",
      "Avogadro gram",
      "1 liter gas"
    ],
    answer: 1
  },
  {
    question: "Jika 1 mol gas ideal menempati 22,4 liter pada STP, maka 2 mol gas akan menempati volume...",
    options: [
      "11,2 liter",
      "22,4 liter",
      "44,8 liter",
      "56,0 liter",
      "6,02 liter"
    ],
    answer: 2
  },
  {
    question: "Senyawa H2SO4 termasuk asam kuat karena...",
    options: [
      "Mengandung atom H",
      "Ionisasi total dalam air",
      "Memiliki pH > 7",
      "Tidak dapat menghantarkan listrik",
      "Mengandung unsur oksigen"
    ],
    answer: 1
  },
  {
    question: "Berdasarkan hukum kekekalan massa, massa total zat sebelum dan sesudah reaksi adalah...",
    options: [
      "Berbeda tergantung reaksi",
      "Sama",
      "Selalu lebih besar setelah reaksi",
      "Selalu lebih kecil setelah reaksi",
      "Tidak dapat ditentukan"
    ],
    answer: 1
  },
  {
    question: "Bilangan oksidasi unsur O dalam H2O2 (hidrogen peroksida) adalah...",
    options: [
      "-2",
      "-1",
      "0",
      "+1",
      "+2"
    ],
    answer: 1
  },
  {
    question: "Hukum Perbandingan Tetap menyatakan bahwa...",
    options: [
      "Massa zat sebelum reaksi = sesudah reaksi",
      "Perbandingan massa unsur penyusun senyawa selalu tetap",
      "Perbandingan volume gas-gas = perbandingan mol",
      "Unsur tersusun dari atom",
      "Reaksi kimia tidak mengubah massa"
    ],
    answer: 1
  },
  {
    question: "Contoh zat yang termasuk senyawa adalah...",
    options: [
      "Air (H₂O)",
      "Oksigen (O₂)",
      "Emas (Au)",
      "Karbon (C)",
      "Besi (Fe)"
    ],
    answer: 0
  },
  {
    question: "Salah satu prinsip kimia hijau adalah...",
    options: [
      "Menggunakan zat berbahaya",
      "Meningkatkan limbah",
      "Meningkatkan penggunaan energi",
      "Mengurangi zat berbahaya",
      "Menggunakan bahan yang mahal"
    ],
    answer: 3
  },
  {
    question: "Jika 2 mol CH₄ dibakar sempurna, maka mol CO₂ yang dihasilkan adalah...",
    options: [
      "1 mol",
      "2 mol",
      "3 mol",
      "4 mol",
      "0 mol"
    ],
    answer: 1
  },
  {
    question: "Persamaan reaksi setara berarti...",
    options: [
      "Jumlah atom tidak perlu sama",
      "Jenis atom boleh berubah",
      "Jumlah atom kiri dan kanan sama",
      "Boleh menambahkan zat baru",
      "Boleh menghilangkan zat"
    ],
    answer: 2
  },
  {
    question: "Jumlah mol dari 11,2 L gas oksigen (O₂) pada STP adalah...",
    options: [
      "0,25 mol",
      "0,5 mol",
      "1 mol",
      "2 mol",
      "4 mol"
    ],
    answer: 1
  },
  {
    question: "Biloks unsur Cl dalam HClO3 adalah...",
    options: [
      "-1",
      "0",
      "+1",
      "+3",
      "+5"
    ],
    answer: 4
  },
  {
    question: "Nama senyawa CuSO₄ adalah...",
    options: [
      "Tembaga(II) sulfat",
      "Tembaga(I) sulfat",
      "Tembaga sulfit",
      "Tembaga oksida",
      "Seng sulfat"
    ],
    answer: 0
  },
  {
    question: "Berikut ini yang termasuk hukum dasar kimia adalah...",
    options: [
      "Hukum Pascal",
      "Hukum Newton",
      "Hukum Kekekalan Massa",
      "Hukum Boyle",
      "Hukum Archimedes"
    ],
    answer: 2
  }
];
