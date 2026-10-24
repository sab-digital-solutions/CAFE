/* DEMO DATA: replace with real business info. Empty values are fine. */
window.SITE = {
  brand: ["CREMA Café & Pâtisserie", "كريما كافيه وباتيسري"],   // brand name (EN, AR)
  phone: "+970 5X XXX XXXX",             // demo
  whatsapp: "970500000000",              // digits only, country code first (demo)
  email: "hello@crema-demo.example",     // demo
  social: { instagram: "https://instagram.com/", facebook: "https://facebook.com/", tiktok: "https://tiktok.com/" },  // replace with real pages
  formEndpoint: "",                      // e.g. a Formspree URL; empty = demo mode (nothing is sent)
  heroImage: "assets/images/hero.jpg", aboutImage: "assets/images/about.jpg"
};
/* mapQuery: put the real address or "lat,lng" here to turn on the live map and real directions. */
window.BRANCHES = [
  { id: "city-center", name: ["CREMA — City Center", "كريما — وسط المدينة"], addr: ["12 Example Street, City Center (demo)", "شارع المثال 12، وسط المدينة (تجريبي)"],
    hours: ["Daily 7:00 – 23:00 (example)", "يومياً 7:00 – 23:00 (مثال)"], phone: "+970 5X XXX XX01", img: "assets/images/branch-city-center.jpg", mapQuery: "" },
  { id: "main-street", name: ["CREMA — Main Street", "كريما — الشارع الرئيسي"], addr: ["48 Sample Avenue, Main Street (demo)", "جادة النموذج 48، الشارع الرئيسي (تجريبي)"],
    hours: ["Daily 8:00 – 00:00 (example)", "يومياً 8:00 – 00:00 (مثال)"], phone: "+970 5X XXX XX02", img: "assets/images/branch-main-street.jpg", mapQuery: "" }
];
