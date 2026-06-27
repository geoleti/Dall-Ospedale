const docsBase = "../documentos/";

const documents = [
  {
    id:"pietro-certificado-italia",
    person:"pietro",
    title:"Acta de nacimiento italiana",
    year:"1874 / emitida 2014",
    folder:"1 Pietro Luigi Giuseppe Dall'Ospedale (bisabuelo italiano)",
    file:"Acta de nacimiento Pietro Luigi Giuseppe Dall'Ospedale (enviada de Italia).jpg",
    type:"image",
    caption:"Extracto por resumen del acta de nacimiento de Pietro Luigi Giuseppe Dall’Ospedale, Casalmaggiore."
  },
  {
    id:"pietro-acta-original",
    person:"pietro",
    title:"Acta de nacimiento / copia",
    year:"1874",
    folder:"1 Pietro Luigi Giuseppe Dall'Ospedale (bisabuelo italiano)",
    file:"Acta Nacimiento Pietro Luigi Giuseppe Dall Ospedale.jpg",
    type:"image",
    caption:"Copia del acta de nacimiento de Pietro Luigi Giuseppe Dall’Ospedale."
  },
  {
    id:"pietro-migracion-1890",
    person:"pietro",
    title:"Registro migratorio Giuseppe Dall’Ospedale",
    year:"1890",
    folder:"1 Pietro Luigi Giuseppe Dall'Ospedale (bisabuelo italiano)",
    file:"Constancia registro migratorio Dall'Ospedale Giuseppe 1890.pdf",
    type:"pdf",
    caption:"Constancia del AGN: arribo desde Génova en el buque Rosario. Dato a verificar por diferencia de edad."
  },
  {
    id:"pietro-migracion-1914",
    person:"pietro",
    title:"Registro migratorio Giuseppe Dall’Ospedale",
    year:"1914",
    folder:"1 Pietro Luigi Giuseppe Dall'Ospedale (bisabuelo italiano)",
    file:"Constancia registro migratorio Dall'Ospedale Giuseppe 1914.pdf",
    type:"pdf",
    caption:"Constancia del AGN: arribo desde Génova en el buque Regina Elena. Dato a verificar por diferencia de edad."
  },
  {
    id:"pietro-def-1",
    person:"pietro",
    title:"Acta de defunción rectificada · hoja 1",
    year:"1922 / 2002",
    folder:"1 Pietro Luigi Giuseppe Dall'Ospedale (bisabuelo italiano)",
    file:"Hoja 1 Acta Def Pietro Luigi Giuseppe Dall'Ospedale (rectificada).jpg",
    type:"image",
    caption:"Primera hoja del acta de defunción rectificada."
  },
  {
    id:"pietro-def-2",
    person:"pietro",
    title:"Acta de defunción rectificada · hoja 2",
    year:"1922 / 2002",
    folder:"1 Pietro Luigi Giuseppe Dall'Ospedale (bisabuelo italiano)",
    file:"Hoja 2 Acta Def Pietro Luigi Giuseppe Dall'Ospedale (rectificada).jpg",
    type:"image",
    caption:"Segunda hoja del acta de defunción rectificada."
  },
  {
    id:"luis-nacimiento",
    person:"luis",
    title:"Nacimiento de Luis Vicente",
    year:"1907",
    folder:"2 Luis Vicente Dall'Ospedale (abuelo)",
    file:"Acta Nacimiento de Luis Vicente Dall'Ospedale (abuelo).jpg",
    type:"image",
    caption:"Acta de nacimiento de Luis Vicente Dall’Ospedale."
  },
  {
    id:"luis-matrimonio-1",
    person:"luis",
    title:"Matrimonio de Luis Vicente · hoja 1",
    year:"1935",
    folder:"2 Luis Vicente Dall'Ospedale (abuelo)",
    file:"Hoja 1 Acta Matrimonio Luis Vicente Dall'Ospedale.jpg",
    type:"image",
    caption:"Primera hoja del acta de matrimonio de Luis Vicente Dall’Ospedale y Carmen Lucía Hermida."
  },
  {
    id:"luis-matrimonio-2",
    person:"luis",
    title:"Matrimonio de Luis Vicente · hoja 2",
    year:"1935",
    folder:"2 Luis Vicente Dall'Ospedale (abuelo)",
    file:"Hoja 2 Acta Matrimonio Luis Vicente Dall'Ospedale.jpg",
    type:"image",
    caption:"Segunda hoja del acta de matrimonio."
  },
  {
    id:"luis-defuncion",
    person:"luis",
    title:"Defunción de Luis Vicente",
    year:"1987",
    folder:"2 Luis Vicente Dall'Ospedale (abuelo)",
    file:"Acta Defunción Luis Vicente Dall'Ospedale.jpg",
    type:"image",
    caption:"Acta de defunción de Luis Vicente Dall’Ospedale."
  },
  {
    id:"hector-nacimiento",
    person:"hector",
    title:"Nacimiento de Héctor",
    year:"1943",
    folder:"3 Hector Dall'Ospedale (papá)",
    file:"Acta de Nacimiento Héctor Dall'Ospedale.jpg",
    type:"image",
    caption:"Acta de nacimiento de Héctor Dall’Ospedale, Sarandí, Avellaneda."
  }
];

