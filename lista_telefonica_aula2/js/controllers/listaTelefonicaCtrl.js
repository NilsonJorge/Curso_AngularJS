angular
  .module("listaTelefonica")
  .controller(
    "listaTelefonicaCtrl",
    function ($scope, $filter, contatos, serialGenerator, operadoras) {
      $scope.app = "Lista telefonica";
      $scope.contatos = contatos.data;

      var generateSerial = function (contatos) {
        contatos.forEach((item) => {
          item.serial = serialGenerator.generate();
        });
      };

      $scope.operadoras = operadoras.data;

      $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI
          .saveContato(contato)
          .then(function (data) {
            console.log("post", data);
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
          })
          .catch((err) => {
            $scope.message = "Erro: " + err;
          });
      };
      $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
          if (!contato.selecionado) return contato;
        });
      };

      $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
          return contato.selecionado;
        });
      };
      $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      };
      generateSerial($scope.contatos);
    }
  );
