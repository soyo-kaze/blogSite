# Contributing Guidelines

This repo is only to give you an experience of how to contribute and how meaning full contribution are done. This is only a dummy repo not a serious openSource project but yeah it does count in `HacktoberFest 2021`.

### Where to countribute.

---

Y'all will be adding data to [./backend/data.json](./backend/data.json) file. The following is the template JSON structure.

```JSON
"same as id": {
      "imgUrl": "Any image url you want as thumbnail img.",
      "title": "title",
      "author": "Name",
      "id": "your username",
      "time": "",
      "smallDes": "Small description",
      "thePara": "Your Paragraph "
    }
```

paste the above JSON object at the end of the data object inside the [./backend/data.json](./backend/data.json) after a ',(comma)'.

```JSON
{
    "data":{
        "The_Geralt": {
            "imgUrl": "https://cdn.discordapp.com/attachments/881530050120413194/883411597303881768/The_Witcher_3_Screenshot_2021.09.03_-_20.11.15.63.png",
            "title": "The tale of the White Wolf",
            "author": "Geralt of Rivia",
            "id": "The_Geralt",
            "time": "",
            "smallDes": "The Witcher is a mutant in the mediveal time who also uses some demon arts tricks.",
            "thePara": "The Witcher is a series of six fantasy novels and 15 short stories written by Polish author Andrzej Sapkowski. The series revolves around the eponymous witcher, Geralt of Rivia. In Sapkowski's works, witchers are beast hunters who develop supernatural abilities at a young age to battle wild beasts and monsters."
        },
    "Sukuna": {
            "imgUrl": "https://cdn.discordapp.com/attachments/881530050120413194/881539136748683264/wallhaven-y8mmrk_3840x2160.png",
            "title": "King of curses",
            "author": "Roymen Sukuna",
            "id": "Sukuna",
            "time": "",
            "smallDes": "According to a legend, during the golden age of jujutsu over 1,000 years ago, Sukuna was an Imaginary Demon",
            "thePara": "Ryomen Sukuna (両りょう面めん宿すく儺な Ryomen Sukuna?), more often called just Sukuna (宿すく儺な Sukuna?), is a mighty cursed spirit known as the undisputed King of Curses (呪のろいの王おう Noroi no Ō?). He serves as one of the primary antagonists of the Jujutsu Kaisen series."
        },
    //here comes your JSON object
    "same as id": {
            "imgUrl": "Any image url you want as thumbnail img.",
            "title": "title",
            "author": "Name",
            "id": "your username",
            "time": "",
            "smallDes": "Small description",
            "thePara": "Your Paragraph "
        }
    }
}
```

> Note: JSON doesn't contain any kind of comment.
