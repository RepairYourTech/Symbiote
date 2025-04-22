# Contribuindo para o Symbiote

<div align="center">
  <p style="font-size: 1.1em; margin-top: 15px;"><strong>Baseado no <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">Roo Code</a></strong></p>
  <a href="https://github.com/RooVetGit/Roo-Code" target="_blank">
    <img src="https://img.shields.io/badge/Fork%20de-Roo%20Code-6F42C1?style=for-the-badge&logo=github&logoColor=white" alt="Fork de Roo Code">
  </a>
</div>

Estamos entusiasmados por você estar interessado em contribuir para o Symbiote. Seja corrigindo um bug, adicionando um recurso ou melhorando nossa documentação, cada contribuição torna o Symbiote mais inteligente! Para manter nossa comunidade vibrante e acolhedora, todos os membros devem aderir ao nosso [Código de Conduta](CODE_OF_CONDUCT.md).

## Engajamento na Comunidade

Incentivamos todos os colaboradores a se engajarem com a comunidade Symbiote através do GitHub:

- Use o GitHub Discussions para perguntas e ideias
- Participe de discussões em issues para fornecer feedback
- Revise pull requests de outros colaboradores
- Compartilhe suas experiências usando o Symbiote
- Conecte-se com outros desenvolvedores trabalhando em projetos similares

## Relatando Bugs ou Problemas

