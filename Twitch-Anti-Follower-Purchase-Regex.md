# Archived

**I don't want to maintain this regex anymore, for moderating those bots I recommend using Sery_Bot.**

### Regex
`(?:(?:\bAll\b|\bEverything\b|\bOnly\b) for your (?:\bstream\b|\bchannel?\b).*(?:\bprimes?\b|\bviewers?\b|\bfollows?\b| ?(?:\w*\. ?\w*|\*\*\*))|.*(?:(?:\bchannels?\b|\bviewers?\b|\bviews?\b|\bf[o0]ll[o0]wers?\b|\bprimes?\b|\bchat b[o0]ts?\b|\bsubprimes?\b|\bfollows?\b|\bprimesubs?\b|\bbits?\b) ?,? ?)+ [̀-ͯ᪰-᫿᷀-᷿⃐-⃿︠-︯]?on (?:\*\*\*|\w+ *(?:\.|dot) *(?:\w|-|(?:\.|dot) ?)+)|(?:\bBe[̀-ͯ᪰-᫿᷀-᷿⃐-⃿︠-︯]?st\b|\bUpgrade\b|\bImprover?|.*\b[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f\b|\bBewerben Sie\b|\bPromote\b) *(?:Ihren |your )?(?:(?:\bKanals?\b|\bchannels?\b|\bstreams?\b|\bviewers?\b|\bviews?\b|\bf[o0]ll[o0]wers?\b|\bprimes?\b|\bchat b[o0]ts?\b) ?,? ?)+|\b(?:Zuschauer|viewers?)(?: kostenlos| für nur| for free)\b|\bhier ist (?:eine?)? ?Promo\b|\bstreamhub world\b)`

### Nightbot (-> Chat Moderation -> Blacklist Words/Phrases):
`~/(?:(?:\bAll\b|\bEverything\b|\bOnly\b) for your (?:\bstream\b|\bchannel?\b).*(?:\bprimes?\b|\bviewers?\b|\bfollows?\b| ?(?:\w*\. ?\w*|\*\*\*))|.*(?:(?:\bchannels?\b|\bviewers?\b|\bviews?\b|\bf[o0]ll[o0]wers?\b|\bprimes?\b|\bchat b[o0]ts?\b|\bsubprimes?\b|\bfollows?\b|\bprimesubs?\b|\bbits?\b) ?,? ?)+ [̀-ͯ᪰-᫿᷀-᷿⃐-⃿︠-︯]?on (?:\*\*\*|\w+ *(?:\.|dot) *(?:\w|-|(?:\.|dot) ?)+)|(?:\bBe[̀-ͯ᪰-᫿᷀-᷿⃐-⃿︠-︯]?st\b|\bUpgrade\b|\bImprover?|.*\b[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f\b|\bBewerben Sie\b|\bPromote\b) *(?:Ihren |your )?(?:(?:\bKanals?\b|\bchannels?\b|\bstreams?\b|\bviewers?\b|\bviews?\b|\bf[o0]ll[o0]wers?\b|\bprimes?\b|\bchat b[o0]ts?\b) ?,? ?)+|\b(?:Zuschauer|viewers?)(?: kostenlos| für nur| for free)\b|\bhier ist (?:eine?)? ?Promo\b|\bstreamhub world\b)/gi`

### StreamElements (-> Spam filters -> Banned Words), Streamlabs (-> Cloudbot -> Mod Tools -> Word Protection -> Blacklist) or Fossabot (untested) (Moderation -> Blocked terms (There is a button to enable Regex whose text is `(.*)`)):
`(?:(?:\bAll\b|\bEverything\b|\bOnly\b) for your (?:\bstream\b|\bchannel?\b).*(?:\bprimes?\b|\bviewers?\b|\bfollows?\b| ?(?:\w*\. ?\w*|\*\*\*))|.*(?:(?:\bchannels?\b|\bviewers?\b|\bviews?\b|\bf[o0]ll[o0]wers?\b|\bprimes?\b|\bchat b[o0]ts?\b|\bsubprimes?\b|\bfollows?\b|\bprimesubs?\b|\bbits?\b) ?,? ?)+ [̀-ͯ᪰-᫿᷀-᷿⃐-⃿︠-︯]?on (?:\*\*\*|\w+ *(?:\.|dot) *(?:\w|-|(?:\.|dot) ?)+)|(?:\bBe[̀-ͯ᪰-᫿᷀-᷿⃐-⃿︠-︯]?st\b|\bUpgrade\b|\bImprover?|.*\b[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f\b|\bBewerben Sie\b|\bPromote\b) *(?:Ihren |your )?(?:(?:\bKanals?\b|\bchannels?\b|\bstreams?\b|\bviewers?\b|\bviews?\b|\bf[o0]ll[o0]wers?\b|\bprimes?\b|\bchat b[o0]ts?\b) ?,? ?)+|\b(?:Zuschauer|viewers?)(?: kostenlos| für nur| for free)\b|\bhier ist (?:eine?)? ?Promo\b|\bstreamhub world\b)`

