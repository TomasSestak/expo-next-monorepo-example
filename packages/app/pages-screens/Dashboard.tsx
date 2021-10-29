import { useSelector } from 'app/store';
import { useEffect } from 'react';
import { useRouting } from 'expo-next-react-navigation';
import { View } from 'dripsy';

const Dashboard = () => {
	const { user } = useSelector(({ auth }) => auth);

	const { navigate } = useRouting();

	useEffect(() => {
		if (user) {
			navigate({ routeName: '/' });
		}
	}, []);

	return <View></View>;
};

export default Dashboard;
