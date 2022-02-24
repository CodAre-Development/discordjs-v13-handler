module.exports = class {
    constructor({
        name,
        aliases,
        description = 'None',
        options,
        type = 1,
        isSlash,
        isContext,
    }) {
        this.name = name;
        this.aliases = aliases;
        this.description = description;
        this.options = options;
        this.type = type;
        this.isSlash = isSlash;
        this.isContext = isContext;
    }
};
