angular
  .module("listaTelefonica")
  .controller(
    "novoContatoCtrl",
    function ($scope, $filter, contatosAPI, serialGenerator, $location, operadoras) {
      $scope.app = "Lista telefonica";

      $scope.operadoras = operadoras.data;

      $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        // contato.data = new Date();
        contatosAPI
          .saveContato(contato)
          .then(function (data) {
            console.log("post", data);
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
          })
          .catch((err) => {
            $scope.message = "Erro: " + err;
          });
      };
      
    }
  );
