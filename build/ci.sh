#!/bin/bash

ng test core --watch=false
ng test foundation-demo --watch=false

ng build core
ng build foundation-demo
