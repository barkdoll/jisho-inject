# 辞書-Inject / Jisho-Inject
Jisho-Inject (pronounced 'g-show', or 'jee-show') is made to help automate the process of adding dictionary definitions into your [Anki](https://apps.ankiweb.net/) cards. It parses the proper HTML for my specified template and aligns things using the included CSS.

I will soon add an Anki deck with a sample card that will have the CSS in it for using Jisho-Inject. Formats dictionary definitions into a specific HTML template for use with Anki (the SRS application by Damien Elmes).

The site has an English version and a Japanese version. Since I study Japanese, the app is targeted for Japanese learners, but it can be used to make cards for any language or subject.

## Usage
To get started, go to the [Jisho-Inject project page](http://jessebarkdoll.com/projects/jisho-inject/index.htm) on my website. You can alternatively download the master branch here on GitHub and open english.htm for the English version, or index.htm for the Japanese Version.
1. Add the target word to the first field. Add the reading/pronunciation of it to the second (this may be more Japanese specific, but I'm sure there are situations in other languages where this would apply). Add the part of speech to the third field. Add the definition to the fourth.

2. If the word has more than one definition, click **定義追加 / Add Definition**. Copy and paste in number of definitions.
_Note: If you accidentally add too many you can reset them to one, but you will lose any content in the extra boxes._

3. When you have input all information into the fields, click **追加 / Add Entry**. This adds the term and it's definition info into the output box.

4. After you have all the definitions into the output box for the Anki card, click **コピーする / Copy to Clipboard**.

5. Go into Anki, go to the field where you put your word definitions (in my template it is called "Definitions"), and press **Ctrl + Shift + X** to open the HTML editor. Now press **Ctrl + V** paste the content you copied from the app.

## Shortcuts
**Ctrl + /** — add extra definition field

**Alt + /** — reset number of definition fields to one

**Ctrl + Enter** — add definition to final output area

**Ctrl + Space** — copy and clear (so basically cut) output area for pasting into Anki

## Is it cross-browser compatible?
The app was built primarily for use with Google Chrome. Since I meant it somewhat just for personal use, I didn't consider going cross-browser. I am not sure how many people will end up finding it useful, but I may add cross-browser support in the future. It also seems to work fine in Firefox. The only issue is that Firefox adds a space to the output box when using the Copy button keyboard shortcut, and Chrome does not (I prefer it not to add the space, so Chrome gives me the desired functionality).

## How did you build it?
This was my first ever application. I wrote it using purely HTML, CSS, and JavaScript. No frameworks. No libraries. Not even jQuery. I wanted to solidify the few concepts I had learned in JavaScript by adding functionality to something. This application was perfect for that.

The animations were made with CSS keyframes, and they are triggered using JavaScript to add an animation class to the clicked button.

## Credits
Other credit goes to Zeno Rocha, who created [clipboard.js](https://clipboardjs.com "clipboard.js homepage"), which was used to add clipboard functionality to Jisho-Inject, and also to the wonderful people over at [Font Awesome](http://fontawesome.io/ "Font Awesome") for creating a wonderful library of free icons.
