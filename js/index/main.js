$(function () {
    load_examples();
});

function load_examples() {
    var tweet1 = document.getElementById("tweet1");
    var id1 = tweet1.getAttribute("data-tweetID");

    twttr.widgets.createTweet(
        id1, tweet1,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function () {
            $('#tweet1').css('display', 'inline-block');
        });

    var tweet2 = document.getElementById("tweet2");
    var id2 = tweet2.getAttribute("data-tweetID");

    twttr.widgets.createTweet(
        id2, tweet2,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function () {
            $('#tweet2').css('display', 'inline-block');
        });
    var tweet3 = document.getElementById("tweet3");
    var id3 = tweet3.getAttribute("data-tweetID");

    twttr.widgets.createTweet(
        id3, tweet3,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function () {
            $('#tweet3').css('display', 'inline-block');
        });

    var tweet4 = document.getElementById("tweet4");
    var id4 = tweet4.getAttribute("data-tweetID");

    twttr.widgets.createTweet(
        id4, tweet4,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function () {
            $('#tweet4').css('display', 'inline-block');
        });

    var tweet5 = document.getElementById("tweet5");
    var id5 = tweet5.getAttribute("data-tweetID");

    twttr.widgets.createTweet(
        id5, tweet5,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function () {
            $('#tweet5').css('display', 'inline-block');
        });

    var tweet6 = document.getElementById("tweet6");
    var id6 = tweet6.getAttribute("data-tweetID");

    twttr.widgets.createTweet(
        id6, tweet6,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function () {
            $('#tweet6').css('display', 'inline-block');
        });
    var tweet7 = document.getElementById("tweet7");
    var id7 = tweet7.getAttribute("data-tweetID");

    twttr.widgets.createTweet(
        id7, tweet7,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function () {
            $('#tweet7').css('display', 'inline-block');
        });

    var tweet8 = document.getElementById("tweet8");
    var id8 = tweet8.getAttribute("data-tweetID");

    twttr.widgets.createTweet(
        id8, tweet8,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function () {
            $('#tweet8').css('display', 'inline-block');
        });

    var tweet9 = document.getElementById("tweet9");
    var id9 = tweet9.getAttribute("data-tweetID");

    twttr.widgets.createTweet(
        id9, tweet9,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function () {
            $('#tweet9').css('display', 'inline-block');
        });

    var tweet10 = document.getElementById("tweet10");
    var id10 = tweet10.getAttribute("data-tweetID");

    twttr.widgets.createTweet(
        id10, tweet10,
        {
            conversation: 'none',
            cards: 'visible',
            theme: 'light',
            width: 550
        })
        .then(function () {
            $('#tweet10').css('display', 'inline-block');
            $('#loading').hide();
        });
}

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
            url: "create_page.php?tweet=" + id,
            type: "GET",
            success: function (msg) {
                window.location.href = msg;
            }
        });
    }
});
$('.analyze').click(function () {
    $('#tweet_url').val($(this).parents('.tweets').attr('data-tweetID'));
    $('#verify_but').click();
});
