#!/bin/bash

for f in *.body
do
  fdata=(${f//./ })
  fname=${fdata[0]}
  cat wesley.head $f wesley.foot > ../$fname.html
done
