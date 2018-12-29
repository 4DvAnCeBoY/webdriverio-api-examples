import table1 from './Table1';
import table2 from './Table2';

class DataTables {
    constructor() {
        this.table1 = table1;
        this.table2 = table2;
    }

    table1() {
        return this.table1;
    }

    table2() {
        return this.table2;
    }
}
module.exports = new DataTables();
