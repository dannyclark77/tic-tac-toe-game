#!/bin/bash

# development: 'http://tic-tac-toe.wdibos.com',
# production: 'https://aqueous-atoll-85096.herokuapp.com/'

curl --include --request POST "https://aqueous-atoll-85096.herokuapp.com/games" \
--header "Authorization: Token token=$TOKEN" \
--header "Content-type: application/json" \
--data '{
}'

echo
