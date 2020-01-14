const { Speaker, Quote } = require('./models');

const main = async () => {
  // Delete everything in the database.
  await Speaker.destroy({
    where: {}
  });
  await Quote.destroy({
    where: {}
  });

  const bill = await Speaker.create({
    name: 'Bill Preston',
    image_url: 'https://vignette.wikia.nocookie.net/billandted/images/8/8c/Bill-S-Preston-Esq-alex-winter-25441831-500-629.jpeg/revision/latest?cb=20130211235244'
  });

  const ted = await Speaker.create({
    name: 'Ted Logan',
    image_url: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-bill-and-teds-excellent-adventure-keanu-reeves.jpg'
  });

  const quote1 = await Quote.create({
    text: 'While I agree that, in time, our band will be most triumphant. The truth is, Wyld Stallyns will never be a super band until we have Eddie Van Halen on guitar.'
  });

  const quote2 = await Quote.create({
    text: 'All we are is dust in the wind, dude.'
  });

  const quote3 = await Quote.create({
    text: 'Please welcome, the very excellent barbarian... MR. Genghis Khan! This is a dude who, 700 years ago, totally ravaged China, and who, we were told, 2 hours ago, totally ravaged Oshmans Sporting Goods.'
  });

  // set associations here!
  await bill.addQuote(quote1);
  await ted.addQuote(quote2);
  await ted.addQuote(quote3);

  process.exit();
};


main();