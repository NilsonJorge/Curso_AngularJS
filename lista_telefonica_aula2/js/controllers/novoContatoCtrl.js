angular
  .module("listaTelefonica")
  .controller(
    "novoContatoCtrl",
    function ($scope, $filter, contatosAPI, operadorasAPI, serialGenerator, $location) {
      $scope.app = "Lista telefonica";

      $scope.operadoras = [];

      var carregarOperadoras = function () {
        operadorasAPI
          .getOperadoras()
          .then(function (data) {
            //console.log(data.data);
            $scope.operadoras = data.data;
          })
          .catch((err) => console.log(err));
      };

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
      carregarOperadoras();
    }
  );
