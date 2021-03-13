const readMore = () => {
    let $readMore = [...document.querySelectorAll('.read-more-btn')];

    $readMore.forEach($btn => {
        let $article = $btn.previousSibling;

        $btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            $article.classList.add('open');
            $btn.parentNode.removeChild($btn);
        });
    });
}

const init = () => {
    readMore();
}

init();