var Dinosaur = require('../dinosaur')
var chai = require('chai')
var expect = chai.expect

describe("Roar", function() {
  var danny = new Dinosaur()
  it ("should roar", function() {
    expect(danny.roar()).to.equal("Raaaawwwwrrrrr!!!")
  })
})
