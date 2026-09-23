import './style.css'
import biblioOne from './assets/biblio-1.png'
import biblioTwo from './assets/biblio-2.png'
import symbole from './assets/symbole.png'

const masonicFolder = 'https://drive.google.com/drive/folders/1-49h8bbLXuZK388VnfXEfnrY8-jcVFhm?usp=drive_link'
const esotericFolder = 'https://github.com/OPacPower22/biblioteca-virtual-linda-meza/tree/main/Esoterismo%20y%20Masoner%C3%ADa'
const funds = [
  { title: '1800 audiolibros', icon: '🎧', group: 'Colecciones generales', url: 'https://drive.google.com/drive/folders/1eNIi91KWHTQur90rhSM5vevtIsgC_jsq' },
  { title: 'Biblioteca digital', icon: '📚', group: 'Colecciones generales', url: 'https://drive.google.com/drive/folders/1wkeJVCVKlqJsEbpsKenb02hOn_1bE1Ny' },
  { title: 'Pack de libros', icon: '▣', group: 'Colecciones generales', url: 'https://drive.google.com/drive/folders/1908wXS9fmo793D-TytqGNDXnuDDe9CSG' },
  { title: 'Más libros', icon: '＋', group: 'Colecciones generales', url: 'https://drive.google.com/drive/folders/1kpF2UmDyMX9_ZvDr_W8OCvpQj6sbnMIr' },
  { title: 'Varios autores', icon: '✦', group: 'Colecciones generales', url: 'https://drive.google.com/drive/folders/10AESNF8GXBsrIqQvqkZzWM72HpgZODMp' },
  { title: 'Educación financiera', icon: '₿', group: 'Desarrollo y negocios', url: 'https://drive.google.com/drive/folders/1TaMkFR54YAVwzy9x1s4Y1iXIK5YUAvT_' },
  { title: 'Emprendimiento, MKT y superación', icon: '↗', group: 'Desarrollo y negocios', url: 'https://drive.google.com/drive/u/0/mobile/folders/1vTRZBjGfh3RUsUxrV8I0Slm0AeFSrlWn?fbclid=IwAR3Sk_vVKzcxdeVniBapTkfimu8tH15scI2a8nIGZFSDr6fYF3MnmaY7QB8' },
  { title: '100 ideas de emprendimiento', icon: '✧', group: 'Desarrollo y negocios', url: 'https://drive.google.com/drive/folders/1PzJEQ2XJz30Eeqf1mJftPtgosS8V2rnO' },
  { title: 'Jorge Bucay', icon: 'J', group: 'Autores y literatura', url: 'https://drive.google.com/drive/mobile/folders/1hyFO14FzqJSdE7ZJJPzIvp8P-1HcDaAB?usp=sharing' },
  { title: 'Jane Austen', icon: 'A', group: 'Autores y literatura', url: 'https://drive.google.com/drive/mobile/folders/18dkNqqiDX1mD0wfHizW-4vi9RDZIKmaU?usp=sharing' },
  { title: 'Stephen King', icon: 'K', group: 'Autores y literatura', url: 'https://drive.google.com/drive/folders/0BzpbWpB0Ec4SflAyS0RQSDdLQjNVa05kRnpyTUtMbVZvRHRQUUFNTk5GUkZ4bFlMbkRKUG8?resourcekey=0-fMqROl-FUG9xzvKp1yoefQ' },
  { title: 'Walter Riso', icon: 'R', group: 'Autores y literatura', url: 'https://drive.google.com/drive/mobile/folders/12Gg3LM9v1jdBsQOekOhoQHll2ZAgZFu_' },
  { title: 'Nicholas Sparks', icon: 'N', group: 'Autores y literatura', url: 'https://drive.google.com/drive/mobile/folders/102aSTAcD6r7P3tm-nyCcT6hJh6FJyW-G' },
  { title: 'Jhon Katzenbach', icon: 'K', group: 'Autores y literatura', url: 'https://drive.google.com/drive/mobile/folders/1k9aGqIhtsLsxZSEv32Di9FEtdnmoXpcD' },
  { title: 'Lovecraft', icon: 'L', group: 'Autores y literatura', url: 'https://mega.nz/folder/H3hB3aJB#yfn9MrxJeVKU1gWmX_ItOg' },
  { title: 'Narnia', icon: 'N', group: 'Ficción y sagas', url: 'https://drive.google.com/folderview?id=16A13PrDWorxi9M6ulqJQuek8bOAVjjkA' },
  { title: '50 sombras', icon: '50', group: 'Ficción y sagas', url: 'https://mega.nz/folder/AchSXBoQ#5duVSiyt0tR-vMkP1ssnKA' },
  { title: 'Asesino de reyes', icon: '✦', group: 'Ficción y sagas', url: 'https://drive.google.com/drive/mobile/folders/1uEntWSBLqI6cBmQ7L5PUq5eUKYyLQW9b' },
  { title: 'Outlander', icon: 'O', group: 'Ficción y sagas', url: 'https://drive.google.com/drive/mobile/folders/1Adc098TmdxbB5q7hXnCdsxJBZs6i7mj8' },
  { title: 'Caballo de Troya', icon: 'C', group: 'Ficción y sagas', url: 'https://drive.google.com/drive/mobile/folders/1LnL6bqOQMpTRgBTV7SlLG6v76DlDd-wO' },
  { title: 'Game of Thrones', icon: 'G', group: 'Ficción y sagas', url: 'https://mega.nz/folder/LZUElYLT#RF1tYwrhioo1V4meuyTSAQ' },
  { title: 'Harry y James Potter', icon: '⚡', group: 'Ficción y sagas', url: 'https://mega.nz/folder/eVBTXQaJ#SAJvjbiEYkDO8p3w3zIdxQ' },
  { title: 'Gatos guerreros', icon: 'G', group: 'Ficción y sagas', url: 'https://drive.google.com/drive/mobile/folders/1X--iHJwnw0rrbJ_FaPTsStw_KKsOjJPI' },
  { title: 'Cazadores de sombras', icon: '☽', group: 'Ficción y sagas', url: 'https://drive.google.com/drive/mobile/folders/1-40frFRraZejWarPlaXNlP2zTsrS4ABi' },
  { title: 'El señor de los anillos', icon: 'R', group: 'Ficción y sagas', url: 'https://drive.google.com/drive/mobile/folders/1APNWDOYl1aArUs8975gWFa11Zeqhf4yC' },
  { title: 'Medicina', icon: '✚', group: 'Ciencias de la salud', url: 'https://drive.google.com/drive/folders/1IVs_aaCYxHHlqG5EyTjBK4CxCs81_XNZ' },
  { title: 'Medicina: 1100 diagramas', icon: '✚', group: 'Ciencias de la salud', url: 'https://tinyurl.com/1100DiagramasMedicos' },
  { title: 'Medicina: colección complementaria', icon: '✚', group: 'Ciencias de la salud', url: 'https://drive.google.com/drive/mobile/folders/1mLmHj7bDldLUiVBaO7Okmhdo2G56VJO0?sort=13&direction=a&fbclid=IwAR28aj2qGK3_Kt_h6Dco_CRsg7yfUpQbgsV9JveDNqyY7OqmnvE_C8U_K9I' },
  { title: 'Enfermería', icon: '＋', group: 'Ciencias de la salud', url: 'https://drive.google.com/drive/mobile/folders/15GGG2P1GUTj0_gnN6eHy3ed063-CD9ER' },
  { title: 'Enfermería: colección complementaria', icon: '＋', group: 'Ciencias de la salud', url: 'https://drive.google.com/drive/mobile/folders/1rxH37ZYtCIDJ224Yjh0c6J8KmSZcdZSi' },
  { title: 'Odontología', icon: '☼', group: 'Ciencias de la salud', url: 'https://drive.google.com/drive/mobile/folders/1O9dAtdGCgh9mbXUpMtYOm9stxMbHx7DG' },
  { title: 'Veterinaria', icon: '♞', group: 'Ciencias de la salud', url: 'https://drive.google.com/drive/mobile/folders/1mzg8hWGJLdgBvBWESuDyR7PJ3f5S3F-_' },
  { title: 'Psicología oscura', icon: '◐', group: 'Ciencias humanas', url: 'https://drive.google.com/file/d/1H4hl1P4PYeigvQR-HIQMInGbOWk37gx_/view' },
  { title: 'Idiomas', icon: 'A/', group: 'Recursos de estudio', url: 'https://drive.google.com/drive/mobile/folders/1Dm6vhwHoIO3UmHngvjlIHROQLAqMzuoo' },
  { title: 'Autores clásicos', icon: '⌘', group: 'Recursos de estudio', url: 'https://drive.google.com/drive/mobile/folders/0BwxbUNiKeAdLTGRVSkJzUlpUNFU?fbclid=IwAR3X7a4c_Rm6XbG0KLWRHMUp-z1yzRx--UD7M_L0qT8RVBOulSstoPBX_Eo&resourcekey=0-ScpOMrxzAdtNOjf_D6Z1lg' },
  { title: 'PDF variados', icon: 'PDF', group: 'Recursos de estudio', url: 'https://drive.google.com/drive/folders/1i6gldzGV4lJxF-fv641grVK0IKo5kov8?usp=sharing' },
  { title: 'Papelería digital', icon: '✎', group: 'Recursos de estudio', url: 'https://drive.google.com/drive/folders/1wTyBXgxuXzxCt68AGb5dG1m5JwD7ULMV' },
  { title: 'Monografías', icon: '▤', group: 'Recursos de estudio', url: 'https://drive.google.com/drive/folders/1wTyBXgxuXzxCt68AGb5dG1m5JwD7ULMV' },
  { title: 'Biografías', icon: '♙', group: 'Recursos de estudio', url: 'https://drive.google.com/drive/folders/16nL41jnty21jGEwb5alyEUogoKthrAYz' },
  { title: 'Mapas', icon: '⌖', group: 'Recursos de estudio', url: 'https://drive.google.com/drive/folders/15GqsNU1rHN-JOHD1dvBCDabpoSjl8ksn' },
  { title: 'Cursos técnicos', icon: '⚙', group: 'Recursos de estudio', url: 'https://drive.google.com/drive/folders/1-DN0N0R8WQ8lNLIv0rgSCNd1qCnipl5G' },
  { title: 'Regalos y PDF', icon: '✦', group: 'Recursos de estudio', url: 'https://drive.google.com/drive/folders/1PzJEQ2XJz30Eeqf1mJftPtgosS8V2rnO' },
  { title: 'Biblioteca masónica', icon: '⚒', group: 'Masonería simbólica', url: masonicFolder },
  { title: 'Esoterismo y Masonería', icon: '⚒', group: 'Masonería simbólica', url: esotericFolder },
]

