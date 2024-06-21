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
