#!/bin/bash

# development: 'http://tic-tac-toe.wdibos.com',
# production: 'https://aqueous-atoll-85096.herokuapp.com/'

curl --include --request PATCH "https://aqueous-atoll-85096.herokuapp.com/games/${ID}" \
--header "Authorization: Token token=$TOKEN" \
--header "Content-type: application/json" \
--data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'

echo
