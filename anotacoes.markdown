# 1 - Diretivas

## ng-bind

    Usada na tag para aplicar o valor de uma variável na tag
    Ex: ng-bind="var1"

## ng-repeat

    Usada para percorrer um array assim como um for in
    Ex: <tr ng-repeat="contato in contatos">
              <td ng-repeat="(key,value) in contato">
                {{value}}
              </td>
            </tr>

## ng-model

    Vincula o valor recebido em um input a uma variável de $scope
    Ex: <input  class="form-control" type="text" ng-model="nome" placeholder="Digite seu nome">

## ng-click

    Quando ocorre o evento de click chama a função passada

## ng-disabled

    Desabilita um elemento dinamicamente
    Ex: ng-disabled="!contato.nome || !contato.telefone"

## ng-options

    Renderiza as opçoes de um select
    Ex: <select class="form-control" ng-model="contato.operadora" ng-options="operadora.nome for operadora in operadoras">

    Atribui o codigo ao value do select ao inves do objeto todo
        ng-options="operadora.codigo as operadora.nome for operadora in operadoras"

    Divide a opçoes por agrupamentos definidos, que nesse caso foi por categoria
        ng-options="operadora.nome group by operadora.categoria for operadora in operadoras"

## ng-class e ng-style

    Usadas para aplicar classes Css e estilos dinamicamente
    Ex:  <tr ng-class="{'selecionado negrito': contato.selecionado}" ng-repeat="contato in contatos">
    Ex: ng-style="{'background-color': contato.cor}"

## ng-show ng-hide ngif

    Exibe um elemento condicionalmente
     ng-show="isContatoSelecionado(contatos)" - mostra o elemento onde foi chamado se for true
     ng-hide="isContatoSelecionado(contatos)" - esconde o elemento onde foi chamado se for true
     ng-if="isContatoSelecionado(contatos)" - renderiza algo se for true

## ng-include

    inclui conteúdo dinamicamente
    Ex: <div ng-include="'footer.html'"></div>

## ng-required

    Define um determinado campo como obrigatório
    Ex: ng-required="true"

## $valid e $invalid

    Consultando a validade de um campo ou formulário
    Ex: <form name="contatoForm">
        ng-disabled="contatoForm.$invalid"

## $pristine e $dirty

    Verificando se um formulário ou campo já foi utilizado alguma vez
    Ex: ng-show="contatoForm.nome.$invalid && contatoForm.nome.$dirty"

## ng-minlength e ng-maxlength

    define o tamaho mínimo e máximo permitido

## $error

    Consultando os erros de um campo ou formulário
    Ex: ng-show="contatoForm.nome.$error.required
        ng-show="contatoForm.nome.$error.minlength"

## ngPattern

    Define uma RegExp para validar o campo
    Ex: ng-pattern="/^\d{5}-\d{4}$/"

## ng-messages

    Funciona como um switch para escolher qual messagem será exibida de acordo com o erro
    <div ng-messages="contatoForm.nome.$error" class="alert alert-danger">
            <div ng-message="required">Por favor, preencha o campo nome</div>
            <div ng-message="minlength">O campo nome deve ter no mínimo 10 caracteres.</div>
    </div>

# 2 - Filtros

    Transformam o resultado de uma expressão, realizando operações como a formatação de data, a conversão de moerda e a ordenação de Array.

## uppercase

    Transforma uma string em letra maiúscula
    Ex: {{contato.nome | uppercase}}

## lowercase

    Transforma uma string em letra minúscula
    Ex: {{contato.operadora.nome | lowercase}}

## date

    Formata uma data usando uma máscara
    Ex: {{contato.data | date:'dd/MM/yyyy hh:mm'}}

## filter

    Filtra um array com base em um critério
    Ex: <input class="form-control" type="text" ng-model="criterioDeBusca" placeholder="O que você está buscando?">
        ng-repeat="contato in contatos | filter: criterioDeBusca"
        ng-repeat="contato in contatos | filter: {nome: criterioDeBusca}"

## orderBy

    Ordena um array com base em um critério
    ng-repeat="contato in contatos | filter: criterioDeBusca | orderBy:'nome'"

## currency

    Converte um número para moeda
    Ex: (operadora.preco | currency)
        date:'EEE dd/MM/yyyy hh:mm'

## number

    Formata um número
    Ex: {{100.6576 | number:1}} Arredonda valores

## limitTo

    Limita um array ou uma string
    Ex:  "limitTo: 2"

## Filtros no controller

    function($scope, $filter)
    $filter('uppercase')("Nilson")
    ou
    uppercaseFilter
    uppercaseFilter("Nilson")

# Requisições

## http

    O serviço permite a realização de requisições utilizando XMLHttpRequest ou via JSONP
    Ex:  var carregarContatos = function(){
                $http.get("http://localhost:8080/api/contatos").then(function (data){
                    console.log(data.data)
                    $scope.contatos = data.data;
                }).catch((err) => console.log(err));
            }

# Servicos

## factory

## service

## value

## provider

    Da origem a todos os outros

# ngRoute

    Módulo do framework que fornece serviços para realizar o roteamento de páginas

# Interceptor

    É um tipo de serviço que permite a interceptação das requisições e respostas do serviço $http
    O serviço $http possui um array de interceptors que podem ser configurados na inicialização da aplicação

## timestamp interceptor

    Adiciona uma marcação contendo um timestamp em todas as requisições

## error interceptor

    Exibe a tela erro padrão caso uma requisição HTTP receba um status code 404 como resposta

## loading interception

    Exibe uma imagem de loading enquanto tiver uma requisição em andamento

# Performance

    Excesso de interação com a DOM e principalmente pelo desperdício de tempo processando coisas desnecessárias, por conta da forma como o ciclo de notificação do framework, também conhecido como digest cycle, funciona.

## One time bind

    Apos a variável receber o primeiro valor, ela para de ser vista, melhorando o desempenho
    EX: {{::contato.telefone}} essa variável só precisar ser carregada uma vez, logo o sistema não precisa ficar escutando ela para alterar
