import {
  logo1,
  logo2,
  logoar1,
  logoar2,
  logoar3,
  ellipse,
  catHome1,
  catHome2,
  search,
  lucas,
  chico,
  lullaby,
  artikel1,
  artikel2,
  artikel3,
  channie,
  channie2,
  channie3,
  channie4,
  channie5,
  channie6,
  channie7,
  channie8,
  channie9,
  catEt1,
  catEt2,
  catEt3,
  catEt4,
} from "../assets";

import {
  FaFacebook,
  FaInstagram,
  FaShareAlt,
  FaWhatsapp,
} from "react-icons/fa";

export const puppiesItems = [
  {
    id: 1,
    title: "Lucas",
    image: lucas,
    img: [
      {
        image: catEt1,
      },
      {
        image: catEt2,
      },
      {
        image: catEt3,
      },
      {
        image: catEt4,
      },
    ],
    desc: "Gen : Perempuan * Usia : 8 Bulan",
    description:
      "Lucas Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Chico",
    image: chico,
    img: [
      {
        image: catEt1,
      },
      {
        image: catEt2,
      },
      {
        image: catEt3,
      },
      {
        image: catEt4,
      },
    ],
    desc: "Gen : Laki-laki * Usia : 10 Bulan",
    description:
      "Chico Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Lullaby",
    image: lullaby,
    img: [
      {
        image: catEt1,
      },
      {
        image: catEt2,
      },
      {
        image: catEt3,
      },
      {
        image: catEt4,
      },
    ],
    desc: "Gen : Perempuan * Usia : 6 Bulan",
  },

  {
    id: 4,
    title: "Channie",
    image: channie,
    img: [
      {
        image: catEt1,
      },
      {
        image: catEt2,
      },
      {
        image: catEt3,
      },
      {
        image: catEt4,
      },
    ],
    desc: "Gen : Perempuan * Usia : 8 Bulan",
    description:
      "Channie Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    title: "Bibby",
    image: channie2,
    img: [
      {
        image: catEt1,
      },
      {
        image: catEt2,
      },
      {
        image: catEt3,
      },
      {
        image: catEt4,
      },
    ],
    desc: "Gen : Laki-laki * Usia : 10 Bulan",
    description:
      "Bibby Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    details: [{ name: "C" }, { longDetails: "" }, { available: "" }],
  },
  {
    id: 6,
    title: "Yuki",
    image: channie3,
    img: [
      {
        image: catEt1,
      },
      {
        image: catEt2,
      },
      {
        image: catEt3,
      },
      {
        image: catEt4,
      },
    ],
    desc: "Gen : Perempuan * Usia : 6 Bulan",
    description:
      "Yuki Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    id: 7,
    title: "Shane",
    image: channie4,
    img: [
      {
        image: catEt1,
      },
      {
        image: catEt2,
      },
      {
        image: catEt3,
      },
      {
        image: catEt4,
      },
    ],
    desc: "Gen : Perempuan * Usia : 8 Bulan",
    description:
      "Shane Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 8,
    title: "Rose",
    image: channie5,
    img: [
      {
        image: catEt1,
      },
      {
        image: catEt2,
      },
      {
        image: catEt3,
      },
      {
        image: catEt4,
      },
    ],
    desc: "Gen : Laki-laki * Usia : 10 Bulan",
    description:
      "Rose Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 9,
    title: "Coco",
    image: channie6,
    img: [
      {
        image: catEt1,
      },
      {
        image: catEt2,
      },
      {
        image: catEt3,
      },
      {
        image: catEt4,
      },
    ],
    desc: "Gen : Perempuan * Usia : 6 Bulan",
    description:
      "Coco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const catDetailItems = {
  1: {
    name: "Lucas 8 Bulan Bulu Hitam & Putih",
    longDetails:
      "Lucas Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: "03 Februari 2024",
    color: "Hitam & Putih",
    type: "Pendek",
    gender: "Perempuan",
    weight: "3 Kg",
    born: "03 Februari 2024",
    vacsinated: "2 Kali",
    personality: "Aktif",
  },
  2: {
    name: "Chico 10 Bulan Bulu Hitam & Putih",
    longDetails:
      "Chico Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: "03 Februari 2024",
    color: "Hitam & Putih",
    type: "Pendek",
    gender: "Laki-laki",
    weight: "3 Kg",
    born: "03 Februari 2024",
    vacsinated: "2 Kali",
    personality: "Aktif",
  },
  3: {
    name: "Lullaby 8 Bulan Bulu Hitam & Putih",
    longDetails:
      "Lullaby Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: "03 Februari 2024",
    color: "Hitam & Putih",
    type: "Pendek",
    gender: "Perempuan",
    weight: "3 Kg",
    born: "03 Februari 2024",
    vacsinated: "2 Kali",
    personality: "Aktif",
  },
  4: {
    name: "Channie 6 Bulan Bulu Hitam & Putih",
    longDetails:
      "Channie Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: "03 Februari 2024",
    color: "Hitam & Putih",
    type: "Pendek",
    gender: "Perempuan",
    weight: "3 Kg",
    born: "03 Februari 2024",
    vacsinated: "2 Kali",
    personality: "Aktif",
  },
  5: {
    name: "Bibby 8 Bulan Bulu Hitam & Putih",
    longDetails:
      "Bibby Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: "03 Februari 2024",
    color: "Hitam & Putih",
    type: "Pendek",
    gender: "Perempuan",
    weight: "3 Kg",
    born: "03 Februari 2024",
    vacsinated: "2 Kali",
    personality: "Aktif",
  },
  6: {
    name: "Yuki 10 Bulan Bulu Hitam & Putih",
    longDetails:
      "Yuki Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: "03 Februari 2024",
    color: "Hitam & Putih",
    type: "Pendek",
    gender: "Perempuan",
    weight: "3 Kg",
    born: "03 Februari 2024",
    vacsinated: "2 Kali",
    personality: "Aktif",
  },
  7: {
    name: "Shane 6 Bulan Bulu Hitam & Putih",
    longDetails:
      "Shane Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: "03 Februari 2024",
    color: "Hitam & Putih",
    type: "Pendek",
    gender: "Perempuan",
    weight: "3 Kg",
    born: "03 Februari 2024",
    vacsinated: "2 Kali",
    personality: "Aktif",
  },
  8: {
    name: "Rose 8 Bulan Bulu Hitam & Putih",
    longDetails:
      "Rose Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: "03 Februari 2024",
    color: "Hitam & Putih",
    type: "Pendek",
    gender: "Perempuan",
    weight: "3 Kg",
    born: "03 Februari 2024",
    vacsinated: "2 Kali",
    personality: "Aktif",
  },
  9: {
    name: "Coco 10 Bulan Bulu Hitam & Putih",
    longDetails:
      "Coco Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    available: "03 Februari 2024",
    color: "Hitam & Putih",
    type: "Pendek",
    gender: "Perempuan",
    weight: "3 Kg",
    born: "03 Februari 2024",
    vacsinated: "2 Kali",
    personality: "Aktif",
  },

  // Tambahkan detail kucing lainnya dengan struktur yang sama
};

export const artikelItems = [
  {
    id: 1,
    title: "Manfaat Memelihara Kucing",
    read: "03 Menit untuk baca",
    image: artikel1,
    content:
      "Diantara cara mengatasi kejenuhan bekerja sendiri baik WFH maupun WFA diantaranya adalah dengan memelihara hewan. Menurut dr. Fadhli Rizal Makarim",
    source: "Kementrian Keuangan",
    sourcelogo: logoar1,
    date: "15 April 2022",
    url: "/",
  },
  {
    id: 2,
    title: "Tips Merawat Kucing Yang Baik",
    read: "07 Menit untuk baca",
    image: artikel2,
    content:
      "Diantara cara mengatasi kejenuhan bekerja sendiri baik WFH maupun WFA diantaranya adalah dengan memelihara hewan. Menurut dr. Fadhli Rizal Makarim",
    source: "Kumparan",
    sourcelogo: logoar2,
    date: "7 Agustus 2023",
    url: "/",
  },
  {
    id: 3,
    title: "Kucing Tidak Suka Dry Food?",
    read: "04 Menit untuk baca",
    image: artikel3,
    content:
      "Kucing umumnya menyukai dua jenis makanan tersebut, namun kadang ada kucing yang tidak suka dry food dan lebih menyukai wet food.",
    source: "Klik Dokter",
    sourcelogo: logoar3,
    date: "30 Desember 2021",
    url: "/",
  },
  {
    id: 4,
    title: "Manfaat Memelihara Kucing",
    read: "03 Menit untuk baca",
    image: artikel1,
    content:
      "Diantara cara mengatasi kejenuhan bekerja sendiri baik WFH maupun WFA diantaranya adalah dengan memelihara hewan. Menurut dr. Fadhli Rizal Makarim",
    source: "Kementrian Keuangan",
    sourcelogo: logoar1,
    date: "11 Januari 2022",
    url: "/",
  },
];

export const footerLinks = [
  {
    title: "Main",
    links: [
      {
        name: "Beranda",
        link: "",
      },

      {
        name: "Features",
        link: "",
      },
      {
        name: "Artikel",
        link: "",
      },
    ],
  },

  {
    title: "Others",
    links: [
      {
        name: "Donasi",
        link: "",
      },
      {
        name: "Vaksin",
        link: "",
      },
      {
        name: "Sterilisasi",
        link: "",
      },
    ],
  },

  {
    title: "About",
    links: [
      {
        name: "Diantara cara mengatasi kejenuhan bekerja sendiri baik WFH maupun WFA diantaranya adalah dengan memelihara hewan. Menurut dr. Fadhli Rizal Makarim",
      },
    ],
  },
];

export const commentItems = [
  {
    author: "Rina",
    content: "Halo, Apakah Anda memiliki pengalaman dalam mengadopsi kucing?",
    timestamp: "2 hours ago",
  },
  {
    author: "Reni",
    content:
      "Saya punya pengalaman mengadopsi kucing yang menyenangkan. Memberi rumah bagi kucing yang butuh sungguh memuaskan dan membuat saya bahagia.",
    timestamp: "1 hour ago",
  },
  {
    author: "Roni",
    content:
      "Apa yang membuat Anda memilih adopsi sebagai opsi untuk mendapatkan kucing?",
    timestamp: "30 minutes ago",
  },
  {
    author: "Rini",
    content:
      "Saya ingin mencoba adopsi kucing. Apa yang membuat Anda memilih adopsi sebagai opsi untuk mendapatkan kucing?",
    timestamp: "10 minutes ago",
  },
  {
    author: "Rini",
    content: "Apakah kamu suka kucing ini?",

    timestamp: "10 minutes ago",
  },
];

export const shareItems = [
  { name: "Share", icon: FaShareAlt, link: null },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Whatsapp", icon: FaWhatsapp, link: "https://www.whatsapp.com/" },
];
