var app = app || {};

(function (scope) {


    function Event(options) {
        this.setTitle(options.title);
        this.setType(options.type);
        this.setDuration(options.duration);
        this.setDate(options.date);
    }

    Event.prototype.getTitle = function () {
        return this._title;
    };

    Event.prototype.setTitle = function (title) {
        var regex = /[a-zA-Z ]+/;

        if (!regex.test(title)) {
            throw new Error("Only letters and whitespace can be used in the title");
        }

        this._title = title;
    };

    Event.prototype.getType = function () {
        return this._type;
    };

    Event.prototype.setType = function (type) {
        var regex = /[a-zA-Z ]+/;

        if (!regex.test(type)) {
            throw new Error("Only letters and whitespace can be used in the type");
        }

        this._type = type;
    };

    Event.prototype.getDuration = function () {
        return this._duration;
    };

    Event.prototype.setDuration = function (duration) {
        var regex = /^\d+$/;

        if (!regex.test(duration)) {
            throw new Error("Only digits in the duration");
        }

        this._duration = duration;
    };

    Event.prototype.getDate = function () {
        return this._date;
    };

    Event.prototype.setDate = function (date) {
        var dateObj = new Date(date);

        if (!(dateObj instanceof Date)) {
            throw new Error("Invalid Datetime object");
        }

        this._date = date;
    };


    scope._Event = Event;
}(app));

