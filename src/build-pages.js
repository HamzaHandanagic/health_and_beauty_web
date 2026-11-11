// Generates the service landing pages (masaza.html, nokti.html, ciscenje-lica.html)
// from the content below, reusing the navbar/footer/icon sprite of index.html.
// Run: npm run build:pages   (then npm run build:css, because new classes may appear)
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://healthandbeauty.ba';
const WA = '38762216591';
const index = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------
const pages = [
  {
    slug: 'masaza',
    nav: 'Masaža',
    title: 'Masaža Cazin | Relax, sportska i medicinska masaža · Health&Beauty',
    description: 'Masaža u Cazinu kod diplomiranog fizioterapeuta: relax, sportska, medicinska i anticelulit masaža, masaža leđa od 30 KM. Rezervišite termin putem WhatsAppa.',
    kicker: 'Masaža i fizioterapija',
    h1: 'Masaža u Cazinu',
    intro: [
      'Tražite kvalitetnu masažu u Cazinu? U Health&Beauty centru masaže izvodi diplomirani fizioterapeut, pa svaki tretman počinje kratkom procjenom i prilagođava se vašim potrebama: opuštanje, bol u leđima i vratu, ukočenost nakon treninga ili sjedilačkog posla.',
      'Salon se nalazi na Ćupriji, u ulici Generala Izeta Nanića. Termin rezervišete jednom porukom na WhatsApp ili pozivom.',
    ],
    heroImage: { src: 'assets/images/gallery/salon-1.jpg', alt: 'Prostor za masažu u salonu Health&Beauty Cazin' },
    whatsapp: 'Pozdrav, želim rezervisati masažu',
    treatmentsTitle: 'Vrste masaže koje nudimo',
    treatments: [
      { name: 'Masaža leđa', desc: 'Najtraženiji tretman: vrat, ramena i leđa. Opušta ukočene mišiće nakon rada za računarom ili fizičkog posla.', meta: '30 min · od 30 KM' },
      { name: 'Relax masaža', desc: 'Masaža cijelog tijela laganim do srednjim pritiskom. Za opuštanje, bolji san i manje stresa.', meta: '45–60 min' },
      { name: 'Sportska masaža', desc: 'Dublji pritisak i rad na pojedinim mišićnim grupama, prije ili poslije treninga, za brži oporavak.', meta: '45–60 min' },
      { name: 'Medicinska masaža', desc: 'Ciljani rad na bolnim regijama uz fizioterapeutsku procjenu. Po potrebi se kombinuje s terapijskim vježbama.', meta: '30–45 min' },
      { name: 'Anticelulit masaža', desc: 'Intenzivna masaža nogu, bokova i stomaka koja potiče cirkulaciju i limfnu drenažu. Najbolji rezultat daje u seriji.', meta: '30–45 min' },
      { name: 'Masaža lica', desc: 'Nježna masaža koja poboljšava cirkulaciju i tonus kože lica. Često je dio tretmana lica.', meta: '20–30 min' },
    ],
    prices: [
      { name: 'Masaža leđa (30 min)', price: 'od 30 KM' },
      { name: 'Relax masaža cijelog tijela', price: 'na upit' },
      { name: 'Sportska masaža', price: 'na upit' },
      { name: 'Medicinska masaža', price: 'na upit' },
      { name: 'Anticelulit masaža', price: 'na upit' },
      { name: 'Paket od 5 masaža', price: 'na upit' },
    ],
    priceNote: 'Cijene su informativne i zavise od trajanja. Tačnu cijenu potvrđujemo pri rezervaciji.',
    steps: [
      { title: 'Kratki razgovor i procjena', desc: 'Pitamo šta vas muči, gdje osjećate bol ili napetost i postoje li stanja na koja treba paziti.' },
      { title: 'Masaža prilagođena vama', desc: 'Pritisak, tempo i fokus biramo zajedno. U svakom trenutku možete reći želite li jače ili nježnije.' },
      { title: 'Savjet za kuću', desc: 'Po potrebi dobijete nekoliko jednostavnih vježbi i preporuku koliko često dolaziti.' },
    ],
    forWhomTitle: 'Kada masaža pomaže',
    forWhom: [
      'Bol i ukočenost u vratu, ramenima i leđima',
      'Sjedilački posao i dugi sati za računarom',
      'Sportisti i rekreativci prije i poslije treninga',
      'Stres, loš san i opšti umor',
      'Održavanje nakon fizioterapije',
    ],
    cautionTitle: 'Kada masažu odgađamo',
    caution: [
      'Povišena temperatura ili akutna upala',
      'Svježe povrede i prelomi',
      'Kožne infekcije na području koje bi se masiralo',
      'Trudnoća, uz prethodni dogovor s terapeutom',
    ],
    gallery: [
      { src: 'assets/images/gallery/salon-1.jpg', alt: 'Unutrašnjost salona Health&Beauty Cazin' },
      { src: 'assets/images/gallery/termodeka-1.jpg', alt: 'Termo deka tretman uz masažu u Cazinu' },
      { src: 'assets/images/gallery/hidzama-1.jpg', alt: 'Hidžama tretman u salonu Health&Beauty Cazin' },
    ],
    faq: [
      { q: 'Koliko košta masaža u Cazinu?', a: 'Masaža leđa u trajanju od 30 minuta košta od 30 KM. Cijene ostalih masaža zavise od vrste i trajanja. Pošaljite nam poruku i odmah dobijete cjenovnik.' },
      { q: 'Koliko traje masaža?', a: 'Masaža leđa traje 30 minuta, a masaža cijelog tijela 45 do 60 minuta. Za prvi dolazak računajte desetak minuta više zbog razgovora i procjene.' },
      { q: 'Ko izvodi masažu?', a: 'Masaže izvodi diplomirani fizioterapeut s iskustvom u medicinskoj, sportskoj i relax masaži.' },
      { q: 'Trebam li rezervisati termin?', a: 'Da, radimo isključivo po zakazanom terminu. Najbrže je putem WhatsAppa na 062 216 591. Obično odgovorimo u roku od nekoliko sati.' },
      { q: 'Kako da se pripremim za masažu?', a: 'Ništa posebno. Dođite nekoliko minuta ranije i izbjegnite težak obrok neposredno prije termina. Ručnici i ulja su obezbijeđeni.' },
    ],
    related: [
      { href: 'ciscenje-lica.html', label: 'Čišćenje lica' },
      { href: 'nokti.html', label: 'Nokti, manikir i pedikir' },
      { href: 'index.html#fizioterapija', label: 'Fizioterapija' },
    ],
    schema: { serviceType: 'Masaža', offers: [{ name: 'Masaža leđa', price: 30 }] },
  },
  {
    slug: 'nokti',
    nav: 'Nokti',
    title: 'Nokti Cazin | Nadogradnja noktiju, gel lak, manikir i pedikir · Health&Beauty',
    description: 'Nokti u Cazinu: nadogradnja noktiju gelom, gel lak, manikir i pedikir. Uredan rad, sterilan pribor i rezultati koji traju 3–4 sedmice. Rezervišite termin putem WhatsAppa.',
    kicker: 'Nokti, manikir i pedikir',
    h1: 'Nokti u Cazinu: nadogradnja, gel lak, manikir i pedikir',
    intro: [
      'Lijepi i uredni nokti ne moraju značiti oštećenu prirodnu ploču. U Health&Beauty salonu u Cazinu nadogradnju noktiju, gel lak, manikir i pedikir radimo pažljivo i bez žurbe, s kvalitetnim materijalima koji traju tri do četiri sedmice.',
      'Oblik, dužinu i dizajn biramo zajedno: od prirodnog nude izgleda, preko frencha i babyboomera, do nail arta po vašoj ideji.',
    ],
    heroImage: { src: 'assets/images/gallery/nokti-4.jpg', alt: 'Nadogradnja noktiju gelom u salonu Health&Beauty Cazin' },
    whatsapp: 'Pozdrav, želim rezervisati termin za nokte',
    treatmentsTitle: 'Šta radimo',
    treatments: [
      { name: 'Nadogradnja noktiju gelom', desc: 'Produženje i ojačanje prirodnih noktiju gelom na tipse ili šablon. Oblik po želji: almond, square, coffin ili stiletto.', meta: '90–120 min' },
      { name: 'Korekcija nadogradnje', desc: 'Dopuna izraslog dijela nakon 3 do 4 sedmice, uz provjeru stanja prirodnog nokta.', meta: '60–90 min' },
      { name: 'Gel lak (trajni lak)', desc: 'Lak koji se ne ljušti i zadržava sjaj do 3 sedmice, uz manikir prije nanošenja.', meta: '45–60 min' },
      { name: 'Ojačavanje prirodnih noktiju', desc: 'Tanak sloj gela ili rubber baze za nokte koji pucaju i lome se, bez produženja.', meta: '45–60 min' },
      { name: 'Manikir', desc: 'Oblikovanje, njega zanoktica, poliranje i hidratacija. Klasični ili suhi manikir.', meta: '30–45 min' },
      { name: 'Pedikir', desc: 'Estetski pedikir: uklanjanje zadebljale kože, oblikovanje noktiju i po želji gel lak.', meta: '45–60 min' },
      { name: 'Nail art i dizajn', desc: 'French, babyboomer, ombre, chrome, naljepnice i ručno crtani detalji.', meta: 'po dogovoru' },
      { name: 'Skidanje gela', desc: 'Pažljivo skidanje bez oštećenja prirodnog nokta, uz njegu nakon skidanja.', meta: '20–30 min' },
    ],
    prices: [
      { name: 'Nadogradnja noktiju gelom', price: 'na upit' },
      { name: 'Korekcija nadogradnje', price: 'na upit' },
      { name: 'Gel lak', price: 'na upit' },
      { name: 'Ojačavanje prirodnih noktiju', price: 'na upit' },
      { name: 'Manikir', price: 'na upit' },
      { name: 'Pedikir', price: 'na upit' },
      { name: 'Skidanje gela', price: 'na upit' },
    ],
    priceNote: 'Cijena zavisi od dužine, oblika i dizajna. Pošaljite nam sliku željenog izgleda i odmah dobijete tačnu cijenu.',
    steps: [
      { title: 'Dogovor o obliku i dužini', desc: 'Pokažite inspiraciju ili prepustite nama. Savjetujemo šta najbolje stoji vašoj ruci i načinu života.' },
      { title: 'Priprema i rad', desc: 'Manikir, priprema ploče, nanošenje i oblikovanje. Pribor se čisti i sterilizira nakon svakog klijenta.' },
      { title: 'Njega kod kuće', desc: 'Dobijete savjet kako da nokti traju duže i kada je vrijeme za korekciju.' },
    ],
    forWhomTitle: 'Za koga su naše usluge',
    forWhom: [
      'Nokti koji pucaju, lome se ili sporo rastu',
      'Želite trajan lak bez sedmičnog lakiranja',
      'Posebna prilika: vjenčanje, matura, proslava',
      'Redovno održavanje svake 3 do 4 sedmice',
      'Njega stopala i uredan pedikir prije ljeta',
    ],
    cautionTitle: 'Dobro je znati',
    caution: [
      'Nadogradnju ne radimo na gljivičnim i upaljenim noktima',
      'Gel nikada ne skidajte na silu kod kuće. Skidanje je brzo i besplatno uz novu uslugu',
      'Na termin dođite bez laka ili sa starim gelom, mi ga skidamo',
    ],
    gallery: [
      { src: 'assets/images/gallery/nokti-1.jpg', alt: 'Nadogradnja noktiju gelom, salon Health&Beauty Cazin' },
      { src: 'assets/images/gallery/nokti-2.jpg', alt: 'Gel lak u nude nijansi, nokti Cazin' },
      { src: 'assets/images/gallery/nokti-3.jpg', alt: 'French nadogradnja noktiju u Cazinu' },
      { src: 'assets/images/gallery/nokti-5.jpg', alt: 'Nail art dizajn na nadograđenim noktima' },
      { src: 'assets/images/gallery/pedikura-1.jpg', alt: 'Pedikir u salonu Health&Beauty Cazin' },
    ],
    faq: [
      { q: 'Koliko traje nadogradnja noktiju?', a: 'Prva nadogradnja traje 90 do 120 minuta, korekcija 60 do 90 minuta, a gel lak oko 45 minuta.' },
      { q: 'Koliko se nosi nadogradnja?', a: 'Korekcija je potrebna svake 3 do 4 sedmice, zavisno od brzine rasta noktiju i načina života.' },
      { q: 'Da li nadogradnja oštećuje prirodne nokte?', a: 'Pravilno urađena i pravilno skinuta nadogradnja ne oštećuje nokte. Oštećenja nastaju kada se gel skida na silu kod kuće, zato skidanje uvijek radimo u salonu.' },
      { q: 'Koliko košta nadogradnja noktiju u Cazinu?', a: 'Cijena zavisi od dužine, oblika i dizajna. Pošaljite nam poruku s idejom i odmah dobijete tačnu cijenu.' },
      { q: 'Mogu li doći sa svojim dizajnom?', a: 'Naravno. Pošaljite sliku na WhatsApp prije termina da pripremimo boje i materijal.' },
    ],
    related: [
      { href: 'ciscenje-lica.html', label: 'Čišćenje lica' },
      { href: 'masaza.html', label: 'Masaža' },
      { href: 'index.html#services', label: 'Obrve i trepavice' },
    ],
    schema: { serviceType: 'Nadogradnja noktiju, manikir i pedikir', offers: [] },
  },
  {
    slug: 'ciscenje-lica',
    nav: 'Čišćenje lica',
    title: 'Čišćenje lica Cazin | Dubinsko čišćenje, microneedling, fitopiling · Health&Beauty',
    description: 'Čišćenje lica u Cazinu: dubinsko čišćenje, hidratacija, fitopiling, microneedling i anti-age tretmani prilagođeni vašem tipu kože. Rezervišite termin putem WhatsAppa.',
    kicker: 'Tretmani lica',
    h1: 'Čišćenje lica u Cazinu',
    intro: [
      'Čišćenje lica je osnova svake njege: uklanja nakupljene nečistoće, mitisere i odumrle ćelije, pa koža diše, bolje upija kreme i izgleda svježije. U Health&Beauty salonu u Cazinu svaki tretman lica počinje analizom kože, jer masna, suha, osjetljiva i koža sklona aknama ne traže isti pristup.',
      'Uz klasično dubinsko čišćenje radimo fitopiling, microneedling (dermapen), hidratantne i anti-age tretmane, pojedinačno ili u seriji.',
    ],
    heroImage: { src: 'assets/images/gallery/tretman-1.jpg', alt: 'Dubinsko čišćenje lica parom u salonu Health&Beauty Cazin' },
    whatsapp: 'Pozdrav, želim rezervisati čišćenje lica',
    treatmentsTitle: 'Tretmani lica koje nudimo',
    treatments: [
      { name: 'Dubinsko čišćenje lica', desc: 'Skidanje šminke, piling, otvaranje pora parom, ručno uklanjanje mitisera, maska i njega. Preporuka: svakih 4 do 6 sedmica.', meta: '60–75 min' },
      { name: 'Hidratantni tretman', desc: 'Za suhu, umornu i dehidriranu kožu: piling, serum s hijaluronom i hranjiva maska.', meta: '45–60 min' },
      { name: 'Fitopiling', desc: 'Biljni piling koji ubrzava obnovu kože. Za tragove akni, hiperpigmentacije i neujednačen ten.', meta: '45–60 min' },
      { name: 'Microneedling (dermapen)', desc: 'Mikroiglice potiču stvaranje kolagena: sitne bore, ožiljci, proširene pore. Najbolji rezultat u seriji od 3 do 4 tretmana.', meta: '45–60 min' },
      { name: 'Anti-age tretman', desc: 'Učvršćivanje i hidratacija zrele kože uz masažu lica i aktivne serume.', meta: '60 min' },
      { name: 'Tretman za kožu sklonu aknama', desc: 'Nježno čišćenje, umirujuća maska i savjet za kućnu njegu koja ne zapušava pore.', meta: '60 min' },
    ],
    prices: [
      { name: 'Dubinsko čišćenje lica', price: 'na upit' },
      { name: 'Hidratantni tretman', price: 'na upit' },
      { name: 'Fitopiling', price: 'na upit' },
      { name: 'Microneedling (dermapen)', price: 'na upit' },
      { name: 'Anti-age tretman', price: 'na upit' },
      { name: 'Paket od 3 tretmana', price: 'na upit' },
    ],
    priceNote: 'Cijena zavisi od vrste tretmana i dodataka poput fitopilinga ili microneedlinga. Pošaljite nam poruku i dobijete cjenovnik.',
    steps: [
      { title: 'Analiza kože', desc: 'Pogledamo tip kože, problematična područja i šta koristite kod kuće.' },
      { title: 'Tretman', desc: 'Čišćenje, piling, para i ekstrakcija, zatim maska i serum prema tipu kože.' },
      { title: 'Plan njege', desc: 'Preporučimo koliko često dolaziti i šta koristiti između tretmana.' },
    ],
    forWhomTitle: 'Kome pomaže čišćenje lica',
    forWhom: [
      'Mitiseri, proširene pore i masna koža',
      'Suha, dehidrirana i umorna koža',
      'Akne i tragovi akni',
      'Sitne bore i gubitak tonusa',
      'Priprema kože prije posebne prilike',
    ],
    cautionTitle: 'Nakon tretmana',
    caution: [
      '24 sata bez šminke, sunca i solarija',
      'Svaki dan kremu sa zaštitnim faktorom (SPF)',
      'Bez pilinga i jakih aktivnih sastojaka nekoliko dana',
      'Microneedling ne radimo na aktivnim aknama i upaljenoj koži',
    ],
    gallery: [
      { src: 'assets/images/gallery/tretman-1.jpg', alt: 'Dubinsko čišćenje lica parom, Health&Beauty Cazin' },
      { src: 'assets/images/gallery/tretman-3.jpg', alt: 'Tretman lica s maskom u Cazinu' },
      { src: 'assets/images/gallery/tretman-4.jpg', alt: 'Nanošenje seruma tokom tretmana lica' },
      { src: 'assets/images/gallery/fitopiling-1.jpg', alt: 'Fitopiling tretman u salonu Health&Beauty Cazin' },
    ],
    faq: [
      { q: 'Koliko često raditi čišćenje lica?', a: 'Za većinu tipova kože svakih 4 do 6 sedmica. Masna koža sklona mitiserima može i češće, a suha i osjetljiva rjeđe.' },
      { q: 'Da li je čišćenje lica bolno i ostaje li crvenilo?', a: 'Ekstrakcija mitisera može biti neugodna, ali ne i bolna. Blago crvenilo nestaje za nekoliko sati.' },
      { q: 'Koja je razlika između čišćenja lica i microneedlinga?', a: 'Čišćenje uklanja nečistoće s površine i iz pora. Microneedling radi dublje, potiče kolagen i obnovu kože, pa se koristi za ožiljke, bore i proširene pore.' },
      { q: 'Mogu li doći na tretman sa šminkom?', a: 'Možete, skidanje šminke je dio tretmana. Nakon tretmana preporučujemo 24 sata bez šminke.' },
      { q: 'Koliko košta čišćenje lica u Cazinu?', a: 'Cijena zavisi od vrste tretmana i dodataka. Pošaljite nam poruku na WhatsApp i odmah dobijete cjenovnik.' },
    ],
    related: [
      { href: 'masaza.html', label: 'Masaža' },
      { href: 'nokti.html', label: 'Nokti, manikir i pedikir' },
      { href: 'index.html#services', label: 'Obrve i trepavice' },
    ],
    schema: { serviceType: 'Čišćenje lica i tretmani lica', offers: [] },
  },
];

