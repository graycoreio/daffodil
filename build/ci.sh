#!/bin/bash

set -e

ng build core
ng test core --watch=false

ng build state
ng test state --watch=false

ng test foundation-demo --watch=false
ng build foundation-demo