### Streamer.Bot
`(?:(?:\bAll\b|\bEverything\b|\bOnly\b) for your (?:\bstream\b|\bchannel?\b).*(?:\bprimes?\b|\bviewers?\b|\bfollows?\b| ?(?:\w*\. ?\w*|\*\*\*))|.*(?:(?:\bchannels?\b|\bviewers?\b|\bviews?\b|\bf[o0]ll[o0]wers?\b|\bprimes?\b|\bchat b[o0]ts?\b|\bsubprimes?\b|\bfollows?\b|\bprimesubs?\b|\bbits?\b) ?,? ?)+ [̀-ͯ᪰-᫿᷀-᷿⃐-⃿︠-︯]?on (?:\*\*\*|\w+ *(?:\.|dot) *(?:\w|-|(?:\.|dot) ?)+)|(?:\bBe[̀-ͯ᪰-᫿᷀-᷿⃐-⃿︠-︯]?st\b|\bUpgrade\b|\bImprover?|.*\b[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f\b|\bBewerben Sie\b|\bPromote\b) *(?:Ihren |your )?(?:(?:\bKanals?\b|\bchannels?\b|\bstreams?\b|\bviewers?\b|\bviews?\b|\bf[o0]ll[o0]wers?\b|\bprimes?\b|\bchat b[o0]ts?\b) ?,? ?)+|\b(?:Zuschauer|viewers?)(?: kostenlos| für nur| for free)\b|\bhier ist (?:eine?)? ?Promo\b|\bstreamhub world\b)`

#### If you want to just delete the message:
Import the following Action if you want to just delete it:
```
U0JBRR+LCAAAAAAABADtV91v4jgQfz/p/oeIp2N3gxIIhVQ6oZZtKe0t3UI/2fTBSUzw1olztgNl2/5n93b/2I2T8BEIq9VJ93RbQYrnNzMez5cnL7/+ommVGeaCsKhyqDU+pAQSxozL221ySCISJuGaXjFq9VqjkqNYIqC9qAUsIxRixXLKKGVzzLXPCfemSGDtI6ZY4kwKGFEip4wr1jsiBPGJz8IVuDatYtaMmrECfCw8TmKZg5va2DCJjrwciRJKFfSWGemjgpEoZRNA+ZJRtCWUwsRXutvtSbNu2kifePaBbnmoqbvNeltvNNtt2zfbTQO1l/unYn8mOMH53pt0HCGXYqVT8gQXkGePJj4+5Sw8I0IyvgCmCaKiwPWjLk2ZA86SeNM12YHpHC0EOKhMP0cR+H7luh3cY5GXcI4jWYZKToIAwrXpzC2H5lrCEDbqp75tGVar3gS3eoZd162WYeu27zX1NsbYMn3XNFvu5gE2wmKalufZrQO95SNLt/DE15FnIN3wWk2jbbVxvb0rKhexcqFlmNvI3uCsAySWufK4ib6tF48FV+/mVpk7lkHdDWEK78nzdczwBENEPLyzUQp3Dx3njkBY58JxPhGPM8EmsjY4uXacUw5bzxl/OrAcZ2ZBeTWMhmk7Tig8xilxaz6llaLKx+393YXEXeanR/DvB7EbesFNg37ze7fycm5cfLyK5/7duUB3n4KH+vPUa3wKrszj/uiuCbQmBbz18Yqde2e3xO3Rr/3e+cytz4Ph/ZQ+NG6N8SiIFY5BV/cKjKrbQvH43SO73xtP3bMBvcywxfh+aHqhler/gw4b6H74FZ0MqdsDPTcD9nA/HIzvB98e7nx60TtdjBsDtx+a38YGfepTI7nt2df+2bk6A7sYzYOH0DYursWgG1Ab7IQv+30nADHHkNExobikKPIQUrQYScTLyiblEGiGh1gkVF6zW8SJysTv8Ra4dnMiqw/XRE3cOLB104COBRnf1u2229INA7Usy20YZsPfEZ1jEkyVndBr99SOrf62sWW32Wp5Kfb9yoLkxM9qwx+vqZ7aLCvEYnuiFMUC+xv4Es4VLvmzFl1QsexLey8DwaDb7paZscfUGPOQSIn9G5E3xXJ4z2HIv2qPq24yxAF+PtR+6xzCx3HcI0rh+QrfE7hSF3JKoiAnXEZ0Af+q2oRxbQGH1DIRITlGYc4E10wUYdpRjLV3GUPMSYhFJ+eYEQxX0mo5Se+obKl1UoH5O8epaR31AzjeZZ9q9TXVl6nMt9mnVC3XO3xhxiOl6rnJU7QKFErNVTxyRRPJFtOmrSsNibsiuCQTrmqdDx2tU32vsUiDY7zXMk/UXn0mq/li/qq/blKBPVu7x1jIXONNHHDk43zVD2POICwdcAUslbUT6OpazNXPMLWeqGekpVgudqx84+JIG5Glps8wQDCJU1uVOf0p3A3aaxrVamfl5gsUIbrpo4LTs8D/dzFYuVGB40QAnsBpJ3//xaF/8FxqSoAGs5DKRkwi3KmCTHq+gpnTxNXgDqO+UlwohXXb2RlVSJSOWyWDWJhdZWaxr6SNQZXVz3r6WU//13ri6ko5eY4p8YjsolgmvGxIqVDmoXxcNQpFF0SM42MmjzyPJek7xHb1ZSz9SGIODi1hiNXroJBdJY95+TvKEjJKBNVd/B3hZA2rG/nlraAZXrRGOBJEklnpwQPKXES7jFEYt3eOn+kux8rf1SClI3mdDV3GvkFmjl3BvCcsR5jPtgaNNdilBN7aiqCEnOLrKQkUv/0DFLYxPA8QAAA=
```

Example Configuration:

![StreamerBot-Command](assets/StreamerBot-Command.png)

#### If you want to timeout the offender:
Create an Action and take Twitch->Moderation->TimeoutUser as Sub-Action (Make sure you have the Type set to `Redeemer`)

#### If you want to ban the offender:
Create an Action and take Twitch->Moderation->BanUser as SubAction (Use `%userName%` as userLogin)
