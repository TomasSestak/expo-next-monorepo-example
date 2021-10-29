import { useFonts } from 'expo-font';

const FontsProvider = ({ children }) => {
	const [loaded, error] = useFonts({});

	console.log(loaded, error);

	return <>{loaded && children}</>;
};

export default FontsProvider;
