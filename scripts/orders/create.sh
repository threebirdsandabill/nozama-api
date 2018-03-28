#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
      "order": {
        "orderDate": "'"${DATE}"'",
        "items": [{
            "itemId": "'"${ITEMID}"'",
            "quantity": "'"${QTY}"'",
            "cost": "'"${COST}"'"
          }]
      }
    }'

echo
