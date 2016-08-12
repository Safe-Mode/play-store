ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [47.209090, 39.659910],
            zoom: 9,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        redCollection = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#redIcon'
        }),

        redCoords = [[47.209090, 39.659910]];

    for (var i = 0, l = redCoords.length; i < l; i++) {
        redCollection.add(new ymaps.Placemark(redCoords[i]));
    }

    myMap.geoObjects.add(redCollection).add(blueCollection);

    // Через коллекции можно подписываться на события дочерних элементов.
    redCollection.events.add('click', function () { alert('Кликнули по желтой метке') });

    // Через коллекции можно задавать опции дочерним элементам.
    redCollection.options.set('preset', 'islands#redDotIcon');
}
