document.addEventListener("DOMContentLoaded", () => {
    const loading = document.getElementById("loading");
    const searchInput = document.getElementById("search");
    const searchPreview = document.getElementById("search-preview");
    const directoryTable = document
      .getElementById("directory")
      .querySelector("tbody");
    const resultsCount = document.getElementById("results-count");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const downloadPdfButton = document.getElementById("download-pdf");
  
    const data = [
      {
        id: 61,
        owner: "Roberto Salcedo Aquino",
        unit: "Secretario de la Función Pública",
        email: "roberto.salcedo@funcionpublica.gob.mx",
        extension: "4090"
      },
      {
        id: 48,
        owner: "Luis Francisco Cota Escudero",
        unit: "Director General de Análisis y Planeación Intrainstitucional e Interinstitucional",
        email: "luis.cota@funcionpublica.gob.mx",
        extension: "1153"
      },
      {
        id: 31,
        owner: "Carmen Patricia Luna Fernández de Jáuregui",
        unit: "Coordinadora General De Estrategia Institucional",
        email: "carmen.luna@funcionpublica.gob.mx",
        extension: "4076"
      },
      {
        id: 33,
        owner: "Claudia Verónica Cervantes González",
        unit: "Subdirectora de Seguimiento de Acuerdos",
        email: "ccervantes@funcionpublica.gob.mx",
        extension: "3500"
      },
      {
        id: 32,
        owner: "Claudia Quintero Ramírez",
        unit: "Secretaria",
        email: "claudia.quintero@funcionpublica.gob.mx",
        extension: "1413"
      },
      {
        id: 50,
        owner: "Manuel García Garfias",
        unit: "Secretaria",
        email: "alice@example.com",
        extension: "1234"
      },
      {
        id: 50, /**PENDIENTE */
        owner: "Eulalia Santos Contreras",
        unit: "Secretaria",
        email: "esantos@funcionpublica.gob.mx",
        extension: "1351"
      },
      {
        id: 50, /**PENDIENTE */
        owner: "Manuel García Garfias",
        unit: "Secretaria",
        email: "manuel.garcia@funcionpublica.gob.mx",
        extension: "1351"
      },
      {
        id: 38,
        owner: "Fernando Carmona Romero",
        unit: "HR",
        email: "esantos@funcionpublica.gob.mx",
        extension: "1351"
      },
      {
        id: 45,
        owner: "Jorge Pedro Castolo Domínguez",
        unit: "Titular Del Órgano Interno De Control",
        email: "jorge.castolo@funcionpublica.gob.mx",
        extension: "1040"
      },
      {
        id: 53,
        owner: "María Isabel Morales",
        unit: "HR",
        email: "alice@example.com",
        extension: "1234"
      },
      {
        id: 29,
        owner: "Carlos Carrera Guerrero",
        unit: "Titular de Control Interno",
        email: "ccarrera@funcionpublica.gob.mx",
        extension: "1213"
      },
      {
        id: 39,
        owner: "Gema Alexis Escalante Castillo ",
        unit: "Subdirectora de Control Interno",
        email: "gema.escalante@funcionpublica.gob.mx",
        extension: "1560"
      },
      {
        id: 62,
        owner: "Rodolfo Hernández Jiménez",
        unit: "Director de Información",
        email: "rodolfo.hernandez@funcionpublica.gob.mx",
        extension: "1445"
      },
      {
        id: 27,
        owner: "Alejandra López Sánchez",
        unit: "Directora De Profesionalización Y Desarrollo De Personal",
        email: "alejandra.lopez@funcionpublica.gob.mx",
        extension: "5044"
      },
      {
        id: 59,
        owner: "Raymundo Alva Huitron",
        unit: "Director General  De Comunicación Social",
        email: "raymundo.alva@funcionpublica.gob.mx",
        extension: "1018"
      },
      {
        id: 28,
        owner: "Brenda Zarza Lindo",
        unit: "Secretaria",
        email: "bzarza@funcionpublica.gob.mx",
        extension: "1468"
      },
      {
        id: 35,
        owner: "Eduardo Gurza Curiel",
        unit: "Unidad De Auditoría A Contrataciones Públicas",
        email: "eduardo.gurza@funcionpublica.gob.mx",
        extension: "3015"
      },
      {
        id: 49,
        owner: "Luz Angélica Vázquez Rocha",
        unit: "Secretaria",
        email: "lvazquez@funcionpublica.gob.mx",
        extension: "3514, 3557"
      },
      {
        id: 46,
        owner: "José Luis Chávez Delgado",
        unit: "Unidad De Control, Evaluación Y De Mejora De La Gestión Pública",
        email: "jose.chavez@funcionpublica.gob.mx",
        extension: "3001"
      },
      {
        id: 57,
        owner: "Paula Ramírez Ramírez",
        unit: "Secretaria",
        email: "pramirez@funcionpublica.gob.mx",
        extension: "3501"
      },
      {
        id: 56,
        owner: "Omar González Vera",
        unit: "Unidad De Auditoría Gubernamental",
        email: "omar.gonzalez@funcionpublica.gob.mx",
        extension: "3002"
      },
      {
        id: 55,
        owner: "Nohemí Claudia Olguín Magos",
        unit: "Secretaria",
        email: "nolguin@funcionpublica.gob.mx",
        extension: "3502"
      },
      {
        id: 47,
        owner: "José Miguel Macías Fernández",
        unit: "Dirección General De Fiscalización Del Patrimonio Público Federal",
        email: "jose.macias@funcionpublica.gob.mx",
        extension: "3014"
      },
      {
        id: 36,
        owner: "Efraín Álvarez Caborno Ojeda",
        unit: "Unidad De Denuncias E Investigaciones",
        email: "efrain.alvarez@funcionpublica.gob.mx",
        extension: "2003"
      },
      {
        id: 41,
        owner: "Herlinda Ramírez Cruz",
        unit: "Secretaria",
        email: "hramirezc@funcionpublica.gob.mx",
        extension: "2300"
      },
      {
        id: 42,
        owner: "Iris Vanessa Cruz Andrade",
        unit: "Dirección General De Responsabilidades Y Verificación Patrimonial",
        email: "iris.cruz@funcionpublica.gob.mx",
        extension: "2212"
      },
      {
        id: 37,
        owner: "Eva Miranda Mendoza",
        unit: "Secretaria",
        email: "egmiranda@funcionpublica.gob.mx",
        extension: "2260"
      },
      {
        id: 52,
        owner: "María Guadalupe Vargas Álvarez",
        unit: "IT",
        email: "bob@example.com",
        extension: "5678"
      },
      {
        id: 40,
        owner: "Guadalupe Gallardo Hernández",
        unit: "Secretaria  ",
        email: "mggallardo@funcionpublica.gob.mx",
        extension: "2369"
      },
      {
        id: 43,
        owner: "Jaime Arturo Larrazábal Escárraga",
        unit: "Unidad De Políticas De Recursos Humanos De La Administración Pública Federal",
        email: "jaime.larrazabal@funcionpublica.gob.mx",
        extension: "4034"
      },
      {
        id: 63,
        owner: "Silvia Trinidad Vázquez Pérez ",
        unit: "Secretaria",
        email: "svazquez@funcionpublica.gob.mx",
        extension: "4201"
      },
      {
        id: 2,
        owner: " Alfredo Paez Herrrera ",
        unit: "Unidad De Ética Pública Y Prevención De Conflictos De Intereses ",
        email: "alfredo.paez@funcionpublica.gob.mx",
        extension: "4008"
      },
      {
        id: 21,
        owner: " Marta Delia Hernández Miguel ",
        unit: "Secretaria",
        email: "asalana@fincionpublica.gob.mx",
        extension: "1502"
      },
      {
        id: 4,
        owner: " Ana Liza Gómez Torres ",
        unit: "Unidad De Administración Y Finanzas",
        email: "analiza.gomez@funcionpublica.gob.mx",
        extension: "5000"
      },
      {
        id: 18,
        owner: " Liliana Castro Mayo ",
        unit: "Secretaria",
        email: "lcastro@funcionpublica.gob.mx",
        extension: "5300"
      },
      {
        id: 13,
        owner: " Guillermo G. González Ugarte ",
        unit: "Dirección General De Recursos Humanos",
        email: "guillermo.gonzalez@funcionpublica.gob.mx",
        extension: "5002"
      },
      {
        id: 12,
        owner: " Guadalupe Beltrán Rabadán ",
        unit: "Secretaria",
        email: "ibeltran@funcionpublica.gob.mx",
        extension: "5309"
      },
      {
        id: 3,
        owner: " Alma Jovita Ramírez Moctezuma ",
        unit: "Dirección General De Programación Y Presupuesto",
        email: "alma.ramirez@funcionpublica.gob.mx",
        extension: "5004"
      },
      {
        id: 19,
        owner: " Magdalena Chávez García ",
        unit: "Secretaria",
        email: "mdchavez@funcionpublica.gob.mx",
        extension: "5304"
      },
      {
        id: 20,
        owner: " María de la Luz Padilla Díaz ",
        unit: "Dirección General De Recursos Materiales Y Servicios Generales",
        email: "maria.padilla@funcionpublica.gob.mx",
        extension: "5009"
      },
      {
        id: 7,
        owner: " Claudia Ibarra Soriano ",
        unit: "Secretaria",
        email: "claudia.ibarra@funcionpublica.gob.mx",
        extension: "5327"
      },
      {
        id: 34,
        owner: "Dálida Cleotilde Acosta Pimentel ",
        unit: "Coordinación General De Ciudadanización Y Defensa De Victimas De La Corrupción",
        email: "dalida.acosta@funcionpublica.gob.mx",
        extension: "3023"
      },
      {
        id: 17,
        owner: " Karla María Sánchez Ortega ",
        unit: "Secretaria",
        email: "ksanchez@funcionpublica.gob.mx",
        extension: "3115"
      },
      {
        id: 58,
        owner: "Rafael Ruiz Mena  ",
        unit: "Titular de la Unidad De Transparencia Y Políticas Anticorrupción ",
        email: "rafael.ruiz@funcionpublica.gob.mx ",
        extension: "1064"
      },
      {
        id: 11,
        owner: " Grethel Alejandra Pilgram Santos ",
        unit: "Directora General de Transparencia y Gobierno Abierto",
        email: "grethel.pilgram@funcionpublica.gob.mx",
        extension: "1052"
      },
      {
        id: 5,
        owner: " Bertha Elena González ",
        unit: "Directora De Diagnostico En Materia Anticorrupción",
        email: "bertha.gonzalez@funcionpublica.gob.mx",
        extension: "1271"
      },
      {
        id: 16,
        owner: " Julieta de la Vega Luna ",
        unit: "Subdirectora de Análisis en Materia Anticorrupción",
        email: "julieta.delavega@funcionpublica.gob.mx",
        extension: "1022"
      },
      {
        id: 15,
        owner: " José de Jesús Román Pérez García ",
        unit: "Director de Vinculación Interinstitucional",
        email: "jose.perez@funcionpublica.gob.mx",
        extension: "1085"
      },
      {
        id: 10,
        owner: " Gregorio Guerrero Pozas ",
        unit: "Coordinación General De Órganos De Vigilancia Y Control",
        email: "gguerrero.oic@funcionpublica.gob.mx",
        extension: "1004"
      },
      {
        id: 23,
        owner: " Nadia Michelle Suxo Campos ",
        unit: "Secretaria",
        email: "PENDIENTE",
        extension: "5072"
      },
      {
        id: 9,
        owner: " Erika Zuñiga Angulo  ",
        unit: "Directora De Información Y Transparencia De Órganos De Vigilancia Y Control",
        email: "ezuniga@funcionpublica.gob.mx",
        extension: "5678"
      },
      {
        id: 63,
        owner: "Vicente Agustín Mercado Zuñiga ",
        unit: "Delegado y Comisario Público Propietario del Sector Desarrollo Económico",
        email: "vicente.mercado@funcionpublica.gob.mx",
        extension: "1005"
      },
      {
        id: 6,
        owner: " Christopher Valenzuela Ponce ",
        unit: "Delegado Y Comisario Público Propietario Del Sector Bienestar Y Recursos Renovables",
        email: "cvalenzuela@funcionpublica.gob.mx",
        extension: "1006"
      },
      {
        id: 60,
        owner: "Roberto Javier Ortega Pineda ",
        unit: "Delegado Y Comisario Público Propietario Del Sector Educación Y Cultura",
        email: "roberto.ortega@funcionpublica.gob.mx",
        extension: "1007"
      },
      {
        id: 54,
        owner: "Migue Ángel Cedillo Hernández  ",
        unit: "Delegado Y Comisario Público Propietario Del Sector Energía",
        email: "miguel.cedillo@funcionpublica.gob.mx",
        extension: "1008"
      },
      {
        id: 25,
        owner: " Sandra Anhel Villanueva Leal ",
        unit: "Delegado Y Comisario Público Propietario Del Sector Hacienda",
        email: "sandral.villanueva@funcionpublica.gob.mx",
        extension: "1014"
      },
      {
        id: 24,
        owner: " Paola Patricia Cerda Saubage  ",
        unit: "Delegado Y Comisario Público Propietario Del Sector Salud, Trabajo Y Seguridad Social",
        email: "paola.cerda@funcionpublica.gob.mx",
        extension: "1010"
      },
      {
        id: 51,
        owner: "Manuel Peralta García ",
        unit: "Delegado Y Comisario Público Propietario Del Sector Seguridad Nacional",
        email: "manuel.peralta@funcionpublica.gob.mx",
        extension: "1011"
      },
      {
        id: 30,
        owner: "Carlos Raúl Ramírez Orozco ",
        unit: "Director de Servicios de Computo de Escritorio",
        email: "rramirez@funcionpublica.gob.mx",
        extension: "5303"
      },
      {
        id: 1,
        owner: " Alfredo Fisher Melgar ",
        unit: "Dirección General De Investigación Forense",
        email: "alfredo.fisher@funcionpublica.gob.mx",
        extension: "5046"
      },
      {
        id: 26,
        owner: " Valentina Valdez Jasso ",
        unit: "Directora De Convenciones Y Mecanismos Anticorrupción",
        email: "vvaldez@funcionpublica.gob.mx",
        extension: "5678"
      },
      {
        id: 43,
        owner: " Iván Amed Maximiliano Esquivel ",
        unit: "Coordinador de Registro Patrimonial de Intereses y de Servidores Públicos Sancionados",
        email: "imaximiliano@funcionpublica.gob.mx",
        extension: "4009"
      },
      {
        id: 8,
        owner: " Efraín Álvarez Caborno Ojeda ",
        unit: "Subsecretaría De Combate A La Impunidad",
        email: "efrain.alvarez@funcionpublica.gob.mx",
        extension: "2003"
      },
      {
        id: 22,
        owner: " Mirna Martínez García ",
        unit: "Secretaria",
        email: "mmartinezg@funcionpublica.gob.mx",
        extension: "2065"
      }
      
      // Add more entries here
    ];
  
    data.sort((a, b) => a.owner.localeCompare(b.owner));
  
    let currentPage = 1;
    const rowsPerPage = 9;
    let filteredData = data;
  
    const renderTable = (data, page = 1) => {
      directoryTable.innerHTML = "";
      const start = (page - 1) * rowsPerPage;
      const end = page * rowsPerPage;
      const pageData = data.slice(start, end);
  
      pageData.forEach((entry) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                  <td>${entry.id}</td>
                  <td>${entry.owner}</td>
                  <td>${entry.unit}</td>
                  <td>${entry.email}</td>
                  <td>${entry.extension}</td>
              `;
        directoryTable.appendChild(row);
      });
  
      resultsCount.textContent = `Página ${start + 1}-${Math.min(
        end,
        data.length
      )} de ${data.length} Resultados`;
      prevButton.disabled = page === 1;
      nextButton.disabled = end >= data.length;
    };
  
    const searchDirectory = () => {
      const query = searchInput.value.toLowerCase();
      filteredData = data.filter(
        (entry) =>
          entry.owner.toLowerCase().includes(query) ||
          entry.unit.toLowerCase().includes(query)
      );
      currentPage = 1;
      renderTable(filteredData, currentPage);
  
      if (query) {
        searchPreview.innerHTML = filteredData
          .map((entry) => `<div>${entry.owner} - ${entry.unit}</div>`)
          .join("");
        searchPreview.style.display = "block";
      } else {
        searchPreview.style.display = "none";
      }
    };
  
    searchInput.addEventListener("input", searchDirectory);
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderTable(filteredData, currentPage);
      }
    });
  
    nextButton.addEventListener("click", () => {
      if (currentPage * rowsPerPage < filteredData.length) {
        currentPage++;
        renderTable(filteredData, currentPage);
      }
    });
  

    setTimeout(() => {
      loading.style.display = "none";
      renderTable(data);
    }, 2000);
  
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".search-container")) {
        searchPreview.style.display = "none";
      }
    });
  });
  