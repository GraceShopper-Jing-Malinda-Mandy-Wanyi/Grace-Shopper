const productData = [
  {
    name: "Giant Steps Pinot Noir",
    size: "750ML",
    productType: "Wine",
    price: 132.93,
    description:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    img: "/images/wine/wine01.jpeg",
  },
  {
    name: "Absolut Vodka",
    size: "750ML",
    productType: "Spirit",
    price: 75.58,
    description:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    img: "/images/spirits/spirit01.jpeg",
  },
  {
    name: "Agua Vida",
    size: "1.75L",
    productType: "Spirit",
    price: 113.47,
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    img: "/images/spirits/spirit01.jpeg",
  },
  {
    name: "Aguila",
    size: "1L",
    productType: "Beer",
    price: 20.13,
    description:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    img: "/images/beer/beer01.jpeg",
  },
  {
    name: "BACARDÍ Gold Rum",
    size: "1.75L",
    productType: "Spirit",
    price: 62.37,
    description:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    img: "/images/spirits/spirit01.jpeg",
  },
  {
    name: "Belvedere Vodka",
    size: "1L",
    productType: "Spirit",
    price: 12.05,
    description:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    img: "/images/spirits/spirit01.jpeg",
  },
  {
    name: "Blue Moon",
    size: "1.75L",
    productType: "Beer",
    price: 103.67,
    description:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    img: "/images/beer/beer01.jpeg",
  },
  {
    name: "Bota Box Cabernet Sauvignon",
    size: "1.75L",
    productType: "Wine",
    price: 81.17,
    description:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    img: "/images/wine/wine01.jpeg",
  },
  {
    name: "Brahma",
    size: "1L",
    productType: "Beer",
    price: 91.94,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    img: "/images/beer/beer01.jpeg",
  },
  {
    name: "Bud Light",
    size: "1L",
    productType: "Beer",
    price: 125.03,
    description:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    img: "/images/beer/beer01.jpeg",
  },
  {
    name: "Budweiser",
    size: "1L",
    productType: "Beer",
    price: 56.02,
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    img: "/images/beer/beer02.jpeg",
  },
  {
    name: "Bulleit Bourbon",
    size: "1.75L",
    productType: "Spirit",
    price: 121.54,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    img: "/images/spirits/spirit01.jpeg",
  },
  {
    name: "Bumbu Original Rum",
    size: "750ML",
    productType: "Spirit",
    price: 143.1,
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    img: "/images/spirits/spirit01.jpeg",
  },
  {
    name: "Cappy",
    size: "1.75L",
    productType: "Beer",
    price: 41.31,
    description:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    img: "/images/beer/beer02.jpeg",
  },
  {
    name: "Captain Morgan Original Spiced Rum",
    size: "1.75L",
    productType: "Spirit",
    price: 88.71,
    description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    img: "/images/spirits/spirit01.jpeg",
  },
  {
    name: "Casamigos Reposado",
    size: "1L",
    productType: "Spirit",
    price: 42.06,
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    img: "/images/spirits/spirit02.jpeg",
  },
  {
    name: "Cazadores Reposado Tequila",
    size: "750ML",
    productType: "Spirit",
    price: 75.9,
    description:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    img: "/images/spirits/spirit02.jpeg",
  },
  {
    name: "Ciroc",
    size: "1L",
    productType: "Spirit",
    price: 53.61,
    description:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    img: "/images/spirits/spirit02.jpeg",
  },
  {
    name: "Clase Azul Reposado Tequila",
    size: "1L",
    productType: "Spirit",
    price: 81.45,
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    img: "/images/spirits/spirit02.jpeg",
  },
  {
    name: "Codigo 1530 Rosa Tequila",
    size: "1L",
    productType: "Spirit",
    price: 105.19,
    description:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    img: "/images/spirits/spirit02.jpeg",
  },
  {
    name: "Corona",
    size: "1.75L",
    productType: "Beer",
    price: 25.83,
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    img: "/images/beer/beer02.jpeg",
  },
  {
    name: "Crown Royal Fine Deluxe Blended Canadian Whisky",
    size: "1.75L",
    productType: "Spirit",
    price: 36.33,
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    img: "/images/spirits/spirit02.jpeg",
  },
  {
    name: "Decoy California Cabernet Sauvignon",
    size: "1.75L",
    productType: "Wine",
    price: 115.8,
    description:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    img: "/images/wine/wine01.jpeg",
  },
  {
    name: "Deep River Rock",
    size: "1L",
    productType: "Wine",
    price: 32.69,
    description:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    img: "/images/wine/wine01.jpeg",
  },
  {
    name: "Diplomatico Rum Reserva Exclusiva",
    size: "1L",
    productType: "Spirit",
    price: 31.41,
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    img: "/images/spirits/spirit02.jpeg",
  },
  {
    name: "Don Julio 1942",
    size: "1L",
    productType: "Spirit",
    price: 46.45,
    description:
      "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    img: "/images/spirits/spirit03.jpeg",
  },
  {
    name: "Don Julio Anejo",
    size: "1L",
    productType: "Spirit",
    price: 65.28,
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    img: "/images/spirits/spirit03.jpeg",
  },
  {
    name: "Duvel Golden Ale",
    size: "1.75L",
    productType: "Beer",
    price: 21.91,
    description:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    img: "/images/beer/beer02.jpeg",
  },
  {
    name: "Edelweiss",
    size: "750ML",
    productType: "Beer",
    price: 56.21,
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    img: "/images/beer/beer03.jpeg",
  },
  {
    name: "Espolòn Tequila Añejo",
    size: "750ML",
    productType: "Spirit",
    price: 90.14,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    img: "/images/spirits/spirit03.jpeg",
  },
  {
    name: "Evolution Fresh",
    size: "1.75L",
    productType: "Beer",
    price: 129.7,
    description:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    img: "/images/beer/beer03.jpeg",
  },
  {
    name: "Fireball Cinnamon Whisky",
    size: "750ML",
    productType: "Spirit",
    price: 98.64,
    description:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    img: "/images/spirits/spirit03.jpeg",
  },
  {
    name: "Frooti",
    size: "1L",
    productType: "Spirit",
    price: 21.12,
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    img: "/images/spirits/spirit03.jpeg",
  },
  {
    name: "Goslings Black Seal Rum",
    size: "750ML",
    productType: "Spirit",
    price: 36.22,
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    img: "/images/spirits/spirit03.jpeg",
  },
  {
    name: "Granini",
    size: "1L",
    productType: "Spirit",
    price: 72.24,
    description:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    img: "/images/spirits/spirit03.jpeg",
  },
  {
    name: "GREY GOOSE Vodka",
    size: "1L",
    productType: "Spirit",
    price: 85.21,
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    img: "/images/spirits/spirit03.jpeg",
  },
  {
    name: "Grolsch",
    size: "1.75L",
    productType: "Wine",
    price: 115.48,
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    img: "/images/wine/wine01.jpeg",
  },
  {
    name: "Guaranito",
    size: "1L",
    productType: "Spirit",
    price: 110.73,
    description:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    img: "/images/spirits/spirit03.jpeg",
  },
  {
    name: "Guinness",
    size: "1.75L",
    productType: "Beer",
    price: 91.72,
    description:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    img: "/images/beer/beer03.jpeg",
  },
  {
    name: "Heineken",
    size: "1.75L",
    productType: "Beer",
    price: 107.62,
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    img: "/images/beer/beer03.jpeg",
  },
  {
    name: "Hennessy",
    size: "750ML",
    productType: "Spirit",
    price: 49.31,
    description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    img: "/images/spirits/spirit03.jpeg",
  },
  {
    name: "High Eden Riesling",
    size: "750ML",
    productType: "Wine",
    price: 47.35,
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    name: "Highland Spring",
    size: "1.75L",
    productType: "Wine",
    price: 101.34,
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    img: "/images/wine/wine02.jpeg",
  },
  {
    name: "Icehouse",
    size: "1L",
    productType: "Wine",
    price: 20.0,
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    img: "/images/wine/wine02.jpeg",
  },
  {
    name: "Jack Daniels",
    size: "1L",
    productType: "Spirit",
    price: 16.53,
    description:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    img: "/images/spirits/spirit04.jpeg",
  },
  {
    name: "Jameson",
    size: "750ML",
    productType: "Spirit",
    price: 79.72,
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    img: "/images/spirits/spirit04.jpeg",
  },
  {
    name: "Jim Beam Bourbon Whiskey",
    size: "1L",
    productType: "Spirit",
    price: 119.27,
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    img: "/images/spirits/spirit04.jpeg",
  },
  {
    name: "Johnnie Walker",
    size: "1.75L",
    productType: "Spirit",
    price: 83.54,
    description:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    img: "/images/spirits/spirit04.jpeg",
  },
  {
    name: "Josh Cellars Cabernet Sauvignon",
    size: "1L",
    productType: "Wine",
    price: 117.81,
    description:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    img: "/images/wine/wine02.jpeg",
  },
  {
    name: "Juicy Juice",
    size: "750ML",
    productType: "Spirit",
    price: 143.23,
    description:
      "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    img: "/images/spirits/spirit04.jpeg",
  },
  {
    name: "Ketel One Vodka",
    size: "1L",
    productType: "Spirit",
    price: 37.56,
    description:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    img: "/images/spirits/spirit04.jpeg",
  },
  {
    name: "Keystone Light",
    size: "750ML",
    productType: "Beer",
    price: 144.54,
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    img: "/images/beer/beer04.jpeg",
  },
  {
    name: "Kim Crawford Sauvignon Blanc",
    size: "1L",
    productType: "Wine",
    price: 103.21,
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    img: "/images/wine/wine02.jpeg",
  },
  {
    name: "La Marca Prosecco",
    size: "1L",
    productType: "Wine",
    price: 33.38,
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    img: "/images/wine/wine02.jpeg",
  },
  {
    name: "Louis Royer XO Cognac",
    size: "1.75L",
    productType: "Spirit",
    price: 128.93,
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    img: "/images/spirits/spirit05.jpeg",
  },
  {
    name: "Maker’s Mark Bourbon Whisky",
    size: "1L",
    productType: "Spirit",
    price: 27.35,
    description:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    img: "/images/spirits/spirit05.jpeg",
  },
  {
    name: "Maggy Hawk Skycrest Vineyard Chardonnay",
    size: "1L",
    productType: "Wine",
    price: 132.26,
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    img: "/images/wine/wine02.jpeg",
  },
  {
    name: "Malibu Original Caribbean Rum",
    size: "750ML",
    productType: "Wine",
    price: 78.73,
    description:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    img: "/images/wine/wine03.jpeg",
  },
  {
    name: "Meiomi Pinot Noir",
    size: "1L",
    productType: "Wine",
    price: 113.16,
    description:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    img: "/images/wine/wine03.jpeg",
  },
  {
    name: "Modelo",
    size: "750ML",
    productType: "Beer",
    price: 121.56,
    description:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    img: "/images/beer/beer04.jpeg",
  },
  {
    name: "Mount Gay Rum Eclipse",
    size: "1.75L",
    productType: "Spirit",
    price: 76.01,
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    img: "/images/spirits/spirit05.jpeg",
  },
  {
    name: "Mumm",
    size: "750ML",
    productType: "Beer",
    price: 59.3,
    description:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    img: "/images/beer/beer04.jpeg",
  },
  {
    name: "Orange Bird",
    size: "1.75L",
    productType: "Beer",
    price: 60.94,
    description:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    img: "/images/beer/beer04.jpeg",
  },
  {
    name: "Prigat",
    size: "1.75L",
    productType: "Spirit",
    price: 116.21,
    description:
      "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    img: "/images/spirits/spirit05.jpeg",
  },
  {
    name: "Rémy Martin",
    size: "1L",
    productType: "Spirit",
    price: 38.89,
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    img: "/images/spirits/spirit05.jpeg",
  },
  {
    name: "Sailor Jerry Spiced Rum",
    size: "750ML",
    productType: "Spirit",
    price: 14.8,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    img: "/images/spirits/spirit05.jpeg",
  },
  {
    name: "Santa Margherita Pinot Grigio DOC",
    size: "1.75L",
    productType: "Wine",
    price: 109.29,
    description:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    img: "/images/wine/wine03.jpeg",
  },
  {
    name: "Skol",
    size: "1L",
    productType: "Beer",
    price: 128.39,
    description:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    img: "/images/beer/beer05.jpeg",
  },
  {
    name: "SKYY Vodka",
    size: "1L",
    productType: "Spirit",
    price: 90.92,
    description:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    img: "/images/spirits/spirit05.jpeg",
  },
  {
    name: "Smirnoff",
    size: "750ML",
    productType: "Spirit",
    price: 13.25,
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    img: "/images/spirits/spirit06.jpeg",
  },
  {
    name: "Stella Artois",
    size: "1L",
    productType: "Beer",
    price: 68.88,
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    img: "/images/beer/beer05.jpeg",
  },
  {
    name: "Strongbow",
    size: "1L",
    productType: "Beer",
    price: 100.53,
    description:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    img: "/images/beer/beer06.jpeg",
  },
  {
    name: "SVEDKA Vodka",
    size: "1L",
    productType: "Spirit",
    price: 93.81,
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    img: "/images/spirits/spirit06.jpeg",
  },
  {
    name: "Tanqueray",
    size: "750ML",
    productType: "Spirit",
    price: 127.47,
    description:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    img: "/images/spirits/spirit06.jpeg",
  },
  {
    name: "Tequila Casa Dragones Blanco",
    size: "1.75L",
    productType: "Spirit",
    price: 139.32,
    description:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    img: "/images/spirits/spirit06.jpeg",
  },
  {
    name: "Tsingtao",
    size: "1.75L",
    productType: "Beer",
    price: 149.25,
    description:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    img: "/images/beer/beer06.jpeg",
  },
  {
    name: "Whispering Angel Rosé",
    size: "1L",
    productType: "Wine",
    price: 51.62,
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    img: "/images/wine/wine03.jpeg",
  },
  {
    name: "Woodford Reserve Kentucky Straight Bourbon Whiskey",
    size: "1.75L",
    productType: "Spirit",
    price: 144.54,
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    img: "/images/spirits/spirit06.jpeg",
  },
  {
    name: "Yanjing",
    size: "1L",
    productType: "Beer",
    price: 145.94,
    description:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    img: "/images/beer/beer06.jpeg",
  },
  {
    name: "Z Lager",
    size: "1.75L",
    productType: "Beer",
    price: 91.44,
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    img: "/images/beer/beer06.jpeg",
  },
  {
    name: "Goose Ridge Revelation Rosé 2021",
    size: "1.75L",
    productType: "Wine",
    price: 116.54,
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    img: "/images/wine/wine03.jpeg",
  },
  {
    name: "La Vis Classic Sauvignon Trentino DOC 2021",
    size: "1L",
    productType: "Wine",
    price: 29.46,
    description:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    img: "/images/wine/wine03.jpeg",
  },
  {
    name: "Dutton Estate Winery Sweet Sisters Late Harvest Syrah 2017",
    size: "750ML",
    productType: "Wine",
    price: 98.39,
    description:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    img: "/images/wine/wine04.jpeg",
  },
  {
    name: "Hatzidakis Aidani Dry White Wine 2020",
    size: "750ML",
    productType: "Wine",
    price: 99.74,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    img: "/images/wine/wine04.jpeg",
  },
  {
    name: "Good Harbor Pinot Grigio 2021",
    size: "1L",
    productType: "Wine",
    price: 20.82,
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    img: "/images/wine/wine04.jpeg",
  },
  {
    name: "Tarpon Cellars 2021 Cambaro Red",
    size: "1L",
    productType: "Wine",
    price: 86.58,
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    img: "/images/wine/wine04.jpeg",
  },
  {
    name: "Altocedro Malbec Reserva 2018",
    size: "1L",
    productType: "Wine",
    price: 35.3,
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    img: "/images/wine/wine04.jpeg",
  },
  {
    name: "Sojourn Cabernet Sauvignon 2019",
    size: "1L",
    productType: "Wine",
    price: 16.63,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    img: "/images/wine/wine04.jpeg",
  },
  {
    name: "Mylonas Rosé 2021",
    size: "750ML",
    productType: "Wine",
    price: 19.9,
    description:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    img: "/images/wine/wine04.jpeg",
  },
  {
    name: "Tablas Creek Vineyard Mourvèdre 2020",
    size: "750ML",
    productType: "Wine",
    price: 117.67,
    description:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    img: "/images/wine/wine05.jpeg",
  },
  {
    name: "Kir-Yanni Akakies Sparkling Rosé 2021",
    size: "1.75L",
    productType: "Wine",
    price: 82.57,
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    img: "/images/wine/wine05.jpeg",
  },
  {
    name: "Nathan K. Dry Riesling 2019",
    size: "1L",
    productType: "Wine",
    price: 37.04,
    description:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    img: "/images/wine/wine05.jpeg",
  },
  {
    name: "Bernard Baudry Chinon Les Granges 2021",
    size: "750ML",
    productType: "Wine",
    price: 42.68,
    description:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    img: "/images/wine/wine05.jpeg",
  },
  {
    name: "Massolino Dolcetto d’Alba 2021",
    size: "1L",
    productType: "Wine",
    price: 99.79,
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    img: "/images/wine/wine05.jpeg",
  },
  {
    name: "Oremus Tokaji Aszú 5 Puttonyos 2013",
    size: "1L",
    productType: "Wine",
    price: 73.27,
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    img: "/images/wine/wine06.jpeg",
  },
  {
    name: "Stoller Family Estate Willamette Valley Pinot Noir Rosé",
    size: "1.75L",
    productType: "Wine",
    price: 40.83,
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    img: "/images/wine/wine06.jpeg",
  },
  {
    name: "Vietti Barolo 2018",
    size: "1L",
    productType: "Wine",
    price: 52.92,
    description:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
    img: "/images/wine/wine06.jpeg",
  },
  {
    name: "Mt. Brave Cabernet Sauvignon 2018",
    size: "750ML",
    productType: "Wine",
    price: 111.23,
    description:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    img: "/images/wine/wine06.jpeg",
  },
  {
    name: "Field Recordings Skins 2020",
    size: "1.75L",
    productType: "Wine",
    price: 37.07,
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
    img: "/images/wine/wine06.jpeg",
  },
  {
    name: "Chimney Rock Winery Elevage Red Blend 2019",
    size: "1L",
    productType: "Wine",
    price: 99.37,
    description:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    img: "/images/wine/wine06.jpeg",
  },
];

module.exports = productData