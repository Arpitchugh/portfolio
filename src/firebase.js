import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAkaqWBC2gYD3Eym-bXwzRvmka2g7Y5Gsc',
	authDomain: 'portfolio-arpiit.firebaseapp.com',
	projectId: 'portfolio-arpiit',
	storageBucket: 'portfolio-arpiit.appspot.com',
	messagingSenderId: '817356127088',
	appId: '1:817356127088:web:722fc92ba60e7903252db5',
};
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
