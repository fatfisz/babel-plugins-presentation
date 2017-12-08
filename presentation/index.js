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
        <Slide bgColor='tertiary'>
          <Heading fit caps textColor='primary'>
            what a concept:
          </Heading>
          <Heading fit caps textColor='primary' margin='20px 0 0'>
            In-house Babel plugins
          </Heading>
          <Image src={require('babel.svg')} height={200} margin='50px auto 0'/>
        </Slide>

        <Slide>
          <Heading fit>
            Have you heard of macros?
          </Heading>
          <CodePane lang='c' source={require('c-macros.example')} margin='50px 0 0' />
          <Text textSize={20} margin='10px 0 0'>
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
                Defined separately from code - separation of concerns
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Can be tested properly
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Plugins operate on AST instead of text
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
            Case study: CodeExample
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Problem: presenting the code alongside<br />the component example
          </Heading>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Inspired by Bootstrap docs
          </Heading>
          <Image src={require('bootstrap-example.png')} margin='50px auto 0'/>
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Solution:
          </Heading>
          <CodePane lang='jsx' source={require('code-example-source.example')} margin='50px 0 0' />
          <Text>
            ⬇
          </Text>
          <CodePane lang='jsx' source={require('code-example-result.example')} margin='10px 0 0' />
        </Slide>

        <Slide>
          <Heading size={6} textColor='tertiary'>
            Result
          </Heading>
          <Image src={require('pattern-library-example.png')} margin='50px auto 0'/>
        </Slide>

        <Slide bgImage={require('what-is-my-purpose.png')} bgDarken={0.75}>
          <Heading fit caps textColor='primary'>
            What is the purpose of
          </Heading>
          <Heading fit caps textColor='primary' margin='20px 0 0'>
            macros?
          </Heading>
        </Slide>

        <Slide>
          <Heading fit>
            Macros are useful for:
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Reducing boilerplate (syntactic sugar!)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Stripping metadata
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Adding metadata
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Build-time computations<br />
                (check out <Code>babel-plugin-preval</Code>!)<br />
                (or <Code>babel-macros</Code>!)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading fit>
            Benefits of custom Babel plugins:
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Decoupled from Webpack - testing just works!
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                They help reduce the bundle size
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                They help reduce the runtime cost
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textColor='tertiary'>
            Pitfalls:
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Introducing magic ✨ (can be avoided, though)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Caching problems if the plugin is not pure
              </ListItem>
            </Appear>
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
