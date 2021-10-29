import { useSelector } from 'app/store';
import { View, Text } from 'dripsy';
import { useEffect, useState } from 'react';
import { useRouting } from 'expo-next-react-navigation';

const Index = () => {
	const [logged, setLogged] = useState(false);

	const { user } = useSelector(({ auth }) => auth);

	const { navigate } = useRouting();

	useEffect(() => {
		if (user) {
			navigate({ routeName: 'dashboard' });
		}
	}, []);

	return <View></View>;
};

export default Index;
