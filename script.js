const amountInput = document.querySelector('#amount');
const peopleInput = document.querySelector('#people');
const tipSelect = document.querySelector('#tip');
const calculateBtn = document.querySelector('#calculate');
const perPersonEl = document.querySelector('#perPerson');
const card = document.querySelector('.card');
const header = document.querySelector('header h1');

// Анімація при завантаженні сторінки
window.addEventListener('load', () => {
  gsap.from(header, { opacity: 0, y: -40, duration: 0.8, ease: "power2.out" });
  gsap.from(card, { opacity: 0, scale: 0.8, duration: 1, delay: 0.3, ease: "back.out(1.7)" });
});

function validateInput() {
  const amount = parseFloat(amountInput.value);
  const people = parseInt(peopleInput.value, 10);

  if (isNaN(amount) || isNaN(people) || amount <= 0 || people <= 0) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please enter valid numbers greater than 0!"
    });
    return false;
  }
  return true;
}

function calculateBill() {
  if (!validateInput()) return;

  const bill = parseFloat(amountInput.value);
  const people = parseInt(peopleInput.value, 10);
  const tip = parseInt(tipSelect.value, 10); // 0,10,15,20

  const totalWithTip = bill + (bill * tip / 100);
  const perPerson = (totalWithTip / people).toFixed(2);

  perPersonEl.textContent = `$${perPerson}`;

  // Анімація результату
  gsap.from(perPersonEl, { opacity: 0, y: 20, duration: 0.5 });
}

calculateBtn.addEventListener('click', calculateBill);
