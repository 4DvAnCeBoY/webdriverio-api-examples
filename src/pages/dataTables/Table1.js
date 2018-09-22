class Table1 {
    get table() {
        this.tableLocator = '#table1';
        return browser.$(this.tableLocator);
    }

    getFirstRowHTML() {
        return this.table.$('tr').getHTML();
    }
}
module.exports = new Table1();
