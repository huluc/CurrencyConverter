import * as React from 'react';
import { Svg, Path } from 'react-native-svg';

export default props => (
	<Svg viewBox='0 0 24 24' height={24} width={24} {...props}>
		<Path d="M0 0h24v24H0z"
		      fill={props.tintColor || '#fff'} />
		<Path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
	</Svg>
);
{/*<svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>*/
}
