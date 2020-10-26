const fireConfig = { // safe to display as per https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
  apiKey: 'AIzaSyDvg7xB31ooCOG1tQDVDKr25T3sHnAWIog',
  authDomain: 'emoji-chat-6828e.firebaseapp.com',
  databaseURL: 'https://emoji-chat-6828e.firebaseio.com',
  projectId: 'emoji-chat-6828e',
  storageBucket: 'emoji-chat-6828e.appspot.com',
  messagingSenderId: '321217861790',
  appId: '1:321217861790:web:b1e822ff09e8f7540b838f',
  measurementId: 'G-6QB9M17JVF',
};
export default fireConfig;

const key = '67dd32f314a70f3b5a23509902dc4e5092e4dc7a';
export const getEmojis = async () => {
  const res = await fetch(`https://emoji-api.com/emojis?access_key=${key}`);
  return res.json();
};

export const verySlowModifyMessageWithEmojis = (message, emojis) => {
  const splitMessage = message.split(' ');
  [...splitMessage].forEach((word, i) => {
    const index = emojis.findIndex((emoji) => emoji.unicodeName === word || emoji.slug === word);
    if (index && emojis[index]?.character) {
      splitMessage[i] = emojis[index].character;
    }
  });
  return splitMessage.join(' ');
};
