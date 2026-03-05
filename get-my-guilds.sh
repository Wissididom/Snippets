readarray -t MYGUILDS < <(curl -Ls -H "Authorization: Bot $TOKEN" 'https://discord.com/api/v10/users/@me/guilds' | jq -r '.[] | [.id, .name] | @tsv')
for GUILD in "${MYGUILDS[@]}"; do
	IFS=$'\t' read -r GUILD_ID GUILD_NAME <<< "$GUILD"
	echo "--------------------"
	echo "Guild ID: $GUILD_ID"
	echo "Guild Name: $GUILD_NAME"
	GUILD_DATA=$(curl -Ls -H "Authorization: Bot $TOKEN" "https://discord.com/api/v10/guilds/$GUILD_ID?with_counts=true")
	MEMBER_COUNT=$(jq -r '.approximate_member_count' <<< "$GUILD_DATA")
	echo "Approximate Member Count: $MEMBER_COUNT"
	OWNER_ID=$(jq -r '.owner_id' <<< "$GUILD_DATA")
	echo "Owner ID: $OWNER_ID"
	OWNER_DATA=$(curl -Ls -H "Authorization: Bot $TOKEN" "https://discord.com/api/v10/users/$OWNER_ID")
	OWNER_USERNAME=$(jq -r '.username' <<< "$OWNER_DATA")
	echo "Owner Username: $OWNER_USERNAME"
	OWNER_DISCRIMINATOR=$(jq -r '.discriminator' <<< "$OWNER_DATA")
	echo "Owner Discriminator: $OWNER_DISCRIMINATOR"
	OWNER_GLOBAL_NAME=$(jq -r '.global_name' <<< "$OWNER_DATA")
	echo "Owner Global Name: $OWNER_GLOBAL_NAME"
	echo "--------------------"
done
