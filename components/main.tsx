import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 24px;
`;

export default function Main({ children }: PropsWithChildren) {
	return <Wrapper>{children}</Wrapper>;
}
