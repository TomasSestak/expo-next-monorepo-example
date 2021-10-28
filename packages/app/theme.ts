// https://www.dripsy.xyz/usage/theming/create
import { makeTheme } from 'dripsy';
import {
	BoldTextFontName,
	ExtraBoldTextFontName,
	HeadingFontName,
	RegularTextFontName,
	SemiBoldTextFontName,
} from './providers/FontProvider';
import { PoiretOne_400Regular } from '@expo-google-fonts/poiret-one';

const rootFont = 'open-sans';

const theme = makeTheme({
	// Your theme goes here
	customFonts: {
		[rootFont]: {
			400: RegularTextFontName,
			default: RegularTextFontName,
			normal: RegularTextFontName,
			500: RegularTextFontName,
			600: SemiBoldTextFontName,
			bold: BoldTextFontName,
			700: BoldTextFontName,
			800: ExtraBoldTextFontName,
			900: ExtraBoldTextFontName,
		},
		[HeadingFontName]: {
			400: HeadingFontName,
			default: HeadingFontName,
			normal: HeadingFontName,
			500: HeadingFontName,
			600: HeadingFontName,
			bold: HeadingFontName,
			700: HeadingFontName,
			800: HeadingFontName,
			900: HeadingFontName,
		},
	},
	fonts: {
		root: rootFont,
		heading: HeadingFontName,
	},
	text: {
		heading: {
			fontFamily: 'heading',
		},
		thin: {
			fontWeight: 'thin',
		},
		bold: {
			fontWeight: 'bold',
		},
		'semi-bold': {
			fontWeight: 'semi-bold',
		},
		'extra-bold': {
			fontWeight: 'extra-bold',
		},
	},
	colors: {
		peach: '#FFC49B',
		papaya: '#FFEFD3',
		crayola: '#ADB6C4',
		charcoal: '#294C60',
		blue: '#001B2E',
	},
	shadows: {
		md: {
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84,
			elevation: 5,
		},
	},
});

type MyTheme = typeof theme;

declare module 'dripsy' {
	interface DripsyCustomTheme extends MyTheme {}
}

export { theme };
