$(document).ready(function() {

    // Beschreibungen toggeln
    $('.tile').on('click', function() {
        var descID = $(this).attr('id');

        $('.tile').removeClass('active');
        $(this).addClass('active');
        $('.desc').removeClass('open');
        $('.desc[data-desc="'+descID+'"]').toggleClass('open');
    });

    // Vorheriges Element
    $('.desc-prev').on('click', function() {

        var currEle = $(this).closest('.desc').attr('data-desc');

        // Vorheriges Element ermitteln
        var prevTile = '';
        if(currEle == 'tile-1') prevTile = 'tile-3';
        else prevTile = $(this).closest('.desc').prev('.desc').attr('data-desc');

        // Aktuelles Element ausblenden, neues einblenden
        $(this).closest('.desc').removeClass('open');
        $('.desc[data-desc="'+prevTile+'"]').addClass('open');

        // Aktuelle Kachel normal, neue aktiv
        $('.tile[id="'+currEle+'"]').removeClass('active');
        $('.tile[id="'+prevTile+'"]').addClass('active');

    });

    // Naechstes Element
    $('.desc-next').on('click', function() {

        var currEle = $(this).closest('.desc').attr('data-desc');

        // Naechstes Element ermitteln
        var nextTile = '';
        if(currEle == 'tile-3') nextTile = 'tile-1';
        else nextTile = $(this).closest('.desc').next('.desc').attr('data-desc');

        // Aktuelles Element ausblenden, neues einblenden
        $(this).closest('.desc').removeClass('open');
        $('.desc[data-desc="'+nextTile+'"]').addClass('open');

        // Aktuelle Kachel normal, neue aktiv
        $('.tile[id="'+currEle+'"]').removeClass('active');
        $('.tile[id="'+nextTile+'"]').addClass('active');

    });

});