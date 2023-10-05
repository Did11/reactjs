const DrawClass = ({ data }) => {
  // Desestructuramos la prop data para obtener sus propiedades
  const { name, attributes, methods, borderColor, headColor, textColor, bodyColor } = data;
  // Define la altura de la sección de la cabecera de la clase
  const headHeight = 40;
  // Define la altura de cada sección de atributos y métodos
  const sectionHeight = 20;
  // Define el ancho y alto del elemento SVG que se va a crear
  const svgWidth = 220;
  const svgHeight = headHeight + ((attributes.length + methods.length) + 2) * sectionHeight;
// Define el ancho del borde del elemento SVG
  const borderWidth = 2
  // Define un objeto "divStyle" que contiene las propiedades de estilo
  // para el contenedor del elemento SVG
  const divStyle = {
    width: svgWidth, 
    height: svgHeight
  }
  // El componente "DrawClass" devuelve un JSX que representa el elemento SVG
  // y utiliza las constantes definidas anteriormente para configurar su tamaño y estilo.

  return (
    <div className="class-diagram" style={divStyle}>
      <svg width={svgWidth} height={svgHeight}>
        {/* Rectángulo Main */}
        <rect width={svgWidth} height={svgHeight} fill={headColor} stroke={borderColor} strokeWidth={borderWidth} fillOpacity="0.3"/>

        {/* Título */}
        <text x="19" y="25" fill={textColor} fontSize="16">{name}</text>

        {/* Rectángulo Body */}
        <rect y={headHeight} width={svgWidth} fill={bodyColor} height={svgHeight - headHeight} stroke={borderColor} strokeWidth={borderWidth} />

        {/* Atributos */}
        {attributes.map((attr, index) => (
          <text key={index} x="20" y={headHeight + ((sectionHeight) * (index + 1))} fill={textColor}>{attr}</text>
        ))}

        {/* Linea separacion*/}
        <line 
          x1="0"
          y1={headHeight + (sectionHeight * (attributes.length + 1)) - 5}
          x2={svgWidth}
          y2={headHeight + (sectionHeight * (attributes.length + 1)) - 5}
          stroke="black"
        />

        {/* Metodos */}
        {methods.map((attr, index) => (
          <text key={index} x="20" y={headHeight + (sectionHeight * (attributes.length + 2)) + ((sectionHeight) * (index))} fill={textColor}>{attr}</text>
        ))}

      </svg>
    </div>
  );
};

export default DrawClass;