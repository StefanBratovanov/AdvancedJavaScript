var app = app || {};

(function (scope) {

        function Party(options) {
            scope._Event.call(this, options);

            this.setOrganiser(options.organiser);
            this.setIsCatered(options.isCatered);
            this.setIsBirthday(options.isBirthday);
        }

        Party.extend(scope._Event);

        Party.prototype.getOrganiser = function () {
            return this._organiser;
        };

        Party.prototype.setOrganiser = function (organiser) {
            //var organiserObj = new Employee(organiser);
            //
            //if (!(organiserObj instanceof Employee )) {
            //    throw new Error("Invalid Organiser object");
            //}

            this._organiser = organiser;
        };

        Party.prototype.getIsCatered = function () {
            return this._isCatered;
        };

        Party.prototype.setIsCatered = function (isCreated) {

            if (isCreated) {
                this._isCatered = true;
            }
            else {
                this._isCatered = false;
            }
        };

        Party.prototype.getIsBirthday = function () {
            return this._isBirthday;
        };

        Party.prototype.setIsBirthday = function (isBirthday) {

            if (isBirthday) {
                this._isBirthday = true;
            }
            else {
                this._isBirthday = false;
            }
        };

    scope.party = Party;

    return Party;

}(app));


