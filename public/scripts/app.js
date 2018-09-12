/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];





function createTweetElement(tweetData){
  // creates a var $tweet, which is an article type, with the class article-tweet
  const $tweet = $('<article>').addClass('article-tweet')
  const createdDate = new Date(tweetData.created_at).toLocaleTimeString();
  // creates a var header, to be placed in the article using the following HTML
  const header = `<header class="article-tweet-header">
                    <img class="profile-pic" src="${tweetData.user.avatars.small}">
                    <h2 class="article-header-text">${tweetData.user.name}</h2> <p class="user-handle">${tweetData.user.handle}</p>
                  </header>`
  const body = `<p class="article-content-text">${tweetData.content.text}</h4>`
  const footer = `<footer>
                    <p class="article-tweet-footer">${createdDate}</p>
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
    $("#tweets-container").append(createTweetElement(tweet));
  });
}


//takes the data (currently in this file), when this file is loaded, put it through function renderTweets
$(document).ready(function() {
  renderTweets(data);
})

