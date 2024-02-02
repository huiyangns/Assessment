#!/bin/bash

HOME_DIR=$(dirname ~/)
CYPRESS_CACHE_DIR="$HOME_DIR/$(whoami)/.cache/Cypress"

COMMAND="--init --rm --user root:"$(id -g)" -v "$(pwd)":/app -v ""$CYPRESS_CACHE_DIR"":/root/.cache/Cypress -w /app node:18"

{
  # Try to run the command interactively. This will fail when this is run as a git hook.
  docker run -it $COMMAND "$@"
} || {
  echo "Failed to run node interactively. Running non-interactively." &&
  docker run --init $COMMAND "$@"
}