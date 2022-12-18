#!/bin/bash

commitDays=$(< numberOfDays.txt)
((commitDays=commitDays+1))
echo $commitDays > numberOfDays.txt