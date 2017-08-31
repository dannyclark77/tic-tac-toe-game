#!/bin/bash

# ID=30 OLD_PASSWORD="wallstar" NEW_PASSWORD="wallstar2" TOKEN=BAhJIiU3YThiZWI1Njg5NDc2MTMyZGI2NjEwN2RlY2MyZjU1NAY6BkVG--379851c0104ada757b3637293f7f1fc54eb32985 sh scripts/change-password-json.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
