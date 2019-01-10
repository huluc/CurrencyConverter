import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Themes from './screens/Themes';

//https://github.com/vitalets/react-native-extended-stylesheet
EStyleSheet.build({
	$primaryBlue: '#4F6D7A',
	$primaryOrange: '#D57A66',
	$primaryGreen: '#00BD9D',
	$white: '#FFFFFF',
	$inputText: '#797979',
	$border: '#E2E2E2',
	$lightGray: '#F0F0F0',
	$darkText: '#343434',
});
export default () => <Themes />;
