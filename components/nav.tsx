import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;

	padding: 24px;
	order: 2;
	text-align: right;
`;

export default function Nav() {
	return (
		<Wrapper>
			<Link href="/home">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/contact">Contact</Link>
		</Wrapper>
	);
}
