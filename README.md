# Rotunda Test
## Requirements
Make you sure you have Docker installed in your computer.

Build the image.
```sh
docker build -t rotunda-test .
```

## Running scripts
```sh
docker run --rm rotunda-test zoo-excercise.js

docker run --rm rotunda-test error-alarm-exercise.js

docker run --rm rotunda-test url-parser-exercise.js
```