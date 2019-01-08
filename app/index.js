import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
	$primaryBlue: '#4F6D7A',
	$white: '#FFFFFF',
	$inputText: '#797979',
	$border: '#E2E2E2',
	$lightGray: '#F0F0F0',
});
export default () => <Home />;