// ---------------------------------------------------------------------------
// Shared pieces
// ---------------------------------------------------------------------------
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const waLink = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

// Pull only the icon symbols a page uses out of index.html's sprite.
const allSymbols = {};
for (const m of index.matchAll(/<symbol id="(i-[a-z0-9-]+)"[^>]*>[\s\S]*?<\/symbol>/g)) allSymbols[m[1]] = m[0];
function sprite(html) {
  const used = new Set([...html.matchAll(/href="#(i-[a-z0-9-]+)"/g)].map((m) => m[1]));
  used.add('i-times');
  const missing = [...used].filter((id) => !allSymbols[id]);
  if (missing.length) throw new Error('Icons missing from index.html sprite: ' + missing.join(', '));
  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">${[...used].map((id) => allSymbols[id]).join('')}</svg>`;
}

const icon = (id, box, w, cls = '') =>
  `<svg aria-hidden="true" class="icon ${cls}" width="${w}" height="1em" viewBox="0 0 ${box} 512" focusable="false"><use href="#${id}"/></svg>`;

const navLinks = [
  ['index.html', 'Naslovna'],
  ['masaza.html', 'Masaža'],
  ['nokti.html', 'Nokti'],
  ['ciscenje-lica.html', 'Čišćenje lica'],
  ['index.html#services', 'Sve usluge'],
  ['index.html#education', 'Edukacije'],
  ['index.html#contact', 'Kontakt'],
];
const mobileIcons = {
  'index.html': ['i-home', 576, '1.125em', 'text-pink-500'],
  'masaza.html': ['i-heart', 512, '1em', 'text-purple-500'],
  'nokti.html': ['i-hand-sparkles', 640, '1.25em', 'text-blue-500'],
  'ciscenje-lica.html': ['i-spa', 576, '1.125em', 'text-pink-500'],
  'index.html#services': ['i-concierge-bell', 512, '1em', 'text-purple-500'],
  'index.html#education': ['i-graduation-cap', 640, '1.25em', 'text-blue-500'],
  'index.html#contact': ['i-envelope', 512, '1em', 'text-purple-500'],
};

