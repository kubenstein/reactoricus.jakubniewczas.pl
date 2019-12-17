const deepCopy = (thing: object | object[]) : object | object[] => JSON.parse(JSON.stringify(thing));

export default deepCopy;
