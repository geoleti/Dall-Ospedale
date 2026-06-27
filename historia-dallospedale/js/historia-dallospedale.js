const family = [
  {
    role: 'Bisabuelo italiano',
    name: 'Pietro Luigi Giuseppe Dall’Ospedale',
    born: '11 de marzo de 1874 · Casalmaggiore, Cremona',
    death: '18 de mayo de 1922 · Buenos Aires',
    notes: 'Casado con Tomasa Rodríguez en Buenos Aires el 27 de agosto de 1897.'
  },
  {
    role: 'Abuelo',
    name: 'Luis Vicente Dall’Ospedale',
    born: '7 de junio de 1907 · Capital Federal',
    death: '21 de agosto de 1987 · Lomas de Zamora',
    notes: 'Hijo de Pietro/Luis Dall’Ospedale y Tomasa Rodríguez.'
  },
  {
    role: 'Papá',
    name: 'Héctor Dall’Ospedale',
    born: '14 de noviembre de 1943 · Avellaneda',
    death: 'Dato no incorporado',
    notes: 'Hijo de Luis Vicente Dall’Ospedale y Carmen Lucía Hermida.'
  }
];

const timeline = [
  {
    year: '1874',
    person: 'pietro',
    title: 'Nacimiento en Casalmaggiore',
    text: 'Pietro Luigi Giuseppe Dall’Ospedale nace en Casalmaggiore, provincia de Cremona, hijo de Ettore Dall’Ospedale y Maddalena Mortara.'
  },
  {
    year: '1890',
    person: 'pietro',
    title: 'Primer registro migratorio a revisar',
    text: 'Constancia del AGN a nombre de Giuseppe Dall’Ospedale, con arribo desde Génova en el buque Rosario. La edad transcripta requiere verificación documental.'
  },
  {
    year: '1897',
    person: 'pietro',
    title: 'Matrimonio en Buenos Aires',
    text: 'Pietro/Luis contrae matrimonio con Tomasa Rodríguez el 27 de agosto de 1897 en Buenos Aires.'
  },
  {
    year: '1907',
    person: 'luis',
    title: 'Nacimiento de Luis Vicente',
    text: 'Nace Luis Vicente Dall’Ospedale, hijo legítimo de Luis/Pietro Dall’Ospedale y Tomasa Rodríguez.'
  },
  {
    year: '1914',
    person: 'pietro',
    title: 'Segundo registro migratorio a revisar',
    text: 'Constancia del AGN a nombre de Giuseppe Dall’Ospedale, arribo desde Génova en el buque Regina Elena. La edad y profesión registradas deben confrontarse con la fuente original.'
  },
  {
    year: '1922',
    person: 'pietro',
    title: 'Fallecimiento de Pietro/Luis',
    text: 'Muere en Buenos Aires. El acta fue luego transcripta y rectificada en registros argentinos e italianos.'
  },
  {
    year: '1943',
    person: 'hector',
    title: 'Nacimiento de Héctor',
    text: 'Nace Héctor Dall’Ospedale en Avellaneda, Provincia de Buenos Aires.'
  },
  {
    year: '1987',
    person: 'luis',
    title: 'Fallecimiento de Luis Vicente',
    text: 'Luis Vicente Dall’Ospedale fallece en Lomas de Zamora. El acta registra su filiación con Luis Dall’Ospedale y Tomasa Rodríguez.'
  },
  {
    year: '2002',
    person: 'pietro',
    title: 'Inscripción de defunción en Buenos Aires',
    text: 'La documentación argentina incluye inscripciones y rectificaciones posteriores vinculadas con Pietro/Luis Dall’Ospedale.'
  },
  {
    year: '2014',
    person: 'pietro',
    title: 'Certificado italiano de nacimiento',
    text: 'El Comune di Casalmaggiore emite el estratto per riassunto dell’atto di nascita de Pietro Luigi Giuseppe Dall’Ospedale.'
  }
];

