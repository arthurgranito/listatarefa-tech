import { useState } from "react";

const AdicionarTarefas = (props) => {
    const [novaTarefa, setNovaTarefa] = useState('');
    const aoDigitado = (evento) => {
        setNovaTarefa(evento.target.value);
        console.log(novaTarefa)
    }

    const adicionarNovaTarefa = () => {
        props.aoAdicionarTarefa(novaTarefa);
        setNovaTarefa('');
    }

    return(
        <div>
            <input type="text" placeholder="Digite uma tarefa" value={novaTarefa} onChange={aoDigitado}/>
            <button onClick={adicionarNovaTarefa}>Adicionar tarefa</button>
        </div>
    )
}

export default AdicionarTarefas;