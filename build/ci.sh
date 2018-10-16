#!/bin/bash

set -e

lerna run build
lerna run test