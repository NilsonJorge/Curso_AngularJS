angular
  .module("listaTelefonica")
  .controller(
    "listaTelefonicaCtrl",
    function ($scope, $filter, contatos, serialGenerator, operadoras) {
      $scope.app = "Lista telefonica";
      $scope.contatos = contatos.data;

      var init = function () {
        calcularImpostos($scope.contatos);
        generateSerial($scope.contatos);
      };
      
      var calcularImpostos = function (contatos) {
        contatos.forEach(contato => {
          contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco)

        });
      }

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
      var counter = 0;
      $scope.verificarContatoSelecionado = function (contatos) {
        console.log(counter++);
        $scope.hasContatoSelecionado = contatos.some(function (contato) {
          return contato.selecionado;
        });
      };
      $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      };

  
      var calcularImposto = function (preco) {
        var imposto = 1.2;
        return preco * imposto;
      };
      init()
    }
  );
