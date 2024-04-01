let elements = document.getElementsByClassName("header-copy");
for (let element of elements) {
    let parentId = element.parentElement.id;
    element.onclick = function() {
        navigator.clipboard.writeText(location.protocol + '//' + location.host + location.pathname + "#" + parentId);
        history.pushState({}, document.title, "#" + parentId);
    }
}
