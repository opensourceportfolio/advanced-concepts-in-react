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

function delay(time, fn) {
  return new Promise(res => {
    setTimeout(() => res(fn()), time);
  });
}

function generateRandomText() {
  return random(quoteData);
}

function generateRandomUser() {
  return random(userData);
}

export function getTweet(user) {
  const u = user ? user : generateRandomUser();

  return {
    displayType: "timeline",
    formattedTimestamp: randomDate(),
    likeCount: randomNumber(0, 100),
    permalink: "https://effai.me",
    platform: "web",
    replyCount: randomNumber(0, 100),
    retweetCount: randomNumber(0, 100),
    showActions: true,
    text: generateRandomText(),
    user: {
      profileImageUrl: u.picture.thumbnail,
      name: `${u.name.first} ${u.name.last}`,
      screenName: u.login.username
    }
  };
}

export async function authenticateUser() {
  return delay(1000, () => generateRandomUser());
}

export async function getTweets(count) {
  return delay(1000, () => [...Array(count)].map(getTweet));
}