function navbar(current) {
  const desktop = navLinks
    .map(([href, label]) => {
      const active = href === current;
      return `<a href="${href}" class="relative px-3 xl:px-4 py-2 ${active ? 'text-pink-500' : 'text-gray-600'} font-medium group"${active ? ' aria-current="page"' : ''}>
                        <span class="relative z-10 group-hover:text-pink-500 transition duration-300">${label}</span>
                        <span class="absolute bottom-0 left-1/2 ${active ? 'w-full left-0' : 'w-0'} h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></span>
                    </a>`;
    })
    .join('\n                    ');
  const mobile = navLinks
    .map(([href, label]) => {
      const [id, box, w, color] = mobileIcons[href];
      const active = href === current;
      return `<a href="${href}" class="flex items-center px-4 py-3 ${active ? 'text-pink-500 bg-pink-50' : 'text-gray-600'} hover:text-pink-500 hover:bg-pink-50 rounded-xl transition duration-300 font-medium">
                        ${icon(id, box, w, 'w-6 ' + color)}
                        <span class="ml-3">${label}</span>
                    </a>`;
    })
    .join('\n                    ');
  return `<nav id="navbar" class="fixed w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur-lg border-b border-white/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-3 lg:py-4">
                <a href="index.html" class="flex items-center group">
                    <img src="assets/images/branding/logo-mark.svg" alt="" width="48" height="48" class="h-11 w-11 lg:h-12 lg:w-12 group-hover:scale-110 transition duration-300" aria-hidden="true">
                    <div class="ml-2.5">
                        <span class="text-xl lg:text-2xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Health&Beauty</span>
                        <span class="hidden sm:block text-xs text-gray-500 font-medium tracking-wider">CAZIN</span>
                    </div>
                </a>
                <div class="hidden lg:flex items-center space-x-1">
                    ${desktop}
                </div>
                <div class="flex items-center space-x-4">
                    <a href="#rezervacija" class="hidden sm:inline-flex lg:hidden xl:inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all duration-300">
                        ${icon('i-calendar-alt', 448, '0.875em', 'mr-2')}
                        Rezerviši
                    </a>
                    <button id="mobile-menu-btn" class="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-pink-100 transition duration-300" aria-label="Otvori meni" aria-expanded="false" aria-controls="mobile-menu">
                        <svg id="menu-icon" aria-hidden="true" class="icon text-gray-600 transition-transform duration-300" width="0.875em" height="1em" viewBox="0 0 448 512" focusable="false"><use href="#i-bars"/></svg>
                    </button>
                </div>
            </div>
            <div id="mobile-menu" class="lg:hidden hidden overflow-y-auto max-h-[calc(100vh-5rem)] transition-all duration-300 ease-in-out">
                <div class="py-4 space-y-1 border-t border-gray-100">
                    ${mobile}
                    <div class="pt-4 px-4">
                        <a href="#rezervacija" class="flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg transition duration-300">
                            ${icon('i-calendar-alt', 448, '0.875em', 'mr-2')}
                            Rezerviši Termin
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>`;
}

