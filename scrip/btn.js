document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search').addEventListener('click', (e) => {
    document.getElementById('form-search').classList.add('form__search_open')
  })
  document.getElementById('form-close-btn').addEventListener('click', (e) => {
    document.getElementById('form-search').classList.remove('form__search_open')
  })
})