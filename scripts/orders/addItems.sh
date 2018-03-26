#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}"/${ID} \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "order": {
      "orderDate": "'"${DATE}"'",
      "items.itemID": "'"${ITEMID}"'",
      "items.quantity": "'"${QTY}"'",
      "items.cost": "'"${COST}"'"
    }
  }'

echo
