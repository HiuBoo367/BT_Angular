import { Component } from '@angular/core';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
   menuItems: string[] = ['Tổng Quan', 'Sản Phẩm', 'Xuất Bán', 'Báo Cáo'];
}
