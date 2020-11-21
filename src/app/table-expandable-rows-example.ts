import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

import { Table, TableService } from "primeng/table";
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: "table-expandable-rows-example",
  styleUrls: ["table-expandable-rows-example.css"],
  templateUrl: "table-expandable-rows-example.html",
  providers: [
    TableService,
    {
      provide: Table,
    },
  ],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class TableExpandableRowsExample implements AfterViewInit, OnInit {


  constructor(private fb: FormBuilder) {

  }

  formData: FormGroup = new FormGroup({});
  formdataarray: FormArray = new FormArray([]);
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort;
  columnsToDisplay = ["rowEdit", "name", "weight", "symbol", "position", "investorName"];
  expandedElement: PeriodicElement | null;

  ngOnInit() {
    this.formData = this.fb.group({
      rowEdit: [],
      name: [],
      weight: [],
      symbol: [],
      position: [],
      investorName: []
    })

    

    for(let i =0; i<ELEMENT_DATA.length;i++){
      this.formdataarray.push(
        this.fb.group({
          rowEdit: ELEMENT_DATA[i].rowEdit,
          name: ELEMENT_DATA[i].name,
          weight: ELEMENT_DATA[i].weight,
          symbol: ELEMENT_DATA[i].symbol,
          position: ELEMENT_DATA[i].position,
          investorName: ELEMENT_DATA[i].investorName
        })
      )

    }


//  this.dataSource =this.formdataarray.controls;
   
  


  }

  ngAfterViewInit() {

    console.log("$$$$$$$", this.sort)

    this.dataSource.sort = this.sort;
  }
  rowClicked(row: PeriodicElement): void {
    console.log(row);

    // this.findPreviousRowEdited();

    row.rowEdit = true;

    //  [class.example-expanded-row]="expandedElement === element"
    //   (click)="expandedElement = expandedElement === element ? null : element"
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // findPreviousRowEdited(): void {
  //   const editedRow = this.dataSource.data.find((row) => row.rowEdit == true);
  //   if (!!editedRow) {
  //     editedRow.rowEdit = false;
  //   }

  //   console.log(editedRow);
  // }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
  testhiddencol1: string;
  rowEdit: boolean;
  investorName: string;
}

const CO_MANAGER_DATA: string[] = [
  "Manager 1",
  "Manager 2",
  "Manager 3",
  "Manager 4",
];

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: "Hydrogen",
    weight: 1.0079,
    symbol: "H",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    testhiddencol1: "testhiddencol1",
    rowEdit: false,
    investorName: "abc investor"
  },
  {
    position: 2,
    name: "Helium",
    weight: 4.0026,
    symbol: "He",
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
    testhiddencol1: "testhiddencol1",
    rowEdit: false,
    investorName: "abc investor"

  },
  {
    position: 3,
    name: "Lithium",
    weight: 6.941,
    symbol: "Li",
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
    testhiddencol1: "testhiddencol1",
    rowEdit: false,
    investorName: "cde investor"

  },
  {
    position: 4,
    name: "Beryllium",
    weight: 9.0122,
    symbol: "Be",
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
    testhiddencol1: "testhiddencol1",
    rowEdit: false,
    investorName: "fgh investor"

  },
  {
    position: 5,
    name: "Boron",
    weight: 10.811,
    symbol: "B",
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
    testhiddencol1: "testhiddencol1",
    rowEdit: false,
    investorName: "abc investor"

  },
  {
    position: 6,
    name: "Carbon",
    weight: 12.0107,
    symbol: "C",
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
    testhiddencol1: "testhiddencol1",
    rowEdit: false,
    investorName: "ijk investor"

  },
  {
    position: 7,
    name: "Nitrogen",
    weight: 14.0067,
    symbol: "N",
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
    testhiddencol1: "testhiddencol1",
    rowEdit: false,
    investorName: "lmn investor"

  },
  {
    position: 8,
    name: "Oxygen",
    weight: 15.9994,
    symbol: "O",
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
    testhiddencol1: "testhiddencol1",
    rowEdit: false,
    investorName: "lm investor"

  },
  {
    position: 9,
    name: "Fluorine",
    weight: 18.9984,
    symbol: "F",
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
    testhiddencol1: "testhiddencol1",
    rowEdit: false,
    investorName: "test investor"

  },
  {
    position: 10,
    name: "Neon",
    weight: 20.1797,
    symbol: "Ne",
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
    testhiddencol1: "testhiddencol1",
    rowEdit: false,
    investorName: "xyz investor"

  },
];

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
