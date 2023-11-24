import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTarefaComponent } from "./pages/tarefa/listar-tarefa/listar-tarefa.component";
import { CadastrarTarefaComponent } from "./pages/tarefa/cadastrar-tarefa/cadastrar-tarefa.component";
import { AlterarTarefaComponent } from "./pages/tarefa/alterar-tarefa/alterar-tarefa.component";


const routes: Routes = [
  {
    path: "",
    component: ListarTarefaComponent,
  },
  {
    path: "pages/tarefa/listar",
    component: ListarTarefaComponent,
  },
  {
    path: "pages/tarefa/cadastrar",
    component: CadastrarTarefaComponent,
  },
  {
    path: "pages/tarefa/alterar/:id",
    component: AlterarTarefaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
