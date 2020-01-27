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
			<Text fontSize="1.5em" bold color="#808080" textAlign="center" margin="8px">
				<span style={{ color: '#505050' }}>Author:</span> Braedin Jared
			</Text>
		</FillBox>
		<FillBox padding="0 1em" textAlign="right">
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
			<Link target="_blank" href="/complete">
				<Text fontSize="1.5em" bold caps color="white">
					Finished project
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
				{ loc: [0, 500], title: "What's already there?" },
				{ loc: [0, 4], note: "Cookeville's latitude and longitude" },
				{ loc: [2, 2], note: "Here, 'latitude' is the key and '36.1628' is the value" },
				{ loc: [2, 2], note: "In the code, we can use 'COOKEVILLE.latitude' to access that value" },
				{ loc: [6, 8], note: "This is the code to get the weather API URL" },
				{ loc: [6, 8], note: "It's a function that accepts latitude and longitude as parameters and returns the API URL" },
				{ loc: [10, 13], note: "Here's some code that we haven't written yet" },
				{ loc: [10, 13], note: "This is a function that will use the browser to get the location" },
				{ loc: [15, 18], note: "Here's some more empty code" },
				{ loc: [15, 18], note: "This is a function that will do temperature conversion for us, since the API returns celsius" },
				{ loc: [20, 35], note: "Here is our main function" },
				{ loc: [20, 35], note: "This is where we will get the location, get the weather, and update the UI" },
				{ loc: [25, 25], note: "We want the location to default to Cookeville" },
				{ loc: [26, 29], note: "We need to check if the user enabled location services" },
				{ loc: [28, 28], note: "If they have, we get the location from the browser" },
				{ loc: [30, 30], note: "If not, it's ok. The location is already Cookeville" },
				{ loc: [37, 39], note: "This is where we will tell the browser to update the weather every hour" },
				{ loc: [38, 38], note: "We will set 'HOUR' to contain an interal that equals an hour" },
				{ loc: [39, 39], note: "All this says is call 'updateWeather' every 'HOUR'" },
				{ loc: [41, 44], note: "These lines are grabbing some HTML references for us" },
				{ loc: [46, 47], note: "And the first bit of code we want to run is 'updateWeather'" },
			]} />
		<Slide>
			<div>
				slide 2
			</div>
		</Slide>
	</Deck>
);

render(<Presentation />, document.getElementById('root'));
