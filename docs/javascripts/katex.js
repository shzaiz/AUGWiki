document$.subscribe(({ body }) => { 
    renderMathInElement(body, {
      delimiters: [
        { left: "$$",  right: "$$",  display: true },
        { left: "$",   right: "$",   display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
    })
  })
  
  
document.addEventListener("DOMContentLoaded", function() {
    // Select all div elements with class 'prf'
    var proofs = document.querySelectorAll('.sol, .div');
    proofs.forEach(function(proof) {
        // Create <details> and <summary> elements
        var details = document.createElement('details');
        var summary = document.createElement('summary');

        // Set the summary text and style
        summary.textContent = '证明';
        summary.style.cursor = 'pointer';

        // Move the contents of the div to inside the <details>
        while (proof.firstChild) {
            details.appendChild(proof.firstChild);
        }

        // Insert the summary at the top of the details
        details.insertBefore(summary, details.firstChild);

        // Replace the original div with the new details
        proof.parentNode.replaceChild(details, proof);
    });
});