Relatórios de bugs ajudam a tornar o Symbiote melhor para todos! Antes de criar uma nova issue, por favor [pesquise as existentes](https://github.com/RepairYourTech/Symbiote/issues) para evitar duplicatas. Quando estiver pronto para relatar um bug, vá para nossa [página de issues](https://github.com/RepairYourTech/Symbiote/issues/new/choose) onde você encontrará um modelo para ajudá-lo a preencher as informações relevantes.

> **Importante:** Se você descobrir uma vulnerabilidade de segurança, por favor use a [ferramenta de segurança do Github para relatá-la de forma privada](https://github.com/RepairYourTech/Symbiote/security/advisories/new).

## Decidindo no que Trabalhar

Procurando uma boa primeira contribuição? Verifique as issues marcadas com "good first issue" na nossa [página de issues do Symbiote](https://github.com/RepairYourTech/Symbiote/issues). Estas são especialmente selecionadas para novos colaboradores e áreas onde gostaríamos de ter alguma ajuda!

Também damos as boas-vindas a contribuições para nossa documentação! Seja corrigindo erros de digitação, melhorando guias existentes ou criando novo conteúdo educacional - adoraríamos construir um repositório de recursos impulsionado pela comunidade que ajude todos a obter o máximo do Symbiote.

Se você está planejando trabalhar em um recurso maior, por favor crie primeiro uma [solicitação de recurso](https://github.com/RepairYourTech/Symbiote/discussions/categories/feature-requests) para que possamos discutir se está alinhado com a visão do Symbiote. Você também pode verificar nosso [Roteiro do Projeto](#roteiro-do-projeto) abaixo para ver se sua ideia se encaixa em nossa direção estratégica.

## Roteiro do Projeto

O Symbiote possui um roteiro de desenvolvimento que orienta nossas prioridades e direção futura. Entender nosso roteiro pode ajudar você a:

- Alinhar suas contribuições com os objetivos do projeto
- Identificar áreas onde sua expertise seria mais valiosa
- Entender o contexto por trás de certas decisões de design
- Encontrar inspiração para novos recursos que apoiem nossa visão

Nosso roteiro atual se concentra nestes pilares principais:

### Suporte a Provedores

Nosso objetivo é oferecer suporte a tantos provedores de IA quanto possível:

- Suporte versátil para "OpenAI Compatible"
- Suporte para os principais provedores de IA, incluindo Anthropic, Google, xAI, Microsoft Azure AI e mais
- Suporte aprimorado para modelos locais através do Ollama e plataformas similares

### Privacidade e Segurança

Priorizamos a privacidade e segurança do usuário:

- Sem telemetria ou coleta de dados
- Opções de processamento local quando possível
- Tratamento transparente dos dados do usuário

### Suporte a Sistemas

Queremos que o Symbiote funcione bem no computador de todos:

- Integração de terminal multiplataforma
- Suporte forte e consistente para Mac, Windows e Linux

### Documentação

Queremos documentação abrangente e acessível para todos os usuários e colaboradores:

- Guias de usuário e tutoriais expandidos
- Documentação clara da API
- Melhor orientação para colaboradores
- Recursos de documentação multilíngues

### Estabilidade

Queremos diminuir significativamente o número de bugs e aumentar os testes automatizados:

- Cobertura de testes abrangente
- Capacidades de registro de depuração
- Processo simplificado de relatório de bugs

### Internacionalização

Queremos que o Symbiote seja acessível para usuários em todo o mundo:

- Suporte para múltiplos idiomas na interface
- Documentação localizada
- Esforços de tradução liderados pela comunidade

Damos especialmente as boas-vindas a contribuições que avançam os objetivos do nosso roteiro. Se você estiver trabalhando em algo que se alinha com esses pilares, por favor mencione isso na descrição do seu PR.

## Configuração de Desenvolvimento

1. **Clone** o repositório:

```sh
git clone https://github.com/RepairYourTech/Symbiote.git
```

2. **Instale as dependências**:

```sh
npm run install:all
```

3. **Inicie o webview (aplicativo Vite/React com HMR)**:

```sh
npm run dev
```

4. **Depuração**:
   Pressione `F5` (ou **Executar** → **Iniciar Depuração**) no VSCode para abrir uma nova sessão com o Symbiote carregado.

Alterações no webview aparecerão imediatamente. Alterações na extensão principal exigirão a reinicialização do host da extensão.

Alternativamente, você pode construir um .vsix e instalá-lo diretamente no VSCode:

```sh
npm run build
```

Um arquivo `.vsix` aparecerá no diretório `bin/` que pode ser instalado com:

```sh
code --install-extension bin/symbiote-<version>.vsix
```

## Escrevendo e Enviando Código

Qualquer pessoa pode contribuir com código para o Symbiote, mas pedimos que você siga estas diretrizes para garantir que suas contribuições possam ser integradas sem problemas:

1. **Mantenha os Pull Requests Focados**

    - Limite os PRs a um único recurso ou correção de bug
    - Divida mudanças maiores em PRs menores e relacionados
    - Divida as mudanças em commits lógicos que possam ser revisados independentemente

2. **Qualidade do Código**

    - Todos os PRs devem passar nas verificações de CI que incluem tanto linting quanto formatação
    - Resolva quaisquer avisos ou erros do ESLint antes de enviar
    - Responda a todos os feedbacks do Ellipsis, nossa ferramenta automatizada de revisão de código
    - Siga as melhores práticas de TypeScript e mantenha a segurança de tipos

3. **Testes**

    - Adicione testes para novos recursos
    - Execute `npm test` para garantir que todos os testes passem
    - Atualize os testes existentes se suas mudanças os afetarem
    - Inclua tanto testes unitários quanto de integração quando apropriado

4. **Diretrizes de Commit**

    - Escreva mensagens de commit claras e descritivas
    - Referencie issues relevantes nos commits usando #número-da-issue

5. **Antes de Enviar**

    - Faça rebase da sua branch na última main
    - Certifique-se de que sua branch é construída com sucesso
    - Verifique novamente se todos os testes estão passando
    - Revise suas mudanças para qualquer código de depuração ou logs de console

6. **Descrição do Pull Request**
    - Descreva claramente o que suas mudanças fazem
    - Inclua passos para testar as mudanças
    - Liste quaisquer mudanças significativas
    - Adicione capturas de tela para mudanças na UI

## Acordo de Contribuição

Ao enviar um pull request, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto ([Apache 2.0](../LICENSE)).

## Agradecimentos

Este guia de contribuição é adaptado do [guia de contribuição do Roo Code](https://github.com/RooVetGit/Roo-Code/blob/main/CONTRIBUTING.md), com modificações para refletir os requisitos e processos específicos do Symbiote.
