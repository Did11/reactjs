import DrawClass from "./components/DrawClass";
import Header from "./components/Header";

const CLASS_UML = {
  name: 'Persona',
  attributes: ['+Nombre:str', '+Número de teléfono:str', '+Email:str'],
  methods: ['+Método()'],
  borderColor: '#DC2DDE',
  headColor: '#DC2DDE',
  textColor: '#333333',
  bodyColor: '#FFFFFF'
};

const CLASS_UML2 = {
  name: 'Dirección',
  attributes: ['+Calle:str', '+Cuidad:str', '+Código Postal:int' ],
  methods: ['+Validar()'],
  borderColor: '#0000FF',
  headColor: '#87CEEB',
  textColor: '#333333',
  bodyColor: '#FFFFFF'
};


function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <DrawClass data={CLASS_UML} />
          <DrawClass data={CLASS_UML2} />
         
        </div>
      </main>
    </>
  )
}

export default App