const family = [
  {
    role:"Bisabuelo italiano",
    name:"Pietro Luigi Giuseppe Dall’Ospedale",
    facts:[
      ["Nacimiento","11/03/1874 · Casalmaggiore, Cremona, Italia"],
      ["Padres","Ettore Dall’Ospedale y Maddalena Mortara"],
      ["Matrimonio","27/08/1897 · Buenos Aires, con Tomasa Rodríguez"],
      ["Defunción","18/05/1922 · Buenos Aires"]
    ]
  },
  {
    role:"Abuelo",
    name:"Luis Vicente Dall’Ospedale",
    facts:[
      ["Nacimiento","11/06/1907 · Capital Federal"],
      ["Padres","Luis / Pietro Dall’Ospedale y Tomasa Rodríguez"],
      ["Matrimonio","07/12/1935 · con Carmen Lucía Hermida"],
      ["Defunción","29/08/1987 · La Tablada, La Matanza"]
    ]
  },
  {
    role:"Papá",
    name:"Héctor Dall’Ospedale",
    facts:[
      ["Nacimiento","14/11/1943 · Sarandí, Avellaneda"],
      ["Padres","Luis Vicente Dall’Ospedale y Carmen Lucía Hermida"],
      ["Abuelos paternos","Luis / Pietro Dall’Ospedale y Tomasa Rodríguez"],
      ["Documento","Acta N.º 776, Registro Civil"]
    ]
  }
];

const timelineItems = [
  {
    year:"1874",
    person:"pietro",
    title:"Nacimiento en Casalmaggiore",
    text:"Nace Pietro Luigi Giuseppe Dall’Ospedale, hijo de Ettore Dall’Ospedale y Maddalena Mortara.",
    docs:["pietro-certificado-italia","pietro-acta-original"]
  },
  {
    year:"1890",
    person:"pietro",
    title:"Posible arribo a Buenos Aires",
    text:"El AGN registra un Giuseppe Dall’Ospedale, italiano, embarcado en Génova y arribado en el buque Rosario. La edad transcripta requiere verificación.",
    docs:["pietro-migracion-1890"]
  },
  {
    year:"1897",
    person:"pietro",
    title:"Matrimonio con Tomasa Rodríguez",
    text:"La anotación marginal del acta italiana informa el matrimonio celebrado en Buenos Aires el 27 de agosto de 1897.",
    docs:["pietro-certificado-italia"]
  },
  {
    year:"1907",
    person:"luis",
    title:"Nacimiento de Luis Vicente",
    text:"Nace Luis Vicente Dall’Ospedale en la Capital Federal.",
    docs:["luis-nacimiento"]
  },
  {
    year:"1914",
    person:"pietro",
    title:"Otro registro migratorio a nombre de Giuseppe",
    text:"Constancia del AGN de un Giuseppe Dall’Ospedale llegado en el buque Regina Elena desde Génova. También debe verificarse la edad transcripta.",
    docs:["pietro-migracion-1914"]
  },
  {
    year:"1922",
    person:"pietro",
    title:"Fallecimiento en Buenos Aires",
    text:"Pietro Luigi Giuseppe / Luis Dall’Ospedale fallece en Buenos Aires; la defunción fue transcripta en Casalmaggiore.",
    docs:["pietro-def-1","pietro-def-2","pietro-certificado-italia"]
  },
  {
    year:"1935",
    person:"luis",
    title:"Matrimonio de Luis Vicente",
    text:"Luis Vicente Dall’Ospedale contrae matrimonio con Carmen Lucía Hermida.",
    docs:["luis-matrimonio-1","luis-matrimonio-2"]
  },
  {
    year:"1943",
    person:"hector",
    title:"Nacimiento de Héctor",
    text:"Nace Héctor Dall’Ospedale, hijo legítimo de Luis Vicente Dall’Ospedale y Carmen Lucía Hermida.",
    docs:["hector-nacimiento"]
  },
  {
    year:"1987",
    person:"luis",
    title:"Fallecimiento de Luis Vicente",
    text:"Luis Vicente Dall’Ospedale fallece en La Tablada, partido de La Matanza.",
    docs:["luis-defuncion"]
  }
];

