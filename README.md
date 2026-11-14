# Renato — թվային այցեքարտ

Տղամարդկանց հագուստի խանութ Renato-ի այցեքարտի էջ (NFC քարտի հղման համար)։

**Հասցե՝ https://renatoclothes.github.io/**

Էջում՝ լոգո, հեռախոս (զանգ), WhatsApp / Viber / Telegram նույն համարով, Facebook և Instagram,
«Պահպանել կոնտակտը» կոճակ (`contact.vcf`՝ լոգոյով, Android-ում բացվում է լրացված «նոր կոնտակտ» էկրանը)։

## NFC քարտի վրա գրելը
NFC Tools → Write → Add a record → URL/URI → `https://renatoclothes.github.io/` → Write → հպել քարտը։

## Ինչ կա թղթապանակում
- `index.html`, `contact.vcf` — ստեղծվում են `_src/build.py`-ով (`_src/` թղթապանակը GitHub չի գնում)
- `assets/` — լոգո, favicon, հղման նախադիտման նկար
- `fonts/` — Playfair Display, Manrope, Noto Serif/Sans Armenian (տեղական, առանց արտաքին կապի)
