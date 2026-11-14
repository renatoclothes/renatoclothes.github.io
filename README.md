# Renato — թվային այցեքարտ

Տղամարդկանց հագուստի խանութ Renato-ի այցեքարտի էջ (NFC քարտի հղման համար)։

**Հասցե՝ https://renatoclothes.github.io/**

Էջում՝ լոգո, հեռախոս (զանգ), WhatsApp / Viber / Telegram նույն համարով, Facebook և Instagram,
«Պահպանել կոնտակտը» կոճակ (`contact.vcf`՝ լոգոյով, Android-ում բացվում է լրացված «նոր կոնտակտ» էկրանը)։

## NFC քարտի վրա գրելը
NFC Tools → Write → Add a record → URL/URI → `https://renatoclothes.github.io/` → Write → հպել քարտը։

## 3D էֆեկտներ
Լոգոն 3D մեդալիոն է (Three.js)՝ սև էմալ, բարձրացված սպիտակ «R», արծաթե եզր։ Սկզբում «պտտվելով» է հայտնվում,
մատով կարելի է պտտել, սեղմելիս մեկ լրիվ պտույտ է անում, թեքվում է մկնիկի կամ հեռախոսի թեքության հետ։
Ֆոնին՝ կոստյումի պինսթրայփ հյուսվածք և լույսի շող։ Եթե 3D-ն չի աշխատում կամ «Data saver» է, մնում է հարթ լոգոն։

## Ինչ կա թղթապանակում
- `index.html`, `contact.vcf` — ստեղծվում են `_src/build.py`-ով (`_src/` թղթապանակը GitHub չի գնում)
- `js/` — `main.js`, `look.js` (մկնիկ/թեքություն) և `medallion.js` (3D, հավաքված `_src/js/medallion.src.js`-ից)
- `assets/` — լոգո, favicon, հղման նախադիտման նկար
- `fonts/` — Playfair Display, Manrope, Noto Serif/Sans Armenian (տեղական, առանց արտաքին կապի)

## Քարտեզ
«Գտնվելու վայրը» բաժինը՝ սև քարտեզ OpenStreetMap-ի տվյալներից (`_src/make_map.py`), կոորդինատներ 40.176120, 44.451726,
Renato-ի լոգոյով նշիչ, «Ուղղություն» (Google Maps) և iPhone-ում նաև Apple Maps։ © OpenStreetMap contributors։
