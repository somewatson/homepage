import { createApp } from 'vue'

// [['', ''], ['', ''], ['', '']],

const vocabWords = [
    [['元気', 'Energetic'], ['かぞく', 'Family'], ['会誌', 'Company']],
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