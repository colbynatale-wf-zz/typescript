define(["require", "exports", './comic_models'], function(require, exports, models) {
    var marvel = new models.Publisher('Marvel');
    var deadpool = new models.Character('Wade Wilson', 'Deadpool');

    var comic1 = new models.Comic(marvel, 'The Complete Deadpool Collection', new Date(2012, 4));
    comic1.addCharacter(deadpool);

    $('body').append(comic1.name);
});
