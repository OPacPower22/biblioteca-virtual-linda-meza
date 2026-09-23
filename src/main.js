import './style.css'

const driveFolder = 'https://drive.google.com/drive/folders/1-49h8bbLXuZK388VnfXEfnrY8-jcVFhm?usp=drive_link'
const secondFolder = 'https://drive.google.com/drive/folders/1QMJJp81qQTtcw-Bb5qd4viw103NCh_Eb?usp=sharing'
const books = [
  { title: 'Los orígenes religiosos de la masonería', author: 'Colección de estudios', category: 'Historia', type: 'PDF', featured: true },
  { title: 'Los rosacruces y sus enseñanzas', author: 'Reuben Swinburne Clymer', category: 'Esoterismo', type: 'PDF' },
  { title: 'Morals and Dogma', author: 'Albert Pike', category: 'Rito Escocés', type: 'PDF', featured: true },
  { title: '33 grados de la masonería', author: 'Biblioteca simbólica', category: 'Rito Escocés', type: 'PDF' },
  { title: 'Manual de masonería', author: 'Andrés Cassard', category: 'Instrucción', type: 'PDF' },
  { title: 'La iniciación masónica', author: 'Colección de estudios', category: 'Iniciación', type: 'PDF' },
  { title: 'Curso filosófico de las iniciaciones', author: 'Jean-Marie Ragon', category: 'Filosofía', type: 'PDF' },
  { title: 'El Trivium: las artes liberales', author: 'Joseph Sister Miriam', category: 'Filosofía', type: 'PDF' },
]
const icon = (name) => ({ search: '⌕', book: '▣', arrow: '↗', menu: '☰' })[name]

document.querySelector('#app').innerHTML = `
<header class="site-header"><a class="brand" href="#inicio" aria-label="Biblioteca Virtual Dra. Linda Meza"><span class="brand-mark" aria-hidden="true">⚒</span><span><strong>Biblioteca Virtual</strong><small>Dra. Linda Meza</small></span></a><nav class="nav-links" aria-label="Navegación principal"><a href="#colecciones">Colecciones</a><a href="#acerca">Acerca del acervo</a><a class="nav-archive" href="${driveFolder}" target="_blank" rel="noreferrer">Abrir Drive ${icon('arrow')}</a></nav><button class="menu-button" type="button" aria-label="Abrir menú">${icon('menu')}</button></header>
<main id="inicio"><section class="hero-section"><div class="hero-copy"><p class="eyebrow"><span></span> Archivo de conocimiento simbólico</p><h1>Una biblioteca para <em>buscar la luz.</em></h1><p class="hero-lede">Un espacio de estudio, memoria y fraternidad dedicado a preservar las voces que han construido la tradición masónica.</p><div class="hero-actions"><a class="button button-gold" href="#colecciones">Explorar el acervo ${icon('arrow')}</a><a class="text-link" href="#acerca">Conocer la biblioteca</a></div></div><div class="hero-emblem" aria-label="Símbolo masónico: escuadra, compás y estrella"><div class="compass compass-left"></div><div class="compass compass-right"></div><div class="square-mark"></div><div class="hero-star">✦</div><span class="emblem-label">LUX · VERITAS · FRATERNITAS</span></div></section>
<section class="stats-bar" aria-label="Resumen del acervo"><div><strong>08</strong><span>Obras destacadas</span></div><div><strong>06</strong><span>Áreas de estudio</span></div><div><strong>02</strong><span>Fondos documentales</span></div><div class="stats-note">“La ciencia es la luz del espíritu.”</div></section>
<section class="library-section" id="colecciones"><div class="section-heading"><div><p class="eyebrow"><span></span> Catálogo digital</p><h2>La sala de lectura</h2></div><p class="section-intro">Textos para recorrer la historia, los ritos y la filosofía de la masonería simbólica.</p></div><div class="toolbar"><label class="search-box">${icon('search')}<input id="search" type="search" placeholder="Buscar por título o autor..." aria-label="Buscar en el catálogo"></label><div class="filter-group" role="group" aria-label="Filtrar por categoría"><button class="filter active" data-filter="Todos">Todos</button><button class="filter" data-filter="Historia">Historia</button><button class="filter" data-filter="Rito Escocés">Rito escocés</button><button class="filter" data-filter="Filosofía">Filosofía</button><button class="filter" data-filter="Iniciación">Iniciación</button></div></div><div class="book-grid" id="book-grid"></div><p class="empty-state" id="empty-state">No encontramos obras con ese criterio.</p></section>
<section class="archive-band" id="acerca"><div class="archive-symbol">✦</div><div><p class="eyebrow"><span></span> Fondos enlazados</p><h2>El archivo continúa más allá de estas páginas.</h2><p>Consulta el fondo documental compartido para acceder a la colección completa de textos, planchas e instrucciones.</p></div><a class="button button-outline" href="${driveFolder}" target="_blank" rel="noreferrer">Ver colección completa ${icon('arrow')}</a></section><section class="collection-note"><div><span class="note-number">01</span><h2>Una casa para la memoria</h2></div><p>La Biblioteca Virtual Dra. Linda Meza nace para ordenar, compartir y hacer accesible un patrimonio de estudio que crece con cada nueva lectura.</p><a class="text-link" href="${secondFolder}" target="_blank" rel="noreferrer">Visitar fondo complementario ${icon('arrow')}</a></section></main><footer><span>© 2026 Biblioteca Virtual Dra. Linda Meza</span><span>Estudio · Fraternidad · Progreso</span></footer>`

const grid = document.querySelector('#book-grid')
const emptyState = document.querySelector('#empty-state')
let activeFilter = 'Todos'
function renderBooks() {
  const query = document.querySelector('#search').value.toLowerCase().trim()
  const visible = books.filter((book) => (activeFilter === 'Todos' || book.category === activeFilter) && `${book.title} ${book.author}`.toLowerCase().includes(query))
  grid.innerHTML = visible.map((book, index) => `<article class="book-card ${book.featured ? 'featured' : ''}" style="--delay: ${index * 60}ms"><div class="book-top"><span class="book-type">${book.type}</span><span class="book-icon">${icon('book')}</span></div><div class="book-cover"><span>${book.title.split(' ').slice(0, 2).join(' ')}</span><b>✦</b><small>Biblioteca<br>Linda Meza</small></div><div class="book-info"><span class="category">${book.category}</span><h3>${book.title}</h3><p>${book.author}</p><a href="${driveFolder}" target="_blank" rel="noreferrer" aria-label="Abrir ${book.title}">Abrir lectura ${icon('arrow')}</a></div></article>`).join('')
  emptyState.hidden = visible.length > 0
}
document.querySelector('#search').addEventListener('input', renderBooks)
document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); activeFilter = button.dataset.filter; renderBooks() }))
document.querySelector('.menu-button').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('open'))
renderBooks()
