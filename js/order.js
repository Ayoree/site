// Выбор типа работы
function OrderTypeChanged(obj)
{
    if (obj.OrderType.value == "Код на СИ" || obj.OrderType.value == "Код на JavaScript") {
        document.getElementById("NeedTask").hidden = false;
        obj.Task.required = true;
    }
    else {
        document.getElementById("NeedTask").hidden = true;
        obj.Task.required = false;
        obj.Task.value = "";
    }
}





// для заполнения номера телефона в форме

window.addEventListener("DOMContentLoaded", function () {
    let input = document.querySelector("#online_phone");
    input.addEventListener("input", mask, false);
});

function dateChanged() {
    let input = document.querySelector("#dead_line");
    let deadline = new Date(input.value);
    let today = new Date();
    if (deadline < today)
    {
        let year = today.getFullYear();
        let month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
        let day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
        input.value = year + "-" + month  + "-" + day;
    }
}

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}
