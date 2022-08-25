import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBwQp-ZXaUdtoboiF4xtOQj7Y0NaJ8g9Eg',
  authDomain: 'amtest-c8919.firebaseapp.com',
  projectId: 'amtest-c8919',
  storageBucket: 'amtest-c8919.appspot.com',
  messagingSenderId: '237043073230',
  appId: '1:237043073230:web:854eefabd775d4bde2909f'
};

const app = initializeApp(firebaseConfig);

export const storageImages = getStorage(app);