const footerLink = (href, label) =>
  `<li><a href="${href}" class="hover:text-pink-500 transition duration-300 flex items-center">${icon('i-chevron-right', 320, '0.625em', 'text-xs mr-2 text-pink-500')}${label}</a></li>`;

function footer() {
  return `<footer class="bg-gray-900 text-white pt-12 lg:pt-16 pb-36 sm:pb-12 lg:pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                <div class="lg:col-span-1">
                    <div class="flex items-center mb-6">
                        <img src="assets/images/branding/logo-mark.svg" alt="" width="48" height="48" class="h-12 w-12 mr-3" aria-hidden="true">
                        <div>
                            <span class="block text-xl font-bold leading-tight">Health&Beauty</span>
                            <span class="block text-xs text-gray-400 tracking-wider">CAZIN</span>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-4">Kozmetički i fizioterapeutski salon. Centar za edukacije. Ovlašteni Kryolan partner u Cazinu.</p>
                    <div class="flex space-x-3">
                        <a href="https://www.facebook.com/p/Healthbeauty-Zdravstveno-kozmeti%C4%8Dki-centar-100063604447564/?locale=hr_HR" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-xl flex items-center justify-center transition duration-300">${icon('i-facebook-f', 320, '0.625em', 'text-white')}</a>
                        <a href="https://www.instagram.com/health_beauty_cazin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-10 h-10 bg-gray-800 hover:bg-pink-500 rounded-xl flex items-center justify-center transition duration-300">${icon('i-instagram', 448, '0.875em', 'text-white')}</a>
                        <a href="${waLink('Pozdrav, želim rezervirati termin')}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-xl flex items-center justify-center transition duration-300">${icon('i-whatsapp', 448, '0.875em', 'text-white')}</a>
                        <a href="viber://chat?number=${WA}" aria-label="Viber" class="w-10 h-10 bg-gray-800 hover:bg-purple-500 rounded-xl flex items-center justify-center transition duration-300">${icon('i-viber', 512, '1em', 'text-white')}</a>
                    </div>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-6">Brzi Linkovi</h4>
                    <ul class="space-y-3 text-gray-400">
                        ${footerLink('index.html', 'Naslovna')}
                        ${footerLink('index.html#services', 'Usluge')}
                        ${footerLink('index.html#gallery', 'Galerija')}
                        ${footerLink('index.html#education', 'Edukacije')}
                        ${footerLink('index.html#kryolan', 'Kryolan')}
                        ${footerLink('index.html#about', 'O nama')}
                        ${footerLink('index.html#faq', 'FAQ')}
                        ${footerLink('index.html#contact', 'Kontakt')}
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-6">Usluge</h4>
                    <ul class="space-y-3 text-gray-400">
                        <li><a href="masaza.html" class="hover:text-pink-500 transition duration-300">Masaža</a></li>
                        <li><a href="ciscenje-lica.html" class="hover:text-pink-500 transition duration-300">Čišćenje lica i tretmani lica</a></li>
                        <li><a href="nokti.html" class="hover:text-pink-500 transition duration-300">Nokti, manikir i pedikir</a></li>
                        <li><a href="index.html#fizioterapija" class="hover:text-pink-500 transition duration-300">Fizioterapeutske usluge</a></li>
                        <li><a href="index.html#services" class="hover:text-pink-500 transition duration-300">Brow Lift & Lash Lift</a></li>
                        <li><a href="index.html#services" class="hover:text-pink-500 transition duration-300">Nadogradnja Trepavica</a></li>
                        <li><a href="index.html#kryolan" class="hover:text-pink-500 transition duration-300">Kryolan šminka</a></li>
                        <li><a href="index.html#education" class="hover:text-pink-500 transition duration-300">Edukacije</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-6">Kontakt</h4>
                    <ul class="space-y-4 text-gray-400">
                        <li class="flex items-start">${icon('i-map-marker-alt', 384, '0.75em', 'text-pink-500 mt-1 mr-3')}<span>Generala Izeta Nanića (Ćuprija), 77220 Cazin</span></li>
                        <li class="flex items-center">${icon('i-phone', 512, '1em', 'text-pink-500 mr-3')}<div><a href="tel:+38762216591" class="hover:text-pink-500 transition">+387 62 216 591</a><br><a href="tel:+38763299535" class="hover:text-pink-500 transition">+387 63 299 535</a></div></li>
                        <li class="flex items-center">${icon('i-envelope', 512, '1em', 'text-pink-500 mr-3')}<span class="break-all">info@healthandbeauty.ba</span></li>
                        <li class="flex items-center">${icon('i-clock', 512, '1em', 'text-pink-500 mr-3')}<span>PON-PET: 8-16h, SUB: 9-16h</span></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
                <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                    <span>&copy; <span id="current-year"></span> Health&Beauty Cazin. Sva prava zadržana.</span>
                    <a href="uvjeti-koristenja.html" class="px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 hover:text-pink-500 hover:bg-gray-700 transition whitespace-nowrap">Uvjeti korištenja</a>
                </div>
            </div>
        </div>
    </footer>`;
}

