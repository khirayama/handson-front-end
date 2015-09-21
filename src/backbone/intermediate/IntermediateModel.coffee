class @IntermediateModel extends Backbone.Model
  default:
    name: 'AAA'
    amount: 3000

  initialize: ->
    # @fetch()

  fetch: ->
    # suppose ajax
    setTimeout( =>
      res = @genData()
      @set(res)
    , 300)

class @IntermediateCollection extends Backbone.Collection
  model: IntermediateModel

  genData: ->
    @sort (x, y) ->
      Math.random() - Math.random()
