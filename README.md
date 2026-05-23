# findee 🌍🔗

[![Astro](https://img.shields.io/badge/Astro-v4.16-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE.md)

A lightweight, premium, self-hosted **Linktree alternative** built with **Astro**. Optimized for speed, visuals, and dynamic configuration.

## Key Features
- ⚙️ **JSON-Driven Profile:** Update your bio, social connections, and URLs in one place (`src/data/profile.json`). No coding needed.
- 🔍 **Dynamic Discover Page:** Real-time client-side search and category filtering page at `/discover` powered by instant vanilla JS.
- 📦 **Astro Icons Entegration:** Uses native server-side brand SVGs dynamically via `astro-icon`.

---

## Get Started

### 1. Clone & Install
```bash
git clone https://github.com/alfredsaveron/findee.git
cd findee
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Preview
```bash
npm run build
npm run preview
```

---

## Configuration

To customize your profile homepage, simply edit [src/data/profile.json](src/data/profile.json):

```json
{
  "displayName": "yourname",
  "avatarUrl": "https://avatars.githubusercontent.com/... (or local path)",
  "bio": "Developer, designer, etc...",
  "seoTitle": "Your Name",
  "seoDescription": "Description...",
  "links": [
    {
      "title": "GitHub",
      "subtitle": "Code & repositories",
      "url": "https://github.com/...",
      "icon": "github",
      "color": "0,0%,100%"
    }
  ]
}
```

---

## Services

You can search, filter, and discover all these on `/discover`!

### Social Media
![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat-square&logo=twitter&logoColor=white)
![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white)
![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=flat-square&logo=reddit&logoColor=white)
![TikTok](https://img.shields.io/badge/TikTok-000000?style=flat-square&logo=tiktok&logoColor=white)
![Pinterest](https://img.shields.io/badge/Pinterest-BD081C?style=flat-square&logo=pinterest&logoColor=white)
![DeviantArt](https://img.shields.io/badge/DeviantArt-05CC47?style=flat-square&logo=deviantart&logoColor=white)

### Development & Work
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![GitLab](https://img.shields.io/badge/GitLab-FC6D26?style=flat-square&logo=gitlab&logoColor=white)
![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)
![Behance](https://img.shields.io/badge/Behance-1769FF?style=flat-square&logo=behance&logoColor=white)
![Dribbble](https://img.shields.io/badge/Dribbble-EA4C89?style=flat-square&logo=dribbble&logoColor=white)
![CodePen](https://img.shields.io/badge/CodePen-000000?style=flat-square&logo=codepen&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white)
![Crowdin](https://img.shields.io/badge/Crowdin-002E4E?style=flat-square&logo=crowdin&logoColor=white)
![Medium](https://img.shields.io/badge/Medium-12100E?style=flat-square&logo=medium&logoColor=white)
![Portfolio](https://img.shields.io/badge/Portfolio-315.12,49.8%25,50%25-green?style=flat-square)

### Gaming
![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white)
![Steam](https://img.shields.io/badge/Steam-000000?style=flat-square&logo=steam&logoColor=white)
![Xbox](https://img.shields.io/badge/Xbox-107C10?style=flat-square&logo=xbox&logoColor=white)
![PlayStation](https://img.shields.io/badge/PlayStation-003791?style=flat-square&logo=playstation&logoColor=white)
![Nintendo](https://img.shields.io/badge/Nintendo-E60012?style=flat-square&logo=nintendo&logoColor=white)
![Epic Games](https://img.shields.io/badge/Epic_Games-000000?style=flat-square&logo=epicgames&logoColor=white)
![Habbo](https://img.shields.io/badge/Habbo-FDB913?style=flat-square)

### Music
![Spotify](https://img.shields.io/badge/Spotify-1DB954?style=flat-square&logo=spotify&logoColor=white)
![Apple Music](https://img.shields.io/badge/Apple_Music-FC3C44?style=flat-square&logo=applemusic&logoColor=white)
![YouTube Music](https://img.shields.io/badge/YouTube_Music-FF0000?style=flat-square&logo=youtubemusic&logoColor=white)
![SoundCloud](https://img.shields.io/badge/SoundCloud-FF5500?style=flat-square&logo=soundcloud&logoColor=white)
![Tidal](https://img.shields.io/badge/Tidal-000000?style=flat-square&logo=tidal&logoColor=white)
![Last.fm](https://img.shields.io/badge/Last.fm-D51007?style=flat-square&logo=lastfm&logoColor=white)

### TV & Streaming
![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=flat-square&logo=youtube&logoColor=white)
![Twitch](https://img.shields.io/badge/Twitch-9146FF?style=flat-square&logo=twitch&logoColor=white)
![Kick](https://img.shields.io/badge/Kick-53FC18?style=flat-square&logo=kick&logoColor=black)
![AniList](https://img.shields.io/badge/AniList-02A9FF?style=flat-square&logo=anilist&logoColor=white)

### Mail
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=flat-square&logo=gmail&logoColor=white)
![Yandex Mail](https://img.shields.io/badge/Yandex_Mail-FFCC00?style=flat-square&logo=yandex&logoColor=black)
![Proton Mail](https://img.shields.io/badge/Proton_Mail-6D4AFF?style=flat-square&logo=protonmail&logoColor=white)

### Finance
![PayPal](https://img.shields.io/badge/PayPal-003087?style=flat-square&logo=paypal&logoColor=white)
![Patreon](https://img.shields.io/badge/Patreon-F96854?style=flat-square&logo=patreon&logoColor=white)
![Buy Me a Coffee](https://img.shields.io/badge/Buy_Me_a_Coffee-FF813F?style=flat-square&logo=buymeacoffee&logoColor=white)
![WillHaben](https://img.shields.io/badge/WillHaben-0050F0?style=flat-square)
![Amazon](https://img.shields.io/badge/Amazon-FF9900?style=flat-square&logo=amazon&logoColor=white)

---

## License

This project is open-source under the [MIT License](LICENSE.md). Feel free to fork, self-host, and customize!
