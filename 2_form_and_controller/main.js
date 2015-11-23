angular.module('myApp',[]);

angular.module('myApp')
    .controller('FormController',
    function($scope) {
     $scope.formData = {
         name: 'kook',
         email: 'kittykook@hotmail.com'
     };

    $scope.register = function() {
        alert("register "
            + $scope.formData.name);
    }

});
