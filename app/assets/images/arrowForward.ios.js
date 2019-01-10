import * as React from 'react';
import { Svg, Path } from 'react-native-svg';

export default props => (
	<Svg viewBox='0 0 24 24' height={24} width={24} {...props}>
		<Path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
		<Path d="M0 0h24v24H0z"
		      fill={props.tintColor || '#fff'}
		/>
	</Svg>
);
