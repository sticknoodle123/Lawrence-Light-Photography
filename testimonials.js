const testimonials = document.querySelectorAll('.testimonial');
const nextBtn = document.getElementById('nextTestimonial');
const prevBtn = document.getElementById('prevTestimonial');
let index = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[i].classList.add('active');
}

// Button click: NEXT
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  });
}

// Button click: PREVIOUS
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  });
}

// Optional: Auto-rotate every 8 seconds
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 8000);
