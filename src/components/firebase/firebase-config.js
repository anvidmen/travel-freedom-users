import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyCPkfL4uu3b768XIq2MNw9cxK3y-vB4LIg',
	authDomain: 'travelfreedomapp.firebaseapp.com',
	projectId: 'travelfreedomapp',
	storageBucket: 'travelfreedomapp.appspot.com',
	messagingSenderId: '116365568321',
	appId: '1:116365568321:web:ae092ad6ef17eaccf999c0',
	measurementId: 'G-5SN0192L1E',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export {db, googleAuthProvider, facebookAuthProvider, githubAuthProvider, firebase};
