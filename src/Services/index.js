import axios from 'axios';
import { storageImages } from '../firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

let imageUrl = '';

export const bookmarking = async(character) => {
  let payload = JSON.parse(JSON.stringify(character));
  payload['bookmarked'] = character.bookmarked ? false : true;
  Object.preventExtensions(payload);
  return await axios
    .put(`//localhost:8000/characters/${payload.id}`, payload);
};

export const uploadImage = async (file) => {
  const storageRef = ref(storageImages, file.name);
  return await uploadBytes(storageRef, file)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        imageUrl = url;
      });
    });
};

export const addCharacter = async (character) => {
  let payload = JSON.parse(JSON.stringify(character));
  payload['image'] = imageUrl;
  Object.preventExtensions(payload);
  return await axios
    .post('//localhost:8000/characters', payload);
};