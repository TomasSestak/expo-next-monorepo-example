import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { TextInput, View, Pressable, Text } from 'dripsy';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Input from 'app/components/form/Input';

const Register = () => {
	const { handleSubmit, control } = useForm();

	const onSubmit = async ({ email, password }) => {
		const auth = getAuth();

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
			console.log(user);
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
				<Text>Register</Text>
			</Pressable>
		</View>
	);
};

export default Register;
