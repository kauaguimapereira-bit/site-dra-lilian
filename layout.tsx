@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #fefdfb;
  color: #3a3532;
}

::selection {
  background-color: #e8b4b8;
  color: #3a3532;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #fbf6f1;
}
::-webkit-scrollbar-thumb {
  background: #e3cdb8;
  border-radius: 999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #c6a664;
}

:focus-visible {
  outline: 2px solid #c6a664;
  outline-offset: 3px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

/* Signature element: the arched frame, echoing the clinic's own portrait frames */
.arch-frame {
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
  overflow: hidden;
  position: relative;
}

.arch-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1.5px rgba(198, 166, 100, 0.55);
  pointer-events: none;
}

.gold-divider {
  position: relative;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    #c6a664 20%,
    #c6a664 80%,
    transparent
  );
}

.gold-divider::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%) rotate(45deg);
  background: #c6a664;
}

.text-balance {
  text-wrap: balance;
}

.glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
}
