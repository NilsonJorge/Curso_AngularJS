angular
  .module("listaTelefonica")
  .controller(
    "listaTelefonicaCtrl",
    function ($scope, $filter, contatosAPI, operadorasAPI, serialGenerator) {
      $scope.app = "Lista telefonica";
      $scope.contatos = [];
      var carregarContatos = function () {
        contatosAPI
          .getContatos()
          .then(function (data) {
            //console.log(data.data);
            $scope.contatos = data.data;
          })
          .catch((err) => console.log(err));
      };

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
      carregarContatos();
      carregarOperadoras();
    }
  );
