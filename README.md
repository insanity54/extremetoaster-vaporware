# extremetoaster-vaporware

[![Greenkeeper badge](https://badges.greenkeeper.io/insanity54/extremetoaster-vaporware.svg)](https://greenkeeper.io/)

> Oh remember that site on which we studied learning tools during school?

> No.

> Me neither.


## Goals

  * [ ] No javascript required to browse the site
  * [ ] No javascript learning tool section
  * [ ] Classic Flash learning tools
  * [ ] Modern HTML5 learning tools
  * [ ] Immersive toaster High School world
  * [ ] Covert learning from school and work


## Edit process

  * Create a new article in ./articles/
  * add any needed assets to ./assets/

## Build process

    $ ./metalsmith.js

## Upload process

    rsync -avz -e "ssh" --progress ./dist/ extremetoaster:/srv/extremetoaster/site/


## Reference

Wanted Flynn paradigm for future use https://stackoverflow.com/questions/47470042/use-flynn-applications-via-single-domain
