var features_name = "tweet_features";
var global_json;
$(function () {

    $.ajax({
        type: "GET",
        url: "http://reveal-mklab.iti.gr:9009/verify?id=" + tweet_to_verify,//"../../verify.json",
        dataType: "json",
        success: function (json) {
            if ($.isEmptyObject(json)) {
                $('#noTweet').show();
            }
            else {
                global_json = json;
                $('#loading').hide();
                $('#wrapper_result').show();
                if (json.predicted_value === "fake") {
                    $('#score_num').html('Result: ' + Math.round(json.confidence_value * 100) + '% <span style="color:rgb(229, 0, 0);">FAKE</span>');
                    $('#tweet').addClass('fake_tweet');
                }
                else {
                    $('#score_num').html('Result: ' + Math.round(json.confidence_value * 100) + '% <span style="color:rgb(44, 160, 0)">REAL</span>');
                    $('#tweet').addClass('real_tweet');
                }
                for (var i = 0; i < json[features_name].length; i++) {
                    if (json[features_name][i].feature_desc === "") {
                        if (json[features_name][i].feature === "Account creation date") {
                            $('#features_table').append('<tr><td>' + json[features_name][i].feature + '</td><td>' + timeConverter(json[features_name][i].feature_value) + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                        }
                        else {
                            if (isNaN(json[features_name][i].feature_value)) {
                                $('#features_table').append('<tr><td>' + json[features_name][i].feature + '</td><td>' + json[features_name][i].feature_value + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                            }
                            else {
                                if (isInt(json[features_name][i].feature_value)) {
                                    $('#features_table').append('<tr><td>' + json[features_name][i].feature + '</td><td>' + json[features_name][i].feature_value + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                                }
                                else {
                                    $('#features_table').append('<tr><td>' + json[features_name][i].feature + '</td><td>' + parseFloat(json[features_name][i].feature_value).toFixed(2) + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                                }
                            }
                        }
                    }
                    else {
                        if (isNaN(json[features_name][i].feature_value)) {
                            $('#features_table').append('<tr><td>' + json[features_name][i].feature + '<img src="../../imgs/info.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_' + i + '"></td><td>' + json[features_name][i].feature_value + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                        }
                        else {
                            if (isInt(json[features_name][i].feature_value)) {
                                $('#features_table').append('<tr><td>' + json[features_name][i].feature + '<img src="../../imgs/info.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_' + i + '"></td><td>' + json[features_name][i].feature_value + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                            }
                            else {
                                $('#features_table').append('<tr><td>' + json[features_name][i].feature + '<img src="../../imgs/info.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_' + i + '"></td><td>' + parseFloat(json[features_name][i].feature_value).toFixed(2) + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                            }
                        }
                        $('.tooltip_templates').append('<p id="tooltip_' + i + '">' + json[features_name][i].feature_desc + '</p>');
                    }
                    $('.tooltip_templates').append('<p id="tooltip_attr_' + i + '">' + json[features_name][i].feature_attribute + '</p>');
                }
                $('.tooltip').tooltipster();
            }
        }
    });

    var tweet = document.getElementById("tweet");
    twttr.widgets.createTweet(
        tweet_to_verify, tweet,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function (el) {

        });
});

$('#tweet_url').keyup(function (e) {
    if (e.keyCode == 13) {
        $('#verify_but').click();
    }
});
$('#verify_but').click(function () {
    var id = $('#tweet_url').val();
    if (id.indexOf('twitter.com') != -1) {
        id = id.split('/')[5];
    }
    if ((id != "") && (/^\d+$/.test(id))) {
        $.ajax({
            url: "../../create_page.php?tweet=" + id,
            type: "GET",
            success: function (msg) {
                console.log(msg);
                window.location.href = "../../" + msg;
            }
        });
    }
});
$('input[type=radio][name=tabs]').change(function () {
    features_name = this.value;
    $('#features_table tbody,.tooltip_templates').empty();
    for (var i = 0; i < global_json[features_name].length; i++) {
        if (global_json[features_name][i].feature_desc === "") {
            if (global_json[features_name][i].feature === "Account creation date") {
                $('#features_table').append('<tr><td>' + global_json[features_name][i].feature + '</td><td>' + timeConverter(global_json[features_name][i].feature_value) + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
            }
            else {
                if (isNaN(global_json[features_name][i].feature_value)) {
                    $('#features_table').append('<tr><td>' + global_json[features_name][i].feature + '</td><td>' + global_json[features_name][i].feature_value + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                }
                else {
                    if (isInt(global_json[features_name][i].feature_value)) {
                        $('#features_table').append('<tr><td>' + global_json[features_name][i].feature + '</td><td>' + global_json[features_name][i].feature_value + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                    }
                    else {
                        $('#features_table').append('<tr><td>' + global_json[features_name][i].feature + '</td><td>' + parseFloat(global_json[features_name][i].feature_value).toFixed(2) + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                    }
                }
            }
        }
        else {
            if (isNaN(global_json[features_name][i].feature_value)) {
                $('#features_table').append('<tr><td>' + global_json[features_name][i].feature + '<img src="../../imgs/info.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_' + i + '"></td><td>' + global_json[features_name][i].feature_value + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
            }
            else {
                if (isInt(global_json[features_name][i].feature_value)) {
                    $('#features_table').append('<tr><td>' + global_json[features_name][i].feature + '<img src="../../imgs/info.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_' + i + '"></td><td>' + global_json[features_name][i].feature_value + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                }
                else {
                    $('#features_table').append('<tr><td>' + global_json[features_name][i].feature + '<img src="../../imgs/info.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_' + i + '"></td><td>' + parseFloat(global_json[features_name][i].feature_value).toFixed(2) + '<img src="../../imgs/info2.png" class="tooltip tooltipstered" data-tooltip-content="#tooltip_attr_' + i + '"></td></tr>');
                }
            }
            $('.tooltip_templates').append('<p id="tooltip_' + i + '">' + global_json[features_name][i].feature_desc + '</p>');
        }
        $('.tooltip_templates').append('<p id="tooltip_attr_' + i + '">' + global_json[features_name][i].feature_attribute + '</p>');
    }
    $('.tooltip').tooltipster();
});

function isInt(n) {
    return n % 1 === 0;
}
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    return month + ' ' + date + ', ' + year;
}