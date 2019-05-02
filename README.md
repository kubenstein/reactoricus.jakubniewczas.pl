Lead the Reactoricus
=============

[http://reactoricus.jakubniewczas.pl/](http://reactoricus.jakubniewczas.pl/)

A fun, side hobby project of mine. A ReactJs game with Unity3d visualisation. The whole page, the game controller and algorithm execution is done in React while Unity3d part is just a “dummy” (yet quite sophisticated) event receiver-producer.

![Game demo](https://github.com/kubenstein/reactoricus/blob/master/src/frontend/assets/images/demo.gif?raw=true)

The game/website is an ReactJs app. The heart of the app is <AlgorithmEditor /> component that builds list of steps. Steps can be infinitely nested thanks to the Loop tile. React is also responsible for executing the algorithm by sending commands and waiting for confirmations. List (a tree in fact) of tiles is first linearised by traversing the tree, then converted to linked list and then executed. So final algorithm is a series of commands connected by next() function.

The Unity part is a well made, fully dynamic, micro environment for the Robot to operate. Robot is quite dummy in a sense that it just accepts commands, executes them and returns results. It can queue commands but React game wont send a next command before receiving a confirmation for previous one.

As I’m fluent and comfortable with web technologies I wanted to learn something new and that's why for this project I picked webGL Unity. It’s just cool, isn’t it!

### Map Editor

Recently I added map editor so the community can create its own maps. The most difficult part was to generate map preview. I started with puppeteer script that run the game on server and take a screenshot, however headless chrome does not render webgl unfortunately…
The workaround solution is to capture screenshot of the game canvas on first game run and send it to backend. So the whole preview generating logic was moved from backend to frontend.
Later on the backend uploads map preview to Cloudinary. Cloudinary is also responsible to crop and resize previews.

![Map Editor demo](https://github.com/kubenstein/reactoricus/blob/master/src/frontend/assets/images/map-editor-readme-demo.gif?raw=true)

### Development
To have working map previews you have to have `CLOUDINARY_URL` env set pointing at cloudinary account.

```
npm run dev:db:migrate

npm run dev:backend
npm run dev:frontend
```
Then visit `http://localhost:3000/`.


### License
MIT
