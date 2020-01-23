import React from 'react';
import { render } from 'react-dom';

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

const theme = {

};

const template = () => (
	<FlexBox
		justifyContent="space-between"
		position="absolute"
		bottom={0}
		width={1}
	>
		<Box padding="0 1em">
			<FullScreen />
		</Box>
		<Box padding="1em">
			<Progress />
		</Box>
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
			<Appear elementNum={0}>
				<Heading size={1} caps fit color="primary">
					Full Width
            </Heading>
			</Appear>
			<Appear elementNum={1}>
				<Heading size={1} caps fit textColor="tertiary">
					Adjustable Darkness
            </Heading>
			</Appear>
			<Appear elementNum={2}>
				<Heading size={1} caps fit textColor="primary">
					Background Imagery
            </Heading>
			</Appear>
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
