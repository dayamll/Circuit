// Spoiler
$(document).ready(function () {
    $("#config").click(function () {
        $("#confignav").slideToggle("normal");
    });
});


// PopUp Cuadro
$("#abrir_box").click(function () {
    $("#cont_box").css("display", "block");
});

$("#cerrar_box").click(function () {
    $("#cont_box").css("display", "none");
});

//Menu Tabla
$(document).ready(function () {
    $(".tabs-menu a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

$(document).ready(function () {
    $('#first-click').on('click', function (event) {
        $('#equipo').html('<li data-id="Juan"><strong>Juan Perez</strong><p>Presidente</p></li> <li data-id="Mario"><strong>Mario Rosas</strong><p>Gerente General</p></li> <li data-id="Christiano"><strong>Christiano Chavez</strong></li><li data-id="Mariella" class="mr-b-9"><strong>Mariella Benites</strong></li>')
        $('#equipo li').on('click', function (event) {
            var idMember = $(this).data('id');
            if (idMember == 'Juan') {
                $('#bio').text('Juan Perez Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad saepe, laudantium iusto autem voluptates aliquam impedit, atque eligendi dolorem eaque, at modi enim facilis! Voluptatibus aliquid id labore illo?Lorem ipsum dolor sit,amet consectetur adipisicing elit. Debitis dolores reprehenderit omnis, magni odit sint dolor exercitationem earumdeserunt est nobis doloribus velit nesciunt, hic consequatur minus unde deleniti! Suscipit.')
            } else if (idMember == 'Mario') {
                $('#bio').text('Mario Rosas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad saepe, laudantium iusto autem voluptates aliquam impedit, atque eligendi dolorem eaque, at modi enim facilis! Voluptatibus aliquid id labore illo?Lorem ipsum dolor sit,amet consectetur adipisicing elit. Debitis dolores reprehenderit omnis, magni odit sint dolor exercitationem earumdeserunt est nobis doloribus velit nesciunt, hic consequatur minus unde deleniti! Suscipit.')
            } else if (idMember == 'Christiano') {
                $('#bio').text('Christiano Chavez Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad saepe, laudantium iusto autem voluptates aliquam impedit, atque eligendi dolorem eaque, at modi enim facilis! Voluptatibus aliquid id labore illo?Lorem ipsum dolor sit,amet consectetur adipisicing elit. Debitis dolores reprehenderit omnis, magni odit sint dolor exercitationem earumdeserunt est nobis doloribus velit nesciunt, hic consequatur minus unde deleniti! Suscipit.')
            } else if (idMember == 'Mariella') {
                $('#bio').text('Mariella Benitez Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ad saepe, laudantium iusto autem voluptates aliquam impedit, atque eligendi dolorem eaque, at modi enim facilis! Voluptatibus aliquid id labore illo?Lorem ipsum dolor sit,amet consectetur adipisicing elit. Debitis dolores reprehenderit omnis, magni odit sint dolor exercitationem earumdeserunt est nobis doloribus velit nesciunt, hic consequatur minus unde deleniti! Suscipit.')
            }
        });
    });
});