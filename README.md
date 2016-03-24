# Dinosaurjs

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

#### What We are Using
We are using ember-cli-deploy deployment and cli build fingerprinting. We are using the lightning pack deployment scheme. Pushing everything as assets to an S3 bucket (and minifying/stripping what we can) except for the index.html file which is stored via redis on our node express app (https://github.com/cirroweb/dino-deploy).

#### For details on how we setup our node deploy server see the README at https://github.com/cirroweb/dino-deploy.

#### For details on how the ember cli deploy was setup and configured please see the PR diff here https://github.com/cirroweb/dinosaurJS/pull/5.

#### Very Basics of Usage
Add a .env.deploy.production file to the top level folder of your dinosaurJS application and talk to Brett about getting the variables to put into it (this is the application.yml for our front end).

To deploy a current commit, from your branch (usually master) run a
     `git add -A`
    and
     `git commit -m 'your commit message'`
    and
     `git push origin master`
    then run a `ember deploy production`.

This will add your commit to the queryparam options on our server. Check with `http://aventura-deploy-server.herokuapp.com/?index_key=commit_number_here`.

You can see available commits on the server and see the current activated commit with `ember deploy:list production`

Then to activate your commit as the most recent use
     `ember deploy:activate production --revision=43cc587`
    where `43cc587` is your commit number.

To bypass this workflow, and brute force deploy and activate in a single go use
     `ember deploy production --activate=true`
    This will activate your deployment in one go, but might cause a hiccup on production site but is nice to just deploy in a single command if its not a big deal.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

