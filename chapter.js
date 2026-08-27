// Shared chapter-page interactivity — tabs, shuffle, expand/flip.
// Reused by every chapter file. Nothing here is chapter-specific.

document.addEventListener('DOMContentLoaded', () => {

  // ---- tabs ----
  document.querySelectorAll('.chapter-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.chapter-tab-btn').forEach(b => b.classList.toggle('active', b === btn));
      document.querySelectorAll('.chapter-pane').forEach(p => p.classList.toggle('active', p.id === target));
    });
  });

  // ---- concept card expand ----
  document.querySelectorAll('.concept-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('expanded'));
  });

  // ---- vocab card flip ----
  document.querySelectorAll('.vocab-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });

  // ---- shuffle buttons ----
  document.querySelectorAll('.shuffle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const grid = document.getElementById(btn.dataset.grid);
      if (!grid) return;
      const cards = Array.from(grid.children);
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
      cards.forEach(c => {
        c.classList.remove('expanded', 'flipped');
        grid.appendChild(c);
      });
    });
  });

});
