// ArenaX landing page script

// 1) Put your real APK link here (GitHub Releases direct download link).
//    Example: https://github.com/YOUR_USERNAME/YOUR_REPO/releases/download/v1.0.3/arenax.apk
const APK_URL = "PASTE_YOUR_APK_LINK_HERE";

const toast = document.getElementById("toast-msg");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function startDownload(event) {
  if (event) event.preventDefault();

  if (!APK_URL || APK_URL.startsWith("PASTE_")) {
    showToast("APK link coming soon. Try the Indus Store button.");
    return;
  }

  showToast("Starting your download...");
  window.location.href = APK_URL;
}

document.getElementById("direct-apk-btn").addEventListener("click", startDownload);
document.getElementById("bottom-apk-btn").addEventListener("click", startDownload);

// 2) Fade-in on scroll
const revealTargets = document.querySelectorAll(".feature, .bottom-cta");
revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("in"));
}
