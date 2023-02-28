const productData = [
  {
    name: "Paucek, Bosco and Stark",
    size: "750ML",
    type: "Wine",
    price: 87.44,
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
  },
  {
    name: "Mills-Pacocha",
    size: "1L",
    type: "Wine",
    price: 129.59,
    description:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
  },
  {
    name: "Farrell Group",
    size: "1.75L",
    type: "Beer",
    price: 144.49,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
  },
  {
    name: "Nolan-Weissnat",
    size: "750ML",
    type: "Beer",
    price: 114.88,
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
  },
  {
    name: "Auer Inc",
    size: "750ML",
    type: "Spirit",
    price: 18.82,
    description: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    name: "Cartwright, Greenholt and Reinger",
    size: "750ML",
    type: "Spirit",
    price: 39.7,
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
  },
  {
    name: "Zboncak Inc",
    size: "1.75L",
    type: "Wine",
    price: 7.83,
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    name: "Schowalter-Hamill",
    size: "750ML",
    type: "Spirit",
    price: 89.93,
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
  },
  {
    name: "Steuber-Kunze",
    size: "1.75L",
    type: "Beer",
    price: 85.31,
    description:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
  },
  {
    name: "Luettgen Inc",
    size: "1.75L",
    type: "Spirit",
    price: 43.19,
    description:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  },
  {
    name: "Cruickshank-Zboncak",
    size: "1.75L",
    type: "Spirit",
    price: 115.73,
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    name: "Reichert Inc",
    size: "1L",
    type: "Wine",
    price: 30.62,
    description:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    name: "Lubowitz-Reynolds",
    size: "1L",
    type: "Wine",
    price: 132.87,
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
  },
  {
    name: "Monahan and Sons",
    size: "1L",
    type: "Beer",
    price: 90.74,
    description:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  },
  {
    name: "Fritsch, Krajcik and Bogan",
    size: "1L",
    type: "Spirit",
    price: 118.56,
    description: "Nunc rhoncus dui vel sem. Sed sagittis.",
  },
  {
    name: "Jacobson Inc",
    size: "1L",
    type: "Spirit",
    price: 77.68,
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
  {
    name: "Jones, Schmitt and Pfannerstill",
    size: "1L",
    type: "Beer",
    price: 82.08,
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
  },
  {
    name: "Herzog and Sons",
    size: "1L",
    type: "Wine",
    price: 12.36,
    description:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
  },
  {
    name: "Rogahn, Mills and Heller",
    size: "750ML",
    type: "Spirit",
    price: 92.89,
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
  },
  {
    ID: 20,
    name: "McClure-Leannon",
    size: "1.75L",
    type: "Beer",
    price: 62.59,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
  },
  {
    name: "Bogisich-Dare",
    size: "1L",
    type: "Wine",
    price: 132.92,
    description: "Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    name: "Haag-Krajcik",
    size: "750ML",
    type: "Beer",
    price: 87.3,
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
  },
  {
    name: "Torphy, Osinski and Flatley",
    size: "1.75L",
    type: "Spirit",
    price: 42.01,
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
  },
  {
    name: "McCullough-Bernier",
    size: "750ML",
    type: "Wine",
    price: 24.8,
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
  },
  {
    name: "Johns, Brakus and Dibbert",
    size: "1.75L",
    type: "Wine",
    price: 101.01,
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
  },
  {
    name: "Lind-Lynch",
    size: "1L",
    type: "Beer",
    price: 5.37,
    description:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    name: "Quitzon, Brown and Bailey",
    size: "1.75L",
    type: "Wine",
    price: 139.33,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
  },
  {
    name: "Howe Group",
    size: "1.75L",
    type: "Spirit",
    price: 123.33,
    description:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
  },
  {
    name: "Ledner-Kiehn",
    size: "1.75L",
    type: "Spirit",
    price: 16.46,
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    name: "Wilderman and Sons",
    size: "750ML",
    type: "Spirit",
    price: 115.95,
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
  },
  {
    name: "Stehr, Altenwerth and Anderson",
    size: "750ML",
    type: "Spirit",
    price: 39.08,
    description:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
  },
  {
    name: "Harvey-Littel",
    size: "750ML",
    type: "Beer",
    price: 51.01,
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    name: "Watsica-Block",
    size: "1L",
    type: "Wine",
    price: 123.89,
    description:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
  },
  {
    name: "Swift and Sons",
    size: "750ML",
    type: "Beer",
    price: 112.94,
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    name: "Anderson-Lind",
    size: "750ML",
    type: "Beer",
    price: 69.85,
    description: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
  },
  {
    name: "Wilderman Group",
    size: "1L",
    type: "Wine",
    price: 4.05,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
  },
  {
    name: "Moore Group",
    size: "750ML",
    type: "Wine",
    price: 65.54,
    description:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
  },
  {
    name: "Borer-Bashirian",
    size: "1.75L",
    type: "Beer",
    price: 108.63,
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
  },
  {
    name: "Anderson-Rolfson",
    size: "1.75L",
    type: "Spirit",
    price: 131.13,
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  },
  {
    name: "Cummerata, Mosciski and Reinger",
    size: "750ML",
    type: "Beer",
    price: 39.76,
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    name: "Schuster, Corwin and Beier",
    size: "1.75L",
    type: "Wine",
    price: 96.25,
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    name: "Bins-Romaguera",
    size: "1L",
    type: "Spirit",
    price: 27.74,
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
  },
  {
    name: "Kovacek-Gutkowski",
    size: "1.75L",
    type: "Wine",
    price: 64.05,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
  },
  {
    name: "Huel-Kihn",
    size: "750ML",
    type: "Spirit",
    price: 134.03,
    description:
      "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
  },
  {
    name: "Greenfelder-Johnston",
    size: "750ML",
    type: "Wine",
    price: 140.5,
    description:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
  },
  {
    name: "Mosciski LLC",
    size: "1.75L",
    type: "Spirit",
    price: 117.78,
    description:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    name: "Volkman, Predovic and Rowe",
    size: "1L",
    type: "Wine",
    price: 71.36,
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },
  {
    name: "Wehner-Fritsch",
    size: "1.75L",
    type: "Wine",
    price: 20.74,
    description:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
  },
  {
    name: "Vandervort and Sons",
    size: "750ML",
    type: "Spirit",
    price: 100.96,
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    name: "Rice, Shanahan and Gusikowski",
    size: "1L",
    type: "Beer",
    price: 15.6,
    description:
      "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
  },
  {
    name: "McGlynn-Nicolas",
    size: "1.75L",
    type: "Wine",
    price: 103.87,
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
  },
  {
    name: "Walter-Altenwerth",
    size: "1.75L",
    type: "Wine",
    price: 132.04,
    description:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
  },
  {
    name: "Conn LLC",
    size: "1L",
    type: "Spirit",
    price: 5.75,
    description: "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
  },
  {
    name: "Hettinger-Flatley",
    size: "1L",
    type: "Wine",
    price: 122.24,
    description: "Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    name: "Berge, Barrows and Bartoletti",
    size: "1.75L",
    type: "Wine",
    price: 50.38,
    description:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    name: "Kutch-Anderson",
    size: "750ML",
    type: "Beer",
    price: 112.91,
    description:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
  },
  {
    name: "Quigley, Mayert and Kunde",
    size: "1.75L",
    type: "Beer",
    price: 28.16,
    description:
      "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
  },
  {
    name: "Turner, Gusikowski and Gerlach",
    size: "1L",
    type: "Wine",
    price: 86.8,
    description:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  },
  {
    name: "Legros Inc",
    size: "1.75L",
    type: "Spirit",
    price: 31.08,
    description:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
  },
  {
    name: "Cremin, Jerde and Welch",
    size: "1L",
    type: "Spirit",
    price: 129.6,
    description: "Morbi a ipsum. Integer a nibh. In quis justo.",
  },
  {
    name: "Yost-Murray",
    size: "1.75L",
    type: "Beer",
    price: 48.0,
    description: "Praesent blandit. Nam nulla.",
  },
  {
    name: "Bins-Breitenberg",
    size: "750ML",
    type: "Wine",
    price: 70.07,
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
  },
  {
    name: "Spencer-Kuhn",
    size: "1.75L",
    type: "Wine",
    price: 92.73,
    description:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
  },
  {
    name: "McClure-Balistreri",
    size: "1L",
    type: "Beer",
    price: 18.15,
    description:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    name: "Treutel, Farrell and Herzog",
    size: "1L",
    type: "Spirit",
    price: 106.54,
    description:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
  },
  {
    name: "Kshlerin-Walsh",
    size: "750ML",
    type: "Spirit",
    price: 120.36,
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    ID: 67,
    name: "Crona LLC",
    size: "1L",
    type: "Spirit",
    price: 70.39,
    description: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
  },
  {
    name: "Mohr, Corkery and Bernier",
    size: "1.75L",
    type: "Beer",
    price: 22.05,
    description:
      "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
  },
  {
    name: "Lang-Miller",
    size: "1L",
    type: "Beer",
    price: 83.84,
    description:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
  },
  {
    name: "Koelpin-Crist",
    size: "750ML",
    type: "Spirit",
    price: 24.73,
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
  },
  {
    name: "Koelpin-Parker",
    size: "1L",
    type: "Beer",
    price: 93.15,
    description:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
  },
  {
    name: "Oberbrunner, Zboncak and Franecki",
    size: "1.75L",
    type: "Spirit",
    price: 44.45,
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
  },
  {
    name: "Romaguera-Upton",
    size: "1L",
    type: "Spirit",
    price: 17.79,
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
  },
  {
    name: "Schaden LLC",
    size: "1L",
    type: "Wine",
    price: 105.58,
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
  },
  {
    name: "Beahan-Gleichner",
    size: "1L",
    type: "Beer",
    price: 18.79,
    description: "Ut at dolor quis odio consequat varius. Integer ac leo.",
  },
  {
    name: "Hane-Jenkins",
    size: "750ML",
    type: "Spirit",
    price: 103.91,
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
  },
  {
    name: "Zemlak LLC",
    size: "750ML",
    type: "Spirit",
    price: 9.45,
    description:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
  },
  {
    name: "Simonis Inc",
    size: "1.75L",
    type: "Wine",
    price: 123.57,
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
  },
  {
    name: "Armstrong, Howell and Rippin",
    size: "1L",
    type: "Wine",
    price: 24.99,
    description:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
  },
  {
    name: "Bogisich, Russel and Brown",
    size: "1L",
    type: "Beer",
    price: 126.7,
    description: "Nulla nisl. Nunc nisl.",
  },
  {
    name: "Farrell and Sons",
    size: "750ML",
    type: "Spirit",
    price: 19.79,
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
  },
  {
    name: "Rippin, Connelly and Borer",
    size: "1L",
    type: "Beer",
    price: 88.49,
    description:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
  },
  {
    name: "Gaylord-Tillman",
    size: "1L",
    type: "Beer",
    price: 136.43,
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
  },
  {
    name: "Wehner LLC",
    size: "1L",
    type: "Spirit",
    price: 132.65,
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  },
  {
    name: "Green, Bernier and Stoltenberg",
    size: "750ML",
    type: "Beer",
    price: 99.51,
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    name: "Rath LLC",
    size: "1.75L",
    type: "Spirit",
    price: 50.97,
    description:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  },
  {
    name: "Gusikowski and Sons",
    size: "750ML",
    type: "Wine",
    price: 11.14,
    description:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
  },
  {
    name: "Armstrong-Kunze",
    size: "750ML",
    type: "Wine",
    price: 136.19,
    description: "Suspendisse potenti. Nullam porttitor lacus at turpis.",
  },
  {
    name: "Cassin-Bosco",
    size: "1.75L",
    type: "Beer",
    price: 99.08,
    description: "Integer ac neque. Duis bibendum.",
  },
  {
    name: "Harber-Marks",
    size: "1L",
    type: "Beer",
    price: 117.72,
    description: "Aliquam erat volutpat. In congue.",
  },
  {
    name: "Bernhard and Sons",
    size: "1.75L",
    type: "Spirit",
    price: 37.79,
    description: "Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    name: "Buckridge, Simonis and Stiedemann",
    size: "1L",
    type: "Beer",
    price: 12.55,
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    name: "Hoeger Group",
    size: "1L",
    type: "Wine",
    price: 125.19,
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  {
    name: "McDermott-Grant",
    size: "1.75L",
    type: "Spirit",
    price: 60.43,
    description: "Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
  },
  {
    name: "Koepp, Mohr and Prosacco",
    size: "750ML",
    type: "Wine",
    price: 133.63,
    description:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
  },
  {
    name: "Witting and Sons",
    size: "1L",
    type: "Spirit",
    price: 84.43,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
  },
  {
    name: "Murazik, D'Amore and Carter",
    size: "750ML",
    type: "Beer",
    price: 2.3,
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
  },
  {
    name: "Schiller-Haley",
    size: "750ML",
    type: "Wine",
    price: 47.86,
    description:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
  },
  {
    name: "Gerlach Group",
    size: "1L",
    type: "Beer",
    price: 3.54,
    description:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
  },
  {
    name: "McDermott, Schimmel and Weissnat",
    size: "1L",
    type: "Spirit",
    price: 89.94,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
  },
];
