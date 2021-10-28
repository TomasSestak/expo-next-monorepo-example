import React from 'react';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DripsyProvider } from 'dripsy';

import { theme } from 'app/theme';

enableScreens(true);

const App = () => {
	return (
		<DripsyProvider theme={theme}>
			<SafeAreaProvider>
				<StatusBar style="dark" />
			</SafeAreaProvider>
		</DripsyProvider>
	);
};

export default App;
