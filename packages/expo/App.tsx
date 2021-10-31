import React from 'react';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DripsyProvider, Text, View } from 'dripsy';

import { theme } from 'app/theme';
import FontsProvider from 'app/providers/FontsProvider';
import FirebaseProvider from 'app/providers/FirebaseProvider';
import Register from 'app/components/auth/Register';

enableScreens(true);

const App = () => {
	return (
		<FirebaseProvider>
			<FontsProvider>
				<DripsyProvider theme={theme}>
					<SafeAreaProvider>
						<StatusBar style="dark" />
						<Register />
						<View>
							<Text>aaa</Text>
						</View>
					</SafeAreaProvider>
				</DripsyProvider>
			</FontsProvider>
		</FirebaseProvider>
	);
};

export default App;
