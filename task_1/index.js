import { encoded, translations } from './data.js';

// eslint-disable-next-line quotes
console.log("Let's rock");
console.log(encoded, translations);

const excludesKeys = ['groupId', 'service', 'formatSize', 'ca'];
const uniqueId = new Set();

const decoder = (encodedList, translationsList) => {
  const translate = {};
  encodedList.map(item => {
    for (const key in item) {
      if (!excludesKeys.includes(key) && !(item[key] === null)) {
        if (Object.hasOwnProperty.call(item, key)) {
          translate[key] = translationsList[item[key]];
        }
      }
    }
    return Object.assign(item, translate);
  });
  uniqueId.add(Object.keys(translate));
  return encodedList;
};

console.log('Список уникальных ID', uniqueId);

const decoded = decoder(encoded, translations);

console.log(decoded);
