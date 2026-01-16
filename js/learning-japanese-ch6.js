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

const VocabCategory = {
  NOUNS: "Nouns",
  いADJ: "い-adjectives",
  なADJ: "な-adjectives",
  UVERBS: "U-verbs",
  RUVERBS: "Ru-verbs",
  IRRVERBS: "Irregular Verbs",
  ADVERBS: "Adverbs and Other Expressions",
  NUMBERS: "Numbers",
};

const VocabWord = class {
  constructor(category, jpDef, jpPronunciation, engDef, engPronunciation, jpExample, engExample) {
    this.category = category;
    this.jpDef = jpDef;
    this.engDef = engDef;
    this.jpPronunciation = jpPronunciation;
    this.engPronunciation = engPronunciation;
    this.jpExample = jpExample;
    this.engExample = engExample;
  }
};

const vocabWords = [
  new VocabWord(VocabCategory.NOUNS, '漢字', 'かんじ', 'kanji; Chinese character', 'kanji', '', ''),
  new VocabWord(VocabCategory.NOUNS, '教科書', 'きょうかしょ', 'textbook', 'kyoukasho', '', ''),
  new VocabWord(VocabCategory.NOUNS, 'ページ', 'ページ',  'page', 'pe-ji', '', ''),
  new VocabWord(VocabCategory.NOUNS, '次', 'つぎ', 'next', 'tsugi', '', ''),
  new VocabWord(VocabCategory.NOUNS, 'お金', 'おかね', 'money','okane','',''),
  new VocabWord(VocabCategory.NOUNS, '荷物', 'にもつ', 'baggage', 'nimotsu', '', ''),
  new VocabWord(VocabCategory.NOUNS, 'パソコン', 'パソコン', 'personal computer', 'pasokon', '', ''),
  new VocabWord(VocabCategory.NOUNS, 'シャワー', 'シャワー', 'shower', 'shawa-', '', ''),
  new VocabWord(VocabCategory.NOUNS, 'エアコン', 'エアコン', 'air conditioner', 'eakon', '', ''),
  new VocabWord(VocabCategory.NOUNS, '電気', 'でんき', 'electricity; light', 'denki', '', ''),
  new VocabWord(VocabCategory.NOUNS, '窓', 'まど', 'window', 'mado', '', ''),
  new VocabWord(VocabCategory.NOUNS, '電車', 'でんしゃ', 'train', 'densha', '', ''),
  new VocabWord(VocabCategory.NOUNS, '国', 'くに', 'country; place of origin', 'kuni', '', ''),
  new VocabWord(VocabCategory.NOUNS, '今週', 'こんしゅう', 'this week', 'konshuu', '', ''),
  new VocabWord(VocabCategory.NOUNS, '来週', 'らいしゅう', 'next week', 'raishuu', '', ''),
  new VocabWord(VocabCategory.NOUNS, '来年', 'らいねん', 'next year', 'rainen', '', ''),
  new VocabWord(VocabCategory.NOUNS, '夜', 'よる', 'night', 'yoru', '', ''),
  new VocabWord(VocabCategory.なADJ, '大変', 'たいへん（な）', 'tough (situation)', 'taihen (na)', '', ''),
  new VocabWord(VocabCategory.UVERBS, '遊ぶ', 'あそぶ', 'to play; to spend time pleasantly', 'asobu', '', ''),
  new VocabWord(VocabCategory.UVERBS, '急ぐ', 'いそぐ', 'to hurry', 'isogu', '', ''),
  new VocabWord(VocabCategory.UVERBS, '返す', 'かえす', 'to return (a thing) (person に thing を)', 'kaesu', '', ''),
  new VocabWord(VocabCategory.UVERBS, '消す', 'けす', 'to turn off; to erase (~を)', 'kesu', '', ''),
  new VocabWord(VocabCategory.UVERBS, '死ぬ', 'しぬ', 'to die', 'shinu', '', ''),
  new VocabWord(VocabCategory.UVERBS, '座る', 'すわる', 'to sit down (seat に)', 'suwaru', '', ''),
  new VocabWord(VocabCategory.UVERBS, '立つ', 'たつ', 'to stand up', 'tatsu', '', ''),
  new VocabWord(VocabCategory.UVERBS, 'たばこを吸う', 'たばこをすう', 'to smoke', 'tabako wo suu', '', ''),
  new VocabWord(VocabCategory.UVERBS, '使う', 'つかう', 'to use (~を)', 'tsukau', '', ''),
  new VocabWord(VocabCategory.UVERBS, '手伝う', 'てつだう', 'to help (person/task を)', 'tetsudau', '', ''),
  new VocabWord(VocabCategory.UVERBS, '入る', 'はいる', 'to enter (~に)', 'hairu', '', ''),
  new VocabWord(VocabCategory.UVERBS, '持つ', 'もつ', 'to carry; to hold (~を)', 'motsu', '', ''),
  new VocabWord(VocabCategory.UVERBS, '休む', 'やすむ', '(1) to be absent (from...) (~を) (2) to rest', 'yasumu', '', ''),
  new VocabWord(VocabCategory.RUVERBS, '開ける', 'あける', 'to open (something) (~を)', 'akeru', '', ''),
  new VocabWord(VocabCategory.RUVERBS, '閉める', 'しめる', 'to close (something) (~を)', 'shimeru', '', ''),
  new VocabWord(VocabCategory.RUVERBS, '教える', 'おしえる', 'to teach; to instruct (person に thing を)', 'oshieru', '', ''),
  new VocabWord(VocabCategory.RUVERBS, '忘れる', 'わすれる', 'to forget; to leave behind (~を)', 'wasureru', '', ''),
  new VocabWord(VocabCategory.RUVERBS, '降りる', 'おりる', 'to get off (~を)', 'oriru', '', ''),
  new VocabWord(VocabCategory.RUVERBS, '借りる', 'かりる', 'to borrow (person に thing を)', 'kariru', '', ''),
  new VocabWord(VocabCategory.RUVERBS, 'シャワーを浴びる', 'シャワーをあびる', 'to take a shower', 'shawa- wo abiru', '', ''),
  new VocabWord(VocabCategory.RUVERBS, 'つける', 'つける', 'to turn on (~を)', 'tsukeru', '', ''),
  new VocabWord(VocabCategory.IRRVERBS, '電話する', 'でんわする', 'to call (~に)', 'denwa suru', '', ''),
  new VocabWord(VocabCategory.IRRVERBS, '連れてくる', 'つれてくる', 'to bring (a person) (~を)', 'tsurete kuru', '', ''),
  new VocabWord(VocabCategory.IRRVERBS, '持ってくる', 'もってくる', 'to bring (a thing) (~を)', 'motte kuru', '', ''),
  new VocabWord(VocabCategory.ADVERBS, '後で', 'あとで', 'later on', 'atode', '', ''),
  new VocabWord(VocabCategory.ADVERBS, 'すぐ', 'すぐ', 'right away', 'sugu', '', ''),
  new VocabWord(VocabCategory.ADVERBS, 'ゆっくり', 'ゆっくり', 'slowly; leisurely; unhurriedly', 'yukkuri', '', ''),
  new VocabWord(VocabCategory.ADVERBS, '結構です', 'けっこうです', 'That would be fine.; That would not be necessary.', 'kekkou desu', '', ''),
  new VocabWord(VocabCategory.ADVERBS, '本当ですか', 'ほんとうですか', 'Really?', 'hontou desuka', '', ''),
]

const app = createApp({
  data() {
    return {
      vocabCategory: VocabCategory,
      vocabWords: vocabWords
    }
  }
})

app.mount('#app')