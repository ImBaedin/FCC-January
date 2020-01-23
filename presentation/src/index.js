import React from 'react';
import { render } from 'react-dom';

import CodeSlide, {Themes} from './Components/CodeSlide';

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
	Markdown
} from 'spectacle';

// SPECTACLE_CLI_THEME_START
const theme = {};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
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
// SPECTACLE_CLI_TEMPLATE_END

const formidableLogo =
	'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';
const cppCodeBlock = `#include <iostream>
#include <cstdlib>
#include <sstream>
#include <pthread.h>

struct thread_data_t
{
   int  thread_id;
   std::string message;
};

void *print_thread_message(void *thread_arg)
{
   struct thread_data_t *thread_data;
   thread_data = (struct thread_data_t *) thread_arg;

   cout << "Thread ID: " << thread_data->thread_id;
   cout << "Message: " << thread_data->message << endl;

   pthread_exit(NULL);
}

int main()
{
  pthread_t threads[NUM_THREADS];
  struct thread_data_t thread_data[NUM_THREADS];

  for (int i = 0; i < NUM_THREADS; i++)
  {
    auto curried_add = [](int x) -> function<int(int)> { return [=](int y) { return x + y; }; };
    auto answer = curried_add(i)(5);

    std::stringstream message;
    message << "The math result is " << answer << "!";
    thread_data.thread_id = i;
    thread_data.message = message.str();
    int err = pthread_create(&threads, NULL, print_thread_message, (void *)&thread_data[i]);

    if (err)
    {
      exit(-1)
    }
  }

  return 0;
}`;

// eslint-disable-next-line react/no-multi-comp
const Presentation = () => (
	<Deck loop theme={theme} template={template}>
		<CodeSlide
			backgroundColor={"#0d1d2e"}
			theme={Themes.dracula}
			lang="js"
			code={require("raw-loader!./code.example").default}
			ranges={[
				{ loc: [0, 500], title: "Buckle Up" },
				{ loc: [0, 1], title: "The Beginning" },
				{ loc: [1, 4] },
				{ loc: [1, 2], note: "Heres a note!" },
				{ loc: [2, 4] },
				{ loc: [23, 46], title: "Scroll to element", note: "Here is a note too"}
		]}/>
		<Slide>
			<div>
				slide 2
			</div>
		</Slide>
		<CodeSlide
			backgroundColor={"#0d1d2e"}
			transition={[]}
			theme={Themes.synthwave84}
			lang="js"
			code={require("raw-loader!./code.example").default}
			ranges={[
				{ loc: [0, 500], title: "Walking through some code" },
				{ loc: [0, 1], title: "The Beginning" },
				{ loc: [1, 4] },
				{ loc: [1, 2], note: "Heres a note!" },
				{ loc: [2, 4] },
				{ loc: [23, 46]}
		]}/>
	</Deck>
);

render(<Presentation />, document.getElementById('root'));
