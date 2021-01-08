'use strict'

module.exports = class ArgsValidatorUtils {

    validate(value) {
        return (this.isNull(value) || this.isUndefined(value) || this.isEmpty(value))
    }

    isNull(value) {
        return value === null;
    }

    isUndefined(value) {
        return (value === undefined);
    }

    isEmpty(value) {
        return value === '';
    }
}
