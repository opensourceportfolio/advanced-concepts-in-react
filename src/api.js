function randomDate() {
  return new Intl.DateTimeFormat("en-US").format(
    new Date(+new Date() - Math.floor(Math.random() * 10000000000))
  );
}

function randomNumber(from, to) {
  return Math.floor(from + Math.random() * (to - from)).toString();
}

function getUsers(count) {
  return fetch(`https://randomuser.me/api/?results=${count}`)
    .then(r => r.json())
    .then(r => r.results);
}

export async function getTweets(count) {
  const users = await getUsers(count);
  return users.map(u => ({
    displayType: "timeline",
    formattedTimestamp: randomDate(),
    likeCount: randomNumber(0, 100),
    permalink: "https://effai.me",
    platform: "web",
    replyCount: randomNumber(0, 100),
    retweetCount: randomNumber(0, 100),
    showActions: true,
    text: "This is a regular Tweet with actions.",
    user: {
      profileImageUrl: u.picture.medium,
      name: `${u.name.first} ${u.name.last}`,
      screenName: u.login.username
    }
  }));
}
