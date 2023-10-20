import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Component = styled.main`
	font-size: 24px;
	font-weight: 600;
`;

export default function Heading({ children }: PropsWithChildren) {
	return <Component>{children}</Component>;
}
