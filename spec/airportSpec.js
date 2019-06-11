describe('airport', function() {
  it('can land a plane', function(){
    airport = new Airport
    plane = "this is a plane"
    airport.land(plane)
    expect(airport.hangar).toContain(plane)
  })
});