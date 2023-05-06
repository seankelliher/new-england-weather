[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/new-england-weather?style=flat-square)](/LICENSE.txt)
## New England Weather

App that displays current weather in New England state capitols. [View working component](https://seankelliher.github.io/new-england-weather/).

## Project Screen Shots

* Several locations - with Metric units.
![screen shot of project](/screenshots/new-england-weather-screenshot1.png?s=600)

* Several locations - with Imperial units.
![screen shot of project](/screenshots/new-england-weather-screenshot2.png?s=600)

## Installation and Setup Instructions

All you need is a web browser. However, app uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

My goal was to build an app that pulls data from the National Weather Service (NWS) and displays current weather in the six New England state capitols. I wanted to offer users both Imperial (Fahrenheit, miles) and Metric (Celsius, kilometers) units and have the app remember a user's choice for return visits. The NWS uses Metric units. I did the miles/km and F/C conversions in the app. The math isn't that complex. I also used the browser's local storage to remember a user's preferred unit.

Deciphering the NWS's API took some time. Also, ensuring the six cities displayed in the same order each time data was fetched required some planning. Since the six separate calls to the NWS use Promises and Promises are asynchronous, the order in which results were returned varied. To overcome this, I built the elements for the page first, and then matched the data to the elements.

## Acknowledgments

* Weather data from [National Weather Service](https://www.weather.gov).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Shields from [Shields](https://shields.io).
