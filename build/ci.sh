#!/bin/bash

set -e

ng test --single-run

npm build:lib
npm build