function floatingButtons(text) {
  return `<div class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col space-y-2 sm:space-y-3" role="group" aria-label="Brzi kontakt">
        <a href="${waLink(text)}" target="_blank" rel="noopener noreferrer" aria-label="Kontaktirajte nas putem WhatsApp-a" class="group relative w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300">
            ${icon('i-whatsapp', 448, '0.875em', 'text-white text-xl sm:text-2xl')}
            <span class="hidden sm:block absolute right-full mr-3 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap pointer-events-none">WhatsApp</span>
        </a>
        <a href="viber://chat?number=${WA}" aria-label="Kontaktirajte nas putem Viber-a" class="group relative w-12 h-12 sm:w-14 sm:h-14 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300">
            ${icon('i-viber', 512, '1em', 'text-white text-xl sm:text-2xl')}
            <span class="hidden sm:block absolute right-full mr-3 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap pointer-events-none">Viber</span>
        </a>
        <a href="tel:+38762216591" aria-label="Pozovite nas na telefon" class="group relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300">
            ${icon('i-phone', 512, '1em', 'text-white text-lg sm:text-xl')}
            <span class="hidden sm:block absolute right-full mr-3 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap pointer-events-none">Pozovite nas</span>
        </a>
    </div>`;
}

const script = `<script>
        document.getElementById('current-year').textContent = new Date().getFullYear();
        const navbar = document.getElementById('navbar');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        window.addEventListener('scroll', function () {
            const scrolled = window.scrollY > 50;
            navbar.classList.toggle('shadow-lg', scrolled);
            navbar.classList.toggle('bg-white/95', scrolled);
            navbar.classList.toggle('bg-white/80', !scrolled);
        });
        function setMenu(open) {
            mobileMenu.classList.toggle('hidden', !open);
            menuIcon.querySelector('use').setAttribute('href', open ? '#i-times' : '#i-bars');
            menuIcon.classList.toggle('rotate-90', open);
            mobileMenuBtn.setAttribute('aria-expanded', String(open));
        }
        mobileMenuBtn.addEventListener('click', () => setMenu(mobileMenu.classList.contains('hidden')));
        document.querySelectorAll('#mobile-menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
        window.addEventListener('resize', () => { if (window.innerWidth >= 1024) setMenu(false); });
        document.querySelectorAll('.faq-question').forEach((button) => {
            button.addEventListener('click', () => {
                const item = button.closest('.faq-item');
                const answer = item.querySelector('.faq-answer');
                const open = answer.classList.contains('hidden');
                document.querySelectorAll('.faq-item').forEach((other) => {
                    other.querySelector('.faq-answer').classList.add('hidden');
                    other.querySelector('.faq-question .icon').classList.remove('rotate-180');
                    other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                });
                if (open) {
                    answer.classList.remove('hidden');
                    button.querySelector('.icon').classList.add('rotate-180');
                    button.setAttribute('aria-expanded', 'true');
                }
            });
        });
    </script>`;

