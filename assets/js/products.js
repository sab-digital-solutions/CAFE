/* Categories and products. Prices are ILLUSTRATIVE (₪).
   Row: [id, category, price (number or [a,b] for two sizes), [EN name, EN desc], [AR name, AR desc], tag ('best'|'fav'|''), sizeKey ('sd' single/double | 'sl' small/large)]
   IMAGES: paste a photo URL for an id below, or save a file as assets/images/<id>.jpg. Without either, a styled fallback tile shows. */
window.IMAGE_URLS = {
  // "iced-latte": "https://example.com/photo.jpg",
};
window.CATS = [
  { id: "coffee", e: "☕", en: "Coffee & Drinks", ar: "القهوة والمشروبات" },
  { id: "cold", e: "🍮", en: "Cold Desserts", ar: "الحلويات الباردة" },
  { id: "cinnamon", e: "🌀", en: "Cinnamon Rolls", ar: "رولات القرفة" },
  { id: "croissant", e: "🥐", en: "Croissants & Rolls", ar: "كرواسون ورولات" },
  { id: "sandwich", e: "🥪", en: "Sandwiches", ar: "ساندويشات" },
  { id: "muffin", e: "🧁", en: "Muffins", ar: "مافن" },
  { id: "eclair", e: "🍫", en: "Éclairs", ar: "إكلير" },
  { id: "cheesecake", e: "🍰", en: "Cheesecake", ar: "تشيز كيك" },
  { id: "macaron", e: "🍪", en: "Macarons", ar: "ماكرون" }
];
window.PRODUCTS = [
 ["espresso","coffee",[9,12],["Espresso","Rich, concentrated shot in a small ceramic cup."],["إسبريسو","شوت مركّز وغني في فنجان سيراميك صغير."],"","sd"],
 ["double-espresso","coffee",14,["Double Espresso","Two shots for a stronger, longer kick."],["دبل إسبريسو","شوتان لنكهة أقوى وأطول."],"",""],
 ["americano","coffee",[10,13],["Americano","Smooth espresso lengthened with hot water."],["أمريكانو","إسبريسو ناعم مع الماء الساخن."],"","sl"],
 ["iced-americano","coffee",[12,15],["Iced Americano","Chilled espresso over ice, clean and bold."],["أمريكانو مثلج","إسبريسو بارد على الثلج، نقي وقوي."],"","sl"],
 ["iced-latte","coffee",[14,17],["Iced Latte","Espresso and cold milk over ice."],["آيس لاتيه","إسبريسو وحليب بارد على الثلج."],"best","sl"],
 ["mousse-cup","cold",16,["Chocolate Mousse Cup","Airy chocolate mousse, served chilled."],["كوب موس الشوكولاتة","موس شوكولاتة خفيف يُقدَّم بارداً."],"fav",""],
 ["lotus-cup","cold",17,["Lotus Cream Cup","Creamy layers with crushed biscuit and lotus spread."],["كوب كريمة اللوتس","طبقات كريمية مع بسكويت مطحون وصوص اللوتس."],"",""],
 ["strawberry-cream","cold",16,["Strawberry Cream Dessert","Whipped cream and strawberries in a cup."],["حلى الفراولة بالكريمة","كريمة مخفوقة وفراولة في كوب."],"",""],
 ["choc-layer","cold",18,["Chocolate Layer Dessert","Layers of chocolate cream and cake crumb."],["حلى طبقات الشوكولاتة","طبقات كريمة شوكولاتة مع فتات الكيك."],"",""],
 ["cin-classic","cinnamon",14,["Classic Cinnamon Roll","Soft, spiced roll with vanilla icing."],["رول القرفة الكلاسيكي","رول طري بنكهة القرفة مع صوص الفانيلا."],"best",""],
 ["cin-cream-cheese","cinnamon",16,["Cream Cheese Cinnamon Roll","Topped with a tangy cream cheese glaze."],["رول القرفة بالكريم تشيز","مغطّى بكريمة الجبن."],"",""],
 ["cin-choc","cinnamon",16,["Chocolate Cinnamon Roll","Cinnamon swirl with chocolate drizzle."],["رول القرفة بالشوكولاتة","لفّات القرفة مع خيوط الشوكولاتة."],"fav",""],
 ["cin-lotus","cinnamon",17,["Lotus Cinnamon Roll","Warm roll finished with lotus cream."],["رول القرفة باللوتس","رول دافئ مع كريمة اللوتس."],"",""],
 ["croissant","croissant",10,["Classic Butter Croissant","Flaky, golden and buttery."],["كرواسون الزبدة الكلاسيكي","هشّ وذهبي بطعم الزبدة."],"best",""],
 ["choc-croissant","croissant",12,["Chocolate Croissant","Filled with smooth chocolate."],["كرواسون الشوكولاتة","محشو بالشوكولاتة الناعمة."],"",""],
 ["almond-croissant","croissant",13,["Almond Croissant","Almond cream filling, topped with sliced almonds."],["كرواسون اللوز","حشوة كريمة اللوز مع شرائح اللوز."],"",""],
 ["croissant-roll","croissant",13,["Chocolate Croissant Roll","A spiral roll of croissant dough and chocolate."],["رول الكرواسون بالشوكولاتة","رول لولبي من عجينة الكرواسون والشوكولاتة."],"",""],
 ["sandwich-turkey","sandwich",20,["Turkey & Cheese Sandwich","Sliced turkey and cheese (sample ingredients)."],["ساندويش تركي وجبنة","شرائح ديك رومي وجبنة (مكوّنات تجريبية)."],"",""],
 ["sandwich-chicken","sandwich",22,["Chicken Sandwich","Chicken with fresh greens (sample ingredients)."],["ساندويش دجاج","دجاج مع خضار طازجة (مكوّنات تجريبية)."],"",""],
 ["sandwich-croissant","sandwich",21,["Croissant Sandwich","Buttery croissant with a savoury filling (sample)."],["ساندويش كرواسون","كرواسون بالزبدة مع حشوة مالحة (تجريبي)."],"fav",""],
 ["sandwich-cheese","sandwich",18,["Cheese & Tomato Sandwich","Cheese and tomato on fresh bread (sample)."],["ساندويش جبنة وبندورة","جبنة وبندورة على خبز طازج (تجريبي)."],"",""],
 ["muffin-choc","muffin",11,["Chocolate Muffin","Soft muffin with chocolate chips."],["مافن الشوكولاتة","مافن طري مع قطع الشوكولاتة."],"",""],
 ["muffin-double","muffin",13,["Double Chocolate Muffin","Chocolate batter, extra chocolate chunks."],["مافن دبل شوكولاتة","عجينة شوكولاتة مع قطع إضافية."],"fav",""],
 ["muffin-blueberry","muffin",12,["Blueberry Muffin","Tender crumb with blueberries."],["مافن التوت الأزرق","قوام طري مع حبّات التوت الأزرق."],"",""],
 ["eclair-choc","eclair",14,["Classic Chocolate Éclair","Choux pastry, cream filling, chocolate glaze."],["إكلير الشوكولاتة الكلاسيكي","عجينة شو بحشوة كريمة وغلاف شوكولاتة."],"best",""],
 ["eclair-vanilla","eclair",14,["Vanilla Cream Éclair","Light vanilla cream in choux pastry."],["إكلير كريمة الفانيلا","كريمة فانيلا خفيفة في عجينة الشو."],"",""],
 ["eclair-pistachio","eclair",16,["Pistachio Éclair","Pistachio cream and a nutty finish."],["إكلير الفستق","كريمة الفستق مع لمسة مكسّرات."],"",""],
 ["cheesecake","cheesecake",22,["Classic Cheesecake","Creamy on a buttery biscuit base."],["تشيز كيك كلاسيكي","كريمي على قاعدة بسكويت بالزبدة."],"",""],
 ["cheesecake-strawberry","cheesecake",24,["Strawberry Cheesecake","Topped with strawberry sauce."],["تشيز كيك الفراولة","مغطّى بصوص الفراولة."],"best",""],
 ["cheesecake-choc","cheesecake",24,["Chocolate Cheesecake","Rich chocolate on a cocoa base."],["تشيز كيك الشوكولاتة","شوكولاتة غنية على قاعدة الكاكاو."],"",""],
 ["cheesecake-lotus","cheesecake",25,["Lotus Cheesecake","Lotus spread and biscuit crumble."],["تشيز كيك اللوتس","صوص اللوتس مع فتات البسكويت."],"fav",""],
 ["macaron-vanilla","macaron",6,["Vanilla Macaron","Crisp shell, soft vanilla ganache."],["ماكرون الفانيلا","قشرة مقرمشة وغاناش فانيلا ناعم."],"",""],
 ["macaron-choc","macaron",6,["Chocolate Macaron","Chocolate shell and ganache."],["ماكرون الشوكولاتة","قشرة وغاناش شوكولاتة."],"",""],
 ["macaron-pistachio","macaron",7,["Pistachio Macaron","Pistachio cream between two delicate shells."],["ماكرون الفستق","كريمة فستق بين قشرتين رقيقتين."],"",""],
 ["macaron-box","macaron",55,["Mixed Macaron Box","An assorted box of macarons, great for gifting."],["علبة ماكرون مشكّل","علبة متنوعة، مناسبة للهدايا."],"fav",""]
].map(r => ({ id: r[0], cat: r[1], p: r[2], en: r[3], ar: r[4], tag: r[5], z: r[6] }));
window.BEST = ["iced-latte", "cin-classic", "croissant", "eclair-choc", "cheesecake-strawberry", "macaron-box"];