const documents = [
  {
    title: 'Nacimiento de Pietro Luigi Giuseppe',
    type: 'image',
    description: 'Acta o copia del nacimiento en Casalmaggiore, base de la línea familiar documentada.',
    url: '../documentos/1 Pietro Luigi Giuseppe Dall\'Ospedale (bisabuelo italiano)/Acta Nacimiento Pietro Luigi Giuseppe Dall Ospedale.jpg'
  },
  {
    title: 'Certificado italiano de nacimiento',
    type: 'pdf',
    description: 'Estratto per riassunto dell’atto di nascita emitido por el Comune di Casalmaggiore.',
    url: '../documentos/1 Pietro Luigi Giuseppe Dall\'Ospedale (bisabuelo italiano)/Acta de nacimiento Pietro Luigi Giuseppe Dall\'Ospedale (enviada de Italia).pdf'
  },
  {
    title: 'Registro migratorio 1890',
    type: 'pdf',
    description: 'Constancia del AGN del arribo de Giuseppe Dall’Ospedale desde Génova en el buque Rosario.',
    url: '../documentos/1 Pietro Luigi Giuseppe Dall\'Ospedale (bisabuelo italiano)/Constancia registro migratorio Dall\'Ospedale Giuseppe 1890.pdf'
  },
  {
    title: 'Registro migratorio 1914',
    type: 'pdf',
    description: 'Constancia del AGN del arribo de Giuseppe Dall’Ospedale desde Génova en el buque Regina Elena.',
    url: '../documentos/1 Pietro Luigi Giuseppe Dall\'Ospedale (bisabuelo italiano)/Constancia registro migratorio Dall\'Ospedale Giuseppe 1914.pdf'
  },
  {
    title: 'Defunción de Pietro/Luis · hoja 1',
    type: 'image',
    description: 'Primera hoja del acta de defunción rectificada de Pietro/Luis Dall’Ospedale.',
    url: '../documentos/1 Pietro Luigi Giuseppe Dall\'Ospedale (bisabuelo italiano)/Hoja 1 Acta Def Pietro Luigi Giuseppe Dall\'Ospedale (rectificada).jpg'
  },
  {
    title: 'Defunción de Pietro/Luis · hoja 2',
    type: 'image',
    description: 'Segunda hoja del acta de defunción rectificada de Pietro/Luis Dall’Ospedale.',
    url: '../documentos/1 Pietro Luigi Giuseppe Dall\'Ospedale (bisabuelo italiano)/Hoja 2 Acta Def Pietro Luigi Giuseppe Dall\'Ospedale (rectificada).jpg'
  },
  {
    title: 'Nacimiento de Luis Vicente',
    type: 'image',
    description: 'Acta de nacimiento de Luis Vicente Dall’Ospedale.',
    url: '../documentos/2 Luis Vicente Dall\'Ospedale (abuelo)/Acta Nacimiento de Luis Vicente Dall\'Ospedale (abuelo).jpg'
  },
  {
    title: 'Matrimonio de Luis Vicente · hoja 1',
    type: 'image',
    description: 'Primera hoja del acta de matrimonio de Luis Vicente Dall’Ospedale y Carmen Lucía Hermida.',
    url: '../documentos/2 Luis Vicente Dall\'Ospedale (abuelo)/Hoja 1 Acta Matrimonio Luis Vicente Dall\'Ospedale.jpg'
  },
  {
    title: 'Matrimonio de Luis Vicente · hoja 2',
    type: 'image',
    description: 'Segunda hoja del acta de matrimonio de Luis Vicente Dall’Ospedale y Carmen Lucía Hermida.',
    url: '../documentos/2 Luis Vicente Dall\'Ospedale (abuelo)/Hoja 2 Acta Matrimonio Luis Vicente Dall\'Ospedale.jpg'
  },
  {
    title: 'Defunción de Luis Vicente',
    type: 'image',
    description: 'Acta de defunción de Luis Vicente Dall’Ospedale.',
    url: '../documentos/2 Luis Vicente Dall\'Ospedale (abuelo)/Acta Defunción Luis Vicente Dall\'Ospedale.jpg'
  },
  {
    title: 'Nacimiento de Héctor',
    type: 'image',
    description: 'Acta de nacimiento de Héctor Dall’Ospedale.',
    url: '../documentos/3 Hector Dall\'Ospedale (papá)/Acta de Nacimiento Héctor Dall\'Ospedale.jpg'
  }
];

