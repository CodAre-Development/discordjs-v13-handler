module.exports = class {
    constructor({
        name,
        aliases,
        description = 'None',
        options,
        isSlash = false,
        isMessage = false,
    }) {
        this.name = name;
        this.aliases = aliases;
        this.description = description;
        this.options = options;
        this.isSlash = isSlash;
        this.isMessage = isMessage;
    }
};
