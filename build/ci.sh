#!/bin/bash

set -e

lerna bootstrap

ng test --single-run

npm build:lib
npm build
