import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import CriarUsuarios from './pages/CriarUsuario';
import AtualizarUsuarios from './pages/AtualizarUsuarios';
import Visualizar from './pages/Visualizar';

import CriarAluno from './pages/CriarAluno';
import AtualizarAluno from './pages/AtualizarAluno';
import VisualizarAluno from './pages/VisualizarAluno';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Principal} exact />
        <Route path="/principal" component={Principal} />
        <Route path="/api/criarProfessor" component={CriarUsuarios} />
        <Route path="/api/visualizarProfessor" component={Visualizar} />
        <Route path="/api/atualizar/:id" component={AtualizarUsuarios} />

        <Route path="/api/criarAluno" component={CriarAluno} />
        <Route path="/api/visualizarAluno" component={VisualizarAluno} />
        <Route path="/api/atualizarAluno/:id" component={AtualizarAluno} />
      </Switch>
    </BrowserRouter>
  );
}