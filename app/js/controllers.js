'use strict';

/* Controllers */

var phonecatApp = angular.module('memberApp', []);

phonecatApp.controller('MembersCtrl', function($scope) {
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
