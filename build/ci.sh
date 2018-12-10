#!/bin/bash

set -e

lerna run lint
lerna run build
lerna run test