//starting Product Section

const productList = [
  {
    id: 1,
    productImageTwo:
      "https://www.allinstyle.co.uk/wp-content/uploads/2021/01/banner-2.jpg",
    productImage:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/8/Y/1683283817_M0565OWRT_M900_E01_ZH.jpg",
    productCatagory: "Beg",
    productName: "LADY DIOR",
    productPrice: 5900,
    salePrice: 5500,
  },
  {
    id: 2,
    productImageTwo:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/F/1/1677246321_CD04111X1249_0000_E12_ZH.jpg",
    productImage:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/6/L/1677155004_CD04011X1247_0000_E01_ZHC.jpg?imwidth=828",
    productCatagory: "Watch",
    productName: "LA MINI D MY DIOR",
    productPrice: 6200,
    salePrice: 6100,
  },
  {
    id: 3,
    productImageTwo:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw075f2611/images/beauty/push_edito_images/pe_img_fragrance/Sauvage_Cleanser_GammeDerives_1850x2000.jpg?sw=460",
    productImage:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw295d71e9/Y0996460/Y0996460_C099600755_E01_ZHC.jpg?sw=1800&sh=1200",
    productCatagory: "Perfum",
    productName: "Sauvage Eau de Parfum",
    productPrice: 183,
    salePrice: 179,
  },
  {
    id: 4,
    productImageTwo:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw456752c5/images/beauty/PLP-BANNERS/Makeup/INTER_1440x617-16.jpg?sw=1280",
    productImage:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw8742db80/Y0996397/Y0996397_C023500020_E01_ZHC.jpg?sw=1800&sh=1200",
    productCatagory: "Make Up",
    productName: "Dior Forever",
    productPrice: 50,
    salePrice: 45,
  },
  {
    id: 5,
    productImageTwo:
      "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-summer-23-men/193c545a5797c888/39488841-1-eng-GB/193c545a5797c888_1440_1200.jpg?imwidth=640",
    productImage:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/1/q/1666372355_213M656BT183_C787_E01_ZHC.jpg?imwidth=828",
    productCatagory: "Men",
    productName: "MAGLIONE CON FIRMA CD",
    productPrice: 2500,
    salePrice: 2400,
  },
  {
    id: 6,
    productImageTwo:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/r/P/1666372330_3DE333ZTJ_H900_E06_ZH.jpg",
    productImage:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/r/P/1666372330_3DE333ZTJ_H900_E02_ZHC.jpg?imwidth=828",
    productCatagory: "Shoes",
    productName: "SCARPA OXFORD DIOR TIMELESS",
    productPrice: 3500,
    salePrice: 3229,
  },
  {
    id: 7,
    productImageTwo:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/k/S/1688139932_S5554ONTJ_M45E_E09_ZH.jpg",
    productImage:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/k/S/1688139932_S5554ONTJ_M45E_E01_ZHC.jpg?imwidth=828",
    productCatagory: "Begs",
    productName: "POCHETTE MEDIA DIORTRAVEL NOMAD",
    productPrice: 1200,
    salePrice: 1100,
  },
  {
    id: 8,
    productImageTwo:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwfb7cc45d/images/beauty/push_edito_images/pe_img_fragrance/F873_MD_BB_S123_Etiquette_460x240.jpg?sw=460",
    productImage:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dweb2bd8f7/Y0996347/Y0996347_C099600764_E01_ZHC.jpg?sw=1800&sh=1200",
    productCatagory: "Parfum",
    productName: "MISS DIOR EAU DE PARFUM",
    productPrice: 153,
    salePrice: 129,
  },
  {
    id: 9,
    productImageTwo:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw203a1bd5/Y0124000/Y0124000_C012400001_E03_ZHC.jpg?sw=3000&sh=2000",
    productImage:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw531df143/Y0124000/Y0124000_C012400001_E01_ZHC.jpg?sw=1800&sh=1200",
    productCatagory: "Make Up",
    productName: "DIOR ADDICT LIP GLOW OIL",
    productPrice: 48,
    salePrice: 40,
  },
];

const leftSide = [
  {
    productImageTwo:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/k/S/1688139932_S5554ONTJ_M45E_E09_ZH.jpg",
    productImage:
      "https://www.dior.com/couture/ecommerce/media/catalog/product/k/S/1688139932_S5554ONTJ_M45E_E01_ZHC.jpg?imwidth=828",
    productCatagory: "Begs",
    productName: "POCHETTE MEDIA DIORTRAVEL NOMAD",
    productPrice: 1200,
    salePrice: 1100,
  },
  {
    productImageTwo:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwfb7cc45d/images/beauty/push_edito_images/pe_img_fragrance/F873_MD_BB_S123_Etiquette_460x240.jpg?sw=460",
    productImage:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dweb2bd8f7/Y0996347/Y0996347_C099600764_E01_ZHC.jpg?sw=1800&sh=1200",
    productCatagory: "Parfum",
    productName: "MISS DIOR EAU DE PARFUM",
    productPrice: 153,
    salePrice: 129,
  },
  {
    productImageTwo:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw203a1bd5/Y0124000/Y0124000_C012400001_E03_ZHC.jpg?sw=3000&sh=2000",
    productImage:
      "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw531df143/Y0124000/Y0124000_C012400001_E01_ZHC.jpg?sw=1800&sh=1200",
    productCatagory: "Make Up",
    productName: "DIOR ADDICT LIP GLOW OIL",
    productPrice: 48,
    salePrice: 40,
  },
];
