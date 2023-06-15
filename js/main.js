const productos = [
    {
      id: 1,
      nombre: "Ciencias Naturales 1",
      descripcion: "El libro de Ciencias Naturales 1 incluye capítulos con los contenidos de la materia y un complemento digital con actividades PPR (para pensar y responder), fichas de herramientas procedimentales y dos proyectos para realizar en forma colaborativa a lo largo del año.",
      precio: 2500,
      stock: 15,
      urlimg: "https://libros2023.com/img/secundaria/fundamentalesCsNat/fundamentalesCsNat1.jpg",
    },
    {
      id: 2,
      nombre: "La dinámica de los seres vivos: pasado, presente y futuro de la vida",
      descripcion: "Capítulos que desarrollan los temas de los contenidos curriculares, a la vez que proponen actividades que favorecen su comprensión y el desarrollo de las capacidades. Además, contiene una sección especial, llamada Textodinámica, que combina contenidos curriculares con las Prácticas del Lenguaje. Al final, se plantean actividades de repaso, integración y de autoevaluación.",
      precio: 2500,
      stock: 15,
      urlimg: "https://libros2023.com/img/secundaria/dinamicaBiologia/dinamicabiologia2.jpg",
    },
    {
      id: 3,
      nombre: "Historia 1",
      descripcion: "Los libros de Historia incluyen los capítulos con los contenidos de la materia, una guía de trabajos prácticos interactivos Para Pensar y Resolver y fichas con herramientas procedimentales.",
      precio: 2500,
      stock: 15,
      urlimg: "https://libros2023.com/img/secundaria/fundamentalesHistoria/historia1.jpg",
    },
    {
      id: 4,
      nombre: "Dinámica Matemática 1",
      descripcion: "La serie Dinámica Matemática para secundaria incluye los contenidos y recursos necesarios para la formación del estudiante del siglo XXI. Está formada por libros carpeta con las hojas troqueladas y perforadas que favorecen el trabajo autónomo y colaborativo atendiendo a la diversidad. Estos materiales, por su estructura, colaboran en las tareas de seguimiento por parte del docente.",
      precio: 2500,
      stock: 15,
      urlimg: "https://libros2023.com/img/secundaria/dinamicaMate/dinamica1.jpg",
    },
    {
      id: 5,
      nombre: "Dinámica Matemática 2",
      descripcion: "La serie Dinámica Matemática para secundaria incluye los contenidos y recursos necesarios para la formación del estudiante del siglo XXI. Está formada por libros carpeta con las hojas troqueladas y perforadas que favorecen el trabajo autónomo y colaborativo atendiendo a la diversidad. Estos materiales, por su estructura, colaboran en las tareas de seguimiento por parte del docente.",
      precio: 2500,
      stock: 15,
      urlimg: "https://libros2023.com/img/secundaria/dinamicaMate/dinamica2.jpg",
    },
  ];
  
  const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
  
  const verProducto = ({ id, nombre, precio, descripcion, stock, urlimg }) => {
    const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `
      <img src="${urlimg}" alt="">
      <div class="contenido">
          <h2>${nombre}</h2>
          <p><b>Descripción:</b> ${descripcion}</p>
          <span><b>Precio:</b> ${precio}</span>
      </div>
      <form id="formcarrito${id}">
          <input name="id" type="hidden" value="${id}">
          <input name="cantidad" type="number" value="1" min="1" max="${stock}">
          <button type="submit">Agregar al carrito</button>
      </form>
    `;
    contenedorTarjetas.append(tarjeta);
  };
  
  const agregarCarrito = (id) => {
    const formCarrito = document.querySelector("#formcarrito" + id);
    formCarrito.addEventListener("submit", (e) => {
      e.preventDefault();
      const cantidad = e.target.elements.cantidad.value;
      carrito.push({
        id,
        cantidad,
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
    });
  };
  
  const verProductos = () => {
    productos.forEach((producto) => {
      if (producto.stock !== 0) {
        verProducto(producto);
        agregarCarrito(producto.id);
      }
    });
  };
  
  verProductos();
  
/*
const productos =[
    {
        id:1,
        nombre:"Ciencias Naturales 1",
        descripcion:"El libro de Ciencias Naturales 1 incluye capítulos con los contenidos de la materia y un complemento digital con actividades PPR (para pensar y responder), fichas de herramientas procedimentales y dos proyectos para realizar en forma colaborativa a lo largo del año.",
        precio: 2500,
        stock :15,
        urlimg :"https://libros2023.com/img/secundaria/fundamentalesCsNat/fundamentalesCsNat1.jpg",
    },
    {
        id:2,
        nombre:"La dinámica de los seres vivos: pasado, presente y futuro de la vida",
        descripcion :" capítulos que desarrollan los temas de los contenidos curriculares, a la vez que proponen actividades que favorecen su comprensión y el desarrollo de las capacidades Además, contiene una sección especial, llamada Textodinámica, que combina contenidos curriculares con las Prácticas del Lenguaje. Al final, se plantean actividades de repaso, integración y de autoevaluación.",
        precio: 2500,
        stock :15,
        urlimg:"https://libros2023.com/img/secundaria/dinamicaBiologia/dinamicabiologia2.jpg",
    },
    {
        id:3,
        nombre:"Historia 1",
        descripcion :"Los libros de Historia incluyen los capítulos con los contenidos de la materia, una guía de trabajos prácticos interactivos Para Pensar y Resolver y fichas con herramientas procedimentales.",
        precio: 2500,
        stock :15,
        urlimg :"https://libros2023.com/img/secundaria/fundamentalesHistoria/historia1.jpg",
    },
    {
        d:4,
        nombre:"Dinámica Matemática 1",
        descripcion:"La serie Dinámica Matemática para secundaria incluye los contenidos y recursos necesarios para la formación del estudiante del siglo XXI. Está formada por libros carpeta con las hojas troqueladas y perforadas que favorecen el trabajo autónomo y colaborativo atendiendo a la diversidad. Estos materiales, por su estructura, colaboran en las tareas de seguimiento por parte del docente.",
        precio: 2500,
        stock :15,
        urlimg:"https://libros2023.com/img/secundaria/dinamicaMate/dinamica1.jpg",
    },
    {
        id:5,
        nombre:"Dinámica Matemática 2",
        descripcion:"La serie Dinámica Matemática para secundaria incluye los contenidos y recursos necesarios para la formación del estudiante del siglo XXI. Está formada por libros carpeta con las hojas troqueladas y perforadas que favorecen el trabajo autónomo y colaborativo atendiendo a la diversidad. Estos materiales, por su estructura, colaboran en las tareas de seguimiento por parte del docente.",
        precio: 2500,
        stock :15,
        urlimg:"https://libros2023.com/img/secundaria/dinamicaMate/dinamica2.jpg",
    },
]
const carrito= JSON.parse(localStorage.getItem("carrito")) ?? []
const verProducto = ({id,nombre,precio,descripcion,stock,urlimg}) =>{
    const contenedorTarjetas=document.querySelector("#contenedorTarjetas")
    const tarjeta =document.createElement("div")
    tarjeta.className="tarjeta"
    tarjeta.innerHTML=`
                        <img src="${urlimg}" alt="">
                        <div class="contenido">
                            <h2>${nombre}</h2>
                            <p><b>Descripcion:</b>${descripcion}</p>
                            <span><b> precio:</b>${precio} 
                        </div>
                        <form id="formcarrito${id}">
                            <input name="id" type="hidden" value="${id}">
                            <input name="cantidad" type="number" value="1" min="1" max="${stock}">
                            <button type="submit">agregar al carrito</button>
                        </form>
                        `
    contenedorTarjetas.append(tarjeta)
    }
const agregarcarito =(id) =>{     
const formcarrito=document.querySelector("#formcarrtio"+id)
formcarrito.addEventListener("submit", (e)=>{
    e.preventDefault()
    const cantidad=e.target.children["cantidad"].value
    carrito.push({
        id,
        cantidad,
    })
    localStorage.setItem("carrito", JSON.stringify(carrito))
 })
}
const verProductos = () =>{
    productos.forEach(producto=>{
        if(producto.stock !=0){
        verProducto(producto)
        agregarcarito(producto.id)
        }
    })
}
verProductos()
*/