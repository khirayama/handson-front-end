MicroModel = microModule.import('MicroModel')

class SenirModel extends MicroModel
  isShowModal: false
  data: [
    { name: 'AAA', amount: 2000 }
    { name: 'BBB', amount: 10 }
    { name: 'CCC', amount: 10000 }
  ]

  addData: (item) ->
    @data.push(item)
    @set('data', @data)

microModule.export(SenirModel)
