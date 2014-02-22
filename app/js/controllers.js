'use strict';

/* Controllers */

var memberApp = angular.module('memberApp', []);

memberApp.controller('MembersCtrl', function($scope) {
  $scope.members = [
    {'name': 'Pablo Fallas',
     'rol': 'Soporte'},
    {'name': 'Leonardo Picado',
     'rol': 'Calidad'},
    {'name': 'Juan Pablo Parra',
     'rol': 'Cordinador General'},
    {'name': 'Franco Rivera',
     'rol': 'Calidad'},
    {'name': 'Andres Villarreal',
     'rol': 'Desarrollo'}
  ];
});
