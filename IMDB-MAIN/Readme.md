
IMDB app

npm create vite@latest ToDo-app  -- --template react
npm install
npm run dev

Rounting
1 navigating from one page to another

frontend and backend routing

Server side routing
1 In server side routing first browser call the server and get html css js 
2 created the dom tree and then again call the server for data and show the data
3 it is costlier because onevery call their are two round trips one for html -> request -> response and other for data ->request -> response

Client side routing
1 In client side only one time api call for html css structure and after that it only calls for data for that perticular component
2 not call on second time for server to get the html/css again and then call again for data 
3 it utilizes one time html/css and render data accordingly without calling to server
4 it is not costy as server side routing


Routing in react
1 here react uses router library for routing 
2 it works on top of javascript history routing


install react router
npm i react-router
