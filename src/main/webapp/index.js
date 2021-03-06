'use strict';

angular.module('contagem-regressiva', ['timer'])

    .controller('controller', function ($scope) {


        $scope.provas = [
            {id: "0", nome: "Relatório 1 - Filosofia", data: new Date("08/24/2017")},
            {id: "1", nome: "Apresentação PSE PID", data: new Date( "09/04/2017")},
            {id: "2", nome: "Prova 1 - Distribuída", data: new Date( "09/20/2017")},
            {id: "3", nome: "Prova 1 - PID", data: new Date( "09/13/2017")},
            {id: "4", nome: "Prova 1 - Modelagem Zárate", data: new Date( "09/28/2017")},
            {id: "5", nome: "Prova 1 - Filosofia", data: new Date( "09/28/2017")},
            {id: "6", nome: "Proposta PSE PID", data: new Date( "10/04/2017")},
            {id: "7", nome: "Prova 2 - Distribuída", data: new Date( "10/11/2017")},
            {id: "8", nome: "Prova 2 - Modelagem Zárate", data: new Date( "10/25/2017")},
            {id: "9", nome: "Prova 2 - PID", data: new Date( "10/30/2017")},
            {id: "11", nome: "Apresentação PSE PID", data: new Date( "11/20/2017")},
            {id: "10", nome: "Prova 3 - Distribuída", data: new Date( "11/01/2017")},
            {id: "12", nome: "Relatório 2 - Filosofia", data: new Date( "11/21/2017")},
            {id: "13", nome: "Seminários Distribuída", data: new Date( "11/22/2017")},
            {id: "14", nome: "Prova 3 - Modelagem Zárate", data: new Date( "11/23/2017")},
            {id: "15", nome: "Trabalho Distribuída", data: new Date( "11/29/2017")},
            {id: "16", nome: "Prova 3 - PID", data: new Date( "11/29/2017")},
            {id: "17", nome: "Prova 2 - Filosofia", data: new Date( "12/05/2017")},
            {id: "18", nome: "Formulário Ponto de Controle preenchido", data: new Date( "08/21/2017")},
            {id: "18", nome: "Introdução, referencial Teórico e Metodologia.", data: new Date( "09/18/2017")},
            {id: "19", nome: "Implementação Física Início dos testes.", data: new Date( "10/09/2017")},
            {id: "20", nome: "Trabalho Final ", data: new Date( "11/27/2017")},
            {id: "21", nome: "Trabalho Final Impresso", data: new Date( "12/04/2017")},
            {id: "22", nome: "Atividade Objetiva 1", data: new Date( "08/28/2017")},
            {id: "23", nome: "Atividade Objetiva 2", data: new Date( "09/18/2017")},
            {id: "24", nome: "Atividade Objetiva 3", data: new Date( "10/02/2017")},
            {id: "25", nome: "Atividade Objetiva 4", data: new Date( "10/23/2017")},
            {id: "26", nome: "Atividade Objetiva 5", data: new Date( "10/09/2017")},
            {id: "27", nome: "Atividade Objetiva 6", data: new Date( "11/06/2017")},
            {id: "28", nome: "Atividade Objetiva 7", data: new Date( "11/13/2017")},
            {id: "28", nome: "APRESENTAR TCC :'(", data: new Date( "12/06/2017")},
            {id: "28", nome: "PROVA 1 - KUTOVA - SÁBADO 14HS", data: new Date( "09/23/2017")},
            {id: "28", nome: "PROVA 2 - KUTOVA - SÁBADO 14HS", data: new Date( "10/28/2017")}


        ]


        $scope.checked = function (position) {

            console.log(position);
            console.log($scope.provas[position].data);
            console.log(new Date().getMilliseconds() - new Date($scope.provas[position].data).getMilliseconds());
            if ((new Date().getMilliseconds() - $scope.provas[position].data.getMilliseconds()) < 0) {
                return true;
            }
            return false;
        }

        $scope.dateEquals = function(dateprova){
            var dateToday = new Date();
            var todayDay = dateToday.getUTCDate();
            var todayMonth = dateToday.getUTCMonth() + 1;
            var todayYear = dateToday.getUTCFullYear();

            var provaDay = dateprova.getUTCDate();
            var provaMonth = dateprova.getUTCMonth() + 1;
            var provaYear = dateprova.getUTCFullYear();

            if(todayDay >= provaDay - 2 && todayDay <= provaDay &&
               todayMonth == provaMonth &&
               todayYear == provaYear ){
                return "equals"
            }else if( dateprova < dateToday ){
                return "menor"
            } else{
                return false
            }
        }

    });

/*
*
* */

