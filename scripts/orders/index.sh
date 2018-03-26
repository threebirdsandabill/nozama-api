#!/bin/sh

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \


echo

  # --header "Authorization: Token token=$TOKEN"
