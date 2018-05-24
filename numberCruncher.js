"use strict";
{
    let calc = {
        controller: function(){
            let vm = this;
            vm.output = "Nothing Yet";
            vm.add = function(x,y){
                let result = Number(x) + Number(y);
                vm.output = result;
            };

            vm.multiply = function(x,y){
                let result = Number(x) * Number(y);
                vm.output = result;
            }

            vm.x = 0;
            vm.y = 0;
        },
        template: `X:
        <input placeholder="X" ng-model="x">
        <br> Y:
        <input placeholder="Y" ng-model="$ctrl.y">
        <br>
        
        <button ng-click="$ctrl.add($ctrl.x,$ctrl.y)">ADD</button>
        <br>
        <button ng-click="$ctrl.multiply(x,y)">MULTIPLY</button>
        
        <div>
            <h2>Result: {{$ctrl.output}}</h2>
        </div>`
    }

    angular
        .module("calculator")
        .component("calc", calc);
}