$ ->
  intermediateCollection = new IntermediateCollection()
  intermediateCollection.add([
    { name: 'AAA', amount: 3000 }
    { name: 'BBB', amount: 1000 }
    { name: 'CCC', amount: 2000 }
    { name: 'DDD', amount: 5000 }
    { name: 'EEE', amount: 10000 }
    { name: 'FFF', amount: 1000 }
    { name: 'GGG', amount: 3000 }
    { name: 'HHH', amount: 1000 }
    { name: 'III', amount: 2000 }
    { name: 'JJJ', amount: 5000 }
    { name: 'KKK', amount: 10000 }
  ])
  new FetchBtnView({ collection: intermediateCollection })
  new TableView({ collection: intermediateCollection })
