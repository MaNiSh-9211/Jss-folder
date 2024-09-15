document.addEventListener('DOMContentLoaded', (event) => {
    const paragraph = document.querySelector('p');
    let text = paragraph.innerHTML;

    // Task 01: Highlight all of the words over 8 characters long
    text = text.split(' ').map(word => {
        return word.length > 8 ? `<span style="background-color: yellow;">${word}</span>` : word;
    }).join(' ');
    paragraph.innerHTML = text;

    // Task 02: Add a link back to the source of the text after the paragraph tag
    const link = document.createElement('a');
    link.href = 'https://forcemipsum.com/';
    link.textContent = 'Source of the text';
    link.style.display = 'block'; // Make the link appear on a new line
    paragraph.insertAdjacentElement('afterend', link);

    // Task 03: Split each new sentence onto a separate line in the paragraph text
    text = paragraph.innerHTML.split('.').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0).join('.<br>');
    paragraph.innerHTML = text + '.';

    // Task 04: Count the number of words in the paragraph tag and display the count after the heading
    const wordCount = paragraph.textContent.split(' ').filter(word => word.length > 0).length;
    const heading = document.querySelector('h1');
    const wordCountElement = document.createElement('div');
    wordCountElement.textContent = `Word count: ${wordCount}`;
    heading.insertAdjacentElement('afterend', wordCountElement);

    // Task 05: Replace all question marks and exclamation marks with emojis
    text = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/!/g, '😲');
    paragraph.innerHTML = text;
});
