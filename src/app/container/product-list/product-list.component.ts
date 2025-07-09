import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Sản phẩm 1',
      description: 'Mô tả sản phẩm 1',
      brand: 'Kalpen',
      gender: 'MEN',
      category: 'Nồi và chảo',
      size: [24, 26, 28],
      color: ['Trắng', 'Xanh', 'Đen'],
      price: 200000,
      discountPrice: 100000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://img.vconnect247.xyz/APP_POS/ImageVatTu/U01.1/E0000306.U01.1/Avatars/15.1/057ee9a400ef7889bf140377a0051c7d44cbc264.jpg',
      slug: 'Gia dụng điện tử-Nồi và chảo',
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      description: 'Mô tả sản phẩm 2',
      brand: 'Kalpen',
      gender: 'MEN',
      category: 'Nồi và chảo',
      size: [24, 26, 28],
      color: ['Trắng', 'Xanh', 'Đen'],
      price: 160000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://img.vconnect247.xyz/APP_POS/ImageVatTu/U01.1/E0000314.U01.1/Avatars/15.1/484ababbe77e7928cc27425c5e7c83b95a5c4be6.jpg',
      slug: 'Gia dụng điện tử-Nồi và chảo',
    },
    {
      id: 3,
      name: 'Sản phẩm 3',
      description: 'Mô tả sản phẩm 3',
      brand: 'Kalpen',
      gender: 'MEN',
      category: 'Nồi và chảo',
      size: [24, 26, 28],
      color: ['Trắng', 'Xanh', 'Đen'],
      price: 160000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://img.vconnect247.xyz/APP_POS/ImageVatTu/U01.1/O0000383.U01.1/Avatars/15.1/noi-luoc-ga-kalpen-1-d174bba6-c179-432e-b5f6-bcf3ebb9a4fc.jpg',
      slug: 'Gia dụng điện tử-Nồi và chảo',
    },
    {
      id: 4,
      name: 'Sản phẩm 4',
      description: 'Mô tả sản phẩm 4',
      brand: 'Kalpen',
      gender: 'MEN',
      category: 'Nồi và chảo',
      size: [24, 26, 28],
      color: ['Trắng', 'Xanh', 'Đen'],
      price: 200000,
      discountPrice: 150000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://img.vconnect247.xyz/APP_POS/ImageVatTu/U01.1/E0000316.U01.1/Avatars/15.1/am-dun-nuoc-bep-tu-kalpen-kk02-1.jpg',
      slug: 'Gia dụng điện tử-Nồi và chảo',
    },
    {
      id: 5,
      name: 'Sản phẩm 5',
      description: 'Mô tả sản phẩm 5',
      brand: 'Kalpen',
      gender: 'MEN',
      category: 'Nồi và chảo',
      size: [24, 26, 28],
      color: ['Trắng', 'Xanh', 'Đen'],
      price: 160000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://img.vconnect247.xyz/APP_POS/ImageVatTu/U01.1/E0000315.U01.1/Avatars/15.1/ead7f260f4cebbdc23e25f382f288bc68f366006.jpg',
      slug: 'Gia dụng điện tử-Nồi và chảo',
    },
    {
      id: 6,
      name: 'Sản phẩm 6',
      description: 'Mô tả sản phẩm 6',
      brand: 'Kalpen',
      gender: 'MEN',
      category: 'Nồi và chảo',
      size: [24, 26, 28],
      color: ['Trắng', 'Xanh', 'Đen'],
      price: 160000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://img.vconnect247.xyz/APP_POS/ImageVatTu/U01.1/O0000384.U01.1/Avatars/15.1/38dd4247344e5cebdec9106158d2748ec6aa1959.jpg',
      slug: 'Gia dụng điện tử-Nồi và chảo',
    },
    {
      id: 7,
      name: 'Sản phẩm 7',
      description: 'Mô tả sản phẩm 7',
      brand: 'Kalpen',
      gender: 'MEN',
      category: 'Nồi và chảo',
      size: [24, 26, 28],
      color: ['Trắng', 'Xanh', 'Đen'],
      price: 200000,
      discountPrice: 60000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://img.vconnect247.xyz/APP_POS/ImageVatTu/U01.1/E0000313.U01.1/Avatars/15.1/may-xay-sinh-to-kalpen-b6-1.jpg',
      slug: 'Gia dụng điện tử-Nồi và chảo',
    },
    {
      id: 8,
      name: 'Sản phẩm 8',
      description: 'Mô tả sản phẩm 8',
      brand: 'Kalpen',
      gender: 'MEN',
      category: 'Nồi và chảo',
      size: [24, 26, 28],
      color: ['Trắng', 'Xanh', 'Đen'],
      price: 160000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://img.vconnect247.xyz/APP_POS/ImageVatTu/U01.1/E0000312.U01.1/Avatars/15.1/noi-com-dien-cao-cap-kalpen-r8-1-1-3f4521b2-6ee1-47f1-9380-972c645bdb1c.jpg',
      slug: 'Gia dụng điện tử-Nồi và chảo',
    },
    {
      id: 9,
      name: 'Sản phẩm 9',
      description: 'Mô tả sản phẩm 9',
      brand: 'Kalpen',
      gender: 'MEN',
      category: 'Nồi và chảo',
      size: [24, 26, 28],
      color: ['Trắng', 'Xanh', 'Đen'],
      price: 160000,
      discountPrice: 40000,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://img.vconnect247.xyz/APP_POS/ImageVatTu/U01.1/O0000382.U01.1/Avatars/15.1/eff3c31ac24108966b5724d2123c3d74f2545184.jpg',
      slug: 'Gia dụng điện tử-Nồi và chảo',
    },
    {
      id: 10,
      name: 'Sản phẩm 10',
      description: 'Mô tả sản phẩm 10',
      brand: 'Kalpen',
      gender: 'MEN',
      category: 'Nồi và chảo',
      size: [24, 26, 28],
      color: ['Trắng', 'Xanh', 'Đen'],
      price: 160000,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://img.vconnect247.xyz/APP_POS/ImageVatTu/U01.1/O0000374.U01.1/Avatars/15.1/bo-noi-inox-kalpen-slamer-1.jpg',
      slug: 'Gia dụng điện tử-Nồi và chảo',
    },
  ];
  totalProductsCount = this.products.length;
  totalProductsinStock = this.products.filter(
    (product) => product.is_in_inventory
  ).length;
  totalProductsOutOfStock = this.products.filter(
    (product) => !product.is_in_inventory
  ).length;

  @Input()
  searchText: string = '';



  selectedFilterRadioButton: string = 'all';

  onFilterChanged(value: string) {;
    this.selectedFilterRadioButton = value;
  }
}
