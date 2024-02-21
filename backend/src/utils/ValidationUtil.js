const NIV = require('node-input-validator');
const { ValidationError } = require('../exceptions');

NIV.bailable(false)

NIV.extend('unique', async ({ attr, value, args }) => {
    if (args.length < 2) {
        throw new Error("Incorrect arguments provided, valid ex. unique|table|column|ignoreid")
    }
    const table = args[0];
    const column = args[1];
    const ignore = args.length > 2 ? args[2] : null;

    const result = null; // put query to fetch result with help of table and column, ignore
    const record = result && result.length > 0 ? result[0] : null;

    if (!record) {
        return true;
    }

    if (record && ignore && record.id !== ignore) {
        return true;
    }
    return false

});

NIV.extendMessages({
    'exists': 'Invalid :attribute value provided.'
});

NIV.extend('exists', async ({ attr, value, args }) => {
    if (args.length < 2) {
        throw new Error("Incorrect arguments provided, valid ex. unique|table|column|ignoreid")
    }
    const table = args[0];
    const column = args[1];
    const result = null; // put query to fetch result with help of table and column
    const record = result && result.length > 0 ? result[0] : null;
    return record ? true : false;
});


// add additional custom validation here if needed.
module.exports.ValidationUtil = {
    validateSchema: async ({
        body = {},
        rules = {},
        messages = {}
    }) => {
        try {
            const validator = new NIV.Validator(body, rules, messages);
            const status = await validator.validate();
            if (!status) {
                throw new ValidationError(
                    validator.errors
                );
            }
            const filteredData = {}
            Object.keys(rules).forEach(key => {
                filteredData[key] = body[key]
            })
            return filteredData
        } catch (e) {
            const errors = e?.errors || {}
            const finalErrors = {} // error are {key: value} pair
            Object.keys(errors).forEach(key => {
                const error = Array.isArray(errors[key]) ? errors[key][0] : errors[key];
                finalErrors[key] = messages[`${key}.${error.rule}`] || error?.message || `The ${key} field is invalid.`
            })
            throw new ValidationError(finalErrors)
        }
    }
}

