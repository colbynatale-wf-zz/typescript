define(["require", "exports"], function(require, exports) {
    var Publisher = (function () {
        function Publisher(name) {
            this.name = name;
        }
        return Publisher;
    })();
    exports.Publisher = Publisher;

    var Character = (function () {
        function Character(realName, handle) {
            this.realName = realName;
            this.handle = handle;
        }
        return Character;
    })();
    exports.Character = Character;

    var Comic = (function () {
        function Comic(publisher, name, publishedDate) {
            this.publisher = publisher;
            this.name = name;
            this.publishedDate = publishedDate;
            this.characters = [];
        }
        Comic.prototype.addCharacter = function (character) {
            this.characters.push(character);
        };

        Comic.prototype.hasCharacter = function (character) {
            return this.characters.indexOf(character) > -1;
        };
        return Comic;
    })();
    exports.Comic = Comic;
});
