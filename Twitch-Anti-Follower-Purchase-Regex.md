### Regex
`.*(?:(?:viewers|followers|primes|and|or) ?,? ?)+ on \w+ *\. *(?:\w|-|\. ?)+`

### Nightbot (-> Spam Protection -> Blacklist Word/Phrases):
`~/.*(?:(?:viewers|followers|primes|and|or) ?,? ?)+ on \w+ *\. *(?:\w|-|\. ?)+/gi`

### StreamElements (-> Spam filters -> Banned Words), Streamlabs (-> Cloudbot -> Mod Tools -> Word Protection -> Blacklist) or Fossabot (untested) (Moderation -> Blocked terms (There is a button to enable Regex whose text is `(.*)`)):
`.*(?:(?:viewers|followers|primes|and|or) ?,? ?)+ on \w+ *\. *(?:\w|-|\. ?)+`
