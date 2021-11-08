declare function _exports(filePath: string): {
    (txt: boolean): typeof Object | string;
    save(): void;
    /**
     * @private
     */
    db: any;
    /**
     * @private
     */
    filePath: string;
    /**
     *
     * @param {string} text
     */
    text(text: string): void;
};
export = _exports;
