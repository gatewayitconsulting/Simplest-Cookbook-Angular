import { Component, OnInit } from '@angular/core';

declare interface Table_With_Checkboxes {
    id?: number;
    check: boolean;
    product_name: string;
    type: string;
    qty?: number;
    price: string;
    amount?: string;
}
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
declare interface TableData2 {
    headerRow: string[];
    dataRows: Table_With_Checkboxes[];
}

@Component({
  selector: 'app-tables-areas',
  templateUrl: './tables-areas.component.html',
  styleUrls: ['./tables-areas.component.scss']
})
export class TablesAreasComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData2;
    public tableData3: TableData;

    constructor() { }

    ngOnInit() {
        this.tableData1 = {
            headerRow: [ '#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
                ['2', 'John Doe', 'Design', '2012', '89,241', ''],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-neutral'],
                ['4', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-neutral'],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', 'btn-round'],
                ['6', 'Manuel Rico', 'Manager', '2012', '99,201', 'btn-round']
            ]
        };
        this.tableData2 = {
            headerRow: [ '#', 'Product Name', 'Type', 'Qty', 'Price', 'Amount'],
            dataRows: [
                {id: 1, product_name: 'Moleskine Agenda', type: 'Office', qty: 25, price: '49', amount: '1225',  check: false},
                {id: 2, product_name: 'Stabilo Pen', type: 'Office', qty: 30, price: '10', amount: '300',  check: true},
                {id: 3, product_name: 'A4 Paper Pack', type: 'Office', qty: 50, price: '10.99', amount: '109',  check: true},
                {id: 4, product_name: 'Apple iPad', type: 'Meeting', qty: 10, price: '499.00', amount: '4990',  check: false},
                {id: 5, product_name: 'Apple iPhone', type: 'Communication', qty: 10, price: '599.00', amount: '5990',  check: false}
            ]
        };
        this.tableData3 = {
            headerRow: [ '', '', 'Product', 'Color', 'Size', 'Price', 'QTY', 'Amount'],
            dataRows: [
                ['saint-laurent.jpg', '	Suede Biker Jacket', 'by Saint Laurent', 'Black', 'M', '3390', '1', '3390'],
                ['balmain.jpg', '	Jersey T-Shirt',  'by Balmain', 'Black', 'M', '499', '2', '998'],
                ['prada.jpg', 'Slim-Fit Swim Short', 'by Prada', 'Red', 'M', '200', '1', '200']
            ]
        };
    }
    getTotal1() {
        var total = 0;
        for( var i = 0; i < this.tableData2.dataRows.length; i++ ){
            var integer = parseInt(this.tableData2.dataRows[i].amount)
            total += integer;
        }
        return total;
    };
    getTotal2() {
        var total = 0;
        for( var i = 0; i < this.tableData3.dataRows.length; i++ ){
            var integer = parseInt(this.tableData3.dataRows[i][7])
            total += integer;
        }
        return total;
    };
    showElements() {
        for( var i = 0; i < this.tableData3.dataRows.length; i++ ){
            console.log(this.tableData3.dataRows[i][1])
        }
    }
}
