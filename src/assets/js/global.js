const sections = document.querySelectorAll('.observe, .observe img');

const options = {
  threshold: 0
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {

    if (!entry.isIntersecting) { // if not intersecting, do nothing
      return;
    }

    // console.log(entry.target);

    entry.target.classList.toggle('animate');

    observer.unobserve(entry.target); // stop obsserving after doing it once
  })
}, options);

sections.forEach(section =>{
  observer.observe(section);
});