#!/bin/bash

ng test --single-run

if [[ $TRAVIS_BRANCH == 'master' ]]; 
then
    ng build --aot
else
    ng build --prod --aot
fi