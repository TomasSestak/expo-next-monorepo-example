import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Input from 'app/components/form/Input';
import { useForm } from 'react-hook-form';
import { View, Pressable, Text } from 'dripsy';
import { useDispatch } from 'app/store';
import { setLogged } from 'app/store/auth';

const Login = () => {
	const dispatch = useDispatch();
	const { handleSubmit, control } = useForm();

	const onSubmit = async ({ email, password }) => {
		const auth = getAuth();

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
			dispatch(setLogged(user));
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorMessage);
		}
	};

	return (
		<View>
			<Input label={'E-mail'} name={'email'} control={control} />
			<Input label={'Heslo'} name={'password'} control={control} />
			<Pressable onPress={handleSubmit(onSubmit)}>
				<Text>Přihlásit se</Text>
			</Pressable>
		</View>
	);
};

export default Login;
