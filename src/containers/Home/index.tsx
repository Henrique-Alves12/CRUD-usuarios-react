import { useState } from "react"

interface EntradaTextoProps {
     legenda: string
     marcador: string
     tipoDeEntrada?: "password" | "text"
     setarNovoValor: (valor: string) => void
}

const EntradaTexto = ({legenda, marcador, tipoDeEntrada="text", setarNovoValor}: EntradaTextoProps)=> {

     const aoMudar = (evento: React.ChangeEvent<HTMLInputElement>) => {
          const novoValor = evento.target.value;
          setarNovoValor(novoValor);
     };

     return (
          <div className="flex justify-between items-center">
               <div>{legenda}</div>
               <input type={tipoDeEntrada} placeholder={marcador} onChange={aoMudar} />
          </div>
     )
}


function Home () {
     const titulo: string = "Projeto base"

     const [nome, setNome] = useState<string>("")
     const [email, setEmail] = useState<string>("")

     
     return (
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">{titulo}</h1>

          <EntradaTexto legenda={"nome"} marcador={"Informe seu Nome"} setarNovoValor={setNome}/>
          <EntradaTexto legenda={"email"} marcador={"Informe seu Email"} setarNovoValor={setEmail}/>
              
          <button onClick={()=> alert(`Nome: ${nome} - Email: ${email}`)}>Enviar</button>

        </div>
     )

}

export default Home