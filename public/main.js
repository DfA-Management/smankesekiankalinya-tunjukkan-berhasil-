'use strict';

const app = document.getElementById('app');
const bell = document.getElementById('bell');

const users = [
  { email: "siswa.x01@smansa.sch.id", password: "X1kelas2025" },
  { email: "siswa.x02@smansa.sch.id", password: "X2start2025" },
  { email: "siswa.x03@smansa.sch.id", password: "X3goahead25" },
  { email: "siswa.x04@smansa.sch.id", password: "X4spirit25" },
  { email: "siswa.x05@smansa.sch.id", password: "X5smart2025" },
  { email: "siswa.x06@smansa.sch.id", password: "X6power25" },
  { email: "siswa.x07@smansa.sch.id", password: "X7bright25" },
  { email: "siswa.x08@smansa.sch.id", password: "X8dream25" },
  { email: "siswa.x09@smansa.sch.id", password: "X9future25" }
];

let currentEmail = '';
let isExamActive = false;

function playBell() {
  try {
    bell.currentTime = 0;
    bell.play();
  } catch (e) {}
}

function getClassFromEmail(email) {
  const match = email.match(/x0?(\d+)/i);
  return match ? 'X.' + parseInt(match[1]) : 'X';
}

function renderLoginPage() {
  app.innerHTML = `
    <header><div class="brand"><span class="material-icons">school</span>SMAN 1 Slawi</div></header>
    <main class="main-inner">
      <section class="card">
        <h1>Student Login</h1>
        <form id="loginForm">
          <label for="email">Email</label>
          <input type="text" id="email" required />
          <label for="password">Password</label>
          <input type="password" id="password" required />
          <div id="formError" class="error-message"></div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
    <footer>&copy; 2024 SMAN 1 Slawi</footer>
  `;

  document.getElementById('loginForm').onsubmit = handleLogin;
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    currentEmail = email;
    localStorage.setItem('user', JSON.stringify(user));
    renderDashboard();
  } else {
    const err = document.getElementById('formError');
    err.textContent = 'Login gagal. Periksa kembali.';
  }
}

function renderDashboard() {
  app.innerHTML = `
    <main class="main-inner">
      <section class="learning-page">
        <h2>Selamat Datang, kelas ${getClassFromEmail(currentEmail)}</h2>
        <button onclick="renderQuiz()">Mulai Ujian</button>
        <button onclick="logout()" style="margin-top:14px;">Keluar</button>
      </section>
    </main>
  `;
}

function logout() {
  localStorage.removeItem('user');
  currentEmail = '';
  renderLoginPage();
}

function renderQuiz() {
  isExamActive = true;
  let quizHTML = `
    <form class="quiz-form">
      <div class="quiz-header"><span class="quiz-title">Ujian Kimia</span></div>
  `;

  quizData.forEach((q, i) => {
    quizHTML += `
      <div class="quiz-question">
        <div class="q-text">${i + 1}. ${q.question.replace(/\n/g, "<br>")}</div>
        <div class="quiz-options">
          ${q.options.map((opt, idx) => `
            <label><input type="radio" name="q${i}" value="${idx}" required /> ${opt}</label>
          `).join('')}
        </div>
      </div>
    `;
  });

  quizHTML += `<button type="submit">Kirim Jawaban</button></form>`;
  app.innerHTML = quizHTML;

  document.querySelector('.quiz-form').onsubmit = function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answers = [];

    for (let i = 0; i < quizData.length; i++) {
      answers.push(parseInt(formData.get(`q${i}`)));
    }

    const score = answers.filter((a, i) => a === quizData[i].answer).length;

    const jawabanSiswa = {
      email: currentEmail,
      kelas: getClassFromEmail(currentEmail),
      jawaban: answers,
      skor: score,
      waktu: new Date().toISOString()
    };

    // Kirim ke server
    fetch("http://localhost:1897/hasil", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jawabanSiswa)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          alert("✅ Jawaban berhasil disimpan!");
        } else {
          alert("⚠️ Jawaban tersimpan tapi respons tidak sukses.");
        }
      })
      .catch(err => {
        alert("❌ Gagal simpan: " + err.message);
      });

    renderResult(answers, score);
  };
}

function renderResult(answers, score) {
  app.innerHTML = `
    <section class="answers-review">
      <h3>Review Ujian</h3>
      <p>Skor Anda: ${score} dari ${quizData.length}</p>
      <ul>
        ${answers.map((a, i) => `
          <li>
            <strong>${i + 1}. ${quizData[i].question}</strong><br>
            Jawaban Anda: ${quizData[i].options[a] || 'Tidak dijawab'}<br>
            Kunci: ${quizData[i].options[quizData[i].answer]}
          </li>
        `).join('')}
      </ul>
      <button onclick="logout()">Selesai</button>
    </section>
  `;
}

// Auto-load saat halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('user');
  if (saved) {
    const user = JSON.parse(saved);
    currentEmail = user.email;
    renderDashboard();
  } else {
    renderLoginPage();
  }
});
