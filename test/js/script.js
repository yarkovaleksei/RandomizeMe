'use strict';

var Randomize = new RandomizeMe();

var options = {
    tags: {
        open: "[[",
        close: "]]"
    },
    actions: {
        number: function(min, max) {
            // Переопределяем встроенный метод number
            return Randomize.tools.Number(min, max);
        },
        choice: function(array, num, mode) {
            // Переопределяем встроенный метод choice
            return Randomize.tools.Choice(array, num, mode);
        },
        names: function() {
            let $array = [{
                name: "Федор"
            }, {
                name: "Акакий"
            }, {
                name: "Феоктист"
            }, {
                name: "Иван"
            }];
            let $value = Randomize.tools.Choice($array, 1, true);
            return $value.name;
        },
        who: function() {
            let $array = ["сайт", "проект", "магазин", "дурдом"];
            let $index = Randomize.tools.Choice($array);
            return $array[$index];
        },
        action: function() {
            let $array = ["предлагает", "рекомендует", "советует", "навязывает"];
            let $value = Randomize.tools.Choice($array, 1, true);
            return $value;
        },
        food: function() {
            let $count = Randomize.render(' по цене [[ number(50, 150) ]] р. за [[ number(1, 10) ]] [[ choice(["кг", "г", "шт"], 1, true) ]]');
            let $array = ["селёдочку", "колбаску", "грибочки", "огурчики"];
            let $index = Randomize.tools.Choice($array);
            return $array[$index] + $count;
        }
    }
};

Randomize.configure(options);

window.addEventListener("DOMContentLoaded", function(){
    var button = document.getElementById("test");
    var textarea = document.getElementById("text");
    var result = document.getElementById("result");

    button.addEventListener("click", function(){
        var template = textarea.value;
        result.innerHTML = Randomize.render(template);
    });
});