document.addEventListener( 'DOMContentLoaded', function () {
  document.querySelectorAll( '.work__link').forEach(function(e) {
    e.addEventListener('click', function(e) {
      const tab = e.currentTarget.dataset.path;

      document.querySelectorAll('.tab-content').forEach(function(e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target="${tab}"]`).classList.add('tab-content--active');
      });
    });

    e.addEventListener('click', function(e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.work__link').forEach(function(e) {
        e.classList.remove('work__link--default')
        document.querySelector(`[data-path ='${tabDefault}']`).classList.add('work__link--default');
      })
    })
    
  });

  
});