
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    // debugger
    const pEl = document.createElement("p");
    const textNode = document.createTextNode(string);
    pEl.appendChild(textNode);
    htmlElement.append(pEl);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation.', partyHeader);

// module.exports = Warmup;