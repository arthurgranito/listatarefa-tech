import AdicionarTarefas from "../AdicioinarTarefa";
import { useState } from "react";

const ListaDeTarefas = () => {
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = (tarefa) => {
        if(tarefa){
            setTarefas([...tarefas, tarefa]);
        }
    }

    return(
        <div>
            <h1>Lista de Tarefas</h1>
            < AdicionarTarefas aoAdicionarTarefa={adicionarTarefa}/>
            
            <h2>Tarefas:</h2>
            <ul>
                {tarefas.map(tarefa => {
                    return <li>{tarefa}</li>
                })}
            </ul>
        </div>
    );
}

export default ListaDeTarefas;