var Main = {
    name: "Main"
};

Main.OnLoad = function () {
    window.open("img.html", "full", "dependent=yes, fullscreen=yes");
//    window.close();

//    window.top.opener = null;
//        window.close();

    var win = window.open("", "_self"); 
    win.close();

}

Main.focus = function () {
//    window.moveTo(0, 0);
//    window.resizeTo(screen.availWidth, screen.availHeight);
    //    window.open("fullscreen=yes");


//    var win = window.open("", "full", "dependent=yes, fullscreen=yes");
//    win.location = window.location.href;
//    window.opener = null;


    $('[tabindex=0]').toggleClass("enable");
    var cnt1 = $('#divGrp1 > div').size();
    var cnt2 = $('#divGrp2 > div').size();

    for (var i = 0; i < cnt1; i++) {
        $("#" + $('#divGrp1 > div')[i].id.toString()).css({ width: "" + Math.floor((1280 / parseInt($("#hdnNoOfImg")[0].value)) - (Math.floor(1280 / parseInt($("#hdnNoOfImg")[0].value)) % 10)) + "" });
    }

    for (var j = 0; j < cnt2; j++) {
        $("#" + $('#divGrp2 > div')[j].id.toString()).css({ width: "" + Math.floor((1280 / parseInt($("#hdnNoOfImg")[0].value)) - (Math.floor(1280 / parseInt($("#hdnNoOfImg")[0].value)) % 10)) + "" });
    }



    $(document).keydown(function (e) {
        if (e.keyCode == 37) {
            var curpos = parseInt($("#hdnPosition")[0].value);
            var prevpos = -1;
            prevpos = curpos;
            curpos = curpos - 1;
            $("#hdnPosition")[0].value = curpos;
            $('[tabindex=' + curpos + ']').removeClass("tile");
            $('[tabindex=' + curpos + ']').addClass("enable");
            if (curpos != -1) {
                $('[tabindex=' + prevpos + ']').removeClass("enable");
                $('[tabindex=' + prevpos + ']').addClass("tile");
            }
            else {
                $("#hdnPosition")[0].value = 0;
            }
            return false;
        }
        else if (e.keyCode == 38) {
            var curpos = parseInt($("#hdnPosition")[0].value);
            var prevpos = -1;
            prevpos = curpos;
            $('[tabindex=' + prevpos + ']').removeClass("enable");
            $('[tabindex=' + prevpos + ']').addClass("tile");
            if (curpos - parseInt($("#hdnNoOfImg")[0].value) >= 0) {
                curpos = curpos - parseInt($("#hdnNoOfImg")[0].value);
                $("#hdnPosition")[0].value = curpos;
            }
            else {
                $("#hdnPosition")[0].value = prevpos;
            }

            $('[tabindex=' + curpos + ']').removeClass("tile");
            $('[tabindex=' + curpos + ']').addClass("enable");
            return false;
        }
        else if (e.keyCode == 39) {
            var curpos = parseInt($("#hdnPosition")[0].value);
            var prevpos = -1;
            prevpos = curpos;
            if (curpos < parseInt($("#hdnContentShown")[0].value) - 1) {
                curpos = curpos + 1;
                $("#hdnPosition")[0].value = curpos;
                $('[tabindex=' + prevpos + ']').removeClass("enable");
                $('[tabindex=' + prevpos + ']').addClass("tile");
            }
            else {
                $("#hdnPosition")[0].value = parseInt($("#hdnContentShown")[0].value) - 1;
            }
            $('[tabindex=' + curpos + ']').removeClass("tile");
            $('[tabindex=' + curpos + ']').addClass("enable");
            return false;
        }
        else if (e.keyCode == 40) {
            var curpos = parseInt($("#hdnPosition")[0].value);
            var prevpos = -1;
            prevpos = curpos;
            if (curpos + parseInt($("#hdnNoOfImg")[0].value) < parseInt($("#hdnContentShown")[0].value)) {
                curpos = curpos + parseInt($("#hdnNoOfImg")[0].value);
                $("#hdnPosition")[0].value = curpos;
                $('[tabindex=' + prevpos + ']').removeClass("enable");
                $('[tabindex=' + prevpos + ']').addClass("tile");
            }
            else {
                $("#hdnPosition")[0].value = prevpos;
            }
            $('[tabindex=' + curpos + ']').removeClass("tile");
            $('[tabindex=' + curpos + ']').addClass("enable");
            return false;
        }
    });

}