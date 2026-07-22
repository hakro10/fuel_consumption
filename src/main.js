import { createIcons, icons } from 'lucide';
import { UIManager } from './js/ui.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  createIcons({ icons });

  // Initialize UI Manager
  const ui = new UIManager();
  ui.init();
});
