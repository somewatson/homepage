window.addEventListener('scroll', function () {
  const div = document.getElementById('up-floating-link');
  if (window.scrollY == 0) {
    div.classList.add('opacity-0', 'pointer-events-none');
    div.classList.remove('opacity-100', 'pointer-events-auto');
  } else if (window.scrollY > 500) { // Adjust the scroll threshold as needed
    div.classList.remove('opacity-0', 'pointer-events-none');
    div.classList.add('opacity-100', 'pointer-events-auto');
  }
});

window.addEventListener('load', function() {
  var isLongScroll = false;
  document.querySelectorAll('a[class="long-scroll"]').forEach(item =>
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default smooth scroll behavior

      const targetElement = document.querySelector(this.getAttribute('href'));
        isLongScroll = true;
        window.scrollTo({
          top: targetElement.offsetTop, // Scroll to the element's position
          behavior: 'smooth'         
        });
        setTimeout(() => {
          isLongScroll = false;
        }, 500)
    }
  ));

  const observer = new IntersectionObserver((entries, observer1) => {
      for (const entry of entries) {
          if (entry.isIntersecting) {
              if (!isLongScroll) {
                entry.target.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
              }
              
              resetToc();
              const elementId = entry.target.id
              var item = document.getElementById('toc-'+elementId);
              item.classList.add("toc-active");
          }
      }
  }, {
      rootMargin: '0px',
      threshold: 0.1,
  });

  observer.observe(document.getElementById('herobox'));
  observer.observe(document.getElementById('puddobox'));
  observer.observe(document.getElementById('twoheartsbox'));
  observer.observe(document.getElementById('communitybox'));
  observer.observe(document.getElementById('lorebox'));

  // On mobile, let's make sure it doesn't snap while loading, so we scroll to top immediately
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 100);
})

function resetToc() {
  const tocs = ['herobox', 'puddobox', 'twoheartsbox', 'communitybox', 'lorebox'];
  tocs.forEach((elementId) => {
    var item = document.getElementById('toc-'+elementId);
    item.classList.remove("toc-active");
  })
}

