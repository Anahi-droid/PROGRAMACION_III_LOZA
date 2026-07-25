import FormularioUsuario from "./components/shadcn/FormularioUsuario";
import TarjetaProducto from "./components/shadcn/TarjetaProducto";


function App() {
  return (
    <div className="flex flex-col items-center gap-8 mt-10">
      <FormularioUsuario />


      <TarjetaProducto />
    </div>
  );
}


export default App;
