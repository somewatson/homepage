import { createApp } from 'vue'

// [['', ''], ['', ''], ['', '']],

const VocabWord = class {
  constructor(jpDef, engDef, pronunciation, jpExample, engExample) {
    this.jpDef = jpDef;
    this.engDef = engDef;
    this.pronunciation = pronunciation;
    this.jpExample = jpExample;
    this.engExample = engExample;
  }
};

// ワトソンはかっこいいひとです。Watson is a really handsome person.
// プッドはあたまがよくて、かわいいですね。 Puddo is smart and cute, huh :)
// 私はかリフォルニアにすんでいます。　I live in California.
// 私はふとっていません。　I am not fat.
const vocabWords = [
  new VocabWord('元気', 'energetic', 'げんき(genki)', 'お元気ですか。', 'How are you?'),
  new VocabWord('かぞく', 'family', 'kazoku','私のかぞくは父と母とおとうとと私です。', 'My family is composed of my father, my mother, my younger brother, and myself.'),
  new VocabWord('会社', 'company', 'かいしゃ(kaisha)', '父は日本の会社ではたらいています。', 'My father is currently working at a Japanese company.'),
  new VocabWord('しょくどう', 'cafeteria', 'shokudou', 'しょくどうにラメンを食べに行きます。', 'I go to the cafeteria to eat ramen.'),
  new VocabWord('かみ', 'hair', 'kami', 'プッドはかみがながいです。', 'Puddo has long hair.'),
  new VocabWord('口', 'mouth', 'くち(kuchi)', 'ワトソンは口が大きいです。', 'Watson has a big mouth.'),
  new VocabWord('め', 'eye', 'me', '私はめが大きいです。', 'I have big eyes.'),
  new VocabWord('めがね', 'glasses', 'megane', 'めがねをかけります。', 'Put on your glasses'),
  new VocabWord('うた', 'song', 'uta', 'うたをうたいます。', 'Sing a song.'),
  new VocabWord('サークル', 'club activity', 'saakuru', '大学でサークルをします。', 'At my university I do clubs.'),
  new VocabWord('くるま', 'car', 'kuruma', '女の人はバズーカのくらまをぬすみました。', "A woman stole Bazooka's car."),
  new VocabWord('きょうだい', 'brothers and sister', 'kyoudai', 'きょうだいは二つです。', 'I have two siblings.'),
  new VocabWord('ながい', 'long (length)', 'nagai', 'かみがながいです。', 'I have long hair.'),
  new VocabWord('みじかい', 'short (length)', 'mijikai', 'かみがみじかいです。', 'I have short hair.'),
  new VocabWord('はやい', 'fast', 'hayai', 'いぬははやいです。', 'The dog is fast.'),
  new VocabWord('せが高い', 'tall (stature)', 'segatakai', '父はせが高いです。', 'My father is tall.'),
  new VocabWord('せがひくい', 'short (stature)', 'segahikui', '母はせがひくいです。', 'My mother is short.'),
  new VocabWord('あたまがいい', 'smart', 'atamagaii', 'プッドはあたまがいいですね。', 'Puddo is really smart, huh.'),
  new VocabWord('かわいい', 'cute', 'kawaii', 'ねこはかわいいです。', 'The cat is cute.'),
  new VocabWord('しんせつ', 'kind', 'shinsetsu', 'おとうとうはしんせつです。', 'My younger brother is kind.'),
  new VocabWord('べんり', 'convenient', 'benri', 'コンビニでおちゃをかうのはべんりです。', 'Buying tea at a convenience store is convenient.'),
  new VocabWord('うたう', 'to sing', 'utau', 'カラオケでうたをうたいました。', 'I sang a song at the karaoke.'),
  new VocabWord('かぶる', 'to put on (a hat)', 'kaburu', 'ぼしをかぶります。', 'I put on a hat.'),
  new VocabWord('はく', 'to put on (below the waist)', 'haku', 'ジンズをはきます。', 'I put on jeans.'),
  new VocabWord('しる', 'to get to know', 'shiru', null),
  new VocabWord('しっています', 'I know', 'shitteimasu', '日本人のともだちは日本語をしっています。', 'My Japanese friend knows Japanese.'),
  new VocabWord('しりません', 'I do not know', 'shirimasen', '日本語をしりません。', 'I do not know Japanese.'),
  new VocabWord('すむ', 'to live', 'sumu', 'あねはアメリカにすんでいます。', 'My older sister lives in America.'),
  new VocabWord('はたらく', 'to work', 'hataraku', 'あには日本の会社ではたらいています。', 'My older brother works at a Japanese company.'),
  new VocabWord('ふとる', 'to gain weight', 'futoru', null),
  new VocabWord('ふとっています', 'to be on the heavy side', 'futtoteimasu', '私は日本にラメんを食べに帰りて、ふとっていました。', 'I came back from Japan after eating ramen and gained weight.'),
  new  VocabWord('かける', 'to put on (glasses)', 'kakeru', '男の人はめがねをかけています', 'A man is wearing glasses.'),
  new VocabWord('きる', 'to put on (above the waist)', 'kiru', '女の人はTシャツをきていました。', 'A woman is wearing a T-shirt.'),
  new VocabWord('やせる', 'to lose weight', 'yaseru', '母はよくこえんに行って、やせました', 'My mother often went to the park and lost weight.'),
  new VocabWord('やせています', 'to be thin', 'yaseteimasu', '母はやせていました。', 'My mother was thin.'),
  new VocabWord('なにも + negative', 'not... anything', 'nanimo', '何もできない', "I can't do anything"),
  new VocabWord('〜にん', '[counter for people]', '~nin', 'さんいん', '3 people.'),
  new VocabWord('ひとり', 'one person', 'hitori', null, null),
  new VocabWord('ふたり', 'two people', 'futari', null, null),
  new VocabWord('べつに + negative', 'nothing in particular', 'betsuni', null, null),
  new VocabWord('もちろん', 'of course', 'mochiron', null, null),
  new VocabWord('よかったら', 'if you like', 'yokattara', null, null),
]

