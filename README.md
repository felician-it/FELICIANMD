<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Anton&size=80&pause=1000&color=FF0000&center=true&vCenter=true&width=1000&height=200&lines=RAHEEM-XMD-2;VERSION+2025;BY+DEV+RAHEEM-CM" alt="Typing SVG" />
</a>

---
---
<a
href="https://whatsapp.com/channel/0029VbAffhD2ZjChG9DX922r">
 <img alt="RAHEEM-XMD-2" height="400" src="https://files.catbox.moe/gfr5d3.jpg"></a>
</p>

---

<p align="center">
  <img src="https://profile-counter.glitch.me/RAHEEM-XMD-2/count.svg" alt="Visitor Count" />
</p>

---
DEPLOY SIMPLY RAHEEM-XMD-2 

[![TypingSVG](https://readme-typing-svg.herokuapp.com?font=Rockstar-ExtraBold&size=50&pause=1000&color=FF0000&center=true&vCenter=true&width=900&height=130&lines=『+⚡get+session-id+here+👌👌⚡+』)](https://git.io/typing-svg)



[![RAHEEM-XMD-2 SESSION](https://img.shields.io/badge/RAHEEM%20-XMD%20SESSION-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://raheem-xmd-2-pair-nzfu.onrender.com)
---

 [![TypingSVG](https://readme-typing-svg.herokuapp.com?font=Rockstar-ExtraBold&size=50&pause=1000&color=FF0000&center=true&vCenter=true&width=900&height=130&lines=『+⚡Bro+don't+forget;fork+my+repo🙏🙏⚡+』)](https://git.io/typing-svg)


 <p align="center">
  <a href="https://github.com/Raheem-cm/RAHEEM-XMD-2">
    <img src="https://img.shields.io/badge/Fork%20This-Repository-gold?style=for-the-badge&logo=github&logoColor=gold" />
  </a>

---

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Anton&size=80&pause=1000&color=FF0000&center=true&vCenter=true&width=1000&height=200&lines=DEPLOY+RAHEEM-XMD-2;HERE+ON+DEFFERENT+PLATFORM" alt="Typing SVG" />
</a>

<p align="center">
  <a href="https://replit.com/Raheem-cm"
    <img src="https://img.shields.io/badge/Deploy%20To%20Replit-FFA500?style=for-the-badge&logo=replit&logoColor=white" />
  </a>
  <a href="https://railway.app/new/template?template=https://github.com/Raheem-cm/RAHEEM-XMD-2">
    <img title="DEPLOY ON RENDER" src="https://img.shields.io/badge/🇹🇿_DEPLOY_ON_RAILWAY-000000?style=for-the-badge&logo=benz&logoColor=gold&color=black" width="260" height="50"/>
  </a>
  <a href="https://render.com/">
    <img title="DEPLOY ON RENDER" src="https://img.shields.io/badge/🇹🇿_DEPLOY_ON_RENDER-000000?style=for-the-badge&logo=ferrari&logoColor=gold&color=black" width="260" height="50"/>
  </a>
</p>

<p align="center">
  <a href="https://dashboard.heroku.com/new?template=https://github.com/Raheem-cm/RAHEEM-XMD-2/tree/main">
   <img 
  target="_blank"> <img title="DEPLOY RAHEEM-CMD BOT" src="https://img.shields.io/badge/🇹🇿_DEPLOY_ON_HEROKU-000000?style=for-the-badge&logo=heroku&logoColor=gold&color=black" width="260" height="50"/>
  </a>
     <a href="https://host.talkdrove.com/share-bot/82">
    <img src="https://img.shields.io/badge/🇹🇿_DEPLOY_ON_TALKDROVE-000000?style=for-the-badge&logo=subaru&logoColor=gold&color=black" width="260" height="50"/>
  </a>
  <a href="https://app.koyeb.com/services/deploy?type=git&repository=Raheem-cm/RAHEEM-XMD-2&ports=3000">
    <img src="https://img.shields.io/badge/🇹🇿_DEPLOY_ON_KEYOB-000000?style=for-the-badge&logo=toyota&logoColor=gold&color=black" width="260" height="50"/>
  </a>
</p>

---

[![TypingSVG](https://readme-typing-svg.herokuapp.com?font=Rockstar-ExtraBold&size=50&pause=1000&color=FF0000&center=true&vCenter=true&width=900&height=130&lines=『+⚡RAHEEM-XMD-2+𝙿𝚘𝚠𝚎𝚛𝚎𝚍+𝚋𝚢+Raheem+cm⚡+』)](https://git.io/typing-svg)

🔌🔌💫

[![TypingSVG](https://readme-typing-svg.herokuapp.com?font=Rockstar-ExtraBold&size=50&pause=1000&color=FF0000&center=true&vCenter=true&width=900&height=130&lines=『+⚡owner+number-+255763111390⚡+』)](https://git.io/typing-svg)


### ⚙️ CONFIGURATION➽ `node.js` File

```

name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
