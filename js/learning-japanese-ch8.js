import { createApp } from 'vue'

window.addEventListener('scroll', function () {
  const div = document.getElementById('up-floating-link');
  if (window.scrollY == 0) {
    div.classList.add('opacity-0', 'pointer-events-none');
    div.classList.remove('opacity-100', 'pointer-events-auto');
  } else if (window.scrollY > 500) { // Adjust the scroll threshold as needed
    div.classList.remove('opacity-0', 'pointer-events-none');
    div.classList.add('opacity-100', 'pointer-events-auto');
  }
});

const VocabWord = class {
  constructor(jpDef, engDef, pronunciation, jpExample, engExample) {
    this.jpDef = jpDef;
    this.engDef = engDef;
    this.pronunciation = pronunciation;
    this.jpExample = jpExample;
    this.engExample = engExample;
  }
};

const vocabWords = [
  new VocabWord('はれ', 'sunny weather', 'hare', '', ''),
  new VocabWord('あめ', 'rain', 'ame', '', ''),
  new VocabWord('くもり', 'cloudy weather', 'kumori', '', ''),
  new VocabWord('ゆき', 'snow', 'yuki', '', ''),
  new VocabWord('天気よほう', 'weather forecast', 'てんきよほう(tenkiyohou)', '', ''),
  new VocabWord('気おん', 'temperature (weather, not things)', 'きおん(kion)', '', ''),
  new VocabWord('なつ', 'summer', 'natsu', '', ''),
  new VocabWord('ふゆ', 'winter', 'fuyu', '', ''),
  new VocabWord('けさ', 'this morning', 'kesa', '', ''),
  new VocabWord('あさって', 'the day after tomorrow', 'asatte', '', ''),
  new VocabWord('毎しゅう', 'every week', 'まいしゅう(maishuu)', '', ''),
  new VocabWord('こん月', 'this month', 'こんげつ(kongetsu)', '', ''),
  new VocabWord('会社いん', 'office worker', 'かいしゃいん(kaishain)', '', ''),
  new VocabWord('しごと', 'job; work; occupation', 'shigoto', '', ''),
  new VocabWord('カメラ', 'camera', 'kamera', '', ''),
  new VocabWord('カラオケ', 'karaoke', 'からおけ(karaoke)', '', ''),
  new VocabWord('ところ', 'place', 'tokoro', '', ''),
  new VocabWord('トマト', 'tomato', 'とまと(tomato)', '', ''),
  new VocabWord('はし', 'chopsticks', 'hashi', '', ''),
  new VocabWord('パーティー', 'party', 'pa-ti-', '', ''),
  new VocabWord('バーべキュー', 'barbecue', 'ba-bekyu-', '', ''),
  new VocabWord('ホームステイ', 'homestay; living with a local family', 'ho-musutei', '', ''),
  new VocabWord('おふろ', 'bath', 'ofuro', 'おふろをはいる', 'To take a bath'),
  new VocabWord('スペイン', 'Spain', 'supein', '', ''),
  new VocabWord('なにか', 'something', 'nanika', '', ''),
  // な-adj
  new VocabWord('じょうず(な)', 'skillful; good at...(~が)', 'jouzu(na)', '', ''),
  new VocabWord('へた(な)', 'clumsy; poor at...(~が)', 'heta(na)', '', ''),
]

const app = createApp({
  data() {
    return {
      vocabWords: vocabWords
    }
  }
})

app.mount('#app')