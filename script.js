'use strict';
const datas = [
  {
    judul: 'Class room the elite',
    deskripsi: 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e Jepang: ようこそ実力至上主義の教室へ, terj. Selamat Datang di Kelas Doktrin Kemampuan Elit',
    img: './asset/img/cote1.jpg',
  },
  {
    judul: 'Jujutsu No Kaisen',
    deskripsi:
      'A prequel series titled Jujutsu Kaisen 0: Jujutsu Hig started on April 28th, 2017 in the Jump GIGA 2017 vol.1 issue. The series was meant to be a short series and continued for four chapters nd concluded in the 2017 vol.4 issue',
    img: './asset/img/jujutsu.jpeg',
  },
  {
    judul: 'Kimetsu No Yaiba',
    deskripsi: 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e Jepang: ようこそ実力至上主義の教室へ, terj. Selamat Datang di Kelas Doktrin Kemampuan Elit',
    img: './asset/img/kny.jpeg',
  },
  {
    judul: 'Naruto shipudden',
    deskripsi: 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e Jepang: ようこそ実力至上主義の教室へ, terj. Selamat Datang di Kelas Doktrin Kemampuan Elit',
    img: './asset/img/naruto.jpeg',
  },
  {
    judul: 'One Piece',
    deskripsi: 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e Jepang: ようこそ実力至上主義の教室へ, terj. Selamat Datang di Kelas Doktrin Kemampuan Elit',
    img: './asset/img/onepiece.jpg',
  },
  {
    judul: 'Doraemon',
    deskripsi: 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e Jepang: ようこそ実力至上主義の教室へ, terj. Selamat Datang di Kelas Doktrin Kemampuan Elit',
    img: './asset/img/doraemon.jpg',
  },
  {
    judul: 'Rezero',
    deskripsi: 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e Jepang: ようこそ実力至上主義の教室へ, terj. Selamat Datang di Kelas Doktrin Kemampuan Elit',
    img: './asset/img/rezero.jpeg',
  },
  {
    judul: 'Shokugeki no souma',
    deskripsi: 'Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e Jepang: ようこそ実力至上主義の教室へ, terj. Selamat Datang di Kelas Doktrin Kemampuan Elit',
    img: './asset/img/shokugeki.jpg',
  },
];

// const { judul, deskripsi } = datas;
console.log(datas[1].judul);
function displayTitles(datas) {
  const container = document.getElementById('manga-container');
  let htmlContent = '';

  datas.forEach((data) => {
    htmlContent += `
    <div class="manga">
    <img src="${data.img}" alt="">
    <div class="manga-content">
    <h3 class="manga-title">${data.judul}</h3>
    <p class="manga-description">${data.deskripsi}</p>
    <button class="manga-button">pilih manga</button>
    </div>
    </div>
    `;
  });

  container.innerHTML = htmlContent;
}

displayTitles(datas);
