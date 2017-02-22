class Table2 {
    get table() {
        this.tableLocator = '#table2';
        return browser.$(this.tableLocator);
    }

    getFirstRowHTML() {
        return this.table.$('tr').getHTML();
    }
}
module.exports = new Table2();
