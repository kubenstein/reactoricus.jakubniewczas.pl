import React from 'react';
import PropTypes from 'prop-types';

import MapHeader from 'components/MapHeader';
import Map from 'components/Map';
import Footer from 'components/Footer';
import FunctionLink from 'components/FunctionLink';

import { mapShape } from 'lib/shapes';

import './styles.css';

const Maps = ({ maps }) => {
  return (
    <>
      <MapHeader />
      <div styleName="wrapper">
        <p>
          <strong>Lead the Reactoricus </strong>
          is a game where, by using movement blocks, you can guide a tiny robot.
          His name is Reaktoricus and his goal is to collect all badges on each map. Enjoy!
          <br />
          <br />
          - Jakub Niewczas (
          <FunctionLink styleName="twitter" href="https://twitter.com/j_niewczas" target="_blank">@j_niewczas</FunctionLink>
          )
        </p>

        <span styleName="separator">The Game Preview</span>
        <p>
          Editor is written fully in React. The game is just &quot;dummy&quot; Unity3d command receiver.
          Scroll down, pick a map and check it out yourself!
        </p>
        <div styleName="demo" />

        <span styleName="separator">Choose a map you want to play on!</span>
        <div styleName="maps">
          {maps.map(map => (
            <Map key={map.id} map={map} />
          ))}
        </div>
        <span styleName="separator">A bit about The Game</span>
        <p>
          The game/website is an ReactJs app. The heart of the app is
          <strong> &lt;AlgorithmEditor /&gt; </strong>
          component that builds list of steps. Steps can be infinitely
          nested thanks to the Loop tile. React is also responsible for
          executing the algorithm by sending commands and waiting for confirmations.
          List (a tree in fact) of tiles is first linearised by traversing the tree,
          then converted to linked list and then executed. So final algorithm
          is a series of commands connected by next() function.
          <br />
          <br />
          The Unity part is a well made, fully dynamic, micro environment for the Robot
          to operate. Robot is quite dummy in a sense that it just accepts commands,
          executes them and returns results. It can queue commands but React game wont
          send a next command before receiving a confirmation for previous one.
          <br />
          <br />
          As I’m fluent and comfortable with web technologies I wanted to learn
          something new and that’s why for this project I picked webGL Unity.
          It is just cool, isn’t it!
        </p>

        <div styleName="scenes">
          <div styleName="scene" />
          <div styleName="scene" />
          <div styleName="scene" />
        </div>
      </div>
      <Footer />
    </>
  );
};

Maps.propTypes = {
  maps: PropTypes.arrayOf(mapShape),
};

export default Maps;
