import { View, TextInput, Text } from 'dripsy';
import { useController, Control, RegisterOptions } from 'react-hook-form';

interface Props {
	label: string;
	name: string;
	control: Control<any>;
	rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
	defaultValue?: any;
}

const Input = ({ label, name, control, rules, defaultValue = '' }: Props) => {
	const {
		field: { onChange, value },
		fieldState: { error },
	} = useController({
		name,
		control,
		rules,
		defaultValue,
	});

	return (
		<View>
			<Text>{label}</Text>
			<TextInput onChange={onChange} value={value} />
		</View>
	);
};

export default Input;