const groups = ['Todos', ...new Set(funds.map((fund) => fund.group))]
const icon = (name) => ({ search: '⌕', arrow: '↗', menu: '☰' })[name]

document.querySelector('#app').innerHTML = `
  <header class="site-header"><a class="brand" href="#inicio" aria-label="Biblioteca Virtual Dra. Linda Meza"><span class="brand-mark">⚒</span><span><strong>Biblioteca Virtual</strong><small>Dra. Linda Meza</small></span></a><nav class="nav-links"><a href="#colecciones">Colecciones</a><a href="#destacados">Fondos destacados</a><a class="nav-archive" href="${masonicFolder}" target="_blank" rel="noreferrer">Masonería ${icon('arrow')}</a></nav><button class="menu-button" type="button" aria-label="Abrir menú">${icon('menu')}</button></header>
  <main id="inicio"><section class="hero-section"><div class="hero-copy"><p class="eyebrow"><span></span> Archivo de lectura y conocimiento</p><h1>Una casa para <em>buscar la luz.</em></h1><p class="hero-lede">Una biblioteca digital abierta para explorar literatura, ciencia, salud, formación y memoria masónica desde un mismo lugar.</p><div class="hero-actions"><a class="button button-gold" href="#colecciones">Explorar colecciones ${icon('arrow')}</a><a class="text-link" href="#destacados">Ver fondos destacados</a></div></div><div class="hero-art" style="background-image: linear-gradient(135deg, rgba(18,32,51,.22), rgba(110,46,52,.7)), url('${biblioOne}')" role="img" aria-label="Biblioteca digital con libros y documentos"><div class="art-sun">✦</div><div class="art-eye">◉</div><div class="art-book"><span>G</span></div><div class="art-compass"></div><div class="art-label">LUX · VERITAS · FRATERNITAS</div></div></section>
  <section class="stats-bar"><div><strong>${funds.length}</strong><span>Fondos enlazados</span></div><div><strong>${groups.length - 1}</strong><span>Áreas de lectura</span></div><div><strong>03</strong><span>Acervos masónicos</span></div><div class="stats-note">“La ciencia es la luz del espíritu.”</div></section>
  <section class="library-section" id="colecciones"><div class="section-heading"><div><p class="eyebrow"><span></span> Catálogo organizado</p><h2>La sala de lectura</h2></div><p class="section-intro">Todos los enlaces compartidos, ordenados por tema para encontrar el próximo libro con menos ruido.</p></div><div class="toolbar"><label class="search-box">${icon('search')}<input id="search" type="search" placeholder="Buscar colección o autor..." aria-label="Buscar en las colecciones"></label><div class="filter-group" role="group" aria-label="Filtrar colecciones">${groups.map((group) => `<button class="filter ${group === 'Todos' ? 'active' : ''}" data-filter="${group}">${group}</button>`).join('')}</div></div><div class="fund-grid" id="fund-grid"></div><p class="empty-state" id="empty-state" hidden>No encontramos fondos con ese criterio.</p></section>
  <section class="featured-section" id="destacados"><div class="featured-image" style="background-image: linear-gradient(135deg, rgba(18,32,51,.2), rgba(110,46,52,.72)), url('${biblioTwo}')"><div class="image-medallion"><img src="${symbole}" alt="Símbolo masónico de escuadra y compás"></div></div><div class="featured-copy"><p class="eyebrow"><span></span> Fondos destacados</p><h2>Lecturas que abren nuevas puertas.</h2><p>Desde audiolibros y sagas literarias hasta medicina, emprendimiento y formación técnica. Cada tarjeta te lleva directamente a su carpeta de consulta.</p><a class="button button-outline-dark" href="#colecciones">Recorrer el archivo ${icon('arrow')}</a></div></section>
  <section class="archive-band"><div class="archive-symbol">✦</div><div><p class="eyebrow"><span></span> Colección de referencia</p><h2>El archivo masónico continúa.</h2><p>Consulta los fondos de la Dra. Linda Meza para acceder a textos de historia, ritos, filosofía e instrucción.</p></div><a class="button button-outline" href="${masonicFolder}" target="_blank" rel="noreferrer">Abrir acervo masónico ${icon('arrow')}</a></section></main><footer><span>© 2026 Biblioteca Virtual Dra. Linda Meza</span><span>Estudio · Fraternidad · Progreso</span></footer>`

const grid = document.querySelector('#fund-grid')
const emptyState = document.querySelector('#empty-state')
let activeFilter = 'Todos'
function renderFunds() {
  const query = document.querySelector('#search').value.toLowerCase().trim()
  const visible = funds.filter((fund) => (activeFilter === 'Todos' || fund.group === activeFilter) && `${fund.title} ${fund.group}`.toLowerCase().includes(query))
  grid.innerHTML = visible.map((fund, index) => `<article class="fund-card" style="--delay:${index * 25}ms"><div class="fund-top"><span class="fund-icon">${fund.icon}</span><span class="fund-arrow">${icon('arrow')}</span></div><span class="fund-group">${fund.group}</span><h3>${fund.title}</h3><p>Acceso directo al fondo documental compartido.</p><a href="${fund.url}" target="_blank" rel="noopener noreferrer">Abrir colección ${icon('arrow')}</a></article>`).join('')
  emptyState.hidden = visible.length > 0
}
document.querySelector('#search').addEventListener('input', renderFunds)
document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); activeFilter = button.dataset.filter; renderFunds() }))
document.querySelector('.menu-button').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('open'))
renderFunds()
