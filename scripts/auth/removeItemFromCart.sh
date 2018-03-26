#!/bin/bash

API="http://localhost:4741"
URL_PATH="/deleteFromCart"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "user": {
      "cart": "'"${ITEMID}"'"
    }
  }'

echo
