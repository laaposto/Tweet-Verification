var tweet_param = gup('tweet_id');
if (tweet_param != "") {
    $('#tweet_url').val(tweet_param);
    analyze_tweet();
}
load_examples();
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
        });
}

var id;
function analyze_tweet() {
    var tweet = document.getElementById("tweet");
    id = $('#tweet_url').val();
    if ($('#tweet_url').val().indexOf('twitter.com') != -1) {
        id = $('#tweet_url').val().split('/')[5];
    }
    if ((id != "") && (/^\d+$/.test(id))) {
        window.history.replaceState('page2', 'Title', 'http://' + window.location.hostname + ':' + window.location.port + window.location.pathname + '?tweet_id=' + id);
        $('#loading,.show_examples').show();
        $('#tweet').empty();
        $('#noTweet,.desc_examples,#examples,#wrapper_result').hide();
        twttr.widgets.createTweet(
            id, tweet,
            {
                conversation: 'none',
                cards: 'visible',
                theme: 'light',
                width: 550
            })
            .then(function (el) {
                $('body').addClass('no_overflow');
                $('#features_list').css({'height': nv.utils.windowSize().height - 220, 'display': 'inline-block'});
                create_histo_first();
            });
    }
}
$("#features_list").on("click", "label", function (e) {
    e.stopPropagation();
    if (!($(this).parent().parent().hasClass('active_feature'))) {
        $('.feature').removeClass('active_feature');
        $(this).parent().parent().addClass('active_feature');
        create_histo_feature();
    }
});
var folder = "tweets_based";
$('.span_filter').click(function (e) {
    if (!($(this).hasClass('active_filter'))) {
        $('.span_filter').removeClass('active_filter');
        $(this).addClass('active_filter');
        if ($(this).html() === "User Based") {
            folder = "users_based";
            $('#features_list').html("<div class='verticalLine'></div> <li class='feature active_feature'> <input class='radio' id='work1' name='features' type='radio' checked> <div class='relative'> <label for='work1'>Number of tweets</label> <span class='circle'></span> </div> <div class='content'> <p> The number of tweets the user profile has posted. </p> </div> </li> <li class='feature'> <input class='radio' id='work2' name='features' type='radio'> <div class='relative'> <label for='work2'>Has header image</label> <span class='circle'></span> </div> <div class='content'> <p> The user profile has a header image other than the default (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work3' name='features' type='radio'> <div class='relative'> <label for='work3'>Followers/Friends ratio</label> <span class='circle'></span> </div> <div class='content'> <p> The Followers/Friends ratio of the user profile. </p> </div> </li> <li class='feature'> <input class='radio' id='work4' name='features' type='radio'> <div class='relative'> <label for='work4'>Has url</label> <span class='circle'></span> </div> <div class='content'> <p> The user profile presents an external URL (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work5' name='features' type='radio'> <div class='relative'> <label for='work5'>Number of media content</label> <span class='circle'></span> </div> <div class='content'> <p> The number of media content the user profile has posted. </p> </div> </li> <li class='feature'> <input class='radio' id='work6' name='features' type='radio'> <div class='relative'> <label for='work6'>WOT trust metric</label> <span class='circle'></span> </div> <div class='content'> <p> WOT trust metric for the URLs shared in the user profile. </p> </div> </li> <li class='feature'> <input class='radio' id='work7' name='features' type='radio'> <div class='relative'> <label for='work7'>Times listed</label> <span class='circle'></span> </div> <div class='content'> <p> Times that the user profile has been listed. </p> </div> </li> <li class='feature'> <input class='radio' id='work8' name='features' type='radio'> <div class='relative'> <label for='work8'>Is verified</label> <span class='circle'></span> </div> <div class='content'> <p> The user profile is officially verified by Twitter (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work9' name='features' type='radio'> <div class='relative'> <label for='work9'>Number of friends</label> <span class='circle'></span> </div> <div class='content'> <p> The number of friends that the user profile has. </p> </div> </li> <li class='feature'> <input class='radio' id='work10' name='features' type='radio'> <div class='relative'> <label for='work10'>Number of followers</label> <span class='circle'></span> </div> <div class='content'> <p> The number of followers that the user profile has. </p> </div> </li> <li class='feature'> <input class='radio' id='work11' name='features' type='radio'> <div class='relative'> <label for='work11'>Has biography description</label> <span class='circle'></span> </div> <div class='content'> <p> The user profile provides biography description in the profile (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work12' name='features' type='radio'> <div class='relative'> <label for='work12'>Has existing location</label> <span class='circle'></span> </div> <div class='content'> <p> The location provided by the user profile is an existing location (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work13' name='features' type='radio'> <div class='relative'> <label for='work13'>Has location</label> <span class='circle'></span> </div> <div class='content'> <p> The user profile provides information about its location (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work14' name='features' type='radio'> <div class='relative'> <label for='work14'>Has profile image</label> <span class='circle'></span> </div> <div class='content'> <p> The user profile has a profile image other than the default (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work15' name='features' type='radio'> <div class='relative'> <label for='work15'>Tweet ratio</label> <span class='circle'></span> </div> <div class='content'> <p> Tweets per day made by user profile. </p> </div> </li> <li class='feature'> <input class='radio' id='work16' name='features' type='radio'> <div class='relative'> <label for='work16'>Account age (Date created)</label> <span class='circle'></span> </div> <div class='content'> <p> The date the user profile was created. </p> </div> </li> <li class='feature'> <input class='radio' id='work17' name='features' type='radio'> <div class='relative'> <label for='work17'>Alexa Delta Rank</label> <span class='circle'></span> </div> <div class='content'> <p> Alexa Delta Rank metric for the URLs shared in the user profile. </p> </div> </li> <li class='feature'> <input class='radio' id='work18' name='features' type='radio'> <div class='relative'> <label for='work18'>Alexa Reach Rank User</label> <span class='circle'></span> </div> <div class='content'> <p> Alexa Reach Rank User metric for the URLs shared in the user profile. </p> </div> </li> <li class='feature'> <input class='radio' id='work19' name='features' type='radio'> <div class='relative'> <label for='work19'>Alexa Popularity</label> <span class='circle'></span> </div> <div class='content'> <p> Alexa Popularity metric for the URLs shared in the user profile. </p> </div> </li> <li class='feature'> <input class='radio' id='work20' name='features' type='radio'> <div class='relative'> <label for='work20'>Alexa Country Rank User</label> <span class='circle'></span> </div> <div class='content'> <p> Alexa Country Rank User metric for the URLs shared in the user profile. </p> </div> </li><li class='feature'><input class='radio' id='work30' name='features' type='radio'><div class='relative'><label for='work30'>Harmonic Centrality</label><span class='circle'></span></div><div class='content'><p>Harmonic Centrality is a method for ranking sites by computing the number of urls that links towards a site, also taking into account the distance from the site.</p></div></li><li class='feature'><input class='radio' id='work31' name='features' type='radio'><div class='relative'><label for='work31'>Indegree Ranking</label><span class='circle'></span></div><div class='content'><p>Indegree ranking is the number of sites with a link towards a concrete site.</p></div></li>");
            $('.verticalLine').css('height', $('#features_list').prop('scrollHeight') + 10);
            $("#features_list").animate({scrollTop: 0}, "fast");
            create_histo_feature();
        }
        else {
            folder = "tweets_based";
            $('#features_list').html(" <div class='verticalLine'></div> <li class='feature active_feature'> <input class='radio' id='work1' name='features' type='radio' checked> <div class='relative'> <label for='work1'>Contains question mark</label> <span class='circle'></span> </div> <div class='content'> <p> Shows if the tweet text contains exclamation mark (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work2' name='features' type='radio'> <div class='relative'> <label for='work2'>Contains third order pronoun</label> <span class='circle'></span> </div> <div class='content'> <p> Shows if the tweet text contains third order pronoun (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work3' name='features' type='radio'> <div class='relative'> <label for='work3'>Number of question marks</label> <span class='circle'></span> </div> <div class='content'> <p> The number of question marks in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work4' name='features' type='radio'> <div class='relative'> <label for='work4'>Number of mentions</label> <span class='circle'></span> </div> <div class='content'> <p> The number of mentions in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work5' name='features' type='radio'> <div class='relative'> <label for='work5'>Number of URLs</label> <span class='circle'></span> </div> <div class='content'> <p> The number of URLs in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work6' name='features' type='radio'> <div class='relative'> <label for='work6'>Number of exclamation marks</label> <span class='circle'></span> </div> <div class='content'> <p> The number of exclamation marks in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work7' name='features' type='radio'> <div class='relative'> <label for='work7'>Contains happy emoticon</label> <span class='circle'></span> </div> <div class='content'> <p> Shows if the tweet text contains happy emoticon (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work8' name='features' type='radio'> <div class='relative'> <label for='work8'>Number of uppercase characters</label> <span class='circle'></span> </div> <div class='content'> <p> The number of uppercase characters in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work9' name='features' type='radio'> <div class='relative'> <label for='work9'>Number of nouns</label> <span class='circle'></span> </div> <div class='content'> <p> The number of nouns in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work10' name='features' type='radio'> <div class='relative'> <label for='work10'>Number of negative sentiment words</label> <span class='circle'></span> </div> <div class='content'> <p> The number of negative sentiment words in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work11' name='features' type='radio'> <div class='relative'> <label for='work11'>Number of hashtags</label> <span class='circle'></span> </div> <div class='content'> <p> The number of hashtags in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work12' name='features' type='radio'> <div class='relative'> <label for='work12'>Number of slang words</label> <span class='circle'></span> </div> <div class='content'> <p> The number of slang words in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work13' name='features' type='radio'> <div class='relative'> <label for='work13'>Number of positive sentiment words</label> <span class='circle'></span> </div> <div class='content'> <p> The number of positive sentiment words in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work14' name='features' type='radio'> <div class='relative'> <label for='work14'>Number of words</label> <span class='circle'></span> </div> <div class='content'> <p> The number of words in the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work15' name='features' type='radio'> <div class='relative'> <label for='work15'>Text length</label> <span class='circle'></span> </div> <div class='content'> <p> The length in characters of the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work16' name='features' type='radio'> <div class='relative'> <label for='work16'>Contains colon</label> <span class='circle'></span> </div> <div class='content'> <p> Shows if the tweet text contains colon (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work17' name='features' type='radio'> <div class='relative'> <label for='work17'>Retweet count</label> <span class='circle'></span> </div> <div class='content'> <p> The number of times the tweet has been retweeted. </p> </div> </li> <li class='feature'> <input class='radio' id='work18' name='features' type='radio'> <div class='relative'> <label for='work18'>Contains exclamation mark</label> <span class='circle'></span> </div> <div class='content'> <p> Shows if the tweet text contains exclamation mark (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work19' name='features' type='radio'> <div class='relative'> <label for='work19'>Contains word please</label> <span class='circle'></span> </div> <div class='content'> <p> Shows if the tweet text contains the word please (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work20' name='features' type='radio'> <div class='relative'> <label for='work20'>Contains external link</label> <span class='circle'></span> </div> <div class='content'> <p> Shows if the tweet text contains external link (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work21' name='features' type='radio'> <div class='relative'> <label for='work21'>Contains first order pronoun</label> <span class='circle'></span> </div> <div class='content'> <p> Shows if the tweet text contains first order pronoun (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work22' name='features' type='radio'> <div class='relative'> <label for='work22'>Contains second order pronoun</label> <span class='circle'></span> </div> <div class='content'> <p> Shows if the tweet text contains second order pronoun (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work23' name='features' type='radio'> <div class='relative'> <label for='work23'>Contains sad emoticon</label> <span class='circle'></span> </div> <div class='content'> <p> Shows if the tweet text contains sad emoticon (true,false). </p> </div> </li> <li class='feature'> <input class='radio' id='work24' name='features' type='radio'> <div class='relative'> <label for='work24'>WOT trust</label> <span class='circle'></span> </div> <div class='content'> <p> Web Of Trust metric for the URLs. </p> </div> </li> <li class='feature'> <input class='radio' id='work25' name='features' type='radio'> <div class='relative'> <label for='work25'>Readability</label> <span class='circle'></span> </div> <div class='content'> <p> Readability metric for the tweet text. </p> </div> </li> <li class='feature'> <input class='radio' id='work26' name='features' type='radio'> <div class='relative'> <label for='work26'>Alexa Country Rank metric</label> <span class='circle'></span> </div> <div class='content'> <p> Alexa Country Rank metric for the URLs. </p> </div> </li> <li class='feature'> <input class='radio' id='work27' name='features' type='radio'> <div class='relative'> <label for='work27'>Alexa Delta Rank metric</label> <span class='circle'></span> </div> <div class='content'> <p> Alexa Delta Rank metric for the URLs. </p> </div> </li> <li class='feature'> <input class='radio' id='work28' name='features' type='radio'> <div class='relative'> <label for='work28'>Alexa Popularity metric</label> <span class='circle'></span> </div> <div class='content'> <p> Alexa Popularity metric for the URLs. </p> </div> </li> <li class='feature'> <input class='radio' id='work29' name='features' type='radio'> <div class='relative'> <label for='work29'>Alexa Reach Rank metric</label> <span class='circle'></span> </div> <div class='content'> <p> Alexa Reach Rank metric for the URLs. </p> </div> </li><li class='feature'><input class='radio' id='work30' name='features' type='radio'><div class='relative'><label for='work30'>Harmonic Centrality</label><span class='circle'></span></div><div class='content'><p>Harmonic Centrality is a method for ranking sites by computing the number of urls that links towards a site, also taking into account the distance from the site.</p></div></li><li class='feature'><input class='radio' id='work31' name='features' type='radio'><div class='relative'><label for='work31'>Indegree Ranking</label><span class='circle'></span></div><div class='content'><p>Indegree ranking is the number of sites with a link towards a concrete site.</p></div></li>");
            $('.verticalLine').css('height', $('#features_list').prop('scrollHeight') + 10);
            $("#features_list").animate({scrollTop: 0}, "fast");
            create_histo_feature();
        }
    }
});
var outer_json;
function create_histo_first() {
    $.ajax({
        type: "GET",
        url: "http://160.40.51.28:8000/verify?id=" + id,
        dataType: "json",
        success: function (json) {
            if (JSON.stringify(json).length > 10) {

                $('.feature').css('opacity', '1');
                $('#wrapper_result').show();
                outer_json = json;

                if (json.predicted_value === "fake") {
                    $('#score_num').html('Score: ' + Math.round(json.confidence_value * 100) + '% <span style="color:rgb(229, 0, 0);">FAKE</span>');
                    $('#tweet').addClass('fake_tweet');
                    $('#feature0').css('width', Math.round(json.confidence_value * 100) + '%');
                }
                else {
                    $('#score_num').html('Score: ' + Math.round(json.confidence_value * 100) + '% <span style="color:rgb(44, 160, 0)">REAL</span>');
                    $('#tweet').addClass('real_tweet');
                    $('#feature0').css('width', Math.round((1 - json.confidence_value) * 100) + '%');
                }
                if (folder === "tweets_based") {
                    if (!(json.tweet_features.hasOwnProperty('contains_questionmark'))) {
                        $('.feature').eq(0).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('contains_third_order_pronoun'))) {
                        $('.feature').eq(1).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_questionmark'))) {
                        $('.feature').eq(2).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_mentions'))) {
                        $('.feature').eq(3).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_URLs'))) {
                        $('.feature').eq(4).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_exclamationmark'))) {
                        $('.feature').eq(5).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('contains_happy_emoticon'))) {
                        $('.feature').eq(6).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_uppercasechars'))) {
                        $('.feature').eq(7).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_nouns'))) {
                        $('.feature').eq(8).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_neg_sentiment_words'))) {
                        $('.feature').eq(9).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_hashtags'))) {
                        $('.feature').eq(10).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_slangs'))) {
                        $('.feature').eq(11).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_pos_sentiment_words'))) {
                        $('.feature').eq(12).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('num_words'))) {
                        $('.feature').eq(13).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('item_length'))) {
                        $('.feature').eq(14).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('has_colon'))) {
                        $('.feature').eq(15).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('retweet_count'))) {
                        $('.feature').eq(16).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('contains_exclamationmark'))) {
                        $('.feature').eq(17).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('has_please'))) {
                        $('.feature').eq(18).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('has_external_link'))) {
                        $('.feature').eq(19).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('contains_first_order_pronoun'))) {
                        $('.feature').eq(20).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('contains_second_order_pronoun'))) {
                        $('.feature').eq(21).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('contains_sad_emoticon'))) {
                        $('.feature').eq(22).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('wot_Trust'))) {
                        $('.feature').eq(23).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('readability'))) {
                        $('.feature').eq(24).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('alexa_country_rank'))) {
                        $('.feature').eq(25).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('alexa_delta_rank'))) {
                        $('.feature').eq(26).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('alexa_popularity'))) {
                        $('.feature').eq(27).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('alexa_reach_rank'))) {
                        $('.feature').eq(28).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('harmonic_centrality'))) {
                        $('.feature').eq(29).css('opacity', '0.3');
                    }
                    if (!(json.tweet_features.hasOwnProperty('indegree_centrality'))) {
                        $('.feature').eq(30).css('opacity', '0.3');
                    }
                }
                else {
                    if (!(json.user_features.hasOwnProperty('num_tweets'))) {
                        $('.feature').eq(0).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('has_header_img'))) {
                        $('.feature').eq(1).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('follower_friend_ratio'))) {
                        $('.feature').eq(2).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('has_URL'))) {
                        $('.feature').eq(3).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('num_media_content'))) {
                        $('.feature').eq(4).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('wot_trust'))) {
                        $('.feature').eq(5).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('times_listed'))) {
                        $('.feature').eq(6).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('is_verified'))) {
                        $('.feature').eq(7).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('num_friends'))) {
                        $('.feature').eq(8).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('num_followers'))) {
                        $('.feature').eq(9).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('has_bio_desc'))) {
                        $('.feature').eq(10).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('has_existing_location'))) {
                        $('.feature').eq(11).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('has_location'))) {
                        $('.feature').eq(12).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('has_profile_img'))) {
                        $('.feature').eq(13).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('tweet_ratio'))) {
                        $('.feature').eq(14).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('account_age'))) {
                        $('.feature').eq(15).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('alexa_delta_rank'))) {
                        $('.feature').eq(16).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('alexa_reach_rank'))) {
                        $('.feature').eq(17).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('alexa_popularity'))) {
                        $('.feature').eq(18).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('alexa_country_rank'))) {
                        $('.feature').eq(19).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('harmonic_centrality'))) {
                        $('.feature').eq(20).css('opacity', '0.3');
                    }
                    if (!(json.user_features.hasOwnProperty('indegree_centrality'))) {
                        $('.feature').eq(21).css('opacity', '0.3');
                    }
                }

                $('#feature_label').html($('.active_feature').find('label').html());
                var $json_value = $('#json_value');
                if (folder === "tweets_based") {
                    switch ($('.active_feature').find('label').html()) {
                        case "Contains question mark":
                            if (json.tweet_features.hasOwnProperty('contains_questionmark')) {
                                $json_value.html(json.tweet_features.contains_questionmark.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Contains third order pronoun":
                            if (json.tweet_features.hasOwnProperty('contains_third_order_pronoun')) {
                                $json_value.html(json.tweet_features.contains_third_order_pronoun.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of question marks":
                            if (json.tweet_features.hasOwnProperty('num_questionmark')) {
                                $json_value.html(json.tweet_features.num_questionmark);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of mentions":
                            if (json.tweet_features.hasOwnProperty('num_mentions')) {
                                $json_value.html(json.tweet_features.num_mentions);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of URLs":
                            if (json.tweet_features.hasOwnProperty('num_URLs')) {
                                $json_value.html(json.tweet_features.num_URLs);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of exclamation marks":
                            if (json.tweet_features.hasOwnProperty('num_exclamationmark')) {
                                $json_value.html(json.tweet_features.num_exclamationmark);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Contains happy emoticon":
                            if (json.tweet_features.hasOwnProperty('contains_happy_emoticon')) {
                                $json_value.html(json.tweet_features.contains_happy_emoticon.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of uppercase characters":
                            if (json.tweet_features.hasOwnProperty('num_uppercasechars')) {
                                $json_value.html(json.tweet_features.num_uppercasechars);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of nouns":
                            if (json.tweet_features.hasOwnProperty('num_nouns')) {
                                $json_value.html(json.tweet_features.num_nouns);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of negative sentiment words":
                            if (json.tweet_features.hasOwnProperty('num_neg_sentiment_words')) {
                                $json_value.html(json.tweet_features.num_neg_sentiment_words);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of hashtags":
                            if (json.tweet_features.hasOwnProperty('num_hashtags')) {
                                $json_value.html(json.tweet_features.num_hashtags);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of slang words":
                            if (json.tweet_features.hasOwnProperty('num_slangs')) {
                                $json_value.html(json.tweet_features.num_slangs);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of positive sentiment words":
                            if (json.tweet_features.hasOwnProperty('num_pos_sentiment_words')) {
                                $json_value.html(json.tweet_features.num_pos_sentiment_words);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of words":
                            if (json.tweet_features.hasOwnProperty('num_words')) {
                                $json_value.html(json.tweet_features.num_words);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Text length":
                            if (json.tweet_features.hasOwnProperty('item_length')) {
                                $json_value.html(json.tweet_features.item_length);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Contains colon":
                            if (json.tweet_features.hasOwnProperty('has_colon')) {
                                $json_value.html(json.tweet_features.has_colon.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Retweet count":
                            if (json.tweet_features.hasOwnProperty('retweet_count')) {
                                $json_value.html(json.tweet_features.retweet_count);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Contains exclamation mark":
                            if (json.tweet_features.hasOwnProperty('contains_exclamationmark')) {
                                $json_value.html(json.tweet_features.contains_exclamationmark.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Contains word please":
                            if (json.tweet_features.hasOwnProperty('has_please')) {
                                $json_value.html(json.tweet_features.has_please.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Contains external link":
                            if (json.tweet_features.hasOwnProperty('has_external_link')) {
                                $json_value.html(json.tweet_features.has_external_link.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Contains first order pronoun":
                            if (json.tweet_features.hasOwnProperty('contains_first_order_pronoun')) {
                                $json_value.html(json.tweet_features.contains_first_order_pronoun.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Contains second order pronoun":
                            if (json.tweet_features.hasOwnProperty('contains_second_order_pronoun')) {
                                $json_value.html(json.tweet_features.contains_second_order_pronoun.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Contains sad emoticon":
                            if (json.tweet_features.hasOwnProperty('contains_sad_emoticon')) {
                                $json_value.html(json.tweet_features.contains_sad_emoticon.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "WOT trust":
                            if (json.tweet_features.hasOwnProperty('wot_Trust')) {
                                $json_value.html(json.tweet_features.wot_Trust);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Readability":
                            if (json.tweet_features.hasOwnProperty('readability')) {
                                $json_value.html(json.tweet_features.readability);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Alexa Country Rank metric":
                            if (json.tweet_features.hasOwnProperty('alexa_country_rank')) {
                                $json_value.html(json.tweet_features.alexa_country_rank);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Alexa Delta Rank metric":
                            if (json.tweet_features.hasOwnProperty('alexa_delta_rank')) {
                                $json_value.html(json.tweet_features.alexa_delta_rank);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Alexa Popularity metric":
                            if (json.tweet_features.hasOwnProperty('alexa_popularity')) {
                                $json_value.html(json.tweet_features.alexa_popularity);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Alexa Reach Rank metric":
                            if (json.tweet_features.hasOwnProperty('alexa_reach_rank')) {
                                $json_value.html(json.tweet_features.alexa_reach_rank);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Harmonic Centrality":
                            if (json.tweet_features.hasOwnProperty('harmonic_centrality')) {
                                $json_value.html(json.tweet_features.harmonic_centrality);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Indegree Ranking":
                            if (json.tweet_features.hasOwnProperty('indegree_centrality')) {
                                $json_value.html(json.tweet_features.indegree_centrality);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                    }
                }
                else {
                    switch ($('.active_feature').find('label').html()) {
                        case "Number of tweets":
                            if (json.user_features.hasOwnProperty('num_tweets')) {
                                $json_value.html(json.user_features.num_tweets);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Has header image":
                            if (json.user_features.hasOwnProperty('has_header_img')) {
                                $json_value.html(json.user_features.has_header_img.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Followers/Friends ratio":
                            if (json.user_features.hasOwnProperty('follower_friend_ratio')) {
                                $json_value.html(json.user_features.follower_friend_ratio);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Has url":
                            if (json.user_features.hasOwnProperty('has_URL')) {
                                $json_value.html(json.user_features.has_URL.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of media content":
                            if (json.user_features.hasOwnProperty('num_media_content')) {
                                $json_value.html(json.user_features.num_media_content);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "WOT trust metric":
                            if (json.user_features.hasOwnProperty('wot_trust')) {
                                $json_value.html(json.user_features.wot_trust);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Times listed":
                            if (json.user_features.hasOwnProperty('times_listed')) {
                                $json_value.html(json.user_features.times_listed);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Is verified":
                            if (json.user_features.hasOwnProperty('is_verified')) {
                                $json_value.html(json.user_features.is_verified.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of friends":
                            if (json.user_features.hasOwnProperty('num_friends')) {
                                $json_value.html(json.user_features.num_friends);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Number of followers":
                            if (json.user_features.hasOwnProperty('num_followers')) {
                                $json_value.html(json.user_features.num_followers);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Has biography description":
                            if (json.user_features.hasOwnProperty('has_bio_desc')) {
                                $json_value.html(json.user_features.has_bio_desc.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Has existing location":
                            if (json.user_features.hasOwnProperty('has_existing_location')) {
                                $json_value.html(json.user_features.has_existing_location.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Has location":
                            if (json.user_features.hasOwnProperty('has_location')) {
                                $json_value.html(json.user_features.has_location.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Has profile image":
                            if (json.user_features.hasOwnProperty('has_profile_img')) {
                                $json_value.html(json.user_features.has_profile_img.toString().toUpperCase());
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Tweet ratio":
                            if (json.user_features.hasOwnProperty('tweet_ratio')) {
                                $json_value.html(json.user_features.tweet_ratio);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Account age (Date created)":
                            if (json.user_features.hasOwnProperty('account_age')) {
                                $json_value.html(timeConverter(json.user_features.account_age));
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Alexa Delta Rank":
                            if (json.user_features.hasOwnProperty('alexa_delta_rank')) {
                                $json_value.html(json.user_features.alexa_delta_rank);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Alexa Reach Rank User":
                            if (json.user_features.hasOwnProperty('alexa_reach_rank')) {
                                $json_value.html(json.user_features.alexa_reach_rank);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Alexa Popularity":
                            if (json.user_features.hasOwnProperty('alexa_popularity')) {
                                $json_value.html(json.user_features.alexa_popularity);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Alexa Country Rank User":
                            if (json.user_features.hasOwnProperty('alexa_country_rank')) {
                                $json_value.html(json.user_features.alexa_country_rank);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Harmonic Centrality":
                            if (json.user_features.hasOwnProperty('harmonic_centrality')) {
                                $json_value.html(json.user_features.harmonic_centrality);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                        case "Indegree Ranking":
                            if (json.user_features.hasOwnProperty('indegree_centrality')) {
                                $json_value.html(json.user_features.indegree_centrality);
                            }
                            else {
                                $json_value.html('null');
                            }
                            break;
                    }
                }
                $('#loading').hide();
                $('.verticalLine').css('height', $('#features_list').prop('scrollHeight') + 10);
            }
            else {
                $('#noTweet').show();
            }
        },
        async: true
    });
    $.ajax({
        type: "GET",
        url: "fake_jsons/" + folder + "/feature" + ($('.active_feature').index() - 1) + ".json",
        dataType: "json",
        success: function (json) {
            $('#bar_chart').css('display', 'inline-block');
            var xs = [], values_real = [], values_fake = [];
            if ($.inArray("true", json.x_values_real) !== -1) {
                xs = ["true", "false"];
                for (var i = 0; i < xs.length; i++) {
                    values_real.push({x: xs[i], y: (json.percentage_values_real[i]) / 100});

                }
                for (var i = 0; i < xs.length; i++) {
                    values_fake.push({x: xs[i], y: (json.percentage_values_fake[i]) / 100});
                }
                var percentage, selector;
                if ($('#json_value').html() !== "null") {
                    if ($('#json_value').html() === "FALSE") {
                        selector = 1;
                        if (json.percentage_values_real[1] / 100 > json.percentage_values_fake[1] / 100) {
                            $('#majority').html("REAL").css('color', '#2ca02c');
                            percentage = json.percentage_values_real[1] / (json.percentage_values_real[1] + json.percentage_values_fake[1]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#2ca02c');

                        }
                        else {
                            $('#majority').html("FAKE").css('color', '#E50000');
                            percentage = json.percentage_values_fake[1] / (json.percentage_values_real[1] + json.percentage_values_fake[1]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#E50000');
                        }
                    }
                    else {
                        selector = 0;
                        if (json.percentage_values_real[0] / 100 > json.percentage_values_fake[0] / 100) {
                            $('#majority').html("REAL").css('color', '#2ca02c');
                            percentage = json.percentage_values_real[0] / (json.percentage_values_real[0] + json.percentage_values_fake[0]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#2ca02c');
                        }
                        else {
                            $('#majority').html("FAKE").css('color', '#E50000');
                            percentage = json.percentage_values_fake[0] / (json.percentage_values_real[0] + json.percentage_values_fake[0]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#E50000');
                        }
                    }
                }
                else {
                    $('#percentage').html("-");
                    $('#majority').html("-");
                }
            }
            else {
                for (var i = 0; i < json.x_values_real.length - 1; i++) {
                    xs.push(json.x_values_real[i] + "-" + json.x_values_real[(i + 1)]);
                }
                for (var i = 0; i < xs.length; i++) {
                    values_real.push({x: xs[i], y: (json.percentage_values_real[i]) / 100});

                }
                for (var i = 0; i < xs.length; i++) {
                    values_fake.push({x: xs[i], y: (json.percentage_values_fake[i]) / 100});
                }
                if ($('.active_feature').find('label').html() === "Account age (Date created)") {
                    var parts = $('#json_value').html().split('/');
                    var number = new Date("20" + parts[1], parts[0] - 1, 1).getTime() / 1000;
                    for (var l = 0; i < json.x_values_real_unix.length; l++) {
                        if (json.x_values_real_unix[l] > number) {
                            break;
                        }
                    }
                    var position = l - 1;
                    selector = l;
                    if (json.percentage_values_real[position] / 100 > json.percentage_values_fake[position] / 100) {
                        $('#majority').html("REAL").css('color', '#2ca02c');
                        percentage = json.percentage_values_real[position] / (json.percentage_values_real[position] + json.percentage_values_fake[position]);
                        $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#2ca02c');
                    }
                    else {
                        $('#majority').html("FAKE").css('color', '#E50000');
                        percentage = json.percentage_values_fake[position] / (json.percentage_values_real[position] + json.percentage_values_fake[position]);
                        $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#E50000');
                    }
                }
                else {
                    if ($('#json_value').html() !== "null") {
                        var number = parseInt($('#json_value').html());
                        for (var l = 0; i < json.x_values_real.length; l++) {
                            if (json.x_values_real[l] > number) {
                                break;
                            }
                        }
                        var position = l - 1;
                        selector = l;
                        if (json.percentage_values_real[position] / 100 > json.percentage_values_fake[position] / 100) {
                            $('#majority').html("REAL").css('color', '#2ca02c');
                            percentage = json.percentage_values_real[position] / (json.percentage_values_real[position] + json.percentage_values_fake[position]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#2ca02c');
                        }
                        else {
                            $('#majority').html("FAKE").css('color', '#E50000');
                            percentage = json.percentage_values_fake[position] / (json.percentage_values_real[position] + json.percentage_values_fake[position]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#E50000');
                        }
                    }
                    else {
                        $('#percentage').html("-");
                        $('#majority').html("-");
                    }
                }
                xs.unshift("null");
                values_real.unshift({x: xs[0], y: (json.percentage_of_null_in_real) / 100});
                values_fake.unshift({x: xs[0], y: (json.percentage_of_null_in_fake) / 100});

            }

            var data = [
                {
                    values: values_real,
                    key: "REAL",
                    color: "#2ca02c"
                },
                {
                    values: values_fake,
                    key: "FAKE",
                    color: "#E50000"
                }];

            nv.addGraph({
                generate: function () {
                    var width = 400,
                        height = 400;
                    var chart = nv.models.multiBarChart()
                        .width(width)
                        .height(height)
                        .stacked(false)
                        .showControls(false)
                        .staggerLabels(false)
                        .groupSpacing(0.1);
                    chart.yAxis.tickFormat(d3.format('.2%'));
                    chart.dispatch.on('renderEnd', function () {
                        $(".nv-group").each(function () {
                            $(this).find('.positive').eq(selector).css('opacity', '1');
                        });
                    });
                    var svg = d3.select('#bar_chart svg').datum(data);
                    svg.transition().duration(10000).call(chart);
                    if ($.inArray("true", json.x_values_real) === -1) {
                        $('.nv-y .nv-axisMaxMin:nth-child(3)').css('display', 'none');
                    }
                    else {
                        $('.nv-y .nv-axisMaxMin:nth-child(3)').css('display', 'block');
                    }
                    $('.positive').css('opacity', '0.3');
                    return chart;
                },
                callback: function (graph) {
                    nv.utils.windowResize(function () {
                        $('#features_list').css({
                            'height': nv.utils.windowSize().height - 220,
                            'display': 'inline-block'
                        });
                        $('.verticalLine').css('height', $('#features_list').prop('scrollHeight') + 10);
                        var width = 400,
                            height = 400;
                        graph.width(width).height(height);

                        d3.select('#bar_chart svg')
                            .attr('width', width)
                            .attr('height', height)
                            .transition().duration(1000)
                            .call(graph);

                    });
                }
            });
        },
        async: true
    });
}

function create_histo_feature() {
    $('#feature_label').html($('.active_feature').find('label').html());
    var $json_value = $('#json_value');
    $('.feature').css('opacity', '1');

    if (folder === "tweets_based") {
        if (!(outer_json.tweet_features.hasOwnProperty('contains_questionmark'))) {
            $('.feature').eq(0).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('contains_third_order_pronoun'))) {
            $('.feature').eq(1).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_questionmark'))) {
            $('.feature').eq(2).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_mentions'))) {
            $('.feature').eq(3).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_URLs'))) {
            $('.feature').eq(4).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_exclamationmark'))) {
            $('.feature').eq(5).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('contains_happy_emoticon'))) {
            $('.feature').eq(6).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_uppercasechars'))) {
            $('.feature').eq(7).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_nouns'))) {
            $('.feature').eq(8).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_neg_sentiment_words'))) {
            $('.feature').eq(9).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_hashtags'))) {
            $('.feature').eq(10).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_slangs'))) {
            $('.feature').eq(11).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_pos_sentiment_words'))) {
            $('.feature').eq(12).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('num_words'))) {
            $('.feature').eq(13).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('item_length'))) {
            $('.feature').eq(14).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('has_colon'))) {
            $('.feature').eq(15).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('retweet_count'))) {
            $('.feature').eq(16).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('contains_exclamationmark'))) {
            $('.feature').eq(17).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('has_please'))) {
            $('.feature').eq(18).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('has_external_link'))) {
            $('.feature').eq(19).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('contains_first_order_pronoun'))) {
            $('.feature').eq(20).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('contains_second_order_pronoun'))) {
            $('.feature').eq(21).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('contains_sad_emoticon'))) {
            $('.feature').eq(22).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('wot_Trust'))) {
            $('.feature').eq(23).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('readability'))) {
            $('.feature').eq(24).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('alexa_country_rank'))) {
            $('.feature').eq(25).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('alexa_delta_rank'))) {
            $('.feature').eq(26).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('alexa_popularity'))) {
            $('.feature').eq(27).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('alexa_reach_rank'))) {
            $('.feature').eq(28).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('harmonic_centrality'))) {
            $('.feature').eq(29).css('opacity', '0.3');
        }
        if (!(outer_json.tweet_features.hasOwnProperty('indegree_centrality'))) {
            $('.feature').eq(30).css('opacity', '0.3');
        }
    }
    else {
        if (!(outer_json.user_features.hasOwnProperty('num_tweets'))) {
            $('.feature').eq(0).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('has_header_img'))) {
            $('.feature').eq(1).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('follower_friend_ratio'))) {
            $('.feature').eq(2).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('has_URL'))) {
            $('.feature').eq(3).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('num_media_content'))) {
            $('.feature').eq(4).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('wot_trust'))) {
            $('.feature').eq(5).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('times_listed'))) {
            $('.feature').eq(6).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('is_verified'))) {
            $('.feature').eq(7).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('num_friends'))) {
            $('.feature').eq(8).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('num_followers'))) {
            $('.feature').eq(9).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('has_bio_desc'))) {
            $('.feature').eq(10).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('has_existing_location'))) {
            $('.feature').eq(11).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('has_location'))) {
            $('.feature').eq(12).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('has_profile_img'))) {
            $('.feature').eq(13).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('tweet_ratio'))) {
            $('.feature').eq(14).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('account_age'))) {
            $('.feature').eq(15).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('alexa_delta_rank'))) {
            $('.feature').eq(16).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('alexa_reach_rank'))) {
            $('.feature').eq(17).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('alexa_popularity'))) {
            $('.feature').eq(18).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('alexa_country_rank'))) {
            $('.feature').eq(19).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('harmonic_centrality'))) {
            $('.feature').eq(20).css('opacity', '0.3');
        }
        if (!(outer_json.user_features.hasOwnProperty('indegree_centrality'))) {
            $('.feature').eq(21).css('opacity', '0.3');
        }
    }

    if (folder === "tweets_based") {
        switch ($('.active_feature').find('label').html()) {
            case "Contains question mark":
                if (outer_json.tweet_features.hasOwnProperty('contains_questionmark')) {
                    $json_value.html(outer_json.tweet_features.contains_questionmark.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Contains third order pronoun":
                if (outer_json.tweet_features.hasOwnProperty('contains_third_order_pronoun')) {
                    $json_value.html(outer_json.tweet_features.contains_third_order_pronoun.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of question marks":
                if (outer_json.tweet_features.hasOwnProperty('num_questionmark')) {
                    $json_value.html(outer_json.tweet_features.num_questionmark);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of mentions":
                if (outer_json.tweet_features.hasOwnProperty('num_mentions')) {
                    $json_value.html(outer_json.tweet_features.num_mentions);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of URLs":
                if (outer_json.tweet_features.hasOwnProperty('num_URLs')) {
                    $json_value.html(outer_json.tweet_features.num_URLs);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of exclamation marks":
                if (outer_json.tweet_features.hasOwnProperty('num_exclamationmark')) {
                    $json_value.html(outer_json.tweet_features.num_exclamationmark);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Contains happy emoticon":
                if (outer_json.tweet_features.hasOwnProperty('contains_happy_emoticon')) {
                    $json_value.html(outer_json.tweet_features.contains_happy_emoticon.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of uppercase characters":
                if (outer_json.tweet_features.hasOwnProperty('num_uppercasechars')) {
                    $json_value.html(outer_json.tweet_features.num_uppercasechars);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of nouns":
                if (outer_json.tweet_features.hasOwnProperty('num_nouns')) {
                    $json_value.html(outer_json.tweet_features.num_nouns);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of negative sentiment words":
                if (outer_json.tweet_features.hasOwnProperty('num_neg_sentiment_words')) {
                    $json_value.html(outer_json.tweet_features.num_neg_sentiment_words);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of hashtags":
                if (outer_json.tweet_features.hasOwnProperty('num_hashtags')) {
                    $json_value.html(outer_json.tweet_features.num_hashtags);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of slang words":
                if (outer_json.tweet_features.hasOwnProperty('num_slangs')) {
                    $json_value.html(outer_json.tweet_features.num_slangs);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of positive sentiment words":
                if (outer_json.tweet_features.hasOwnProperty('num_pos_sentiment_words')) {
                    $json_value.html(outer_json.tweet_features.num_pos_sentiment_words);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of words":
                if (outer_json.tweet_features.hasOwnProperty('num_words')) {
                    $json_value.html(outer_json.tweet_features.num_words);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Text length":
                if (outer_json.tweet_features.hasOwnProperty('item_length')) {
                    $json_value.html(outer_json.tweet_features.item_length);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Contains colon":
                if (outer_json.tweet_features.hasOwnProperty('has_colon')) {
                    $json_value.html(outer_json.tweet_features.has_colon.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Retweet count":
                if (outer_json.tweet_features.hasOwnProperty('retweet_count')) {
                    $json_value.html(outer_json.tweet_features.retweet_count);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Contains exclamation mark":
                if (outer_json.tweet_features.hasOwnProperty('contains_exclamationmark')) {
                    $json_value.html(outer_json.tweet_features.contains_exclamationmark.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Contains word please":
                if (outer_json.tweet_features.hasOwnProperty('has_please')) {
                    $json_value.html(outer_json.tweet_features.has_please.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Contains external link":
                if (outer_json.tweet_features.hasOwnProperty('has_external_link')) {
                    $json_value.html(outer_json.tweet_features.has_external_link.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Contains first order pronoun":
                if (outer_json.tweet_features.hasOwnProperty('contains_first_order_pronoun')) {
                    $json_value.html(outer_json.tweet_features.contains_first_order_pronoun.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Contains second order pronoun":
                if (outer_json.tweet_features.hasOwnProperty('contains_second_order_pronoun')) {
                    $json_value.html(outer_json.tweet_features.contains_second_order_pronoun.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Contains sad emoticon":
                if (outer_json.tweet_features.hasOwnProperty('contains_sad_emoticon')) {
                    $json_value.html(outer_json.tweet_features.contains_sad_emoticon.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "WOT trust":
                if (outer_json.tweet_features.hasOwnProperty('wot_Trust')) {
                    $json_value.html(outer_json.tweet_features.wot_Trust);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Readability":
                if (outer_json.tweet_features.hasOwnProperty('readability')) {
                    $json_value.html(outer_json.tweet_features.readability);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Alexa Country Rank metric":
                if (outer_json.tweet_features.hasOwnProperty('alexa_country_rank')) {
                    $json_value.html(outer_json.tweet_features.alexa_country_rank);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Alexa Delta Rank metric":
                if (outer_json.tweet_features.hasOwnProperty('alexa_delta_rank')) {
                    $json_value.html(outer_json.tweet_features.alexa_delta_rank);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Alexa Popularity metric":
                if (outer_json.tweet_features.hasOwnProperty('alexa_popularity')) {
                    $json_value.html(outer_json.tweet_features.alexa_popularity);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Alexa Reach Rank metric":
                if (outer_json.tweet_features.hasOwnProperty('alexa_reach_rank')) {
                    $json_value.html(outer_json.tweet_features.alexa_reach_rank);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Harmonic Centrality":
                if (outer_json.tweet_features.hasOwnProperty('harmonic_centrality')) {
                    $json_value.html(outer_json.tweet_features.harmonic_centrality);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Indegree Ranking":
                if (outer_json.tweet_features.hasOwnProperty('indegree_centrality')) {
                    $json_value.html(outer_json.tweet_features.indegree_centrality);
                }
                else {
                    $json_value.html('null');
                }
                break;
        }
    }
    else {
        switch ($('.active_feature').find('label').html()) {
            case "Number of tweets":
                if (outer_json.user_features.hasOwnProperty('num_tweets')) {
                    $json_value.html(outer_json.user_features.num_tweets);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Has header image":
                if (outer_json.user_features.hasOwnProperty('has_header_img')) {
                    $json_value.html(outer_json.user_features.has_header_img.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Followers/Friends ratio":
                if (outer_json.user_features.hasOwnProperty('follower_friend_ratio')) {
                    $json_value.html(outer_json.user_features.follower_friend_ratio);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Has url":
                if (outer_json.user_features.hasOwnProperty('has_URL')) {
                    $json_value.html(outer_json.user_features.has_URL.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of media content":
                if (outer_json.user_features.hasOwnProperty('num_media_content')) {
                    $json_value.html(outer_json.user_features.num_media_content);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "WOT trust metric":
                if (outer_json.user_features.hasOwnProperty('wot_trust')) {
                    $json_value.html(outer_json.user_features.wot_trust);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Times listed":
                if (outer_json.user_features.hasOwnProperty('times_listed')) {
                    $json_value.html(outer_json.user_features.times_listed);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Is verified":
                if (outer_json.user_features.hasOwnProperty('is_verified')) {
                    $json_value.html(outer_json.user_features.is_verified.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of friends":
                if (outer_json.user_features.hasOwnProperty('num_friends')) {
                    $json_value.html(outer_json.user_features.num_friends);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Number of followers":
                if (outer_json.user_features.hasOwnProperty('num_followers')) {
                    $json_value.html(outer_json.user_features.num_followers);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Has biography description":
                if (outer_json.user_features.hasOwnProperty('has_bio_desc')) {
                    $json_value.html(outer_json.user_features.has_bio_desc.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Has existing location":
                if (outer_json.user_features.hasOwnProperty('has_existing_location')) {
                    $json_value.html(outer_json.user_features.has_existing_location.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Has location":
                if (outer_json.user_features.hasOwnProperty('has_location')) {
                    $json_value.html(outer_json.user_features.has_location.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Has profile image":
                if (outer_json.user_features.hasOwnProperty('has_profile_img')) {
                    $json_value.html(outer_json.user_features.has_profile_img.toString().toUpperCase());
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Tweet ratio":
                if (outer_json.user_features.hasOwnProperty('tweet_ratio')) {
                    $json_value.html(outer_json.user_features.tweet_ratio);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Account age (Date created)":
                if (outer_json.user_features.hasOwnProperty('account_age')) {
                    $json_value.html(timeConverter(outer_json.user_features.account_age));
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Alexa Delta Rank":
                if (outer_json.user_features.hasOwnProperty('alexa_delta_rank')) {
                    $json_value.html(outer_json.user_features.alexa_delta_rank);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Alexa Reach Rank User":
                if (outer_json.user_features.hasOwnProperty('alexa_reach_rank')) {
                    $json_value.html(outer_json.user_features.alexa_reach_rank);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Alexa Popularity":
                if (outer_json.user_features.hasOwnProperty('alexa_popularity')) {
                    $json_value.html(outer_json.user_features.alexa_popularity);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Alexa Country Rank User":
                if (outer_json.user_features.hasOwnProperty('alexa_country_rank')) {
                    $json_value.html(outer_json.user_features.alexa_country_rank);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Harmonic Centrality":
                if (outer_json.user_features.hasOwnProperty('harmonic_centrality')) {
                    $json_value.html(outer_json.user_features.harmonic_centrality);
                }
                else {
                    $json_value.html('null');
                }
                break;
            case "Indegree Ranking":
                if (outer_json.user_features.hasOwnProperty('indegree_centrality')) {
                    $json_value.html(outer_json.user_features.indegree_centrality);
                }
                else {
                    $json_value.html('null');
                }
                break;
        }
    }
    $.ajax({
        type: "GET",
        url: "fake_jsons/" + folder + "/feature" + ($('.active_feature').index() - 1) + ".json",
        dataType: "json",
        success: function (json) {
            $('#bar_chart').css('display', 'inline-block');
            var xs = [], values_real = [], values_fake = [];
            if ($.inArray("true", json.x_values_real) !== -1) {
                xs = ["true", "false"];
                for (var i = 0; i < xs.length; i++) {
                    values_real.push({x: xs[i], y: (json.percentage_values_real[i]) / 100});

                }
                for (var i = 0; i < xs.length; i++) {
                    values_fake.push({x: xs[i], y: (json.percentage_values_fake[i]) / 100});
                }
                var percentage, selector;
                if ($('#json_value').html() !== "null") {
                    if ($('#json_value').html() === "FALSE") {
                        selector = 1;
                        if (json.percentage_values_real[1] / 100 > json.percentage_values_fake[1] / 100) {
                            $('#majority').html("REAL").css('color', '#2ca02c');
                            percentage = json.percentage_values_real[1] / (json.percentage_values_real[1] + json.percentage_values_fake[1]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#2ca02c');

                        }
                        else {
                            $('#majority').html("FAKE").css('color', '#E50000');
                            percentage = json.percentage_values_fake[1] / (json.percentage_values_real[1] + json.percentage_values_fake[1]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#E50000');
                        }
                    }
                    else {
                        selector = 0;
                        if (json.percentage_values_real[0] / 100 > json.percentage_values_fake[0] / 100) {
                            $('#majority').html("REAL").css('color', '#2ca02c');
                            percentage = json.percentage_values_real[0] / (json.percentage_values_real[0] + json.percentage_values_fake[0]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#2ca02c');
                        }
                        else {
                            $('#majority').html("FAKE").css('color', '#E50000');
                            percentage = json.percentage_values_fake[0] / (json.percentage_values_real[0] + json.percentage_values_fake[0]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#E50000');
                        }
                    }
                }
                else {
                    $('#percentage').html("-");
                    $('#majority').html("-");
                }
            }
            else {

                for (var i = 0; i < json.x_values_real.length - 1; i++) {
                    xs.push(json.x_values_real[i] + "-" + json.x_values_real[(i + 1)]);
                }
                for (var i = 0; i < xs.length; i++) {
                    values_real.push({x: xs[i], y: (json.percentage_values_real[i]) / 100});
                }
                for (var i = 0; i < xs.length; i++) {
                    values_fake.push({x: xs[i], y: (json.percentage_values_fake[i]) / 100});
                }
                if ($('.active_feature').find('label').html() === "Account age (Date created)") {
                    var parts = $('#json_value').html().split('/');
                    var number = new Date("20" + parts[1], parts[0] - 1, 1).getTime() / 1000;
                    for (var l = 0; i < json.x_values_real_unix.length; l++) {
                        if (json.x_values_real_unix[l] > number) {
                            break;
                        }
                    }
                    var position = l - 1;
                    selector = l;
                    if (json.percentage_values_real[position] / 100 > json.percentage_values_fake[position] / 100) {
                        $('#majority').html("REAL").css('color', '#2ca02c');
                        percentage = json.percentage_values_real[position] / (json.percentage_values_real[position] + json.percentage_values_fake[position]);
                        $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#2ca02c');
                    }
                    else {
                        $('#majority').html("FAKE").css('color', '#E50000');
                        percentage = json.percentage_values_fake[position] / (json.percentage_values_real[position] + json.percentage_values_fake[position]);
                        $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#E50000');
                    }
                }
                else {
                    if ($('#json_value').html() !== "null") {
                        var number = parseInt($('#json_value').html());
                        for (var l = 0; l < json.x_values_real.length; l++) {
                            if (json.x_values_real[l] > number) {
                                break;
                            }
                        }
                        var position = l - 1;
                        selector = l;
                        if (json.percentage_values_real[position] / 100 > json.percentage_values_fake[position] / 100) {
                            $('#majority').html("REAL").css('color', '#2ca02c');
                            percentage = json.percentage_values_real[position] / (json.percentage_values_real[position] + json.percentage_values_fake[position]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#2ca02c');
                        }
                        else {
                            $('#majority').html("FAKE").css('color', '#E50000');
                            percentage = json.percentage_values_fake[position] / (json.percentage_values_real[position] + json.percentage_values_fake[position]);
                            $('#percentage').html(Math.round(percentage * 100) + "%").css('color', '#E50000');
                        }
                    }
                    else {
                        $('#percentage').html("-");
                        $('#majority').html("-");
                    }
                }
                xs.unshift("null");
                values_real.unshift({x: xs[0], y: (json.percentage_of_null_in_real) / 100});
                values_fake.unshift({x: xs[0], y: (json.percentage_of_null_in_fake) / 100});

            }

            var data = [
                {
                    values: values_real,
                    key: "REAL",
                    color: "#2ca02c"
                },
                {
                    values: values_fake,
                    key: "FAKE",
                    color: "#E50000"
                }];

            nv.addGraph({
                generate: function () {
                    var width = 400,
                        height = 400;
                    var chart = nv.models.multiBarChart()
                        .width(width)
                        .height(height)
                        .stacked(false)
                        .showControls(false)
                        .staggerLabels(false)
                        .groupSpacing(0.1);
                    chart.yAxis.tickFormat(d3.format('.2%'));
                    chart.dispatch.on('renderEnd', function () {
                        $(".nv-group").each(function () {
                            if (selector == null) {
                                if ($(".tick.zero").find('text').text().indexOf("false") === -1) {
                                    selector = 0;
                                }
                            }

                            $(this).find('.positive').eq(selector).css('opacity', '1');
                        });
                    });
                    var svg = d3.select('#bar_chart svg').datum(data);
                    svg.transition().duration(10000).call(chart);
                    if ($.inArray("true", json.x_values_real) === -1) {
                        $('.nv-y .nv-axisMaxMin:nth-child(3)').css('display', 'none');
                    }
                    else {
                        $('.nv-y .nv-axisMaxMin:nth-child(3)').css('display', 'block');
                    }
                    $('.positive').css('opacity', '0.3');
                    return chart;
                },
                callback: function (graph) {
                    nv.utils.windowResize(function () {
                        $('#features_list').css({
                            'height': nv.utils.windowSize().height - 220,
                            'display': 'inline-block'
                        });
                        $('.verticalLine').css('height', $('#features_list').prop('scrollHeight') + 10);
                        var width = 400,
                            height = 400;
                        graph.width(width).height(height);

                        d3.select('#bar_chart svg')
                            .attr('width', width)
                            .attr('height', height)
                            .transition().duration(1000)
                            .call(graph);
                    });
                }
            });
        },
        async: true
    });
}

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var year = a.getFullYear().toString().substr(2, 2);
    var month = months[a.getMonth()];
    var time = month + '/' + year;
    return time;
}

$('#tweet_url').keyup(function (e) {
    if (e.keyCode == 13) {
        analyze_tweet();
    }
});
$('.show_examples').click(function () {
    window.history.replaceState('page2', 'Title', 'http://' + window.location.hostname + ':' + window.location.port + window.location.pathname);
    $('#wrapper_result').hide();
    $('.show_examples').hide();
    $('.desc_examples,#examples').show();
    $('body').removeClass('no_overflow');
});
$('.analyze').click(function () {
    $('#tweet_url').val($(this).parents('.tweets').attr('data-tweetID'));
    analyze_tweet();
});

function gup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) return "";
    else return results[1];
}