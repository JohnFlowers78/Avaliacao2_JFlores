import { Categoria } from "./categoria.models";

export interface Tarefa{
    tarefaId? : number;
    titulo : string;
    descricao : string;
    status : string;
    criadoEm? : string;
    categoriaId : number;
    categoria ?: Categoria;
}


// public string Status { get; set; } = "Não iniciada";