const familyTree = document.querySelector('#familyTree');
const timelineContainer = document.querySelector('#timeline');
const documentGrid = document.querySelector('#documentGrid');
const menuButton = document.querySelector('#menuButton');
const mainNav = document.querySelector('#mainNav');
const viewer = document.querySelector('#viewer');
const viewerImage = document.querySelector('#viewerImage');
const viewerCaption = document.querySelector('#viewerCaption');
const closeViewer = document.querySelector('#closeViewer');

function encodePath(path) {
  return path.split('/').map((part, index) => index === 0 ? part : encodeURIComponent(part)).join('/');
}

function renderFamilyTree() {
  familyTree.innerHTML = family.map(person => `
    <article class="person">
      <div class="person__role">${person.role}</div>
      <h3>${person.name}</h3>
      <dl>
        <div><dt>Nacimiento</dt><dd>${person.born}</dd></div>
        <div><dt>Fallecimiento</dt><dd>${person.death}</dd></div>
        <div><dt>Notas</dt><dd>${person.notes}</dd></div>
      </dl>
    </article>
  `).join('');
}

function renderTimeline(filter = 'todos') {
  const items = filter === 'todos' ? timeline : timeline.filter(item => item.person === filter);
  timelineContainer.innerHTML = items.map(item => `
    <article class="timeline__item" data-person="${item.person}">
      <div class="timeline__date">${item.year}</div>
      <div class="timeline__title">${item.title}</div>
      <p class="timeline__text">${item.text}</p>
    </article>
  `).join('');
}

function renderDocuments() {
  documentGrid.innerHTML = documents.map((doc, index) => {
    const href = encodePath(doc.url);
    const preview = doc.type === 'image'
      ? `<img src="${href}" alt="${doc.title}" loading="lazy" onerror="this.closest('.doc-card__preview').innerHTML='<div class=&quot;doc-card__pdf&quot;>IMG</div>'" />`
      : '<div class="doc-card__pdf">PDF</div>';

    const imageButton = doc.type === 'image'
      ? `<button type="button" data-viewer-index="${index}">Ver imagen</button>`
      : '';

    return `
      <article class="doc-card">
        <div class="doc-card__preview">${preview}</div>
        <div class="doc-card__body">
          <h3>${doc.title}</h3>
          <p>${doc.description}</p>
          <div class="doc-card__actions">
            <a href="${href}" target="_blank" rel="noopener">Abrir archivo</a>
            ${imageButton}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function openViewer(index) {
  const doc = documents[index];
  if (!doc || doc.type !== 'image') return;
  viewerImage.src = encodePath(doc.url);
  viewerImage.alt = doc.title;
  viewerCaption.textContent = `${doc.title}. ${doc.description}`;
  if (typeof viewer.showModal === 'function') {
    viewer.showModal();
  } else {
    window.open(encodePath(doc.url), '_blank', 'noopener');
  }
}

function setupEvents() {
  document.querySelectorAll('.chip').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('is-active'));
      button.classList.add('is-active');
      renderTimeline(button.dataset.filter);
    });
  });

  documentGrid.addEventListener('click', event => {
    const button = event.target.closest('[data-viewer-index]');
    if (!button) return;
    openViewer(Number(button.dataset.viewerIndex));
  });

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('is-open', !expanded);
    document.body.classList.toggle('is-menu-open', !expanded);
  });

  mainNav.addEventListener('click', event => {
    if (!event.target.matches('a')) return;
    menuButton.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
    document.body.classList.remove('is-menu-open');
  });

  closeViewer.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    const rect = viewer.getBoundingClientRect();
    const clickedOutside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (clickedOutside) viewer.close();
  });
}

renderFamilyTree();
renderTimeline();
renderDocuments();
setupEvents();
