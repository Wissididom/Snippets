### Regex
`(?:.*(?:(?:channel|viewers|views|followers|primes|chat bots|and|or) ?,? ?)+ on \w+ *\. *(?:\w|-|\. ?)+|.*offer promotion of *(?:your )?(?:(?:channel|viewers|views|followers|primes|chat bots|and|or) ?,? ?)+)`

### Nightbot (-> Spam Protection -> Blacklist Word/Phrases):
`~/(?:.*(?:(?:channel|viewers|views|followers|primes|chat bots|and|or) ?,? ?)+ on \w+ *\. *(?:\w|-|\. ?)+|.*offer promotion of *(?:your )?(?:(?:channel|viewers|views|followers|primes|chat bots|and|or) ?,? ?)+)/gi`

### StreamElements (-> Spam filters -> Banned Words), Streamlabs (-> Cloudbot -> Mod Tools -> Word Protection -> Blacklist) or Fossabot (untested) (Moderation -> Blocked terms (There is a button to enable Regex whose text is `(.*)`)):
`(?:.*(?:(?:channel|viewers|views|followers|primes|chat bots|and|or) ?,? ?)+ on \w+ *\. *(?:\w|-|\. ?)+|.*offer promotion of *(?:your )?(?:(?:channel|viewers|views|followers|primes|chat bots|and|or) ?,? ?)+)`
