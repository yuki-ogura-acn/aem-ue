export default function decorate(block) {
    const code = block.querySelector('pre code');
    if (!code) return;
    const tmp = document.createElement('div');
    tmp.innerHTML = code.textContent;
    code.closest('pre').replaceWith(...tmp.childNodes);
}