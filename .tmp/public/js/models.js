$(document).ready(function() {
    // hide all content areas until clicking button
    $('#info-and-images').hide();
    $('#info-content').hide();
    $('#photo-content').hide();
    $('#video-content').hide();
    $('#tour-content').hide();
    $('#floor-content').hide();
    $('#specs-content').hide();

    //show display area after clicking on any model
    $('#models').click(function() {
        $('#info-and-images').fadeIn(900);
    });

    //load model content on click
    $('#40FLY').click(function() {
        $('#intro-gallery:visible').animate({
            opacity: "toggle",
        },500);
        document.getElementById('info-content').innerHTML = "<div>Its 40 foot length and 13.45 foot beam gives the 40 Fly a feeling of freshness and delight, with volumes that make this vessel aligned with the requirements of the North American market. The idea behind this boat is two-fold: first, to deliver superior space and volume for increased comfort and safety and, second, to engineer a yacht with the flexibility to fit the needs of multiple lifestyles.</div>";
        document.getElementById('photo-content').innerHTML = "<div class='mason'>\n"+
                                                                    "<div id='1' class='grid-item'><img src='https://placehold.it/300x300'></div>\n"+
                                                                    "<div id='2' class='grid-item'><img src='https://placehold.it/300x300'></div>\n"+
                                                                    "<div id='3' class='grid-item'><img src='https://placehold.it/300x300'></div>\n"+
                                                                    "<div id='4' class='grid-item'><img src='https://placehold.it/300x300'></div>\n"+
                                                                    "<div id='5' class='grid-item'><img src='https://placehold.it/300x300'></div>\n"
                                                                    "</div></div>";
        document.getElementById('video-content').innerHTML = "<div style='max-width: 100%;'><iframe width='560' height='315' src='https://www.youtube.com/embed/9isbCIFs2yA' frameborder='0' allowfullscreen></iframe></div>";
        //document.getElementById('tour-content').innerHTML = "<div>meep</div>";
        document.getElementById('floor-content').innerHTML = "<div class='col-center col-lg-2 col-md-2 col-sm-4 col-xs-6' style='width: 70%;'>\n"+
                                                                  "<div class='item hoverwrap'>\n"+
                                                                      "<figure class='figure-overlay figure-overlay-icon opacity'>\n"+
                                                                          "<div class='text-hover' style='cursor: default'>Lower Deck</div>\n"+
                                                                          "<img src='https://drive.google.com/uc?export=download&id=0BwLi-BScuoD7ZkhndVJYZUhGM3M' class='img-fill'>\n"+
                                                                          "<div><p class='absolute-hover'></p></div>\n"+
                                                                      "</figure>\n"+
                                                                  "</div>\n"+
                                                              "</div>\n"+
                                                              "<div class='col-center col-lg-2 col-md-2 col-sm-4 col-xs-6' style='width: 70%;'>\n"+
                                                                    "<div class='item hoverwrap'>\n"+
                                                                        "<figure class='figure-overlay figure-overlay-icon opacity'>\n"+
                                                                            "<div class='text-hover' style='cursor: default'>Main Deck</div>\n"+
                                                                            "<img src='https://drive.google.com/uc?export=download&id=0BwLi-BScuoD7MVI5b3I4RmZkVDQ' class='img-fill'>\n"+
                                                                            "<div><p class='absolute-hover'></p></div>\n"+
                                                                        "</figure>\n"+
                                                                    "</div>\n"+
                                                                "</div>\n"+
                                                                "<div class='col-center col-lg-2 col-md-2 col-sm-4 col-xs-6' style='width: 70%;'>\n"+
                                                                    "<div class='item hoverwrap'>\n"+
                                                                        "<figure class='figure-overlay figure-overlay-icon opacity'>\n"+
                                                                            "<div class='text-hover' style='cursor: default'>Upper Deck</div>\n"+
                                                                            "<img src='https://drive.google.com/uc?export=download&id=0BwLi-BScuoD7QXNPQzZWMFVtSDA' class='img-fill'>\n"+
                                                                            "<div><p class='absolute-hover'></p></div>\n"+
                                                                        "</figure>\n"+
                                                                    "</div>\n"+
                                                                "</div>";
        //document.getElementById('floor-content').innerHTML = "<div class='mason'>\n"+
                                                                    // "<div class='grid-item'><img style='width:300px;' src='https://drive.google.com/uc?export=download&id=0BwLi-BScuoD7ZkhndVJYZUhGM3M'/></div>\n"+
                                                                     //"<div id='2' class='grid-item'><img style='width:300px;' src='https://drive.google.com/uc?export=download&id=0BwLi-BScuoD7MVI5b3I4RmZkVDQ'/></div>\n"+
                                                                     //"<div id='3' class='grid-item'><img style='width:300px;'src='https://drive.google.com/uc?export=download&id=0BwLi-BScuoD7QXNPQzZWMFVtSDA'></div>\n"+
                                                                     //"</div>";



        document.getElementById('specs-content').innerHTML = "<div>\n"+
                                                                "<h4>Total length (m)12,05</h4>\n"+
                                                                "<h4>Total length (ft)39 06</h4>\n"+
                                                                "<h4>Type-approval length (m)9,97<h4>\n"+                                                               
                                                            "</div>";
    });


/*<div>
Engine 2×D6-330 DPH (2x221 kW - 2x330 HP) Diesel
Cruising speed (Knots) 27 aprox
Fuel consumption at cruising speed (l/miles) 3,59 aprox
Fuel consumption at cruising speed (gal/miles) 0,95 aprox
Fuel consumption at cruising speed (l/h) 97 aprox
Fuel consumption at cruising speed (gal/h) 25,62 aprox
</div>

<div>
Engine 2×D4-IPS400 (2x221 kW - 2x300 HP) Diesel
Cruising speed (Knots) 24 aprox
Fuel consumption at cruising speed (l/miles) 3,75 aprox
Fuel consumption at cruising speed (gal/miles) 0,99 aprox
Fuel consumption at cruising speed (l/h) 89 aprox
Fuel consumption at cruising speed (gal/h) 23,51 aprox
</div>

<div>
Engine 2×D6-IPS500 (2x272 kW - 2x370 HP) Diesel
Cruising speed (Knots) 27 aprox
Fuel consumption at cruising speed (l/miles) 3,7 aprox
Fuel consumption at cruising speed (gal/miles) 0,97 aprox
Fuel consumption at cruising speed (l/h) 100 aprox
Fuel consumption at cruising speed (gal/h) 26,42 aprox
</div>*/




    //show section on title click
    $('#info').click(function() {
        $('#info-content').animate({
            opacity: "toggle",
        },500);
        $('#photo-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#video-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#tour-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#floor-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#specs-content:visible').animate({
            opacity: "toggle",
        },500);
    });
    $('#photos').click(function() {
        $('#info-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#photo-content').animate({
            opacity: "toggle",
        },500);
        $('#video-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#tour-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#floor-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#specs-content:visible').animate({
            opacity: "toggle",
        },500);
    });
    $('#video').click(function() {
        $('#info-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#photo-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#video-content').animate({
            opacity: "toggle",
        },500);
        $('#tour-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#floor-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#specs-content:visible').animate({
            opacity: "toggle",
        },500);
    });
    $('#tour').click(function() {
        $('#info-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#photo-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#video-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#tour-content').animate({
            opacity: "toggle",
        },500);
        $('#floor-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#specs-content:visible').animate({
            opacity: "toggle",
        },500);
    });
    $('#floor').click(function() {
        $('#info-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#photo-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#video-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#tour-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#floor-content').animate({
            opacity: "toggle",
        },500);
        $('#specs-content:visible').animate({
            opacity: "toggle",
        },500);
    });
    $('#specs').click(function() {
        $('#info-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#photo-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#video-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#tour-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#floor-content:visible').animate({
            opacity: "toggle",
        },500);
        $('#specs-content').animate({
            opacity: "toggle",
        },500);
    });

    /* initialize photoswipe on photo click */
    $('#1,#2,#3,#4,#5').click(function() {
        //var currentID = this.id || "No ID!";
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // build items array
        var items = [
            {
                src: 'img/1.jpg',
                w: 1200,
                h: 800
            },
            {
                src: 'img/2.jpg',
                w: 1200,
                h: 800
            },
            {
                src: 'img/3.jpg',
                w: 1000,
                h: 1500
            }
        ]
        // define options (if needed)
        var options = {
            // optionName: 'option value'
            timeToIdle: 3000,
            showHideOpacity: true,
            bgOpacity: 0.8,
            loop: true,
            index: 0
            //index: Math.floor((Math.random() * 26) + 1)
            //index: currentID - 1
        }

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

        // Note that init() method is called after gettingData event is bound
        gallery.init();

    });
});