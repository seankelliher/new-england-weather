[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/new-england-weather?style=flat-square)](/LICENSE.txt)
## New England Weather

Interactive component that displays current weather in New England state capitols.

## Project Screen Shots

* Starting view - with both Fahrenheit and Celsius.
![screen shot of project](/screenshots/new-england-weather-screenshot1.png?s=600)

* View with Celsius only.
![screen shot of project](/screenshots/new-england-weather-screenshot2.png?s=600)

## Installation and Setup Instructions

This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

My goal was to built a component that pulls data from the National Weather Service (NWS) and displays current weather in New England state capitols. I wanted to offer both Fahrenheit and Celsius units, but also let users choose a single unit (if desired) and display that unit on return visits. Vanilla JavaScript worked fine for all this: modifying the display property; using local storage; fetching data using Promises.

Challenges for the project were deciphering the NWS's API and ensuring results displayed in the same order each time data was fetched. Remember that Promises are asynchronous. Results may not be returned in the same order they were requested. To overcome this, I built the elements for the page first, and then assigned each state capitol's NWS data to its place on the page.

## Acknowledgments

* Weather data from [National Weather Service](https://www.weather.gov).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* JavaScript guidance from [JSLint](http://jslint.com).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Shields from [Shields](https://shields.io).