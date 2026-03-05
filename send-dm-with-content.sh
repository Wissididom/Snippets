RECIPIENT_ID="$1"
CONTENT=$(jq -Rs . < "$2")

echo "Creating DM Channel"
DM_CHANNEL=$(curl -s -X POST -H "Authorization: Bot $TOKEN" 'https://discord.com/api/v10/users/@me/channels' -H 'Content-Type: application/json' -d "{\"recipient_id\": \"$RECIPIENT_ID\"}" | jq -r '.id')
echo "Sending DM to $DM_CHANNEL"
curl -s -X POST -H "Authorization: Bot $TOKEN" "https://discord.com/api/v10/channels/$DM_CHANNEL/messages" -H 'Content-Type: application/json' -d "{\"content\":$CONTENT}"
