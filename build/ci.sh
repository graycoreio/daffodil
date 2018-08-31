#!/bin/bash

set -e

ng build core
ng test core --watch=false --browsers=ChromeHeadless

ng build driver
ng test driver --watch=false --browsers=ChromeHeadless

ng build state
ng test state --watch=false --browsers=ChromeHeadless

ng test foundation-demo --watch=false
ng build foundation-demo
