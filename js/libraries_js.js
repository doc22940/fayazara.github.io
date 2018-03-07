$(document).ready(function() {

    $(document).ajaxStart(function() {
        $("#ajaxLoader").fadeIn();
        console.log("Triggered ajaxStart handler.");
    });

    $(document).ajaxStop(function() {
        $("#ajaxLoader").fadeOut();
        console.log("Triggered ajaxStop handler.");
    });
    getData();
    setInterval(function() {
        $("#tadaIcon").addClass("animated tada");
        setTimeout(function() {
            $("#tadaIcon").removeClass("animated tada");
        }, 2000);
    }, 3000);
    $("#filter").keyup(function() {
        $("#noResDiv").fadeOut("fast");
        var filter = $(this).val(),
            count = 0;
        $("#users ul li").each(function() {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
                count++;
            }
        });
        if (count == 0) {
            setTimeout(function() { $("#noResDiv").fadeIn("fast"); }, 1000);
        }
    });
    function getData() {
        var i, j;
        $.getJSON('https://api.jsonbin.io/b/5a98371aa121bc097fe76892/3', function(data) {
            for (i = 0; i < data.length; i++) {
                var uniTag = data[i].tags.split(",");
                var libhtml = '<li class="collection-item">' +
                    '<div style="margin-bottom: 8px;"><span><a href="' + data[i].url + '" target="_blank">' + data[i].Library + '</a></span></div>' +
                    '<div><span>' + data[i].description + '</span></div><div>';
                for (j = 0; j < uniTag.length; j++) {
                    libhtml = libhtml + '<span class="chip" id="' + uniTag[j] + '">' + uniTag[j] + '</span>'
                }
                $("#libList").append(libhtml);
            }
        });
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#searchFloat").fadeIn();
        } else {
            $("#searchFloat").fadeOut();
        }
    });

    $("#searchFloatBtn").click(function(event) {
        event.preventDefault();
        jQuery('html,body').animate({ scrollTop: 0 }, 650);
        setTimeout(function() {
            $("#filter").focus();
        }, 850);

    });
});