### Regex
`.*(?:Buy|Get) (?:(?:viewers|followers|primes|and|or) ?,? ?)+ on .+\. ?(?:\w|-|\. ?)+`

### Nightbot (-> Spam Protection -> Blacklist Word/Phrases):
`~/.*(?:Buy|Get) (?:(?:viewers|followers|primes|and|or) ?,? ?)+ on .+\. ?(?:\w|-|\. ?)+/gi`

### StreamElements (-> Spam filters -> Banned Words), Streamlabs (-> Cloudbot -> Mod Tools -> Word Protection -> Blacklist) or Fossabot (untested) (Moderation -> Blocked terms (There is a button to enable Regex whose text is `(.*)`)):
`.*.*(?:Buy|Get) (?:(?:viewers|followers|primes|and|or) ?,? ?)+ on .+\. ?(?:\w|-|\. ?)+`
