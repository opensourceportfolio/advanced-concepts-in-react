import userData from "./data/user";
import quoteData from "./data/quote";

function randomDate() {
  return new Intl.DateTimeFormat("en-US").format(
    new Date(+new Date() - Math.floor(Math.random() * 10000000000))
  );
}

function randomNumber(from, to) {
  return Math.floor(from + Math.random() * (to - from)).toString();
}

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getQuote() {
  return random(quoteData);
}

export function getUser() {
  return random(userData);
}

export function getTweet(user) {
  const u = user ? user : getUser();

  return {
    displayType: "timeline",
    formattedTimestamp: randomDate(),
    likeCount: randomNumber(0, 100),
    permalink: "https://effai.me",
    platform: "web",
    replyCount: randomNumber(0, 100),
    retweetCount: randomNumber(0, 100),
    showActions: true,
    text: getQuote(),
    user: {
      profileImageUrl: u.picture.thumbnail,
      name: `${u.name.first} ${u.name.last}`,
      screenName: u.login.username
    },
  };
}

export async function getTweets(count) {
  return [...Array(count)].map(getTweet);
}
