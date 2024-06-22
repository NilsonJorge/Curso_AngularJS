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
