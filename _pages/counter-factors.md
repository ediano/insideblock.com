---
layout: page
title: Contador de caracteres
description: Digite ou cole um texto para contar caracteres e palavras
---

<article class="grid row" role="main">
    <div class="counter-factors col">
        <textarea id="text" placeholder="Digite o texto aqui!"></textarea>
        <div class="result" id="result">
            <p>Caractere(s) sem espaços: 0</p>
            <p>Caractere(s) com espaços: 0</p>
            <p>Palavra(s): 0</p>
            <p>Linha(s): 0</p>
        </div>
    </div>

    <script>
        function wordCount(val) {
            var wom = val.match(/\S+/g);
            return {
                charactersNoSpaces: val.replace(/\s+/g, '').length,
                characters: val.length,
                words: wom ? wom.length : 0,
                lines: val.split(/\r*\n/).length
            };
        }
        var textarea = document.getElementById("text");
        var result = document.getElementById("result");
        textarea.addEventListener("input", function() {
            var v = wordCount(this.value);
            result.innerHTML = (
                "<p>Caractere(s) sem espaços:  " + v.charactersNoSpaces + "</p>" +
                "<p>Caractere(s) com espaços: " + v.characters + "</p>" +
                "<p>Palavra(s): " + v.words + "</p>" +
                "<p>Linha(s): " + v.lines + "</p>"
            );
        }, false);
    </script>
</article>