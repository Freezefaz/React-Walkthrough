# React-Walkthrough

- Don't touch node and public folder
- Put new files in src folder

## Steps
1. Get data first
2. Know what data is for and how it looks
3. Software architecture 

### Start

- Make sure open terminal of basic folder
- npm start or yarn start
- yarn add axios - to install axios
- 

### To create new app

- at the main terminal
- npx create-start-app <name file>
- npm install react-router-dom -> to install router

### Component
1. Must be a function
2. Start withs an uppercase
3. Must return JSX

### Creating a js file for Component
1. Ensure the name is exact as the Component
2. Import React
3. Inculde export default at the start
4. Import on App() page the Component

### State
- state is internal data that can change but cannot be out of the component
- props is like an external arguement can cannot change

### Component Design
- Does it have a state?
- If have state, need a controller
- If not use a function
- Use props to configure the component

### Json
- put in public file

### When to use class or function
#### For Legacy React
- Use class if need state
- Use class if have life cycle
#### Cutting edge React
- Function can have state using hook
