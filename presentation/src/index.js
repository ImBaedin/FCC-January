import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import CodeSlide, { Themes } from './Components/CodeSlide';

import {
	Deck,
	Slide,
	Appear,
	CodePane,
	FlexBox,
	Box,
	Image,
	Heading,
	ListItem,
	OrderedList,
	Quote,
	Text,
	UnorderedList,
	Grid,
	Notes,
	FullScreen,
	Progress,
	Markdown,
	Link,
	createTheme
} from 'spectacle';

import Logo from './fcc.svg';
import VSCode from './vscode.png';
import GitHub from './github.png';

const theme = {

};

const FillBox = styled(Box)`
	flex: 1;
	text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

const ListItemLogo = styled.img`
	width: 2.5em;
	height: auto;

	&.github{
		border-radius: 100%;
		background-color: white;
		border: 1px solid white;
	}
`;

const template = () => (
	<FlexBox
		justifyContent="space-between"
		position="absolute"
		bottom={0}
		width={1}
	>
		<FillBox padding="0 1em">
			<FullScreen />
		</FillBox>
		<FillBox>
			<Text fontSize="1.5em" bold color="#808080" textAlign="center">
				<span style={{ color: '#505050' }}>Author:</span> Braedin Jared
			</Text>
		</FillBox>
		<FillBox padding="1em" textAlign="right">
			<Progress />
		</FillBox>
	</FlexBox>
);

const Presentation = () => (
	<Deck loop theme={theme} template={template}>
		<Slide backgroundColor="#0a0a23">
			<Heading size={1}>
				<Image src={Logo} width="100%" />
			</Heading>
			<Heading size={1} fit caps color="white">
				January 2020
			</Heading>
			<Link target="_blank" href="https://github.com/ImBaedin/FCC-January">
				<Text fontSize="1.5em" bold caps color="white">
					View on Github
				</Text>
			</Link>
			<Text fontSize="1em" bold color="#505050">
				Navigate with arrows
			</Text>
			<Notes>Let's get started!</Notes>
		</Slide>
		<Slide
			backgroundColor="#0a0a23"
		>
			<Heading size={1} caps fit color="primary">Getting Started</Heading>
			<OrderedList>
				<Appear elementNum={0}>
					<ListItem>Download VS Code <Link target="_blank" href="https://code.visualstudio.com/download">Link</Link> <br /> <ListItemLogo src={VSCode} /></ListItem>
				</Appear>
				<Appear elementNum={1}>
					<ListItem>Download Repository <Link target="_blank" href="https://github.com/ImBaedin/FCC-January">Link</Link> <br /> <ListItemLogo src={GitHub} className="github" /></ListItem>
				</Appear>
				<Appear elementNum={2}>
					<ListItem>Download Live Server Extension</ListItem>
				</Appear>
			</OrderedList>
		</Slide>
		<CodeSlide
			backgroundColor={"#0d1d2e"}
			theme={Themes.dracula}
			lang="html"
			code={require("raw-loader!./html.example").default}
			ranges={[
				{ loc: [0, 500], title: "Buckle Up" },
				{ loc: [34, 34], title: "The import", backgroundColor: "#223b57", note: "Add this line to import the JS file" }
			]} />
		<CodeSlide
			backgroundColor={"#0d1d2e"}
			transition={[]}
			theme={Themes.synthwave84}
			lang="js"
			code={require("raw-loader!./js.example").default}
			ranges={[
				{ loc: [0, 500], title: "Walking through some code" },
				{ loc: [0, 1], title: "The Beginning" },
				{ loc: [1, 4] },
				{ loc: [1, 2], note: "Heres a note!" },
				{ loc: [2, 4] },
				{ loc: [23, 46] }
			]} />
		<Slide>
			<div>
				slide 2
			</div>
		</Slide>
	</Deck>
);

render(<Presentation />, document.getElementById('root'));
