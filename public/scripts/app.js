/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.



function createTweetElement(tweetData){
  // creates a var $tweet, which is an article type, with the class article-tweet
  const $tweet = $('<article>').addClass('article-tweet')
  const createdDate = new Date(tweetData.created_at).toLocaleTimeString();
  // creates a var header, to be placed in the article using the following HTML
  const header = `<header class="article-tweet-header">
                    <img class="profile-pic" src="${escape(tweetData.user.avatars.small)}">
                    <h2 class="article-header-text">${escape(tweetData.user.name)}</h2> <p class="user-handle">${tweetData.user.handle}</p>
                  </header>`
  const body = `<p class="article-content-text">${escape(tweetData.content.text)}</h4>`
  const footer = `<footer>
                    <p class="article-tweet-footer">${escape(createdDate)}</p>
                    <p class="footer-icons">
                    <i class="fas fa-flag"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="fas fa-heart"></i>
                    </p>
                  </footer>`
  // appends the header/body/footer to the var $tweet
  $tweet.append(header);
  $tweet.append(body);
  $tweet.append(footer);

  return $tweet;
}



function renderTweets(tweetArray) {
  // takes the array tweetArray, and for each entry (called tweet), appends (add to the end) it to the MAIN (in html) with the id tweets-container
  tweetArray.forEach(function(tweet) {
    $("#tweets-container").prepend(createTweetElement(tweet));
  });
}


function postTweets() {

  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    console.log( escape($(this).serialize()) );
    let $error = $('#tweet-error');
    let $messageLength = $(this).find("textarea").val().length;
    if (!$messageLength) {
      // window.alert('You need to type something!')
      $error.text("You need to type something!")
      $('#tweet-error').show()
    } else if ($messageLength > 140) {
      // window.alert('Your post is too long!')
      $error.text("Your post is too long!")
      $('#tweet-error').show()
    } else {
      $.ajax('/tweets', {
        data: $(this).serialize(),
        method: 'POST'
      })
      $('#tweet-error').hide()
      loadTweets();

      console.log('Successfully sent to server');
    }
  })
}

// $( "img" )
//   .error(function() {
//     $( this ).attr( "src", "replacement.png" );
//   })
//   .attr( "src", "missing.png" );

function loadTweets() {
    $.ajax('/tweets', { method: 'GET' }).then(function(data) {
      renderTweets(data);
    })
  }

// prevents malicious code being posted
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


// compose button toggles the new tweet window
function newTweetToggle() {
  $(".compose-button").click(function(){
        $(".new-tweet").slideToggle("slow");
        $("#text-box").focus();
    });
}





//takes the data, when this file is loaded, put it through function renderTweets
$(document).ready(function() {
  postTweets();
  loadTweets();
  newTweetToggle();
})

