/**
 * @ngdoc directive
 * @name contactIcon
 *
 * @description
 * _Please update the description and restriction._
 *
 * @restrict A
 * */
angular.module('ui.identicon', [])
    .directive('identicon', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                username: '=',
                size: '='
            },
            template: '<img class="identicon" width={{size}} height={{size}} ng-src="data:image/png;base64,{{data}}">',
            controller: function ($scope, md5) {
                $scope.size = (typeof($scope.size) !== 'undefined' ? $scope.size : 24);

                $scope.$watchGroup(['username', 'size'], function (newVal) {
                    $scope.data = new Identicon(md5.createHash($scope.username || ''), $scope.size).toString();
                });
            }
        };
    });
