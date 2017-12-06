import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  S,
  Slide,
  Text,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme({
  primary: '#fafafa',
  secondary: '#212121',
  tertiary: '#7986cb',
  quarternary: '#e0e0e0',
}, {
  primary: 'sans-serif',
  // primary: 'Montserrat',
  // secondary: 'Helvetica'
  // primary: 'sans-serif',
});

const colorOffenders = [
  ...Object.values(theme.screen.components),
  ...Object.values(theme.screen.components.heading),
];

for (const value of colorOffenders) {
  if (value.color === 'black') {
    value.color = theme.screen.colors.secondary;
  }
}

theme.screen.components.code.backgroundColor = theme.screen.colors.quarternary;
theme.screen.components.codePane.fontSize = '20px';
theme.screen.components.link = {
  color: theme.screen.colors.tertiary,
};
theme.screen.components.list.listStylePosition = 'outside';
theme.screen.components.listItem.margin = '10px 0';

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme} progress='bar'>
        <Slide>
          <Heading fit caps>
            what a concept:
          </Heading>
          <Heading fit caps margin='20px 0 0'>
            In-house Babel plugins
          </Heading>
          <Image src={require('babel.svg')} height={200} margin='100px auto 0'/>
        </Slide>

        <Slide>
          <Heading fit>
            Babel started as an ES6 to ES5 converter
          </Heading>
          <Appear>
            <Text bold margin='10px 0 0'>
              In the beginning it was called "6to5"
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit textColor='primary'>
            Today Babel is so much more
          </Heading>
        </Slide>

        <Slide>
          <Heading fit>
            We use it to transform JSX:
          </Heading>
          <CodePane lang='jsx' source={require('jsx-source.example')} margin='50px 0 0' />
          <Text>
            ⬇
          </Text>
          <CodePane lang='jsx' source={require('jsx-result.example')} margin='10px 0 0' />
        </Slide>

        <Slide>
          <Heading fit>
            We use it to transform styled-components:
          </Heading>
          <CodePane lang='jsx' source={require('styled-source.example')} margin='50px 0 0' />
          <Text>
            ⬇
          </Text>
          <CodePane lang='jsx' source={require('styled-result.example')} margin='10px 0 0' />
        </Slide>

        <Slide>
          <Heading fit>
            We use it to transform paths:
          </Heading>
          <CodePane lang='jsx' source={require('paths-source.example')} margin='50px 0 0' />
          <Text>
            ⬇
          </Text>
          <CodePane lang='jsx' source={require('paths-result.example')} margin='10px 0 0' />
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit caps textColor='primary'>
            Babel plugins help you
          </Heading>
          <Heading fit caps textColor='primary' margin='10px 0 0'>
            reduce boilerplate
          </Heading>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit textColor='primary'>
            Have you heard of macros?
          </Heading>
          <CodePane lang='c' source={require('c-macros.example')} margin='50px 0 0' />
          <Text textColor='primary' textSize={20} margin='10px 0 0'>
            Source: http://www.ioccc.org/2004/hoyle.c
          </Text>
        </Slide>

        <Slide>
          <Heading fit>
            Babel is macros on steroids:
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Defined separately from code
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Plugins operate on AST instead of text
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Can be tested properly
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit textColor='primary'>
            Case study: jsx-svg-inject
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Problem: using SVG images in React
          </Heading>
          <Appear>
            <Text margin='20px 0 0'>
              Webpack loaders are not a good solution.<br />
              Are you running Webpack for unit tests?
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Inspired by octicons
          </Heading>
          <CodePane lang='c' source='<%= octicon(:symbol => "plus") %>' margin='50px 0 0' />
          <Link
            href='https://github.com/blog/2112-delivering-octicons-with-svg'
            target='_blank'
            textSize={20}
            margin='10px 0 0'
          >
            Read more
          </Link>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Result:
          </Heading>
          <CodePane lang='jsx' source={require('jsx-svg-inject-source.example')} margin='50px 0 0' />
          <Text>
            ⬇
          </Text>
          <CodePane lang='jsx' source={require('jsx-svg-inject-result.example')} margin='10px 0 0' />
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit textColor='primary'>
            Case study: react-remove-attributes
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Problem: removing test metadata<br />
            from scripts on production
          </Heading>
          <Appear>
            <Text margin='20px 0 0'>
              Having attributes like <Code>data-test-id</Code><br />
              might be helpful in e2e & integration tests,<br />
              but is useless in production.
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Solution:
          </Heading>
          <CodePane lang='jsx' source={require('react-remove-attributes-source.example')} margin='50px 0 0' />
          <Text>
            ⬇
          </Text>
          <CodePane lang='jsx' source={require('react-remove-attributes-result.example')} margin='10px 0 0' />
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit textColor='primary'>
            Case study: Django routing in scripts
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Problem: referring to Django routes
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            How are we doing that now?
          </Heading>
          <List>
            <Appear>
              <ListItem>
                The routes are defined in <Code>urls.py</Code> files
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Used routes are listed in a big dict
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                The dict is included in the template
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Script reads the routes and wraps them in a utility
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                The route can be generated using passed arguments
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            How could we do it instead?
          </Heading>
          <List>
            <ListItem>
              The routes are defined in <Code>urls.py</Code> files
            </ListItem>
            <ListItem>
              <S type='strikethrough'>Used routes are listed in a big dict</S>
            </ListItem>
            <ListItem>
              <S type='strikethrough'>The dict is included in the template</S>
            </ListItem>
            <ListItem>
              <S type='strikethrough'>Script reads the routes and wraps them in a utility</S>
            </ListItem>
            <ListItem>
              The route can be generated using passed arguments
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Suggested solution:
          </Heading>
          <CodePane lang='jsx' source={require('django-routing-source.example')} margin='50px 0 0' />
          <Text>
            ⬇
          </Text>
          <CodePane lang='jsx' source={require('django-routing-result.example')} margin='10px 0 0' />
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading size={1} textColor='primary'>
            Pros:
          </Heading>
          <List>
            <ListItem>
              Decoupled from Webpack - testing just works!
            </ListItem>
            <ListItem>
              Reducing bundle size
            </ListItem>
            <ListItem>
              Reducing runtime cost
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading size={2} textColor='primary'>
            Pitfalls:
          </Heading>
          <List>
            <ListItem>
              Introducing magic (not for macros, though)
            </ListItem>
            <ListItem>
              Caching problems if plugin is not pure
            </ListItem>
          </List>
        </Slide>

        <Slide bgColor='tertiary'>
          <Heading fit caps textColor='primary'>
            Live coding!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
