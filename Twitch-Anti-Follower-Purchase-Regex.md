### Regex
`(?:(?:All|Everything|Only) for your (?:stream|channel).*(?:primes|viewers|follow| ?(?:\w*\. ?\w*|\*\*\*))|.*(?:(?:channel|viewers|views|f[o0]ll[o0]wers|primes|chat b[o0]ts|and|[o0]r|subprime|follows|primesubs|bits) ?,? ?)+ on \w+ *(?:\.|dot) *(?:\w|-|(?:\.|dot) ?)+|(?:Upgrade|Improver?|.*[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f) *(?:your )?(?:(?:channel|stream|viewers|views|f[o0]ll[o0]wers|primes|chat b[o0]ts|and|[o0]r) ?,? ?)+|Zuschauer für nur|(?:eine?)? ?Promo)`

### Nightbot (-> Spam Protection -> Blacklist Word/Phrases):
`~/(?:(?:All|Everything|Only) for your (?:stream|channel).*(?:primes|viewers|follow| ?(?:\w*\. ?\w*|\*\*\*))|.*(?:(?:channel|viewers|views|f[o0]ll[o0]wers|primes|chat b[o0]ts|and|[o0]r|subprime|follows|primesubs|bits) ?,? ?)+ on \w+ *(?:\.|dot) *(?:\w|-|(?:\.|dot) ?)+|(?:Upgrade|Improver?|.*[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f) *(?:your )?(?:(?:channel|stream|viewers|views|f[o0]ll[o0]wers|primes|chat b[o0]ts|and|[o0]r) ?,? ?)+|Zuschauer für nur|(?:eine?)? ?Promo)/gi`

### StreamElements (-> Spam filters -> Banned Words), Streamlabs (-> Cloudbot -> Mod Tools -> Word Protection -> Blacklist) or Fossabot (untested) (Moderation -> Blocked terms (There is a button to enable Regex whose text is `(.*)`)):
`(?:(?:All|Everything|Only) for your (?:stream|channel).*(?:primes|viewers|follow| ?(?:\w*\. ?\w*|\*\*\*))|.*(?:(?:channel|viewers|views|f[o0]ll[o0]wers|primes|chat b[o0]ts|and|[o0]r|subprime|follows|primesubs|bits) ?,? ?)+ on \w+ *(?:\.|dot) *(?:\w|-|(?:\.|dot) ?)+|(?:Upgrade|Improver?|.*[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f) *(?:your )?(?:(?:channel|stream|viewers|views|f[o0]ll[o0]wers|primes|chat b[o0]ts|and|[o0]r) ?,? ?)+|Zuschauer für nur|(?:eine?)? ?Promo)`

### Streamer.Bot
`(?:(?:All|Everything|Only) for your (?:stream|channel).*(?:primes|viewers|follow| ?(?:\w*\. ?\w*|\*\*\*))|.*(?:(?:channel|viewers|views|f[o0]ll[o0]wers|primes|chat b[o0]ts|and|[o0]r|subprime|follows|primesubs|bits) ?,? ?)+ on \w+ *(?:\.|dot) *(?:\w|-|(?:\.|dot) ?)+|(?:Upgrade|Improver?|.*[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f) *(?:your )?(?:(?:channel|stream|viewers|views|f[o0]ll[o0]wers|primes|chat b[o0]ts|and|[o0]r) ?,? ?)+|Zuschauer für nur|(?:eine?)? ?Promo)`

#### If you want to just delete the message:
Import the following Action if you want to just delete it:
```
TlM0RR+LCAAAAAAABAB1VFtvmzAYfZ+0/4Dy1ElLBIGQUGkPbdqQy0IVkuY2+mBsQ2gNZjaE0qr/fQYWFRIVCYG/c3y+Y+PD+/dvktQ6YsYDGrWupe7PshCBEItRq1UNAUwEzEXlTzGWpPfqIaAAFTwXAbUvA70NNB20NcMTb4YB212ou8qgL3toACutctLfFKeFfpQS8lnFEXAJLvQSluJa/RWSFOERo+E44AlluaB4gPAa52R4A6IISLcY0hBLIxDSlEtXd5jgBP+oGfAZTePPBZY1QDKQczuNLtUZiBANb8pduEQhjWDKGI6SS+xi5xq717BeuZSuhjTOa15LDsIcsiD+3791hr5gHN+Q4Igv+lfusYeFO4jPbJTg8NpxNoFYXsYdZx5ARjn1ko51v3KcERPWMspedM1xjlpH7qiyqhiOE3JIGQncDiKkVRd8anZ28wQPKSqXh7ZW7IbQf1TJGzLXyUMmz+4WcYY2Uw42c3/XfT1Ade4vlNvJctMTtR4ReP9uQadwvA5ckzxPzOnR7Wa+vT2QnbqW90s/LnAstIYLYahr8IKDhjfGxNwf3LFFHios329tBYZaqf+b2CrY2s/g3iauKXQeLbrb2tZ+a73tNojMzFG+Vy13Eipve5m8TIicrk1jhcbTYg10tsz8XWjIsxW3hj4xhE9x019n3yVmxTmMA/LFh0GYgHyZAHZ5cEqcgyO2MU9JsqJrwIIiHl8zG5zzI1LFVNH0PkIYtD1PhFMzBl4bqAOlrehogHp6T1dR92xihgP/UPiTO3ITSfK46GQUVxM5pasR7xL5IuKVxQjh16LRZ/Xj9Pp0niizaFGe56d6EAkBMceohlZgKVQxq59PbaqYFoYi4Cf+xz/8oTMkFAUAAA==
```

Example Configuration:

![StreamerBot-Command](assets/StreamerBot-Command.png)

#### If you want to timeout the offender:
Create an Action and take Twitch->Moderation->TimeoutUser as Sub-Action (Make sure you have the Type set to `Redeemer`)

#### If you want to ban the offender:
Create an Action and take Twitch->Moderation->BanUser as SubAction (Use `%userName%` as userLogin)
