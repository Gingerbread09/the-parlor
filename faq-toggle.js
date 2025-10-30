document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');
    const icon = item.querySelector('.accordion-icon');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      items.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.answer').style.maxHeight = null;
        const iIcon = i.querySelector('.accordion-icon');
        if (iIcon) iIcon.textContent = '+'; // reset icon
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
        if (icon) icon.textContent = '–'; // change to minus
      }
    });
  });

  // Extra FAQ block always visible
  const extraBlock = document.querySelector('.faq-extra-content');
  if (extraBlock) {
    extraBlock.style.display = 'block';
    extraBlock.style.maxHeight = 'none';
  }
});
