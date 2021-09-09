class Table {
  constructor(arr){
    this.header = arr[0];
    arr.shift(); //removendo o primeiro item do array
    this.rows = arr;
  }
  get RowsCount(){ //campo virtual GET
    return this.rows.length;
  }
  get ColumnCount(){
    return this.header.length;
  }

}

module.exports = Table;