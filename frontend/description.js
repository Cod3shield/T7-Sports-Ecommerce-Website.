const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");

const modalData = {
  trackOrder: {
    title: "Track Order",
    desc: "Track your order status in real-time using your order ID. You can see updates from processing, shipping, until delivery so you always know where your package is."
  },
  shippingInfo: {
    title: "Shipping Info",
    desc: "We deliver nationwide with an estimated delivery time of 3–7 business days. Shipping times may vary depending on your location and courier availability."
  },
  returns: {
    title: "Returns",
    desc: "You may return items within 7 days of receiving your order, as long as they are unused, unwashed, and in their original packaging. Refunds or replacements will be processed after inspection."
  },
  faqs: {
    title: "FAQs",
    desc: "Find answers to the most frequently asked questions about orders, payments, shipping, returns, and product information to help you shop with ease."
  },
  ourStory: {
    title: "Our Story",
    desc: "Triplesevensports started from a deep passion for sportswear and active lifestyle. Our goal is to create high-quality, stylish, and comfortable apparel for athletes and everyday wear."
  },
  careers: {
    title: "Careers",
    desc: "Join our growing team and be part of Triplesevensports. We are always looking for passionate, creative, and driven individuals who want to grow with us."
  },
  news: {
    title: "News",
    desc: "Stay updated with the latest announcements, product launches, promotions, and company updates from Triplesevensports."
  },
  contactUs: {
    title: "Contact Us",
    desc: "Reach out to our support team anytime for inquiries, order concerns, or assistance. We are here to help you with fast and reliable customer service."
  }
};

// IMPORTANT: make global function
window.openModal = function (key) {
  modalTitle.textContent = modalData[key].title;
  modalDesc.textContent = modalData[key].desc;
  modal.style.display = "block";
};

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};