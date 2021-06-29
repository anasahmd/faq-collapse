const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  const faqToggle = faq.children[2];
  faqToggle.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