function docUrl(doc){
  return encodeURI(`${docsBase}${doc.folder}/${doc.file}`);
}

function findDoc(id){
  return documents.find(d => d.id === id);
}

function renderFamily(){
  const container = document.querySelector("#familyTree");
  container.innerHTML = family.map(member => `
    <article class="tree-card">
      <span class="tree-card__role">${member.role}</span>
      <h3>${member.name}</h3>
      <dl>
        ${member.facts.map(([k,v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}
      </dl>
    </article>
  `).join("");
}

function renderTimeline(filter = "todos"){
  const container = document.querySelector("#timeline");
  const items = filter === "todos" ? timelineItems : timelineItems.filter(item => item.person === filter);
  container.innerHTML = items.map(item => `
    <article class="timeline__item" data-person="${item.person}">
      <span class="timeline__date">${item.year}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="timeline__sources">
        ${item.docs.map(id => {
          const doc = findDoc(id);
          return doc ? `<a class="source-link" href="${docUrl(doc)}" target="_blank" rel="noopener">${doc.title}</a>` : "";
        }).join("")}
      </div>
    </article>
  `).join("");
}

function renderDocuments(){
  const container = document.querySelector("#documentGrid");
  container.innerHTML = documents.map(doc => {
    const url = docUrl(doc);
    const thumb = doc.type === "image"
      ? `<img src="${url}" alt="${doc.title}" loading="lazy">`
      : `<span>PDF</span>`;
    const previewButton = doc.type === "image"
      ? `<button class="mini-button" data-preview="${doc.id}">Vista rápida</button>`
      : "";
    return `
      <article class="doc-card">
        <div class="doc-card__thumb">${thumb}</div>
        <div class="doc-card__body">
          <h3>${doc.title}</h3>
          <p class="doc-card__meta">${doc.year} · ${doc.folder}</p>
          <p>${doc.caption}</p>
          <div class="doc-card__actions">
            ${previewButton}
            <a class="mini-button" href="${url}" target="_blank" rel="noopener">Abrir archivo</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function setupFilters(){
  document.querySelectorAll(".chip").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(chip => chip.classList.remove("is-active"));
      button.classList.add("is-active");
      renderTimeline(button.dataset.filter);
    });
  });
}

function setupViewer(){
  const dialog = document.querySelector("#viewer");
  const img = document.querySelector("#viewerImage");
  const caption = document.querySelector("#viewerCaption");
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-preview]");
    if(!button) return;
    const doc = findDoc(button.dataset.preview);
    if(!doc) return;
    img.src = docUrl(doc);
    img.alt = doc.title;
    caption.textContent = doc.caption;
    dialog.showModal();
  });
  document.querySelector("#closeViewer").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if(event.target === dialog) dialog.close();
  });
}

function setupMenu(){
  const button = document.querySelector("#menuButton");
  const nav = document.querySelector("#mainNav");
  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

renderFamily();
renderTimeline();
renderDocuments();
setupFilters();
setupViewer();
setupMenu();
