document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.sol, .prf');

    elements.forEach(function (element) {
        var details = document.createElement('details');
        var summary = document.createElement('summary');
        
        summary.textContent = '证明/解答';

        details.appendChild(summary);

        while (element.childNodes.length > 0) {
            details.appendChild(element.childNodes[0]);
        }

        element.parentNode.insertBefore(details, element);

        element.parentNode.replaceChild(details, element);
    });
});

window.onload = function() {
    var divs = document.querySelectorAll('div'); // Select all divs

    divs.forEach(function(div) {
        div.classList.add('markdown'); // Add 'markdown' class to each div
    });
};