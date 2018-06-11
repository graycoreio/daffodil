#!/bin/bash

set -e

ng test --single-run

npm run build:lib
npm run build
