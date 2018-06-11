#!/bin/bash

set -e

ng test core --watch=false
ng build core

ng test foundation-demo --watch=false
ng build foundation-demo