// ---------------------------------------------------------------------------
// Page template
// ---------------------------------------------------------------------------
function schema(p) {
  const url = `${SITE}/${p.slug}.html`;
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: p.h1,
    serviceType: p.schema.serviceType,
    description: p.description,
    url,
    image: `${SITE}/${p.heroImage.src}`,
    provider: { '@id': `${SITE}/#business` },
    areaServed: [{ '@type': 'City', name: 'Cazin' }, { '@type': 'City', name: 'Bihać' }, { '@type': 'City', name: 'Velika Kladuša' }, { '@type': 'City', name: 'Bosanska Krupa' }],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: p.treatmentsTitle,
      itemListElement: p.treatments.map((t) => {
        const offer = { '@type': 'Offer', itemOffered: { '@type': 'Service', name: t.name, description: t.desc } };
        const priced = p.schema.offers.find((o) => o.name === t.name);
        if (priced) offer.priceSpecification = { '@type': 'PriceSpecification', minPrice: priced.price, priceCurrency: 'BAM' };
        return offer;
      }),
    },
  };
  const business = {
    '@context': 'https://schema.org',
    '@type': ['HealthAndBeautyBusiness', 'LocalBusiness'],
    '@id': `${SITE}/#business`,
    name: 'Health&Beauty Cazin',
    url: `${SITE}/`,
    telephone: '+38762216591',
    image: `${SITE}/assets/images/social/og-image.jpg`,
    address: { '@type': 'PostalAddress', streetAddress: 'Generala Izeta Nanića', addressLocality: 'Cazin', addressRegion: 'Unsko-sanski kanton', postalCode: '77220', addressCountry: 'BA' },
    geo: { '@type': 'GeoCoordinates', latitude: 44.9656217, longitude: 15.923247 },
    hasMap: 'https://www.google.com/maps/place/Health%26Beauty+Cazin/@44.9656217,15.923247,17z',
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Početna', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Usluge', item: `${SITE}/#services` },
      { '@type': 'ListItem', position: 3, name: p.nav, item: url },
    ],
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return [service, business, breadcrumb, faq].map((o) => `<script type="application/ld+json">\n${JSON.stringify(o, null, 2)}\n</script>`).join('\n');
}

