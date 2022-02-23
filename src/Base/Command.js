module.exports = class {
    constructor({ name, aliases, description = 'None', options, isSlash }) {
        this.name = name;
        this.aliases = aliases;
        this.description = description;
        this.options = options;
        this.isSlash = isSlash;
    }
};
