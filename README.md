# Dinosaurjs

✌🏽

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/cirroweb/dinosaurJS.git`
* change into the new directory
* `npm install`
* `bower install`

## Running / Development
* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Deploying
* `ember deploy production --activae=true` (deploy to production and activate new index)


## Notes for collaborators 
* We use pod structure so all current code is withing the `seventeen` folder — https://github.com/cirroweb/dinosaurJS/tree/master/app/pods/seventeen. Yes, I realize this is 2018 but we are using the same site as last year so get off my back lol. 
* Static JSON data lives in the associated route within the `seventeen` directory.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests
* `ember test`
* `ember test --server`

