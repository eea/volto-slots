# volto-slots

[![Releases](https://img.shields.io/github/v/release/eea/volto-slots)](https://github.com/eea/volto-slots/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-slots%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-slots/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slots-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slots-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slots-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slots-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slots-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slots-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slots-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slots-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-slots%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-slots/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slots-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slots-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slots-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slots-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slots-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slots-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slots-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slots-develop)


[Volto](https://github.com/plone/volto) add-on

## Features

Demo GIF

## Getting started

### Try volto-slots with Docker

      git clone https://github.com/eea/volto-slots.git
      cd volto-slots
      make
      make start

Go to http://localhost:3000

### Add volto-slots to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-slots"
   ],

   "dependencies": {
       "@eeacms/volto-slots": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-slots
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-slots/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-slots/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-slots/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
