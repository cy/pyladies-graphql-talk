// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  erd: require("../assets/erd.jpg"),
  graphql: require("../assets/graphql-logo.svg"),
  graphene: require("../assets/graphene-logo.svg"),
  pyladies: require("../assets/pylady_geek.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#726886",
  tertiary: "#B8A2CE",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const listItemStyle1 = {
  fontSize: "2rem"
};

const listItemStyle2 = {
  fontSize: "1.5rem",
  marginLeft: "3rem"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            GraphQL with Python
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            PyLadies Toronto Meetup, April 25, 2017
          </Text>
          <Image src={images.graphql} height="120px" style={{ padding: "10px" }}/>
          <Image src={images.pyladies} height="120px" style={{ padding: "10px" }}/>
          <Image src={images.graphene} height="120px" style={{ padding: "10px" }}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">Hello: I'm Christine</Heading>
          <List>
            <ListItem style={listItemStyle1}>Software developer at OICR: JS, Python</ListItem>
            <ListItem style={listItemStyle1}>Mobile developer: C++, Python</ListItem>
            <ListItem style={listItemStyle1}>https://github.com/cy</ListItem>
            <ListItem style={listItemStyle1}>https://twitter.com/christinewhy</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary">
            GraphQL
            <Image src={images.graphql} height="80px" style={{ padding: "5px" }}/>
          </Heading>
          <List>
            <ListItem style={listItemStyle1}>"A query language for your API"</ListItem>
            <ListItem style={listItemStyle1}>not a query language for a graph database</ListItem>
            <ListItem style={listItemStyle1}>backend language and database layer agnostic</ListItem>
          </List>
          <Heading size={3} textColor="tertiary">
            Graphene
            <Image src={images.graphene} height="80px" style={{ paddingLeft: "5px" }}/>
          </Heading>
          <List>
            <ListItem style={listItemStyle1}>GraphQL was released as a spec by Facebook</ListItem>
            <ListItem style={listItemStyle1}>Python lib to implement GraphQL</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">Demo app, Meetdown API</Heading>
          <Image src={images.erd} margin="0px auto 40px" height="350px"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">Motivation: Problems with REST</Heading>
          <List>
            <ListItem style={listItemStyle1}>single endpoint per resource</ListItem>
              <List>
                <ListItem style={listItemStyle2}>but most views need data from multiple resources</ListItem>
                <ListItem style={listItemStyle2}>secondary calls, parameters, balloning custom endpoints</ListItem>
              </List>
            <ListItem style={listItemStyle1}>front end devs at the mercy of backend devs</ListItem>
            <ListItem style={listItemStyle1}>versioning</ListItem>
              <List>
                <ListItem style={listItemStyle2}>old api need to be maintained as long as old clients in use</ListItem>
                <ListItem style={listItemStyle2}>mainly a problem with mobile</ListItem>
              </List>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">Enter GraphQL</Heading>
          <List>
            <ListItem style={listItemStyle1}>Query language, looks like JSON keys, get back JSON</ListItem>
            <ListItem style={listItemStyle1}>Let UI devs declare exactly what data the view needs (no underfetch/overfetch)</ListItem>
            <ListItem style={listItemStyle1}>Strongly typed: can autocomplete & type check</ListItem>
            <ListItem style={listItemStyle1}>Documentation for free</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">History of GraphQL</Heading>
          <List>
            <ListItem style={listItemStyle1}>2012: inital design at facebook, production in iOS app</ListItem>
            <ListItem style={listItemStyle1}>2013-2014: more features, tools (GraphiQL)</ListItem>
            <ListItem style={listItemStyle1}>2015: announced at React Europe, redesign, open sourced spec</ListItem>
            <ListItem style={listItemStyle1}>2016: 10+ languages, Github public api</ListItem>
            <ListItem style={listItemStyle1}>2017: live queries, more?</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">Code</Heading>
          <List>
            <ListItem style={listItemStyle1}><a href="https://github.com/cy/meetdown-api">https://github.com/cy/meetdown-api</a></ListItem>
            <ListItem style={listItemStyle1}><a href="https://github.com/cy/goodreads-graphql">https://github.com/cy/goodreads-graphql</a></ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">Beyond this example part1</Heading>
          <List>
            <ListItem style={listItemStyle1}>Relay - client lib for connecting React to GraphQL</ListItem>
              <List>
                <ListItem style={listItemStyle2}>organize app into Relay queries and containers</ListItem>
                <ListItem style={listItemStyle2}>colocate data requirements with views</ListItem>
                <ListItem style={listItemStyle2}>aggregate queries into efficent requests</ListItem>
                <ListItem style={listItemStyle2}>pagination, refetching, network layer</ListItem>
              </List>
            <ListItem style={listItemStyle1}>Authorization</ListItem>
              <List>
                <ListItem style={listItemStyle2}>don't want to return 403 unauthorized for whole query if can't access one field</ListItem>
                <ListItem style={listItemStyle2}>can check tokens per field in resolver</ListItem>
              </List>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">Beyond this example part2</Heading>
            <List>
              <ListItem style={listItemStyle1}>Efficency</ListItem>
                <List>
                  <ListItem style={listItemStyle2}>Caching - global unique ids for each entity, varnish</ListItem>
                  <ListItem style={listItemStyle2}>Batching with DataLoader</ListItem>
                  <ListItem style={{ ...listItemStyle2, marginLeft: "6rem" }}>doesn't send request right away</ListItem>
                  <ListItem style={{ ...listItemStyle2, marginLeft: "6rem" }}>gathers up all the keys in the same frame, then batch request</ListItem>
                </List>
            </List>
            <CodePane lang="python" source={require("raw-loader!../assets/dataloader.py")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="tertiary">Thanks!</Heading>
        </Slide>
      </Deck>
    );
  }
}
