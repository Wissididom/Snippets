### Regex
`.*(?:Buy|Get) (?:(?:viewers|followers|primes|and|or) ?,? ?)+ on .+\. ?(?:\w|-|\. ?)+`

### Nightbot (-> Spam Protection -> Blacklist Word/Phrases):
`~/.*(?:Buy|Get) (?:(?:viewers|followers|primes|and|or) ?,? ?)+ on .+\. ?(?:\w|-|\. ?)+/gi`

### StreamElements (-> Spam filters -> Banned Words) or Streamlabs (-> Cloudbot -> Mod Tools -> Word Protection -> Blacklist):
`.*.*(?:Buy|Get) (?:(?:viewers|followers|primes|and|or) ?,? ?)+ on .+\. ?(?:\w|-|\. ?)+`
