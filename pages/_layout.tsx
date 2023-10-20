// import Footer from '@/components/footer';
import Main from '@/components/main';
import Nav from '@/components/nav';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 12px;
`;

const HeadWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Heading = styled.h1`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 24px;
	font-size: 32px;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Container>
			<HeadWrapper>
				<Heading>
					<Link href="/">boilerplate</Link>
				</Heading>
				<Nav />
			</HeadWrapper>

			<Main>{children}</Main>

			{/* <Footer /> */}
		</Container>
	);
}
