import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';

const firebaseConfig = {
	apiKey: 'AIzaSyDkRTOmVG8ejBEvM0Vewdjguwko_RvFnyw',
	authDomain: 'moms-19cf7.firebaseapp.com',
	projectId: 'moms-19cf7',
	storageBucket: 'moms-19cf7.appspot.com',
	messagingSenderId: '1072755999198',
	appId: '1:1072755999198:web:dcb113ca6dcba29d9fdd4f',
	measurementId: 'G-KX2V4F32Q2',
};

const app = initializeApp(firebaseConfig);

const FirebaseProvider = ({ children }) => {
	useEffect(() => {}, []);

	return children;
};

export default FirebaseProvider;
