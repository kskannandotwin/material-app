import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BtmSheet } from './btm-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent {

  constructor(
    private bottomSheet: MatBottomSheet
  ) { }

  openBottomSheet() {
    this.bottomSheet.open(BtmSheet);
  }
}