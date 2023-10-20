import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.footer`
	display: flex;
	justify-content: center;
`;

export default function Footer() {
	return (
		<Wrapper>
			<Link href="/">Domů</Link>
			<Link href="/kontakty">Kontakty</Link>
		</Wrapper>
	);
}
