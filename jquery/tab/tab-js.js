$(() => {
    const tabWrapper = $('.tab-wrapper');
    tabWrapper.each(function () {
        let currentEl = $(this);
        const targetLink = currentEl.find('.tab-menu a');
        const tabContent = currentEl.find('.tab-content>div')
        targetLink.on('click', function (e) {
            e.preventDefault();
            let tg = $(this);
            let currentLink = tg.attr("href");
            tabContent.hide();
            $(currentLink).slideDown();
            targetLink.removeClass('active');
            tg.addClass('active');
        });
    });
});