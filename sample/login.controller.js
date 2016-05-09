(function () {
    'use strict';

    angular
        .module('AngularStore')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope'];
    function LoginController($scope) {
        $scope.hideShow = function(){
    		console.log("clicked");
    		$('#accordion').toggle();
    	}
    }
    
})();