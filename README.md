Lead the Reactoricus
=============

[http://reactoricus.jakubniewczas.pl/](http://reactoricus.jakubniewczas.pl/)

A fun, side hobby project of mine. A ReactJs game with Unity3d visualisation. The whole page, the game controller and algorithm execution is done in React while Unity3d part is just a “dummy” (yet quite sophisticated) event receiver-producer.

![Game demo](https://github.com/kubenstein/reactoricus/blob/master/src/frontend/assets/images/demo.gif?raw=true)

The game/website is an ReactJs app. The heart of the app is <AlgorithmEditor /> component that builds list of steps. Steps can be infinitely nested thanks to the Loop tile. React is also responsible for executing the algorithm by sending commands and waiting for confirmations. List (a tree in fact) of tiles is first linearised by traversing the tree, then converted to linked list and then executed. So final algorithm is a series of commands connected by next() function.

The Unity part is a well made, fully dynamic, micro environment for the Robot to operate. Robot is quite dummy in a sense that it just accepts commands, executes them and returns results. It can queue commands but React game wont send a next command before receiving a confirmation for previous one.

As I’m fluent and comfortable with web technologies I wanted to learn something new and that's why for this project I picked webGL Unity. It’s just cool, isn’t it!

### Development

```
npm run dev:db:migrate

npm run dev:backend
npm run dev:frontend
```
Then visit `http://localhost:3000/`.


### License
MIT
