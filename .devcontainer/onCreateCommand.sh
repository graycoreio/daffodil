#!/bin/bash

set -e

test -d './node_modules' &&  echo 'node_modules found. Skipping install' || npm ci