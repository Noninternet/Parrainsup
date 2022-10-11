function buttonFunction(page) {
    const buttons_ids = ["icon-profile", "icon-home", "icon-match"];
    for (let i=0; i<3; i++) {
        button = document.getElementById(buttons_ids[i]);
        if (buttons_ids[i] == 'icon-' + page) {
            button.style.scale = '200%';
        }
        else {
            button.style.scale = '150%';
        };
    };
};