const cardGradients = [
  ['from-pink-50 to-purple-50', 'from-pink-500 to-purple-600'],
  ['from-purple-50 to-blue-50', 'from-purple-500 to-blue-600'],
  ['from-blue-50 to-green-50', 'from-blue-500 to-green-600'],
  ['from-pink-50 to-rose-50', 'from-pink-500 to-rose-600'],
  ['from-purple-50 to-indigo-50', 'from-purple-500 to-indigo-600'],
  ['from-orange-50 to-yellow-50', 'from-orange-500 to-yellow-500'],
];

function page(p) {
  const url = `${SITE}/${p.slug}.html`;
  const wa = waLink(p.whatsapp);
  const current = `${p.slug}.html`;

  const treatments = p.treatments
    .map((t, i) => {
      const [bg, fg] = cardGradients[i % cardGradients.length];
      return `<div class="bg-gradient-to-br ${bg} p-6 rounded-2xl hover:shadow-xl transition duration-300">
                    <div class="flex items-start justify-between gap-3 mb-3">
                        <h3 class="text-lg lg:text-xl font-bold text-gray-800">${t.name}</h3>
                        <span class="shrink-0 text-xs font-semibold text-white bg-gradient-to-r ${fg} px-3 py-1 rounded-full whitespace-nowrap">${t.meta}</span>
                    </div>
                    <p class="text-gray-600 text-sm lg:text-base">${t.desc}</p>
                </div>`;
    })
    .join('\n                ');

  const prices = p.prices
    .map(
      (r) => `<tr class="border-b border-gray-100 last:border-0">
                            <td class="py-3 pr-4 text-gray-700">${r.name}</td>
                            <td class="py-3 text-right font-semibold ${r.price === 'na upit' ? 'text-gray-500' : 'text-gray-800'} whitespace-nowrap">${r.price}</td>
                        </tr>`
    )
    .join('\n                        ');

  const steps = p.steps
    .map(
      (s, i) => `<li class="flex gap-4">
                        <span class="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold flex items-center justify-center">${i + 1}</span>
                        <div>
                            <h3 class="font-bold text-gray-800">${s.title}</h3>
                            <p class="text-gray-600 text-sm lg:text-base">${s.desc}</p>
                        </div>
                    </li>`
    )
    .join('\n                    ');

  const checks = (items, color) =>
    items.map((t) => `<li class="flex items-start">${icon('i-check-circle', 512, '1em', color + ' mt-1 mr-3 shrink-0')}<span>${t}</span></li>`).join('\n                        ');

  const gallery = p.gallery
    .map(
      (g) => `<figure class="rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                    <img src="${g.src}" alt="${esc(g.alt)}" loading="lazy" class="w-full h-64 lg:h-72 object-cover hover:scale-105 transition duration-500">
                </figure>`
    )
    .join('\n                ');

  const faq = p.faq
    .map(
      (f) => `<div class="faq-item bg-white rounded-2xl shadow-sm overflow-hidden">
                    <button class="faq-question w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition" aria-expanded="false">
                        <span class="font-semibold text-gray-800">${f.q}</span>
                        ${icon('i-chevron-down', 448, '0.875em', 'text-pink-500 transition-transform duration-300 flex-shrink-0')}
                    </button>
                    <div class="faq-answer hidden px-6 pb-5"><p class="text-gray-600 leading-relaxed">${f.a}</p></div>
                </div>`
    )
    .join('\n                ');

  const related = p.related
    .map(
      (r) => `<a href="${r.href}" class="inline-flex items-center bg-white border border-gray-200 hover:border-pink-300 text-gray-700 hover:text-pink-500 px-5 py-3 rounded-full font-semibold transition duration-300">${r.label}${icon('i-arrow-right', 448, '0.875em', 'ml-2')}</a>`
    )
    .join('\n                ');

  const body = `
    ${navbar(current)}

    <main class="pt-20">
        <!-- Hero -->
        <section class="bg-gradient-to-br from-pink-50 to-purple-50 py-12 lg:py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav aria-label="Breadcrumb" class="text-sm text-gray-500 mb-6">
                    <ol class="flex flex-wrap items-center gap-2">
                        <li><a href="index.html" class="hover:text-pink-500">Početna</a></li>
                        <li aria-hidden="true">${icon('i-chevron-right', 320, '0.625em', 'text-xs text-pink-500')}</li>
                        <li><a href="index.html#services" class="hover:text-pink-500">Usluge</a></li>
                        <li aria-hidden="true">${icon('i-chevron-right', 320, '0.625em', 'text-xs text-pink-500')}</li>
                        <li class="text-gray-800 font-medium" aria-current="page">${p.nav}</li>
                    </ol>
                </nav>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div>
                        <span class="text-pink-500 font-semibold text-sm uppercase tracking-wider">Health&Beauty Cazin · ${p.kicker}</span>
                        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mt-3 mb-6 leading-tight">${p.h1}</h1>
                        ${p.intro.map((t) => `<p class="text-lg text-gray-600 mb-4 leading-relaxed">${t}</p>`).join('\n                        ')}
                        <div class="flex flex-wrap items-center gap-3 mt-6">
                            <a href="${wa}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300">
                                ${icon('i-whatsapp', 448, '0.875em', 'mr-2')} Rezerviši putem WhatsAppa
                            </a>
                            <a href="tel:+38762216591" class="inline-flex items-center bg-white border border-gray-200 hover:border-pink-300 text-gray-800 px-6 py-3 rounded-full font-semibold transition duration-300">
                                ${icon('i-phone', 512, '1em', 'mr-2 text-pink-500')} 062 216 591
                            </a>
                        </div>
                        <a href="https://www.google.com/maps/place/Health%26Beauty+Cazin/@44.9656217,15.923247,17z" target="_blank" rel="noopener noreferrer" class="inline-flex items-center mt-6 text-sm text-gray-600 hover:text-pink-500 transition">
                            <span class="text-yellow-400 mr-2" aria-hidden="true">${icon('i-star', 576, '1.125em')}${icon('i-star', 576, '1.125em')}${icon('i-star', 576, '1.125em')}${icon('i-star', 576, '1.125em')}${icon('i-star', 576, '1.125em')}</span>
                            <span><strong class="text-gray-800">5,0</strong> na Google recenzijama · Cazin</span>
                        </a>
                    </div>
                    <figure class="relative">
                        <img src="${p.heroImage.src}" alt="${esc(p.heroImage.alt)}" width="1000" height="1000" class="w-full h-80 lg:h-[28rem] object-cover rounded-3xl shadow-xl">
                        <figcaption class="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow">${icon('i-map-marker-alt', 384, '0.75em', 'text-pink-500 mr-2')}Generala Izeta Nanića, Cazin</figcaption>
                    </figure>
                </div>
            </div>
        </section>

        <!-- Treatments -->
        <section id="tretmani" class="py-12 lg:py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header class="text-center mb-10 lg:mb-14">
                    <span class="text-pink-500 font-semibold text-sm uppercase tracking-wider">Usluge</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">${p.treatmentsTitle}</h2>
                </header>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${treatments}
                </div>
            </div>
        </section>

        <!-- Prices + how it works -->
        <section id="cjenovnik" class="py-12 lg:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                    <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Cjenovnik</h2>
                    <table class="w-full text-sm lg:text-base">
                        <tbody>
                        ${prices}
                        </tbody>
                    </table>
                    <p class="text-sm text-gray-500 mt-5">${p.priceNote}</p>
                    <a href="${wa}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center mt-5 text-green-600 font-semibold hover:text-green-700 transition">${icon('i-whatsapp', 448, '0.875em', 'mr-2')}Pošalji upit za cijenu</a>
                </div>
                <div>
                    <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Kako izgleda dolazak</h2>
                    <ol class="space-y-6">
                    ${steps}
                    </ol>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                        <div>
                            <h3 class="font-bold text-gray-800 mb-3">${p.forWhomTitle}</h3>
                            <ul class="space-y-2 text-gray-700 text-sm lg:text-base">
                        ${checks(p.forWhom, 'text-green-500')}
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-800 mb-3">${p.cautionTitle}</h3>
                            <ul class="space-y-2 text-gray-700 text-sm lg:text-base">
                        ${checks(p.caution, 'text-pink-500')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gallery -->
        <section id="galerija" class="py-12 lg:py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header class="text-center mb-10">
                    <span class="text-pink-500 font-semibold text-sm uppercase tracking-wider">Galerija</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Naši radovi</h2>
                </header>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(p.gallery.length, 4)} gap-6">
                ${gallery}
                </div>
                <p class="text-center mt-8"><a href="https://www.instagram.com/health_beauty_cazin/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-pink-500 font-semibold hover:text-purple-600 transition">${icon('i-instagram', 448, '0.875em', 'mr-2')}Više radova na Instagramu</a></p>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-12 lg:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header class="text-center mb-10">
                    <span class="text-pink-500 font-semibold text-sm uppercase tracking-wider">Često postavljana pitanja</span>
                    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Pitanja o usluzi</h2>
                </header>
                <div class="space-y-4">
                ${faq}
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section id="rezervacija" class="py-12 lg:py-20 bg-white">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-xl">
                    <h2 class="text-2xl lg:text-3xl font-bold mb-3">Rezervišite termin</h2>
                    <p class="text-white/90 mb-6 max-w-2xl mx-auto">Pošaljite poruku s uslugom i željenim terminom. Radimo ponedjeljak–petak 8–16h i subotom 9–16h, isključivo po zakazanom terminu.</p>
                    <div class="flex flex-wrap justify-center gap-3">
                        <a href="${wa}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition duration-300">${icon('i-whatsapp', 448, '0.875em', 'mr-2')}WhatsApp 062 216 591</a>
                        <a href="viber://chat?number=${WA}" class="inline-flex items-center bg-white/15 border border-white/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/25 transition duration-300">${icon('i-viber', 512, '1em', 'mr-2')}Viber</a>
                        <a href="tel:+38763299535" class="inline-flex items-center bg-white/15 border border-white/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/25 transition duration-300">${icon('i-phone', 512, '1em', 'mr-2')}063 299 535</a>
                    </div>
                </div>
                <div class="mt-10 text-center">
                    <p class="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-4">Pogledajte i</p>
                    <div class="flex flex-wrap justify-center gap-3">
                ${related}
                    </div>
                </div>
            </div>
        </section>
    </main>

    ${footer()}

    ${floatingButtons(p.whatsapp)}

    ${script}
`;

  return `<!DOCTYPE html>
<html lang="bs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title>${esc(p.title)}</title>
    <meta name="description" content="${esc(p.description)}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Health&Beauty Cazin">
    <link rel="canonical" href="${url}">

    <meta property="og:title" content="${esc(p.title)}">
    <meta property="og:description" content="${esc(p.description)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${SITE}/${p.heroImage.src}">
    <meta property="og:site_name" content="Health&Beauty Cazin">
    <meta property="og:locale" content="bs_BA">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(p.title)}">
    <meta name="twitter:description" content="${esc(p.description)}">
    <meta name="twitter:image" content="${SITE}/${p.heroImage.src}">

    <link rel="icon" href="assets/images/icons/favicon.ico" sizes="16x16 32x32 48x48">
    <link rel="icon" type="image/svg+xml" href="assets/images/icons/favicon.svg">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/icons/apple-touch-icon.png">
    <meta name="theme-color" content="#E0287A">
    <link rel="stylesheet" href="assets/css/tailwind.css">
    <style>
        [id] { scroll-margin-top: 5rem; }
        html, body { overflow-x: hidden; }
    </style>

${schema(p)}
</head>
<body class="bg-gray-50">
    ${sprite(body)}
${body}
</body>
</html>
`;
}

for (const p of pages) {
  const out = path.join(ROOT, `${p.slug}.html`);
  fs.writeFileSync(out, page(p), 'utf8');
  console.log('wrote', path.relative(ROOT, out));
}
