import {
	useFonts,
	OpenSans_300Light,
	OpenSans_400Regular,
	OpenSans_700Bold,
	OpenSans_600SemiBold,
	OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';
import { PoiretOne_400Regular } from '@expo-google-fonts/poiret-one';

export const HeadingFontName = 'poiret-one';
export const ThinTextFontName = 'open-sans-thin';
export const RegularTextFontName = 'open-sans-regular';
export const SemiBoldTextFontName = 'open-sans-semi-bold';
export const BoldTextFontName = 'open-sans-bold';
export const ExtraBoldTextFontName = 'open-sans-extra-bold';

const FontProvider = ({ children }) => {
	const [loaded] = useFonts({
		[ThinTextFontName]: OpenSans_300Light,
		[RegularTextFontName]: OpenSans_400Regular,
		[SemiBoldTextFontName]: OpenSans_600SemiBold,
		[BoldTextFontName]: OpenSans_700Bold,
		[ExtraBoldTextFontName]: OpenSans_800ExtraBold,
		[HeadingFontName]: PoiretOne_400Regular,
	});

	return <>{loaded && children}</>;
};