const vocabWordsOld = [
    [['元気', 'Energetic'], ['かぞく', 'Family'], ['会社', 'Company']],
    [['しょくどう', 'Cafeteria'], ['かみ', 'Hair'], ['口', 'Mouth']],
    [['め', 'Eye'], ['めがね', 'Glasses'], ['うた', 'Song']],
    [['サークル', 'Club Activity'], ['くるま', 'Car'], ['きょうだい', 'Brothers and Sisters']],
    [['ながい', 'Long'], ['みじかい', 'Short'], ['はやい', 'Fast']],
    [['せが高い', 'Tall (stature)'], ['せがひくい', 'Short (stature)'], ['あたまがいい', 'Smart']],
    [['かわいい', 'Cute']],
    [['しんせつ', 'Kind'], ['べんり', 'Convenient']],
    [['うたう', 'To Sing'], ['かぶる', 'To Put On (a hat)'], ['はく', 'To put on (items below your waist)']],
    [['しる', 'To get to know'], ['しっています', 'I know'], ['しりません', 'I do not know']],
    [['すむ', 'To live'], ['はたらく', 'To work'], ['ふとる', 'To gain weight']],
    [['ふとっています', 'To be on the heavy side']],
    [['かける', 'To put on glasses'], ['きる', 'To put on (above the waist)'], ['やせる', 'To lose weight']],
    [['やせています', 'To be thin']],
    [['けっこんする', 'To get married']],
    [['なにも + negative', 'not... anything'], ['〜にん', '[counter for people]'], ['ひとり', 'One Person']],
    [['ふたり', 'Two People'], ['べつに + negative', 'Nothing in Particular'], ['もちろん', 'Of Course']],
    [['よかったら', 'If You Like']],
]

const app = createApp({
  data() {
    return {
      vocabWords: vocabWords
    }
  }
})

app.mount('#app')