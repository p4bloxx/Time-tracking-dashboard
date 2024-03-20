const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')
const timeNumbers = Array.from(document.querySelectorAll('.time'))
weekly.style.color = '#FFFFFF';

daily.addEventListener('click', () => {
  timeNumbers.forEach((time) => {
    time.firstElementChild.innerHTML = (Number(time.firstElementChild.getAttribute('data-hour')) / 7).toFixed(1)
    daily.style.color = '#FFFFFF'
    weekly.style.color = '#7078C9';
    monthly.style.color = '#7078C9';
    weekly.style.pointerEvents = 'auto';
    daily.style.pointerEvents = 'none';
    monthly.style.pointerEvents = 'auto';
  })
})

weekly.addEventListener('click', () => {
  timeNumbers.forEach((time) => {
    time.firstElementChild.innerHTML = time.firstElementChild.getAttribute('data-hour')
  })
  weekly.style.color = '#FFFFFF';
  daily.style.color = '#7078C9'
  monthly.style.color = '#7078C9'
  weekly.style.pointerEvents = 'none'
  daily.style.pointerEvents = 'auto'
  monthly.style.pointerEvents = 'auto'
})

monthly.addEventListener('click', () => {
  timeNumbers.forEach((time) => {
    time.firstElementChild.innerHTML = (Number(time.firstElementChild.getAttribute('data-hour')) * 4).toFixed(0)
    monthly.style.color = '#FFFFFF';
    weekly.style.color = '#7078C9';
    daily.style.color = '#7078C9';
    weekly.style.pointerEvents = 'auto';
    daily.style.pointerEvents = 'auto';
    monthly.style.pointerEvents = 'none';
  })
})